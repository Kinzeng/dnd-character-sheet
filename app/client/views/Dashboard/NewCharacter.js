import React from 'react'
import {withRouter} from 'react-router'
import Form, {FormInput} from '../../components/Form'

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const coverStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1
}

const modalProps = {
  style: {
    minHeight: '250px',
    minWidth: '300px',
    height: '40%',
    width: '40%',
    padding: '2em',
    backgroundColor: 'rgba(255, 255, 255, 1)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  }
}

class NewCharacter extends React.Component {
  render () {
    const containerProps = {
      style: {
        ...containerStyle,
        display: this.props.open ? 'flex' : 'none'
      }
    }

    const coverProps = {
      style: coverStyle,
      onClick: this.props.closeModal.bind(this)
    }

    const formProps = {
      method: 'post',
      action: '/api/characters',
      afterSubmit: this.props.afterSubmit.bind(this)
    }

    return (
      <div {...containerProps}>
        <div {...coverProps} />
        <div {...modalProps}>
          <Form {...formProps}>
            <FormInput type='text' name='name' />
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(NewCharacter)
