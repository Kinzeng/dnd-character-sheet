import React from 'react'
import {connect} from 'react-redux'
import Modal from '../../components/Modal'
import Form, {FormInput} from '../../components/Form'

class NewCharacterModal extends React.Component {
  render () {
    const modalProps = {
      open: this.props.open,
      closeModal: this.props.closeModal
    }

    const formProps = {
      method: 'post',
      action: '/api/characters',
      token: this.props.token,
      afterSubmit: this.props.afterSubmit
    }

    return (
      <Modal {...modalProps}>
        <h2>Create New Character</h2>
        <Form {...formProps}>
          <FormInput type='text' name='name' />
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.user && state.user.token
  }
}

export default connect(mapStateToProps)(NewCharacterModal)
