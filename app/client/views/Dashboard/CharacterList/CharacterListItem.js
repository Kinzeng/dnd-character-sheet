import React from 'react'

const containerProps = {
  style: {
    padding: '1em',
    height: '2em',
    border: '1px solid black',
    borderWidth: '1px 0',
    color: 'white',
    backgroundColor: 'rgb(63, 133, 151)',

    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around'
  }
}

export default class CharacterListItem extends React.Component {
  render () {
    return (
      <div {...containerProps}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}
