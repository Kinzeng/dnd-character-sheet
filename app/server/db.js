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
  notes: {
    type: String,
    default: ''
  },
  backstory: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 1
  },
  class: String,
  race: String,
  alignment: String,
  experience: Number,
  deathSaves: {
    successes: {
      type: [Boolean],
      default: [false, false, false]
    },
    failures: {
      type: [Boolean],
      default: [false, false, false]
    }
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
    maxHealth: {
      type: Number,
      default: 10
    },
    ac: {
      type: Number,
      default: 10
    },
    proficiencyBonus: {
      type: Number,
      default: 2
    }
  },
  proficiencies: {
    strength: {
      type: Boolean,
      default: false
    },
    dexterity: {
      type: Boolean,
      default: false
    },
    constitution: {
      type: Boolean,
      default: false
    },
    intelligence: {
      type: Boolean,
      default: false
    },
    wisdom: {
      type: Boolean,
      default: false
    },
    charisma: {
      type: Boolean,
      default: false
    },
    acrobatics: {
      type: Boolean,
      default: false
    },
    animalHandling: {
      type: Boolean,
      default: false
    },
    arcana: {
      type: Boolean,
      default: false
    },
    athletics: {
      type: Boolean,
      default: false
    },
    deception: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
    },
    insight: {
      type: Boolean,
      default: false
    },
    intimidation: {
      type: Boolean,
      default: false
    },
    investigation: {
      type: Boolean,
      default: false
    },
    nature: {
      type: Boolean,
      default: false
    },
    medicine: {
      type: Boolean,
      default: false
    },
    perception: {
      type: Boolean,
      default: false
    },
    performance: {
      type: Boolean,
      default: false
    },
    persuasion: {
      type: Boolean,
      default: false
    },
    religion: {
      type: Boolean,
      default: false
    },
    sleightOfHand: {
      type: Boolean,
      default: false
    },
    stealth: {
      type: Boolean,
      default: false
    },
    survival: {
      type: Boolean,
      default: false
    }
  },
  inventory: [{
    quantity: Number,
    name: String,
    weight: Number,
    value: String,
    description: String
  }],
  money: {
    cp: {
      type: Number,
      default: 0
    },
    sp: {
      type: Number,
      default: 0
    },
    gp: {
      type: Number,
      default: 0
    },
    pp: {
      type: Number,
      default: 0
    },
    ep: {
      type: Number,
      default: 0
    }
  },
  spellAbility: {
    type: String,
    default: 'intelligence'
  },
  spells: [
    {
      currentSlots: {
        type: Number,
        default: 0
      },
      maxSlots: {
        type: Number,
        default: 0
      },
      spells: [{
        name: String,
        prepared: {
          type: Boolean,
          default: false
        },
        description: String
      }]
    }
  ]
})

const User = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  token: String
})

mongoose.model('Character', Character)
mongoose.model('User', User)
