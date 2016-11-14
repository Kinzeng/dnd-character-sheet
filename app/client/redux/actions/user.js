import {TEST} from '../reducers/user'

export function test (test) {
  return async (dispatch, getState) => {
    await dispatch({type: TEST, test})
  }
}
