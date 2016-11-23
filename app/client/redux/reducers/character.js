export const SET_CHARACTER = 'SET_CHARACTER'
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER'
export const CLEAR_CHARACTER = 'CLEAR_CHARACTER'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER: {
      return action.character
    }

    case UPDATE_CHARACTER: {
      return {...state, ...action.character}
    }

    case CLEAR_CHARACTER: {
      return {}
    }

    default: {
      return state
    }
  }
}
