import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

const containerStyle = {
  flex: '1 1 auto',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

const navStyle = {
  width: '125px',

  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignItems: 'center'
}

const linkStyle = {
  marginRight: '1em',
  color: 'blue',
  textDecoration: 'none'
}

const sectionStyle = {
  margin: '0 2em',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
}

const demoStyle = {
  alignSelf: 'center',
  marginBottom: '1em',
  maxWidth: '80%',
  border: '1px solid black'
}

class Home extends React.Component {
  render () {
    return (
      <div style={containerStyle}>
        <h1>DnD Character Management!</h1>
        <div>
          {this.props.user
            ? <Link style={linkStyle} to='/dashboard'>Dashboard</Link>
            : (
            <div style={navStyle}>
              <Link style={linkStyle} to='/login'>Login</Link>
              <Link style={linkStyle} to='/register'>Register</Link>
            </div>
            )
          }
        </div>
        <div style={sectionStyle}>
          <h2>Welcome!</h2>
          <p>
            This is a site for Dungeon and Dragons players to create and manage all the characters
            they create! Here you can create new characters and view their character sheets whenever
            you want. Instead of having to deal with paper and manual calculations, you can just put
            in all the information about your character here and all the ability and skill modifiers
            will be taken care for you! The sheets also let you add spells, items, backstories, and
            notes so you can keep everything right on the sheet. To get started, create an account
            and create a new character!
          </p>
          <img src='/media/demo.png' style={demoStyle} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
