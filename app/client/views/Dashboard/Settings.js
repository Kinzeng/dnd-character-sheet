import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

class Settings extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        Settings
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // action: bindActionCreators(action, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
