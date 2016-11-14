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

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  update (name, e) {
    this.setState({[name]: e.target.value})
  }

  async submitForm () {
    const request = methods[this.props.method]
    const res = await request(this.props.action, this.state)
    this.props.afterSubmit(res)
  }

  render () {
    const fields = React.Children.map(this.props.children, (field, i) => {
      return React.cloneElement(field, {
        update: this.update.bind(this, field.props.name),
        value: this.state[field.props.name] || ''
      })
    })

    return (
      <div style={containerStyle}>
        {fields}
        <Button onClick={this.submitForm.bind(this)}>Submit</Button>
      </div>
    )
  }
}

export FormInput from './FormInput'
