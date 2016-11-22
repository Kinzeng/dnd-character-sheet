import bcrypt from 'bcrypt'
import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import config from '../../../config'

const User = mongoose.model('User')

const router = express.Router()

export default router
