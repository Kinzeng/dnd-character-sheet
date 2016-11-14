import React from 'react'

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
      onChange: this.props.update
    }

    return (
      <input {...inputProps} />
    )
  }
}
