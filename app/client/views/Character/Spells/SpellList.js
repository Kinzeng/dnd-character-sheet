import React from 'react'
import Button from '../../../components/Button'
import Spell from './Spell'

const containerStyle = {
  margin: '0px 10px 30px 10px',
  width: '300px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'stretch'
}

const titleStyle = {
  boxSizing: 'border-box',
  width: '100%',
  paddingLeft: '0.5em',
  backgroundColor: 'black',
  color: 'white',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const slotsStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const inputStyle = {
  marginLeft: '13px',
  width: '30px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  backgroundColor: 'black',
  color: 'white'
}

const listStyle = {
  flex: '1 1 auto',
  padding: '1em'
}

const addStyle = {
  alignSelf: 'flex-start',
  fontWeight: 'bold',
  fontSize: '1.1em'
}

export default class SpellList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSlots: props.currentSlots,
      maxSlots: props.maxSlots
    }
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }

  render () {
    const currentProps = {
      style: inputStyle,
      type: 'number',
      min: 0,
      max: this.state.maxSlots,
      step: 1,
      value: this.state.currentSlots,
      onChange: (e) => {
        this.setState({currentSlots: e.target.value})
      },
      onBlur: this.props.updateSpellList.bind(null, {
        currentSlots: parseInt(this.state.currentSlots)
      }),
      onKeyDown: this.onKeyDown.bind(this)
    }

    const maxProps = {
      style: inputStyle,
      type: 'number',
      min: 0,
      step: 1,
      value: this.state.maxSlots,
      onChange: (e) => {
        this.setState({maxSlots: e.target.value})
      },
      onBlur: this.props.updateSpellList.bind(null, {
        maxSlots: parseInt(this.state.maxSlots)
      }),
      onKeyDown: this.onKeyDown.bind(this)
    }

    let level = <div>Level {this.props.level}</div>
    let slots = (
      <div style={slotsStyle}>
        <input {...currentProps} />
        <span>/</span>
        <input {...maxProps} />
      </div>
    )

    if (this.props.level === 0) {
      level = <div>Cantrips</div>
      slots = ''
    }

    const spells = this.props.spells.map((spell, i) => {
      const spellProps = {
        ...spell,
        updateSpell: this.props.updateSpell.bind(null, i),
        deleteSpell: this.props.deleteSpell.bind(null, i),
        isCantrip: this.props.level === 0,
        key: i
      }

      return <Spell {...spellProps} />
    })

    const addProps = {
      style: addStyle,
      onClick: this.props.addSpell
    }

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          {level}
          {slots}
        </div>
        <div style={listStyle}>
          {spells}
        </div>
        <Button {...addProps}>+</Button>
      </div>
    )
  }
}
