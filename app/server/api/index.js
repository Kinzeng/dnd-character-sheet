import express from 'express'
import characters from './characters'

const router = express.Router()
router.use(characters)

export default router
