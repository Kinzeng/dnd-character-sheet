import express from 'express'
import mongoose from 'mongoose'

const Character = mongoose.model('Character')

const router = express.Router()

router.get('/characters', async (req, res) => {
  res.send(await Character.find({}))
})

router.post('/characters', async (req, res, next) => {
  const {name} = req.body

  try {
    const character = new Character({name})
    await character.save()
  } catch (e) {
    next(e)
  }
})

export default router
