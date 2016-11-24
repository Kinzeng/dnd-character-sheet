import React from 'react'
import {Link} from 'react-router'

const containerStyle = {
  padding: '1em',
  height: '2em',
  border: '1px solid black',
  borderWidth: '1px 0',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'rgb(63, 133, 151)',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around'
}

export default class CharacterListItem extends React.Component {
  render () {
    const containerProps = {
      style: containerStyle,
      to: `/${this.props.name}`
    }

    return (
      <Link {...containerProps}>
        <span>{this.props.name}</span>
      </Link>
    )
  }
}
