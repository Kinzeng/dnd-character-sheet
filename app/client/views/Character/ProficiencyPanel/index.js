import React from 'react'
import Skill from './Skill'
import {getSkillModifier} from '../../../utils'
import {baseStats, skills} from '../../../constants'

const containerStyle = {
  flex: '1 1 auto',
  width: '444px',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start'
}

const sectionStyle = {
  position: 'relative',
  margin: '0 10px',
  padding: '1.25em 0.5em 0.25em 0.5em',
  width: '170px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const sectionTitleStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
}

export default class ProficiencyPanel extends React.Component {
  render () {
    const {character} = this.props

    const savingThrows = Object.keys(baseStats).map((stat, i) => {
      const skillProps = {
        checked: character.proficiencies[stat],
        modifier: getSkillModifier(stat, character),
        name: baseStats[stat],
        toggleProficiency: this.props.toggleProficiency.bind(null, stat),
        key: i
      }

      return <Skill {...skillProps} />
    })

    const skillComponents = Object.keys(skills).map((skill, i) => {
      const skillProps = {
        checked: character.proficiencies[skill],
        modifier: getSkillModifier(skill, character),
        name: skills[skill],
        toggleProficiency: this.props.toggleProficiency.bind(null, skill),
        key: i
      }

      return <Skill {...skillProps} />
    })

    return (
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Skills</div>
          {skillComponents}
        </div>
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Saving Throws</div>
          {savingThrows}
        </div>
      </div>
    )
  }
}
