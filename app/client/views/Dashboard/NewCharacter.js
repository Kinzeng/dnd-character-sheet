import React from 'react'
import {withRouter} from 'react-router'
import Modal from '../../components/Modal'
import Form, {FormInput} from '../../components/Form'

class NewCharacter extends React.Component {
  render () {
    const modalProps = {
      open: this.props.open,
      closeModal: this.props.closeModal
    }

    const formProps = {
      method: 'post',
      action: '/api/characters',
      afterSubmit: this.props.afterSubmit.bind(this)
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

export default withRouter(NewCharacter)
