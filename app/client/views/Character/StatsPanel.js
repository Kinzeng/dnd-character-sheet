import React from 'react'
import StatBox from './StatBox'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItemS: 'center'
}

export default class StatsPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  update (stat, value) {
    this.props.updateStats({[stat]: value})
  }

  render () {
    const stats = this.props.character.stats
    return (
      <div style={containerStyle}>
        <StatBox name='Strength' value={stats.strength} update={this.update.bind(this, 'strength')} />
        <StatBox name='Dexterity' value={stats.dexterity} update={this.update.bind(this, 'dexterity')} />
        <StatBox name='Constitution' value={stats.constitution} update={this.update.bind(this, 'constitution')} />
        <StatBox name='Intelligence' value={stats.intelligence} update={this.update.bind(this, 'intelligence')} />
        <StatBox name='Wisdom' value={stats.wisdom} update={this.update.bind(this, 'wisdom')} />
        <StatBox name='Charisma' value={stats.charisma} update={this.update.bind(this, 'charisma')} />
      </div>
    )
  }
}
