const router = require('express').Router()
const User = require('../models/User')

//SignUp Funtion

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    
    try {
        const user = await User.create({ name, email, password })
        res.json(user)
    } catch (error) {
        if (error.code === 11000) return res.status(400).send('Email Already Exists')
        res.status(400).send(error.message)
    }
})

//Login Function

router.post('/login', async(req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    res.json(user)
  } catch (e) {
    res.status(400).send(e.message)
  }
})



module.exports = router;