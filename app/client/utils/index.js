import superagent from 'superagent'

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
