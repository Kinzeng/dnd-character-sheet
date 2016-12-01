import React from 'react'
import TextBox from './TextBox'

const containerStyle = {
  margin: '2em 0',
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'baseline'
}

const nameStyle = {
  margin: 0
}

const labelStyle = {
  marginLeft: '0.5em'
}

const textBoxStyle = {
  margin: '0 0.25em'
}

export default class CharacterHeader extends React.Component {
  update (field, value) {
    this.props.updateCharacter({[field]: value})
  }

  render () {
    const {character} = this.props
    const levelProps = {
      style: {
        ...textBoxStyle,
        width: '35px',
        textAlign: 'center',
        padding: 0
      },
      update: this.update.bind(this, 'level'),
      value: character.level
    }

    const classProps = {
      style: textBoxStyle,
      update: this.update.bind(this, 'class'),
      value: character.class
    }

    const raceProps = {
      style: textBoxStyle,
      update: this.update.bind(this, 'race'),
      value: character.race
    }

    const alignmentProps = {
      style: textBoxStyle,
      update: this.update.bind(this, 'alignment'),
      value: character.alignment
    }

    return (
      <div style={containerStyle}>
        <h2 style={nameStyle}>{this.props.character.name}</h2>
        <span style={labelStyle}>Level:</span>
        <TextBox {...levelProps} />
        <span style={labelStyle}>Class:</span>
        <TextBox {...classProps} />
        <span style={labelStyle}>Race:</span>
        <TextBox {...raceProps} />
        <span style={labelStyle}>Alignment:</span>
        <TextBox {...alignmentProps} />
      </div>
    )
  }
}
