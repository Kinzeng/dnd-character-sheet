import React from 'react'
import {Link} from 'react-router'
import Button from './Button'

const containerProps = {
  style: {
    padding: '1em',
    border: '1px solid black',
    borderWidth: '1px 0',

    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  }
}

const navProps = {
  style: {
    width: '20%',

    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around'
  }
}

export default class NovBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div {...containerProps}>
        <div {...navProps}>
          <Link to='/dashboard'>Character List</Link>
          <Link to='/dashboard/settings'>Settings</Link>
        </div>
        <Button onClick={this.props.openModal}>+ New Character</Button>
      </div>
    )
  }
}
