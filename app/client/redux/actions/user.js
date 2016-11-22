import {LOGIN} from '../reducers/user'
import {post} from '../../utils'

export function login (username, password) {
  return async (dispatch, getState) => {
    const user = await post('/api/users', {username, password})
    await dispatch({type: LOGIN, user})
  }
}
