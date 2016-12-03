import React from 'react'

const containerStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export default class Item extends React.Component {
  render () {
    const {quantity, name, weight} = this.props
    return (
      <div style={containerStyle}>
        <div>{quantity}x</div>
        <div>{name}</div>
        <div>{weight}</div>
      </div>
    )
  }
}
