import React from 'react'

const inputStyle = {
  paddingLeft: '0.5em',
  fontSize: '1em',
  border: 'none',
  borderBottom: '1px solid black',
  outline: 'none'
}

export default class TextBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.value || ' '}
  }

  render () {
    const inputProps = {
      style: {
        ...inputStyle,
        ...this.props.style
      },
      type: 'text',
      value: this.state.value,
      onChange: (e) => {
        this.setState({value: e.target.value})
      },
      onKeyDown: (e) => {
        if (e.keyCode === 13) {
          e.target.blur()
        }
      },
      onFocus: (e) => {
        this.setState({value: e.target.value.trim()})
      },
      onBlur: this.props.update.bind(null, this.props.type === 'number'
        ? parseInt(this.state.value)
        : this.state.value
      )
    }

    return this.props.type === 'textarea'
      ? <textarea {...inputProps} />
      : <input {...inputProps} />
  }
}
