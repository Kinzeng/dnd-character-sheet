import React from 'react'
import Textarea from 'react-textarea-autosize'

const inputStyle = {
  marginBottom: '1em',
  padding: '0.5em',
  outline: 'none'
}

const textareaStyle = {
  marginBottom: '1em',
  padding: '0.25em',
  width: '100%',
  fontSize: '1em',
  outline: 'none',
  resize: 'none'
}

export default class FormInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    let input
    if (this.props.type === 'textarea') {
      const inputProps = {
        style: {
          ...textareaStyle,
          ...this.props.style
        },
        value: this.props.value,
        placeholder: this.props.placeholder || this.props.name,
        onChange: this.props.update
      }
      input = <Textarea {...inputProps} />
    } else {
      const inputProps = {
        style: {
          ...inputStyle,
          ...this.props.style
        },
        type: this.props.type,
        value: this.props.value,
        placeholder: this.props.placeholder || this.props.name,
        onChange: this.props.update,
        onKeyDown: this.props.onKeyDown
      }
      input = <input {...inputProps} />
    }

    return input
  }
}
