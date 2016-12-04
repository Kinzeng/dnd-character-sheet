import React from 'react'
import {connect} from 'react-redux'
import StatBox from './StatBox'
import {getModifier, getSkillModifier} from '../../utils'
import {updateStats} from '../../redux/actions/character'

const containerStyle = {
  width: '444px',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

class MiscStatsPanel extends React.Component {
  update (stat, value) {
    this.props.updateStats({[stat]: value})
  }

  render () {
    const {stats, proficiencies} = this.props
    return (
      <div style={containerStyle}>
        <StatBox name='Health' value={stats.health} update={this.update.bind(this, 'health')} updateSubtext={this.update.bind(this, 'maxHealth')} subtext={stats.maxHealth} />
        <StatBox name='Armor Class' value={stats.ac} update={this.update.bind(this, 'ac')} />
        <StatBox name='Initiative' value={getModifier(stats.dexterity)} />
        <StatBox name='Proficiency' value={stats.proficiencyBonus} update={this.update.bind(this, 'proficiencyBonus')} />
        <StatBox name='Speed' value={stats.health} update={this.update.bind(this, 'speed')} />
        <StatBox name='Perception' value={parseInt(getSkillModifier('perception', stats, proficiencies)) + 10} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stats: state.character.stats,
    proficiencies: state.character.proficiencies
  }
}

export default connect(mapStateToProps, {updateStats})(MiscStatsPanel)
