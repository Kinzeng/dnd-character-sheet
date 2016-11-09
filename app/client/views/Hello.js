import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {test} from '../redux/actions/user'

class Hello extends React.Component {
  async componentDidMount () {
    await this.props.test('what')
    console.log('huh')
  }

  render () {
    return (
      <div>
        Hello World!
        <button onClick={console.log.bind(null, this.props.user)}>State</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    test: bindActionCreators(test, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
