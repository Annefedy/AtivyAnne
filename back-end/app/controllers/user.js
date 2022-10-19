const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { jwt_key } = require('../../.env')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')

module.exports = app => {
  
  const { User } = app.app.models.User

  // generate token
  const generateToken = (params = {}) => {
    return jwt.sign(params, jwt_key, {
      expiresIn: 86400
    })
  }
  //create
  const create = async (req,res) =>{
    const {name, email, birthDate, address, type,password} = req.body;
    let data = {};
    let user = await User.findOne({email});
    if(!user){
        data = {name, email, birthDate, address, type,password};
        user = await User.create(data);
                          
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
   }

   //Deletar 
   const deletar = async (req,res) =>{
    const {_id} = req.params;
    const user = await User.findByIdAndDelete({_id});
   return res.json(user);
   }

   // Listar todos
 const index =  async (req,res) =>{
    const user = await User.find();
res.json(user);
}

//listar por id
const details = async (req,res) => {
  const {_id} = req.params;
  const user = await User.findOne({_id});
  res.json(user);
 }

  // register
  const register = async (req, res) => {
    const { email } = req.body

    try {
      if(await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already exists.' })
      }

      const user = new User(req.body)
      await user.save()

      user.password = undefined

      return res.send({ 
        user, 
        token: generateToken({ id: user.id })
      })

    } catch(err) {
      return res.status(400).send({ error: 'Registration failed.' })
    }
  }

  // authenticate
  const auth = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')
    
    if(!user) {
      return res.status(400).send({ error: 'User not found.' })
    }

    if(!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Invalid password.' })
    }

    user.password = undefined 

    res.send({ 
      user, 
      token: generateToken({ id: user.id })
    })
  }

  // user profile
  const userProfile = async (req, res) => {
    res.send({ ok: true, user: req.userId})
  }

  // forgot password
  const forgotPassword = async (req, res) => {
    const { email } = req.body

    try {
      const user = await User.findOne({ email })

      if(!user)
        return res.status(400).send({ error: 'User not found.'} )

      const token = crypto.randomBytes(20).toString('hex')

      const now = new Date()
      now.setHours(now.getHours() + 1)

      await User.findByIdAndUpdate(user.id, {
        '$set': {
          passwordResetToken: token,
          passwordResetExpires: now
        }
      })

      mailer.sendMail({
        from: 'annecarine1997@gmail.com',
        to: email,
        subject: 'Link para Resetar sua Senha ✔',
        text: `Utilize o token ${ token } para resetar sua senha`,
      }, (err) => {
        if(err)
          return res.status(400).send({ error: 'Cannot send forgot password email' })

        return res.status(200).send({ message: "Email send successfully" })
      })
      
    } catch(err) {
      console.log(err)
      return res.status(400).send({ error: 'Error on forgot password, try again' })
    }
  }

  // reset password
  const resetPassword = async (req, res) => {
    const { email, token, password } =  req.body

    try {
      const user = await User.findOne({ email })
        .select('+passwordResetToken passwordResetExpires')

      if(!user)
        return res.status(400).send({ error: 'User not found.' })

      if(token !== user.passwordResetToken)
        return res.status(400).send({ error: 'Token invalid.' })

      const now = new Date()

      if(now > user.passwordResetExpires) 
        return res.status(400).send({ error: 'Token expired, generate a new token.'})

      user.password = password

      await user.save()

      res.status(200).send({ message: 'Updated password'})
    } catch (err) {
      res.status(400).send({ error: 'Cannot reset password, try again.' })
    }
  }

  return { create,deletar,index, details, register, auth, userProfile, forgotPassword, resetPassword }
}
  
