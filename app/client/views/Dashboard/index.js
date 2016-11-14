import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavBar from '../../components/NavBar'
import NewCharacter from './NewCharacter'
import CharacterList from './CharacterList'
import {test} from '../../redux/actions/user'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}
  }

  modal (open) {
    this.setState({open})
  }

  render () {
    const newCharacterProps = {
      open: this.state.open,
      closeModal: this.modal.bind(this, false),
      afterSubmit: console.log.bind(console, 'hello')
    }

    return (
      <div>
        <h1>DnD Character Management</h1>
        <div>
          <h2>Characters</h2>
          <NavBar openModal={this.modal.bind(this, true)} />
          <NewCharacter {...newCharacterProps} />
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
