const mongoose = require('mongoose');

// Establishing connection
mongoose.connect('mongodb://localhost:27017/relationshipDemo', {
    // options to turn off deprecation warnings
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// Error handling
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected");
});

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async() => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New Your',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}
makeUser()
 