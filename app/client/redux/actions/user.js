import {LOGIN, LOGOUT} from '../reducers/user'

export function login (user, remember) {
  window.sessionStorage.removeItem('user')
  window.localStorage.removeItem('user')

  const storage = remember ? window.localStorage : window.sessionStorage
  storage.setItem('user', JSON.stringify(user))

  return {type: LOGIN, user}
}

export function logout () {
  window.sessionStorage.removeItem('user')
  window.localStorage.removeItem('user')

  return {type: LOGOUT}
}
