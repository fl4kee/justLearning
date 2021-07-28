const express = require('express');
const app = express();

console.dir(app)

// app.use((req, res) => {
//     console.log("WE GOT NEW REQUEST")
//     res.send( '<h1>This is my webpage</h1>')
// })

app.get('/cats/:something', (req, res) => {
    const { something } = req.params
    res.send(`Browsing ${something}`)
})
app.get('/cats', (req, res) => {
    res.send("This is CATS PAGE")
    console.log("We got cats request")
} )

app.get('/dogs', (req, res) => {
    res.send("This is DOGS PAGE")
    console.log("We got dogs request")
} )


app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.post('/cats', (req, res) => {
    res.send('This is post cats request')
})

app.get('/search', (req, res) => {
    const { q } = req.query
    res.send(`Here is search results for ${q}`)
})

app.get('*', (req, res) => {
    res.send('I dont know this route')
})



app.post('*', (req, res) => {
    res.send('I dont know this route')
})