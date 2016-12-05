import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import NavBar from '../../components/NavBar'
import NewCharacterModal from './NewCharacterModal'
import {logout} from '../../redux/actions/user'
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
    this.fetchCharacters()
  }

  async fetchCharacters () {
    this.setState({characters: await get('/api/characters', this.props.user.token)})
  }

  modal (open) {
    this.setState({open})
  }

  async afterSubmit (character) {
    this.props.router.push(`/${character.name}`)
  }

  render () {
    const newCharacterProps = {
      open: this.state.open,
      closeModal: this.modal.bind(this, false),
      afterSubmit: this.afterSubmit.bind(this)
    }

    const view = React.cloneElement(this.props.children, {
      characters: this.state.characters
    })

    return (
      <div style={containerStyle}>
        <Link to='/'><h1>DnD Character Management</h1></Link>
        <Link to='/' onClick={this.props.logout}>Logout</Link>
        <div style={mainStyle}>
          <h2>Characters</h2>
          <NavBar openModal={this.modal.bind(this, true)} />
          <NewCharacterModal {...newCharacterProps} />
          {view}
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

export default connect(mapStateToProps, {logout})(Dashboard)
export CharacterList from './CharacterList'
export Settings from './Settings'
