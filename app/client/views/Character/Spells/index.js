import React from 'react'
import {connect} from 'react-redux'
import SpellList from './SpellList'
import SpellStats from './SpellStats'
import {
  updateCharacter,
  addSpell,
  updateSpellList,
  updateSpell,
  deleteSpell
} from '../../../redux/actions/character'

const containerStyle = {
  maxWidth: '100%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const listsStyle = {
  maxWidth: '100%',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

class Spells extends React.Component {
  render () {
    const {spells, spellAbility, stats} = this.props

    const spellStatsProps = {
      spellAbility,
      stats,
      update: (value) => {
        this.props.updateCharacter({spellAbility: value})
      }
    }

    const spellLists = spells.map((spell, i) => {
      const spellProps = {
        spells: spell.spells,
        currentSlots: spell.currentSlots,
        maxSlots: spell.maxSlots,
        addSpell: this.props.addSpell.bind(null, i),
        updateSpellList: this.props.updateSpellList.bind(null, i),
        updateSpell: this.props.updateSpell.bind(null, i),
        deleteSpell: this.props.deleteSpell.bind(null, i),
        level: i,
        key: i
      }

      return <SpellList {...spellProps} />
    })

    return (
      <div style={containerStyle}>
        <h3>Spells</h3>
        <SpellStats {...spellStatsProps} />
        <div style={listsStyle}>
          {spellLists}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    spells: state.character.spells,
    spellAbility: state.character.spellAbility,
    stats: state.character.stats
  }
}

export default connect(mapStateToProps, {
  updateCharacter,
  addSpell,
  updateSpellList,
  updateSpell,
  deleteSpell
})(Spells)
