import express from 'express'
import characters from './characters'
import users from './users'

const router = express.Router()
router.use(characters)
router.use(users)

export default router
