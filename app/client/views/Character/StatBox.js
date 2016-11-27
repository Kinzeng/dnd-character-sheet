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
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '10px',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class StatBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {stat: props.value}
  }

  render () {
    let inputProps
    if (this.props.update) {
      inputProps = {
        style: valueStyle,
        value: this.state.stat,
        onChange: (e) => {
          this.setState({stat: e.target.value})
        },
        onKeyDown: (e) => {
          if (e.keyCode === 13) {
            e.target.blur()
          }
        },
        onBlur: this.props.update.bind(null, this.state.stat)
      }
    }

    return (
      <div style={containerStyle}>
        <div style={statStyle}>
          <p style={nameStyle}>{this.props.name}</p>
          {this.props.update
            ? <input {...inputProps} />
            : <div style={valueStyle}>{this.props.value}</div>
          }
          {this.props.subtext &&
            <div style={subtextStyle}>
              {this.props.subtext}
            </div>
          }
        </div>
      </div>
    )
  }
}
