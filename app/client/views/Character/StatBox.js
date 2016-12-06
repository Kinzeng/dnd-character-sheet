import React from 'react'

const containerStyle = {
  margin: '0 10px 30px 10px',
  height: '128px',
  width: '128px',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
}

const statStyle = {
  position: 'relative',
  height: '120px',
  width: '120px',
  border: '1px solid black',
  borderRadius: '10px',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const nameStyle = {
  position: 'absolute',
  left: 'auto',
  right: 'auto',
  top: '-18px',
  marginTop: '5px',
  padding: '3px',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '10px'
}

const valueStyle = {
  height: '100%',
  width: '100%',
  fontSize: '1.25em',
  textAlign: 'center',
  border: 'none',
  borderRadius: '10px',
  outline: 'none',
  backgroundColor: 'transparent',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const subtextStyle = {
  position: 'absolute',
  left: 'auto',
  right: 'auto',
  bottom: '-10px',
  height: '20px',
  width: '45px',
  fontSize: '1em',
  textAlign: 'center',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '10px',
  outline: 'none',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class StatBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statOriginal: props.value,
      stat: props.value,
      subtextOriginal: props.subtext,
      subtext: props.subtext
    }
  }

  onBlur (input, update) {
    const original = `${input}Original`
    const value = parseInt(this.state[input])
    if (!value) {
      this.setState({[input]: this.state[original]})
    } else {
      update(value)
      this.setState({[original]: value})
    }
  }

  onChange (input, e) {
    if (/^\d*$/.test(e.target.value)) {
      this.setState({[input]: e.target.value})
    }
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      e.target.blur()
    }
  }

  render () {
    let inputProps, subtextInputProps
    if (this.props.update) {
      inputProps = {
        style: valueStyle,
        value: this.state.stat,
        onChange: this.onChange.bind(this, 'stat'),
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.onBlur.bind(this, 'stat', this.props.update)
      }
    }

    if (this.props.updateSubtext) {
      subtextInputProps = {
        style: subtextStyle,
        value: this.state.subtext,
        onChange: this.onChange.bind(this, 'subtext'),
        onKeyDown: this.onKeyDown.bind(this),
        onBlur: this.onBlur.bind(this, 'subtext', this.props.updateSubtext)
      }
    }

    let subtext
    if (this.props.subtext) {
      subtext = this.props.updateSubtext
        ? <input {...subtextInputProps} />
        : <div style={subtextStyle}>{this.props.subtext}</div>
    }

    return (
      <div style={containerStyle}>
        <div style={statStyle}>
          <p style={nameStyle}>{this.props.name}</p>
          {this.props.update
            ? <input {...inputProps} />
            : <div style={valueStyle}>{this.props.value}</div>
          }
          {subtext}
        </div>
      </div>
    )
  }
}
