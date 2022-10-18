const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

module.exports = () => {
  const UserSchema = new Schema({
    name: {
      type: String,
     
    },
    email: {
      type: String,
        unique:true,
        required: 'Please enter your email',
        trim: true,
        lowercase:true
     },
    birthDate: {
      type: Date,
      required: true,
      trim: true
  },
  address: {
    street: String,
    district: String,
    city: String,
    state: String
},
  type: {
      type:Number,
      default:1
     },
    password: {
      type: String,
      required: true,
      select: false
    },
    passwordResetToken: {
      type: String,
      select: false
    },
    passwordResetExpires: {
      type: Date,
      select: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    }
  })

  // encriptando senha antes de salvar no banco
  UserSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 10)
    }

    next()
  })

  const User = mongoose.model('User', UserSchema)

  return { User }
}