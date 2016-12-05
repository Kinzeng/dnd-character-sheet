import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Checkbox from '../components/Checkbox'
import Form, {FormInput} from '../components/Form'
import {login} from '../redux/actions/user'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const rememberStyle = {
  alignSelf: 'flex-start',
  marginBottom: '0.5em',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const labelStyle = {
  marginLeft: '0.5em',
  fontSize: '0.75em'
}

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {checked: false}
  }

  componentWillMount () {
    if (this.props.user) {
      this.props.router.push('/dashboard')
    }
  }

  check () {
    this.setState({checked: !this.state.checked})
  }

  login (user) {
    this.props.login(user, this.state.checked)
    this.props.router.push(this.props.location.query.next || '/dashboard')
  }

  render () {
    const formProps = {
      method: 'post',
      action: '/auth/login',
      submitLabel: 'Login',
      bordered: true,
      afterSubmit: this.login.bind(this)
    }

    return (
      <div style={containerStyle}>
        <h2>Login</h2>
        <Form {...formProps}>
          <FormInput type='text' name='username' />
          <FormInput type='password' name='password' />
          <div style={rememberStyle} onClick={this.check.bind(this)}>
            <Checkbox checked={this.state.checked} />
            <div style={labelStyle}>Remember me</div>
          </div>
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
