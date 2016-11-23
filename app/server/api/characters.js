import express from 'express'
import mongoose from 'mongoose'

const Character = mongoose.model('Character')

const router = express.Router()

router.get('/characters', async (req, res) => {
  res.send(await Character.find({owner: req.user.id}))
})

router.post('/characters', async (req, res, next) => {
  const {name} = req.body

  const duplicate = await Character.findOne({owner: req.user.id, name})
  if (duplicate) {
    res.status(400).send('Character with that name already exists')
  } else {
    const character = new Character({owner: req.user.id, name})
    await character.save()
    res.send(character)
  }
})

export default router
