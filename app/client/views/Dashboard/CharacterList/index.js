import React from 'react'
import Character from './Character'

const containerStyle = {
  flex: '1 1 auto',
  border: '1px solid black',
  borderWidth: '1px 0',
  backgroundColor: 'rgb(9, 64, 74)',
  overflow: 'hidden',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const listStyle = {
  flex: '1 1 auto',
  overflow: 'scroll'
}

export default class CharacterList extends React.Component {
  render () {
    const characters = this.props.characters.map((character, i) =>
      <Character key={i} name={character.name} />
    )

    return (
      <div style={containerStyle}>
        <div style={listStyle}>
          {characters}
        </div>
      </div>
    )
  }
}

export Character from './Character'
