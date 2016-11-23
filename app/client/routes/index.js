import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../containers/App'

import Character from '../views/Character'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Login from '../views/Login'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='dashboard' component={Dashboard} />
      <Route path='login' component={Login} />
      <Route path='*' component={Character} />
    </Route>
  </Router>
)
