import React from 'react'
import {get} from '../../utils'

const containerStyle = {
  display: 'flex'
}

export default class Character extends React.Component {
  constructor (props) {
    super(props)
    this.state = {character: null}
  }

  async componentWillMount () {
    this.setState({character: await get(`/${this.props.username}/${this.props.params.character}`)})
  }

  render () {
    if (!this.state.character) {
      return <div />
    }

    return (
      <div style={containerStyle}>
        {this.state.character}
      </div>
    )
  }
}
