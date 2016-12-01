import React from 'react'
import {connect} from 'react-redux'
import StatsPanel from './StatsPanel'
import MiscStatsPanel from './MiscStatsPanel'
import ProficiencyPanel from './ProficiencyPanel'
import {get} from '../../utils'
import * as actions from '../../redux/actions/character'

const containerStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  overflow: 'scroll'
}

const characterStyle = {
  flex: '1 1 auto',
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

    const componentProps = {
      character: this.props.character,
      updateCharacter: this.props.updateCharacter,
      updateStats: this.props.updateStats,
      toggleProficiency: this.props.toggleProficiency
    }

    return (
      <div style={containerStyle}>
        <h2>{this.props.character.name}</h2>
        <div style={characterStyle}>
          <StatsPanel {...componentProps} />
          <div style={columnStyle}>
            <MiscStatsPanel {...componentProps} />
            <ProficiencyPanel {...componentProps} />
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
