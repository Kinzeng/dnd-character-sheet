import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from '../containers/App'
import auth from './auth'

import Character from '../views/Character'
import Dashboard, {CharacterList, Settings} from '../views/Dashboard'
import Home from '../views/Home'
import Login from '../views/Login'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='dashboard' component={auth(Dashboard)}>
        <IndexRoute component={CharacterList} />
        <Route path='settings' component={Settings} />
      </Route>
      <Route path='login' component={Login} />
      <Route path='*' component={auth(Character)} />
    </Route>
  </Router>
)
