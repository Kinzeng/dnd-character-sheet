import express from 'express'
import mongoose from 'mongoose'

const Character = mongoose.model('Character')

const router = express.Router()

router.get('/characters', async (req, res) => {
  res.send(await Character.find({owner: req.user.id}))
})

router.post('/characters', async (req, res, next) => {
  const {name} = req.body

  try {
    const character = new Character({owner: req.user.id, name})
    await character.save()
    res.send(character)
  } catch (e) {
    next(e)
  }
})

export default router
