import React from 'react'

const containerStyle = {
  height: '15px',
  width: '15px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const checkedStyle = {
  height: '11px',
  width: '11px',
  backgroundColor: 'black'
}

export default class Checkbox extends React.Component {
  render () {
    const containerProps = {
      style: containerStyle,
      onClick: this.props.onClick
    }

    return (
      <div {...containerProps}>
        {this.props.checked &&
          <div style={checkedStyle} />
        }
      </div>
    )
  }
}
