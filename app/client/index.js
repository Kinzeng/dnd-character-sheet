import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'
import routes from './routes'
import {LOGIN} from './redux/reducers/user'

class Root extends React.Component {
  componentWillMount () {
    this.store = createStore(rootReducer, applyMiddleware(thunk))
    const user = JSON.parse(
      window.localStorage.getItem('user') || window.sessionStorage.getItem('user')
    )

    if (user) {
      this.store.dispatch({type: LOGIN, user})
    }
  }

  render () {
    // pass down the redux stare through the Provider
    // allows connect to pass in needed parts of the store as props
    return (
      <Provider store={this.store}>
        {routes}
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'))
