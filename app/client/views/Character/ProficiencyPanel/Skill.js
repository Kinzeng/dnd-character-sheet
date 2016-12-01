import React from 'react'
import Checkbox from '../../../components/Checkbox'

const containerStyle = {
  flex: '1 1 auto',
  margin: '0.25em 0',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const nameStyle = {
  width: '70%'
}

export default class Skill extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        <Checkbox checked={this.props.checked} onClick={this.props.toggleProficiency} />
        <span>{this.props.modifier}</span>
        <span style={nameStyle}>{this.props.name}</span>
      </div>
    )
  }
}
