import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from '../containers/App'
import auth from './auth'

import Character from '../views/Character'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='dashboard' component={auth(Dashboard)} />
      <Route path='login' component={Login} />
      <Route path='register' component={Register} />
      <Route path='characters/:character' component={auth(Character)} />
    </Route>
  </Router>
)
