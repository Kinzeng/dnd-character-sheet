import React from 'react'
import Textarea from 'react-textarea-autosize'

const containerStyle = {

}

const inputStyle = {
  paddingLeft: '0.5em',
  fontSize: '1em',
  border: 'none',
  borderBottom: '1px solid black',
  outline: 'none'
}

const textareaStyle = {
  padding: '0.25em',
  width: '400px',
  fontSize: '1em',
  border: '1px solid black',
  outline: 'none',
  resize: 'none'
}

const titleStyle = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
}

export default class TextBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: props.value || (props.type === 'textarea' ? '' : ' ')}
  }

  render () {
    const inputProps = this.props.type === 'textarea'
      ? {
        style: {
          ...textareaStyle,
          ...this.props.style
        },
        value: this.state.value,
        onChange: (e) => {
          this.setState({value: e.target.value})
        },
        onBlur: this.props.update.bind(null, this.state.value)
      }
      : {
        style: {
          ...inputStyle,
          ...this.props.style
        },
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

    const input = this.props.type === 'textarea'
      ? <Textarea {...inputProps} />
      : <input {...inputProps} />

    let box = input
    if (this.props.title) {
      box = (
        <div style={{...containerStyle, ...this.props.containerStyle}}>
          <div style={titleStyle}>{this.props.title}</div>
          {input}
        </div>
      )
    }

    return box
  }
}
