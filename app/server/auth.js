import bcrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import config from '../../config'

const User = mongoose.model('User')

export function authenticate (secret) {
  return async function (req, res, next) {
    try {
      const token = jwt.verify(req.header('Authorization'), secret)
      req.user = await User.findOne({_id: token.id})
      next()
    } catch (e) {
      console.log(e)
      res.status(401).send('Unauthorized')
    }
  }
}

export function generateToken (user) {
  user = {
    id: user.id,
    username: user.username
  }
  return jwt.sign(user, config.jwt.secret)
}

const router = express.Router()

// registration
router.post('/register', async (req, res) => {
  let {username, password, confirm} = req.body
  if (password !== confirm) {
    return res.status(400).send('Passwords do not match')
  }

  try {
    password = bcrypt.hashSync(password, 10)
    const user = new User({username, password})
    await user.save()

    res.send({
      id: user.id,
      token: generateToken(user),
      username: user.username
    })
  } catch (e) {
    console.log(e)
    if (e.code === 11000) {
      res.status(400).send('Username already in use')
    } else {
      res.status(500).send('Internal Server Error')
    }
  }
})

// login
router.post('/login', async (req, res) => {
  const {username, password} = req.body
  try {
    if (!username) {
      throw new Error()
    }

    const user = await User.findOne({username})
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error()
    }

    res.send({
      id: user.id,
      token: generateToken(user),
      username: user.username
    })
  } catch (e) {
    res.status(401).send('Incorrect username or password')
  }
})

export default router
