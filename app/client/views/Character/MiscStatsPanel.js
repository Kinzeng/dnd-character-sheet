import React from 'react'
import StatBox from './StatBox'
import {getModifier, getSkillModifier} from '../../utils'

const containerStyle = {
  width: '444px',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

export default class MiscStatsPanel extends React.Component {
  update (stat, value) {
    this.props.updateStats({[stat]: value})
  }

  render () {
    const {stats} = this.props.character
    return (
      <div style={containerStyle}>
        <StatBox name='Health' value={stats.health} subtext={100} />
        <StatBox name='Armor Class' value={stats.ac} update={this.update.bind(this, 'ac')} />
        <StatBox name='Initiative' value={getModifier(stats.dexterity)} />
        <StatBox name='Proficiency' value={stats.proficiencyBonus} update={this.update.bind(this, 'proficiencyBonus')} />
        <StatBox name='Speed' value={stats.health} update={this.update.bind(this, 'speed')} />
        <StatBox name='Perception' value={parseInt(getSkillModifier('perception', this.props.character)) + 10} />
      </div>
    )
  }
}
