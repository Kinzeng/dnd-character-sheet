import React from 'react'

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

export default class ComponentName extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div {...containerProps}>
        <div {...navProps}>
          <a href='/dashboard.html'>Character List</a>
          <a href='/settings.html'>Settings</a>
        </div>
        <button>+ New Character</button>
      </div>
    )
  }
}
