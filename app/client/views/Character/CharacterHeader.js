import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import TextBox from './TextBox'
import {updateCharacter} from '../../redux/actions/character'

const containerStyle = {
  flex: '1 0 auto',
  margin: '2em 0',
  width: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const fieldsStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'baseline'
}

const nameStyle = {
  margin: 0,
  paddingLeft: 0,
  width: '100%',
  borderBottom: 'none',
  fontSize: '1.5em',
  fontWeight: 'bold'
}

const labelStyle = {
  marginRight: '0.5em'
}

const textBoxStyle = {
  margin: '0 0.25em'
}

const levelStyle = {
  width: '35px',
  textAlign: 'center',
  paddingLeft: 0
}

const experienceStyle = {
  width: '70px'
}

class CharacterHeader extends React.Component {
  update (field, value) {
    this.props.updateCharacter({[field]: value})
    if (field === 'name') {
      this.props.router.replace(`/characters/${value}`)
    }
  }

  getTextProps (field, style) {
    return {
      style: {
        ...textBoxStyle,
        ...style
      },
      update: this.update.bind(this, field),
      value: this.props[field]
    }
  }

  render () {
    return (
      <div style={containerStyle}>
        <TextBox {...this.getTextProps('name', nameStyle)} />
        <div style={fieldsStyle}>
          <span style={labelStyle}>Level:</span>
          <TextBox {...this.getTextProps('level', levelStyle)} />
          <span style={labelStyle}>Class:</span>
          <TextBox {...this.getTextProps('class')} />
          <span style={labelStyle}>Race:</span>
          <TextBox {...this.getTextProps('race')} />
          <span style={labelStyle}>Alignment:</span>
          <TextBox {...this.getTextProps('alignment')} />
          <span style={labelStyle}>experience:</span>
          <TextBox {...this.getTextProps('experience', experienceStyle)} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.character.name,
    level: state.character.level,
    class: state.character.class,
    race: state.character.race,
    alignment: state.character.alignment,
    experience: state.character.experience
  }
}

export default withRouter(connect(mapStateToProps, {updateCharacter})(CharacterHeader))
