import express from 'express'
import mongoose from 'mongoose'

const Character = mongoose.model('Character')

const router = express.Router()

router.get('/characters', async (req, res) => {
  res.send(await Character.find({owner: req.user.id}))
})

router.post('/characters', async (req, res) => {
  const {name} = req.body

  const duplicate = await Character.findOne({owner: req.user.id, name})
  if (duplicate) {
    res.status(400).send('Character with that name already exists')
  } else {
    const spells = []
    for (let i = 0; i < 10; i++) {
      spells.push({})
    }

    const character = new Character({
      owner: req.user.id,
      name,
      spells
    })
    await character.save()
    res.send(character)
  }
})

router.put('/characters', async (req, res) => {
  let character = req.body

  try {
    await Character.findByIdAndUpdate(character._id, character)
    res.send(character)
  } catch (e) {
    res.status(400).send('Character update failed')
  }
})

export default router
