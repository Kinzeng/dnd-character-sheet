import React from 'react'
import StatBox from './StatBox'
import {getModifier} from '../../utils'

const containerStyle = {
  flex: '1 1 auto',
  width: '444px',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItemS: 'flex-start'
}

export default class MiscStatsPanel extends React.Component {
  update (stat, value) {
    this.props.updateStats({[stat]: value})
  }

  render () {
    const stats = this.props.character.stats
    return (
      <div style={containerStyle}>
        <StatBox name='Health' value={stats.health} subtext={100} />
        <StatBox name='Armor Class' value={stats.ac} update={this.update.bind(this, 'ac')} />
        <StatBox name='Initiative' value={getModifier(stats.dexterity)} />
        <StatBox name='Proficiency' value={stats.proficiencyBonus} update={this.update.bind(this, 'proficiencyBonus')} />
        <StatBox name='Speed' value={stats.health} update={this.update.bind(this, 'speed')} />
        <StatBox name='Perception' value={stats.health} />
      </div>
    )
  }
}
