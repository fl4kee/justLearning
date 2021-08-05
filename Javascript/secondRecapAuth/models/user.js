const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Username is required']
    },
    email:{
        type: String,
        required: [true, 'Email is required']
    }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)