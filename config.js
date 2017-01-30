const env = process.env.NODE_ENV || 'development'

const config = {
  development: {
    host: 'localhost',
    port: '8080',
    env: 'development',
    mongo: {
      host: 'localhost',
      port: '27017',
      db: 'dnd'
    },
    jwt: {
      secret: 'notouchy'
    }
  }
}

module.exports = config[env]
