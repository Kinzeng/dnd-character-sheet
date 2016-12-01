import React from 'react'
import {connect} from 'react-redux'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

export default (Component) => {
  class AuthenticatedComponent extends React.Component {
    componentWillMount () {
      this.checkAuthentication()
    }

    componentDidUpdate () {
      this.checkAuthentication()
    }

    checkAuthentication () {
      if (!this.props.user) {
        this.props.router.replace(`/login?next=${this.props.location.pathname}`)
      }
    }

    render () {
      return (
        <div style={containerStyle}>
          {this.props.user &&
            <Component {...this.props} />
          }
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
