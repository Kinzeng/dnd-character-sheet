import React from 'react'
import Button from '../../components/Button'
import {getModifier} from '../../utils'

const containerStyle = {
  height: '140px',
  width: '128px',

  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
}

const statStyle = {
  position: 'relative',
  height: '90px',
  width: '90px',
  border: '1px solid black',
  borderRadius: '10px',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const modifierStyle = {
  position: 'absolute',
  left: '30px',
  bottom: '-10px',
  height: '20px',
  width: '30px',
  backgroundColor: 'white',
  border: '1px solid black',
  borderRadius: '10px',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class StatBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const stat = this.props.value
    let modifier = getModifier(stat)

    return (
      <div style={containerStyle}>
        <p>{this.props.name}</p>
        <div style={statStyle}>
          {stat}
          <div style={modifierStyle}>
            {modifier}
          </div>
        </div>
      </div>
    )
  }
}
