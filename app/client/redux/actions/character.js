import {SET_CHARACTER, CLEAR_CHARACTER} from '../reducers/character'
import {put} from '../../utils'

export function setCharacter (character) {
  return {type: SET_CHARACTER, character}
}

export function updateCharacter (char) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = await put('/api/characters', {
      ...state.character,
      ...char
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function updateStats (stats) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = await put('/api/characters', {
      ...state.character,
      stats: {
        ...state.character.stats,
        ...stats
      }
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function clearCharacter () {
  return {type: CLEAR_CHARACTER}
}
