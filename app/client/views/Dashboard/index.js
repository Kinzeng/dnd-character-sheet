import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import NavBar from '../../components/NavBar'
import NewCharacter from './NewCharacter'
import CharacterList from './CharacterList'
import {get} from '../../utils'
import {test} from '../../redux/actions/user'

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

  async componentWillMount () {
    this.setState({characters: await get(`/api/characters?username=${this.props.username}`)})
  }

  modal (open) {
    this.setState({open})
  }

  // will redirect to new character later, but for now just show new list
  afterSubmit (character) {
    this.modal(false)
    this.state.characters.push(character)
    this.setState({characters: this.state.characters})
  }

  render () {
    if (!this.props.user.id) {
      return <Login />
    }

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
          <NewCharacter {...newCharacterProps} />
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
    test: bindActionCreators(test, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
