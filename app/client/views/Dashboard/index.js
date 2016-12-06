import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import Button from '../../components/Button'
import CharacterList from './CharacterList'
import NewCharacterModal from './NewCharacterModal'
import {logout} from '../../redux/actions/user'
import {get} from '../../utils'

const containerStyle = {
  flex: '1 1 auto',
  overflow: 'hidden',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const headerStyle = {
  paddingLeft: '0.5em'
}

const linkStyle = {
  marginRight: '1em',
  color: 'blue',
  textDecoration: 'none'
}

const navStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const utilStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const buttonStyle = {
  marginRight: '1em'
}

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, characters: null}
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
    this.props.router.push(`/characters/${character.name}`)
  }

  render () {
    const newCharacterProps = {
      open: this.state.open,
      closeModal: this.modal.bind(this, false),
      afterSubmit: this.afterSubmit.bind(this)
    }

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h1>DnD Character Management</h1>
          <div style={navStyle}>
            <Link style={linkStyle} to='/'>Home</Link>
            <Link style={linkStyle} to='/' onClick={this.props.logout}>Logout</Link>
          </div>
          <div style={utilStyle}>
            <h2>Characters</h2>
            <Button style={buttonStyle} bordered onClick={this.modal.bind(this, true)}>+ New Character</Button>
          </div>
        </div>
        <NewCharacterModal {...newCharacterProps} />
        <CharacterList characters={this.state.characters} />
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
