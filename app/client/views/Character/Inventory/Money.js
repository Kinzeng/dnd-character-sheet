import React from 'react'

const containerStyle = {
  margin: '0.5em',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const inputStyle = {
  width: '40px',
  textAlign: 'right'
}

export default class Money extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const inputProps = {
      style: inputStyle,
      type: 'text',
      value: this.state.value,
      onChange: (e) => {
        this.setState({value: e.target.value})
      },
      onBlur: this.props.update.bind(null, parseInt(this.state.value)),
      onKeyDown: (e) => {
        if (e.keyCode === 13) {
          e.target.blur()
        }
      }
    }

    return (
      <div style={containerStyle}>
        <input {...inputProps} />
        <div>{this.props.name}</div>
      </div>
    )
  }
}
