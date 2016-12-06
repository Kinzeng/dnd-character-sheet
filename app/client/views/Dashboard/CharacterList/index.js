import React from 'react'
import CharacterListItem from './CharacterListItem'

const containerStyle = {
  flex: '1 1 auto',
  border: '1px solid black',
  borderWidth: '1px 0',
  overflow: 'hidden',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const listStyle = {
  flex: '1 1 auto',
  padding: '0.5em',
  overflow: 'scroll',

  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const textStyle = {
  width: '100%',
  textAlign: 'center'
}

export default class CharacterList extends React.Component {
  render () {
    let characters

    if (!this.props.characters) {
      characters = (
        <div style={textStyle}>
          Loading...
        </div>
      )
    } else if (this.props.characters.length > 0) {
      characters = this.props.characters.map((character, i) => {
        const itemProps = {
          name: character.name,
          level: character.level,
          class: character.class,
          race: character.race,
          key: i
        }

        return <CharacterListItem {...itemProps} />
      })
    } else {
      characters = (
        <div style={textStyle}>
          You currently don't have any characters! Click the New Character button to create one!
        </div>
      )
    }

    return (
      <div style={containerStyle}>
        <div style={listStyle}>
          {characters}
        </div>
      </div>
    )
  }
}
