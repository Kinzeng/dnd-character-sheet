import {LOGIN} from '../reducers/user'

export function login (user) {
  return {type: LOGIN, user}
}
