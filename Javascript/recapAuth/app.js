const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')
const bcrypt = require('bcrypt')
const path = require('path');
const User = require('./models/user')
const { urlencoded } = require('express')

mongoose.connect('mongodb://localhost:27017/recapAuth', { useNewUrlParser: true, useUnifiedTopology: true }).
    catch(error => handleError(error));

const sessionConfig = {
    resave: false,
    secret: 'thisissecret',
    saveUninitialized: false
}

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(urlencoded({ extended: true }))

app.use(session(sessionConfig))

app.get('/secret', (req, res) => {
    if (req.session.user_id) {
        return res.render('secret')
    }
    res.send('You are not authorized')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    newUser = new User({ username: username, password: hashedPassword })
    await newUser.save()
    res.send(req.body)
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        req.session.user_id = foundUser._id
        return res.send('Hooray, you are authorized')

    }
    res.send('Try again')

})

app.listen(3000, () => console.log('Listening to port 3000'))