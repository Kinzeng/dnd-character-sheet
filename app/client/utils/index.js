import superagent from 'superagent'
import {abilityModifiers} from '../constants'

export async function get (url, token) {
  return (await superagent
    .get(url)
    .set('Authorization', token)
    .accept('Application/json'))
  .body
}

export async function post (url, data, token) {
  return (await superagent
    .post(url)
    .set('Authorization', token)
    .send(data)
    .accept('Application/json'))
  .body
}

export async function put (url, data, token) {
  return (await superagent
    .put(url)
    .set('Authorization', token)
    .send(data)
    .accept('Application/json'))
  .body
}

export function getModifier (stat) {
  let modifier = Math.floor((stat - 10) / 2)

  if (modifier >= 0) {
    modifier = `+${modifier}`
  }

  return modifier
}

export function getAbilityModifier (ability, stats) {
  return getModifier(stats[ability])
}

export function getSkillModifier (skill, stats, proficiencies) {
  const proficiencyBonus = proficiencies[skill] ? stats.proficiencyBonus : 0
  let modifier = parseInt(getAbilityModifier(abilityModifiers[skill], stats)) + proficiencyBonus
  if (modifier >= 0) {
    modifier = `+${modifier}`
  }

  return modifier
}
