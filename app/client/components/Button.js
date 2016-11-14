import React from 'react'

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer'
}

export default class Button extends React.Component {
  render () {
    const buttonProps = {
      style: {
        ...buttonStyle,
        ...this.props.style
      },
      onClick: this.props.onClick
    }

    return (
      <button {...buttonProps}>
        {this.props.children}
      </button>
    )
  }
}
