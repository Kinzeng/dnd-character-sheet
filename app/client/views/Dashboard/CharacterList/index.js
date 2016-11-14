import React from 'react'
import Character from './Character'
import {get} from '../../../utils'

const containerProps = {
  style: {
    flexGrow: 1,
    border: '1px solid black',
    borderWidth: '1px 0',
    backgroundColor: 'rgb(9, 64, 74)',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
}

export default class CharacterList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {characters: []}
  }

  componentDidMount () {
    this.loadCharacters()
  }

  async loadCharacters () {
    this.setState({characters: await get(`/api/characters?username=${this.props.username}`)})
  }

  render () {
    const characters = this.state.characters.map((character, i) =>
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
