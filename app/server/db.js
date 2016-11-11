import Promise from 'bluebird'
import mongoose from 'mongoose'
import config from '../../config'

const {username, password, host, port, db} = config.mongo
mongoose.Promise = Promise
mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${db}`)

const Character = new mongoose.Schema({
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  name: {
    type: String,
    required: true
  },
  description: String,
  stats: {
    strength: Number,
    dexterity: Number,
    consitution: Number,
    intelligence: Number,
    wisdom: Number,
    charisma: Number,
    health: Number,
    ac: Number,
    proficiencyBonus: Number
  },
  proficiencies: [Number],
  inventory: [Object]
})

const User = new mongoose.Schema({
  username: String,
  password: String
})

mongoose.model('Character', Character)
mongoose.model('User', User)
