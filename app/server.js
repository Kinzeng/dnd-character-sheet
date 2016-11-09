import path from 'path'
import express from 'express'
import config from '../config'

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(config.port, config.host, () => {
  console.log(`App listening on http://${config.host}:${config.port}`)
})
