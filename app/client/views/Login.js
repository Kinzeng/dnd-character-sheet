import React from 'react'
import {bindActionCreators} from 'redux'
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

class Login extends React.Component {
  componentWillMount () {
    if (this.props.user) {
      this.props.router.push('/dashboard')
    }
  }

  login (user) {
    this.props.login(user)
    this.props.router.push(this.props.location.query.next || '/dashboard')
  }

  render () {
    const formProps = {
      method: 'post',
      action: '/auth/login',
      afterSubmit: this.login.bind(this)
    }

    return (
      <div style={containerStyle}>
        <h2>Login</h2>
        <Form {...formProps}>
          <FormInput type='text' name='username' />
          <FormInput type='password' name='password' />
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, {login})(Login))
