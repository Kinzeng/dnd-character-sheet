import path from 'path'
import express from 'express'

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, 'localhost', () => {
  console.log('App listening on http://localhost:3000')
})
