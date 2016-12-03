import React from 'react'
import {connect} from 'react-redux'
import CharacterHeader from './CharacterHeader'
import DeathSaves from './DeathSaves'
import Inventory from './Inventory'
import MiscStatsPanel from './MiscStatsPanel'
import ProficiencyPanel from './ProficiencyPanel'
import StatsPanel from './StatsPanel'
import TextBox from './TextBox'
import {get} from '../../utils'
import * as actions from '../../redux/actions/character'

const containerStyle = {
  display: 'flex',
  padding: '0 1em',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  overflow: 'scroll'
}

const characterStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
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
    this.state = {character: null, error: null}
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

  render () {
    if (this.state.error) {
      return <div>404 Not Found</div>
    }

    if (!this.props.character) {
      return <div />
    }

    const {character} = this.props
    const componentProps = {
      character,
      updateCharacter: this.props.updateCharacter,
      updateStats: this.props.updateStats,
      toggleProficiency: this.props.toggleProficiency,
      toggleSave: this.props.toggleSave,
      addItem: this.props.addItem
    }

    const descriptionProps = {
      style: {
        minHeight: '200px'
      },
      containerStyle: {
        margin: '0px 10px 30px 10px'
      },
      type: 'textarea',
      value: character.description,
      title: 'Description',
      update: (value) => {
        this.props.updateCharacter({description: value})
      }
    }

    return (
      <div style={containerStyle}>
        <CharacterHeader {...componentProps} />
        <div style={characterStyle}>
          <StatsPanel {...componentProps} />
          <div style={columnStyle}>
            <MiscStatsPanel {...componentProps} />
            <DeathSaves {...componentProps} />
            <ProficiencyPanel {...componentProps} />
          </div>
          <div style={columnStyle}>
            <TextBox {...descriptionProps} />
          </div>
          <div style={columnStyle}>
            <Inventory {...componentProps} />
          </div>
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

export default connect(mapStateToProps, actions)(Character)
