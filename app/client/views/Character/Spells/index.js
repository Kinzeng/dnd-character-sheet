import React from 'react'
import {connect} from 'react-redux'
import SpellList from './SpellList'
import {
  addSpell,
  updateSpellList,
  updateSpell,
  deleteSpell
} from '../../../redux/actions/character'

const containerStyle = {
  maxWidth: '100%',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

class Spells extends React.Component {
  render () {
    const {character} = this.props
    const spellLists = character.spells.map((spell, i) => {
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
        {spellLists}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character
  }
}

export default connect(mapStateToProps, {
  addSpell,
  updateSpellList,
  updateSpell,
  deleteSpell
})(Spells)
