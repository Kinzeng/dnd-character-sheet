import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../containers/App'

import Hello from '../views/Hello'
import Bye from '../views/Bye'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Hello} />
      <Route path='/bye' component={Bye} />
    </Route>
  </Router>
)
