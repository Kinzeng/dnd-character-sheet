import superagent from 'superagent'

export async function get (url) {
  return (await superagent.get(url).accept('Application/json')).body
}

export async function post (url, data) {
  return (await superagent.post(url).send(data).set('Accept', 'application/json')).body
}
