import React from 'react'
import {Link} from 'react-router'

const containerStyle = {
  margin: '0.5em',
  padding: '0.5em',
  height: '150px',
  width: '125px',
  color: 'black',
  border: '1px solid black',
  textDecoration: 'none',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const textStyle = {
  textAlign: 'center'
}

const descriptionStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'stretch'
}

export default class CharacterListItem extends React.Component {
  render () {
    const containerProps = {
      style: containerStyle,
      to: `/characters/${this.props.name}`
    }

    return (
      <Link {...containerProps}>
        <div style={textStyle}>{this.props.name}</div>
        <div style={descriptionStyle}>
          <div style={textStyle}>Level {this.props.level}</div>
          <div style={textStyle}>{this.props.race}</div>
          <div style={textStyle}>{this.props.class}</div>
        </div>
      </Link>
    )
  }
}
