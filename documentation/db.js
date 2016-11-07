import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const Character = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

const User = new mongoose.Schema({})
User.plugin(passportLocalMongoose)

mongoose.model('Character', Character)
mongoose.model('User', User)
