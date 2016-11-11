import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../containers/App'

import Dashboard from '../views/Dashboard'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>
)
