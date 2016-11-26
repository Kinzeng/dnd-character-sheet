import Promise from 'bluebird'
import mongoose from 'mongoose'
import config from '../../config'

const {username, password, host, port, db} = config.mongo
mongoose.Promise = Promise
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${db}`)

const Character = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  stats: {
    strength: {
      type: Number,
      default: 10
    },
    dexterity: {
      type: Number,
      default: 10
    },
    constitution: {
      type: Number,
      default: 10
    },
    intelligence: {
      type: Number,
      default: 10
    },
    wisdom: {
      type: Number,
      default: 10
    },
    charisma: {
      type: Number,
      default: 10
    },
    health: {
      type: Number,
      default: 10
    },
    ac: {
      type: Number,
      default: 10
    },
    proficiencyBonus: {
      type: Number,
      default: 10
    }
  },
  proficiencies: [Number],
  inventory: [Object]
})

const User = new mongoose.Schema({
  username: String,
  password: String,
  token: String
})

mongoose.model('Character', Character)
mongoose.model('User', User)
