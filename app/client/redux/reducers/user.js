export const LOGIN = 'LOGIN'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return action.user
    }

    default: {
      return state
    }
  }
}
