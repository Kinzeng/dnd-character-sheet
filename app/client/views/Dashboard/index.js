import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import NavBar from '../../components/NavBar'
import NewCharacterModal from './NewCharacterModal'
import CharacterList from './CharacterList'
import {get} from '../../utils'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap'
}

const mainStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  overflow: 'hidden'
}

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, characters: []}
  }

  componentWillMount () {
    if (this.props.user.id) {
      this.fetchCharacters()
    } else {
      this.props.router.replace('/login')
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.user.id !== this.props.user.id) {
      this.fetchCharacters()
    }
  }

  async fetchCharacters () {
    this.setState({
      characters: await get('/api/characters', this.props.user.token)
    })
  }

  modal (open) {
    this.setState({open})
  }

  // will redirect to new character later, but for now just show new list
  async afterSubmit (character) {
    this.modal(false)
    this.state.characters.push(character)
    this.setState({characters: this.state.characters})
  }

  render () {
    const newCharacterProps = {
      open: this.state.open,
      closeModal: this.modal.bind(this, false),
      afterSubmit: this.afterSubmit.bind(this)
    }

    return (
      <div style={containerStyle}>
        <h1>DnD Character Management</h1>
        <div style={mainStyle}>
          <h2>Characters</h2>
          <NavBar openModal={this.modal.bind(this, true)} />
          <NewCharacterModal {...newCharacterProps} />
          <CharacterList characters={this.state.characters} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
