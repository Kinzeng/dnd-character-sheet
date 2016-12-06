import copy from 'deepcopy'
import {SET_CHARACTER, CLEAR_CHARACTER} from '../reducers/character'
import {put} from '../../utils'

export function setCharacter (character) {
  return {type: SET_CHARACTER, character}
}

export function updateCharacter (char) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = {
      ...state.character,
      ...char
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function updateStats (stats) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = {
      ...state.character,
      stats: {
        ...state.character.stats,
        ...stats
      }
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function toggleProficiency (skill) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = {
      ...state.character,
      proficiencies: {
        ...state.character.proficiencies,
        [skill]: !state.character.proficiencies[skill]
      }
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function toggleSave (type, i) {
  return async (dispatch, getState) => {
    const state = getState()
    const saves = state.character.deathSaves[type]
    saves[i] = !saves[i]
    const character = {
      ...state.character,
      deathSaves: {
        ...state.character.deathSaves,
        [type]: saves
      }
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function addItem (item) {
  return async (dispatch, getState) => {
    const state = getState()
    const inventory = copy(state.character.inventory)
    inventory.push(item)

    const character = {
      ...state.character,
      inventory
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function deleteItem (index) {
  return async (dispatch, getState) => {
    const state = getState()
    const inventory = copy(state.character.inventory)
    inventory.splice(index, 1)

    const character = {
      ...state.character,
      inventory
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function updateMoney (money) {
  return async (dispatch, getState) => {
    const state = getState()
    const character = {
      ...state.character,
      money: {
        ...state.character.money,
        ...money
      }
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function addSpell (level) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = copy(state.character.spells)
    spells[level].spells.push({
      name: 'New Spell',
      prepared: false,
      description: 'Spell Description'
    })

    const character = {
      ...state.character,
      spells
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function updateSpellList (level, spellList) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = copy(state.character.spells)
    spells[level] = {
      ...spells[level],
      ...spellList
    }

    const character = {
      ...state.character,
      spells
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function updateSpell (level, index, spell) {
  return async (dispatch, getState) => {
    const state = getState()

    const spells = copy(state.character.spells)
    spells[level].spells[index] = {
      ...spells[level].spells[index],
      ...spell
    }

    const character = {
      ...state.character,
      spells
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function deleteSpell (level, index) {
  return async (dispatch, getState) => {
    const state = getState()
    const spells = copy(state.character.spells)
    spells[level].spells.splice(index, 1)

    const character = {
      ...state.character,
      spells
    }

    dispatch({type: SET_CHARACTER, character})
    put('/api/characters', character, state.user.token)
  }
}

export function clearCharacter () {
  return {type: CLEAR_CHARACTER}
}
