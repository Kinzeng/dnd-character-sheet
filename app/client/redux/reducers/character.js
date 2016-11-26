export const SET_CHARACTER = 'SET_CHARACTER'
export const CLEAR_CHARACTER = 'CLEAR_CHARACTER'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER: {
      return action.character
    }

    case CLEAR_CHARACTER: {
      return null
    }

    default: {
      return state
    }
  }
}
