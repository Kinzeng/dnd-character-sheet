export const TEST = 'TEST'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: action.test
      }
    }

    default: {
      return state
    }
  }
}
