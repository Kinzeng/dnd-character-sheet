import React from 'react'

const containerStyle = {
  margin: '0px 10px 30px 10px',
  height: '300px',
  width: '300px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
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

export default class Spell extends React.Component {
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

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          {level}
          {slots}
        </div>
      </div>
    )
  }
}
