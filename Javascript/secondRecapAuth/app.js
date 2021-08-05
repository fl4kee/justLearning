const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport')
const userRouter = require('./routes/userRoutes');
const path = require('path');
const engine = require('ejs-mate')
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/authTraining', { useNewUrlParser: true, useUnifiedTopology: true }).
  catch(error => handleError(error));

const isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.send('You must be signed in')
    }
    next()
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('ejs', engine);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

const sessionConfig ={ 
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie:{
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    },
}
app.use(session(sessionConfig))


app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser()) //describes how to store and unstore user in session
passport.deserializeUser(User.deserializeUser())
app.get('/secret', isLoggedIn, (req, res) => {
    console.log(req.user)
    res.render('secret')
} )

app.use('/user', userRouter)

app.listen(3000, () => console.log('Serving'))