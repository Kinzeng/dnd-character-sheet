import './db'

import path from 'path'

import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'

import api from './api'
import auth, {authenticate} from './auth'
import config from '../../config'

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/auth', auth)
app.use('/api', authenticate(config.jwt.secret), api)

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  console.log('error', err)
  res.status(500).send(err)
})

app.listen(config.port, config.host, () => {
  console.log(`App listening on http://${config.host}:${config.port}`)
})
