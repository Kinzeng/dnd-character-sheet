import React from 'react'
import Button from '../../../components/Button'

const containerStyle = {
  position: 'relative',
  paddingBottom: '0.5em',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const nameStyle = {
  flex: '1 1 auto',
  textAlign: 'center'
}

export default class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
  }

  render () {
    const {quantity, name, weight, value, description} = this.props

    const containerProps = {
      style: containerStyle,
      onMouseEnter: (e) => { this.setState({hover: true}) },
      onMouseLeave: (e) => { this.setState({hover: false}) }
    }

    const visibility = this.state.hover ? 'visible' : 'hidden'

    const tooltipStyle = {
      visibility
    }

    const buttonProps = {
      style: {
        color: 'red',
        visibility
      },
      onClick: this.props.delete
    }

    return (
      <div {...containerProps}>
        <div>{quantity}x</div>
        <div style={nameStyle}>{name}</div>
        {(weight || value || description) &&
          <div className='tooltip' style={tooltipStyle}>
            {weight && <div><b>Weight:</b> {weight} lb</div>}
            {value && <div><b>Value:</b> {value}</div>}
            {description && <div><b>Description:</b> {description}</div>}
          </div>
        }
        <Button {...buttonProps}>X</Button>
      </div>
    )
  }
}
