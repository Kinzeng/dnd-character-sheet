import React from 'react'
import Button from '../../../components/Button'
import Checkbox from '../../../components/Checkbox'
import TextBox from '../TextBox'

const containerStyle = {
  flex: '1 1 auto',
  marginBottom: '1em',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const spellStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const nameStyle = {
  flex: '1 1 auto',
  borderBottom: 'none'
}

const deleteStyle = {
  color: 'red'
}

const descriptionStyle = {
  alignSelf: 'center',
  marginTop: '0.5em',
  width: '80%',
  border: 'none',
  outline: '1px solid black'
}

export default class Spell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: props.name, description: props.description, hover: false}
  }

  toggleSpell () {
    this.props.updateSpell({prepared: !this.props.prepared})
  }

  updateName (name) {
    this.props.updateSpell({name})
  }

  updateDescription (description) {
    this.props.updateSpell({description})
  }

  render () {
    const containerProps = {
      style: containerStyle,
      onMouseEnter: () => { this.setState({hover: true}) },
      onMouseLeave: () => { this.setState({hover: false}) }
    }

    const checkboxProps = {
      checked: this.props.prepared,
      onClick: this.toggleSpell.bind(this)
    }

    const nameProps = {
      style: nameStyle,
      value: this.props.name,
      update: this.updateName.bind(this)
    }

    const deleteProps = {
      style: {
        ...deleteStyle,
        visibility: this.state.hover ? 'visible' : 'hidden'
      },
      onClick: this.props.deleteSpell
    }

    const descriptionProps = {
      style: descriptionStyle,
      type: 'textarea',
      value: this.props.description,
      update: this.updateDescription.bind(this)
    }

    return (
      <div {...containerProps}>
        <div style={spellStyle}>
          <Checkbox {...checkboxProps} />
          <TextBox {...nameProps} />
          <Button {...deleteProps}>X</Button>
        </div>
        <TextBox {...descriptionProps} />
      </div>
    )
  }
}
