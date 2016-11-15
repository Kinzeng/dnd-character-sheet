import React from 'react'
import {withRouter} from 'react-router'

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
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  }
}

class Modal extends React.Component {
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

    return (
      <div {...containerProps}>
        <div {...coverProps} />
        <div {...modalProps}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withRouter(Modal)
