import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome to DnD Character Management!</h1>
        {this.props.user.id
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
