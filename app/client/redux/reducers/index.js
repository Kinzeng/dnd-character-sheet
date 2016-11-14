import {combineReducers} from 'redux'
import user from './user'
import ui from './ui'

// combines all the reducers so that they are more organized
export default combineReducers({
  user,
  ui
})
