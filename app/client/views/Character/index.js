import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {get} from '../../utils'

const containerStyle = {
  display: 'flex'
}

class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = {character: null}
  }

  async componentWillMount () {
  }

  render () {
    console.log('render character')
    if (!this.state.character) {
      return <div />
    }

    return (
      <div style={containerStyle}>
        {this.state.character}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.character,
    token: state.user && state.user.token
  }
}

const mapDispatchToPrps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToPrps)(Character)
