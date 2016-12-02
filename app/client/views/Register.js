import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Form, {FormInput} from '../components/Form'
import {login} from '../redux/actions/user'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

class Register extends React.Component {
  login (user) {
    this.props.login(user)
    this.props.router.push('/dashboard')
  }

  render () {
    const formProps = {
      method: 'post',
      action: '/auth/register',
      afterSubmit: this.login.bind(this)
    }

    return (
      <div style={containerStyle}>
        <h2>Register</h2>
        <Form {...formProps}>
          <FormInput type='text' name='username' />
          <FormInput type='password' name='password' />
          <FormInput type='password' name='confirm' />
        </Form>
      </div>
    )
  }
}

export default withRouter(connect(null, {login})(Register))
