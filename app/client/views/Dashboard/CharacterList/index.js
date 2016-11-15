import React from 'react'
import Character from './Character'

const containerProps = {
  style: {
    flex: '1 1 auto',
    border: '1px solid black',
    borderWidth: '1px 0',
    backgroundColor: 'rgb(9, 64, 74)',
    overflow: 'scroll',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
}

export default class CharacterList extends React.Component {
  render () {
    const characters = this.props.characters.map((character, i) =>
      <Character key={i} name={character.name} />
    )

    return (
      <div {...containerProps}>
        {characters}
      </div>
    )
  }
}

export Character from './Character'
