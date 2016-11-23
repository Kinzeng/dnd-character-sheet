import {combineReducers} from 'redux'
import user from './user'
import character from './character'

// combines all the reducers so that they are more organized
export default combineReducers({
  user,
  character
})
