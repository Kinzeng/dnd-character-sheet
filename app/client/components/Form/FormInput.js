import React from 'react'

const inputStyle = {
  marginBottom: '1em',
  padding: '0.5em'
}

export default class FormInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const inputProps = {
      type: this.props.type,
      value: this.props.value,
      placeholder: this.props.name,
      onChange: this.props.update,
      style: inputStyle
    }

    return (
      <input {...inputProps} />
    )
  }
}
