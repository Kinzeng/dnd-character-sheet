import React from 'react'
import Button from '../Button'
import {get, post} from '../../utils'

const methods = {
  get,
  post
}

const containerStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const errorStyle = {
  marginTop: 0,
  color: 'red'
}

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // called when the input field value is changed
  update (name, e) {
    this.setState({[name]: e.target.value})
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      this.submitForm()
    }
  }

  async submitForm () {
    try {
      const request = methods[this.props.method]
      const res = await request(this.props.action, this.state, this.props.token)
      this.state = {}
      if (this.props.afterSubmit) {
        this.props.afterSubmit(res)
      }
    } catch (e) {
      this.setState({
        error: (e.response && e.response.text) || this.props.errorMessage || 'Submit Failed'
      })
    }
  }

  render () {
    const fields = React.Children.map(this.props.children, (field, i) => {
      return React.cloneElement(field, {
        update: this.update.bind(this, field.props.name),
        value: this.state[field.props.name] || '',
        onKeyDown: this.onKeyDown.bind(this)
      })
    })

    return (
      <div style={containerStyle}>
        {this.state.error &&
          <p style={errorStyle}>{this.state.error}</p>
        }
        {fields}
        <Button onClick={this.submitForm.bind(this)}>Submit</Button>
      </div>
    )
  }
}

export FormInput from './FormInput'
