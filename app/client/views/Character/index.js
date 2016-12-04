import React from 'react'
import {connect} from 'react-redux'
import CharacterHeader from './CharacterHeader'
import DeathSaves from './DeathSaves'
import Inventory from './Inventory'
import MiscStatsPanel from './MiscStatsPanel'
import ProficiencyPanel from './ProficiencyPanel'
import Spells from './Spells'
import StatsPanel from './StatsPanel'
import TextBox from './TextBox'
import {get} from '../../utils'
import {setCharacter, updateCharacter, clearCharacter} from '../../redux/actions/character'

const containerStyle = {
  padding: '0 1em',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  overflow: 'scroll'
}

const characterStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const columnStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = {error: null}
  }

  async componentWillMount () {
    const characters = await get('/api/characters', this.props.user.token)
    let character
    characters.forEach((char) => {
      if (char.name === this.props.routeParams.character) {
        character = char
        return
      }
    })

    if (character) {
      this.props.setCharacter(character)
    } else {
      this.setState({error: 'Not Found'})
    }
  }

  componentWillUnmount () {
    this.props.clearCharacter()
  }

  getTextBoxProps (field, title) {
    return {
      style: {
        minHeight: '200px'
      },
      containerStyle: {
        margin: '0px 10px 30px 10px'
      },
      type: 'textarea',
      value: this.props.character[field],
      title,
      update: (value) => {
        this.props.updateCharacter({[field]: value})
      }
    }
  }

  render () {
    if (this.state.error) {
      return <div>404 Not Found</div>
    }

    if (!this.props.character) {
      return <div />
    }

    return (
      <div style={containerStyle}>
        <CharacterHeader />
        <div style={characterStyle}>
          <StatsPanel />
          <div style={columnStyle}>
            <MiscStatsPanel />
            <DeathSaves />
            <ProficiencyPanel />
          </div>
          <div style={columnStyle}>
            <TextBox {...this.getTextBoxProps('description', 'Description')} />
            <TextBox {...this.getTextBoxProps('notes', 'Notes')} />
            <TextBox {...this.getTextBoxProps('backstory', 'Backstory')} />
          </div>
          <Inventory />
          <Spells />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
    token: state.user && state.user.token
  }
}

export default connect(mapStateToProps, {setCharacter, updateCharacter, clearCharacter})(Character)
