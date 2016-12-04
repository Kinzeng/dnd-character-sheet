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

export function toggleProficiency (skill) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = await put('/api/characters', {
      ...state.character,
      proficiencies: {
        ...state.character.proficiencies,
        [skill]: !state.character.proficiencies[skill]
      }
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function toggleSave (type, i) {
  return async (dispatch, getState) => {
    const state = getState()
    const saves = state.character.deathSaves[type]
    saves[i] = !saves[i]
    const character = await put('/api/characters', {
      ...state.character,
      deathSaves: {
        ...state.character.deathSaves,
        [type]: saves
      }
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function addItem (item) {
  return async (dispatch, getState) => {
    const state = getState()
    const inventory = state.character.inventory
    inventory.push(item)

    const character = await put('/api/characters', {
      ...state.character,
      inventory
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function deleteItem (index) {
  return async (dispatch, getState) => {
    const state = getState()
    const inventory = state.character.inventory
    inventory.splice(index, 1)

    const character = await put('/api/characters', {
      ...state.character,
      inventory
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function addSpell (level, spell) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = state.character.spells
    spells[level].spells.push({
      name: spell.name,
      prepared: false,
      description: spell.description
    })

    const character = await put('/api/characters', {
      ...state.character,
      spells
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function updateSpellList (level, spellList) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = state.character.spells
    spells[level] = {
      ...spells[level],
      ...spellList
    }

    const character = await put('/api/characters', {
      ...state.character,
      spells
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function updateSpell (level, index, spell) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = state.character.spells
    spells[level].spells[index] = {
      ...spells[level].spells[index],
      ...spell
    }

    const character = await put('/api/characters', {
      ...state.character,
      spells
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function deleteSpell (level, index, spell) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = state.character.spells
    spells[level].spells.splice(index, 1)

    const character = await put('/api/characters', {
      ...state.character,
      spells
    }, state.user.token)

    await dispatch({type: SET_CHARACTER, character})
  }
}

export function clearCharacter () {
  return {type: CLEAR_CHARACTER}
}
