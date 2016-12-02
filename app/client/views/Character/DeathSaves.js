import React from 'react'
import Checkbox from '../../components/Checkbox'

const containerStyle = {
  flex: '1 1 auto',
  marginBottom: '30px',
  width: '200px',
  border: '1px solid black',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const titleStyle = {
  width: '100%',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center'
}

const savesStyle = {
  padding: '0.25em',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'stretch'
}

const rowStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const labelStyle = {
  flex: '1 1 auto',
  textAlign: 'right'
}

export default class DeathSaves extends React.Component {
  render () {
    const {character} = this.props
    const successes = character.deathSaves.successes.map((save, i) => {
      const checkBoxProps = {
        style: {
          margin: '5px'
        },
        checked: save,
        onClick: this.props.toggleSave.bind(null, 'successes', i),
        key: i
      }

      return <Checkbox {...checkBoxProps} />
    })

    const failures = character.deathSaves.failures.map((save, i) => {
      const checkBoxProps = {
        style: {
          margin: '5px'
        },
        checked: save,
        onClick: this.props.toggleSave.bind(null, 'failures', i),
        key: i
      }

      return <Checkbox {...checkBoxProps} />
    })

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>Death Saves</div>
        <div style={savesStyle}>
          <div style={rowStyle}>
            <div style={labelStyle}>Successes</div>
            <div style={rowStyle}>{successes}</div>
          </div>
          <div style={rowStyle}>
            <div style={labelStyle}>Failures</div>
            <div style={rowStyle}>{failures}</div>
          </div>
        </div>
      </div>
    )
  }
}
