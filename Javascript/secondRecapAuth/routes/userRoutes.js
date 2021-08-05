const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('passport')

router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res, next) => {
    const {username, email, password} = req.body
    const user = new User({username, email})
    const registeredUser = await User.register(user, password)
    req.login(registeredUser, err => {
        if(err) return next(err)
    })
    res.redirect('/secret')
})

router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', async (req, res, next) => {
    const {email} = req.body
    const registeredUser =  await User.findOne({email})
    console.log(registeredUser[0])
    req.login(registeredUser, err => {
        if(err) return next(err)
    })
    res.redirect('/secret')
})
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/user/login')
})

module.exports = router