import {TEST} from '../reducers/user'

export function test (test) {
  return async (dispatch, getState) => {
    console.log('test')
    await dispatch({type: TEST, test})
    console.log(getState().user)
  }
}
