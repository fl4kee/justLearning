const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./models/user')
const path = require('path')
const bcrypt = require('bcrypt')
const session = require('express-session')

const sessionConfig = {
    resave: false,
    saveUninitialized: false,
    secret: 'notagoodsecret'
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.use(express.urlencoded({ extended: true }))
app.use(session(sessionConfig))

mongoose.connect('mongodb://localhost:27017/authDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => (console.log('Mongo connection is open')))
    .catch(error => (console.log(error)));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}


app.get('/', (req, res) => {
    res.send("This is home page")
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    let { username, password } = req.body
    const foundUser = await User.findAndValidate(username, password)
    if (foundUser) {
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }
    else {
        res.redirect("/login")
    }
})

app.post('/register', async (req, res) => {
    let { username, password } = req.body
    const newUser = new User({ username, password })
    newUser.save()
    req.session.user_id = newUser._id
    res.redirect('/')
})

app.post('/logout', (req, res) => {
    req.session.user_id = null; //or you can destroy session by req.session.destroy() 
    res.redirect('/login')
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})

app.listen(3000, () => console.log('listening to port 3000'))