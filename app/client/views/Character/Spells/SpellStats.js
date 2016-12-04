import React from 'react'
import {getModifier} from '../../../utils'
import {baseStats} from '../../../constants'

const containerStyle = {
  flex: '1 1 auto',
  margin: '0 10px 30px 10px',
  width: '300px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const titleStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
}

const statsStyle = {
  padding: '0.5em'
}

const selectStyle = {
  marginLeft: '0.5em'
}

export default class SpellStats extends React.Component {
  onChange (e) {
    this.props.update(e.target.value)
  }

  render () {
    const {stats, spellAbility} = this.props

    const selectProps = {
      style: selectStyle,
      value: this.props.spellAbility,
      onChange: this.onChange.bind(this)
    }

    const options = Object.keys(baseStats).map((stat, i) => {
      return <option value={stat} key={i}>{baseStats[stat]}</option>
    })

    const spellDC = 8 + parseInt(getModifier(stats[spellAbility])) + stats.proficiencyBonus
    const spellAttack = parseInt(getModifier(stats[spellAbility])) + stats.proficiencyBonus

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>Spell Stats</div>
        <div style={statsStyle}>
          <div>
            <span>Spellcasting Ability:</span>
            <select {...selectProps}>
              {options}
            </select>
          </div>
          <div>Spell Save DC: {spellDC}</div>
          <div>Spell Attack Bonus: {spellAttack}</div>
        </div>
      </div>
    )
  }
}
