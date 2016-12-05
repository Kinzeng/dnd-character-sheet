import React from 'react'
import Button from '../Button'
import FormInput from './FormInput'
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
      if (this.props.beforeSubmit) {
        this.props.beforeSubmit(this.state)
      }

      if (this.props.onSubmit) {
        this.props.onSubmit(this.state)
      } else {
        const request = methods[this.props.method]
        const res = await request(this.props.action, this.state, this.props.token)
        if (this.props.afterSubmit) {
          this.props.afterSubmit(res)
        }
      }

      this.state = {}
    } catch (e) {
      this.setState({
        error: (e.response && e.response.text) || e.message || 'Submit Failed'
      })
    }
  }

  recursiveClone (children) {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child
      }

      const props = child.type === FormInput
      ? {
        update: this.update.bind(this, child.props.name),
        value: this.state[child.props.name] || '',
        onKeyDown: this.onKeyDown.bind(this)
      }
      : {}

      props.children = this.recursiveClone(child.props.children)

      return React.cloneElement(child, props)
    })
  }

  render () {
    const style = {
      ...containerStyle,
      ...this.props.style
    }

    const fields = this.recursiveClone(this.props.children)

    return (
      <div style={style}>
        {this.state.error &&
          <p style={errorStyle}>{this.state.error}</p>
        }
        {fields}
        <Button onClick={this.submitForm.bind(this)} bordered={this.props.bordered}>
          {this.props.submitLabel || 'Submit'}
        </Button>
      </div>
    )
  }
}

export FormInput from './FormInput'
