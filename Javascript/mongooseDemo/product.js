const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onsale: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: "Bike helmet",
    price: 599
})
bike.save()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err.errors.name.properties.message)
    })