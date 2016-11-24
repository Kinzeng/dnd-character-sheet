import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

class Home extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        <h1>Welcome to DnD Character Management!</h1>
        {this.props.user
          ? <Link to='/dashboard'>Dashboard</Link>
          : <Link to='/login'>Login</Link>
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

export default connect(mapStateToProps)(Home)