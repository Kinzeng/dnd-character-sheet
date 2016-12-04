import React from 'react'
import {connect} from 'react-redux'
import SpellList from './SpellList'
import {updateSpellList} from '../../../redux/actions/character'

const containerStyle = {
  // flex: '1 1 auto',
  maxWidth: '100%',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

class Spells extends React.Component {
  render () {
    const {character} = this.props
    const spells = character.spells.map((spell, i) => {
      const spellProps = {
        ...spell,
        updateSpellList: this.props.updateSpellList.bind(null, i),
        level: i,
        key: i
      }

      return <SpellList {...spellProps} />
    })

    return (
      <div style={containerStyle}>
        {spells}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character
  }
}

export default connect(mapStateToProps, {updateSpellList})(Spells)
