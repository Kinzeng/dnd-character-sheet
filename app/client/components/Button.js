import React from 'react'

const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

const borderedStyle = {
  ...buttonStyle,
  border: '1px solid black',
  borderRadius: '10px'
}

export default class Button extends React.Component {
  render () {
    const style = this.props.bordered ? borderedStyle : buttonStyle
    const buttonProps = {
      style: {
        ...style,
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
