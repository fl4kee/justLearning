const mongoose = require('mongoose');
const { Schema } = mongoose
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

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)


// Product.insertMany([
//     {name: 'Goddess Melon', price: 4.99, season: 'Summer'},
//     {name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer'},
//     {name: 'Asparagus', proce: 3.99, season: 'Spring'}
// ])


const makeFarm = async() => {
    const farm = new Farm({name: 'Full Belly Farms', city: 'Guinda, CA'})
    const melon = await Product.findOne({name: 'Goddess Melon'})
    farm.products.push(melon)
    console.log(farm)
}

makeFarm()

