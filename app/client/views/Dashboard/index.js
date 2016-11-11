import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavBar from '../../components/NavBar'
import CharacterList from './CharacterList'
import {test} from '../../redux/actions/user'

class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <h1>DnD Character Management</h1>
        <div>
          <h2>Characters</h2>
          <NavBar />
          <CharacterList username={''} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
