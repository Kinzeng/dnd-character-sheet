import React from 'react'
import {connect} from 'react-redux'
import StatBox from './StatBox'
import {getModifier} from '../../utils'
import {updateStats} from '../../redux/actions/character'

const containerStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const baseStats = {
  strength: 'Strength',
  dexterity: 'Dexterity',
  constitution: 'Constitution',
  intelligence: 'Intelligence',
  wisdom: 'Wisdom',
  charisma: 'Charisma'
}

class StatsPanel extends React.Component {
  update (stat, value) {
    this.props.updateStats({[stat]: value})
  }

  render () {
    const stats = this.props.character.stats
    const boxes = Object.keys(baseStats).map((stat, i) => {
      const props = {
        name: baseStats[stat],
        value: stats[stat],
        subtext: getModifier(stats[stat]),
        update: this.update.bind(this, stat),
        key: i
      }

      return <StatBox {...props} />
    })
    return (
      <div style={containerStyle}>
        {boxes}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character
  }
}

export default connect(mapStateToProps, {updateStats})(StatsPanel)
