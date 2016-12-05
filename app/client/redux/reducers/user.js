export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.user
    }

    case LOGOUT: {
      return null
    }

    default: {
      return state
    }
  }
}
