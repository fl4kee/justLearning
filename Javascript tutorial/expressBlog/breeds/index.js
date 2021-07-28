const express = require('express')
const app = express()
const { v4: uuid } = require('uuid');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


let db = [
    {   
        id: uuid(),
        breed: 'Корги',
        img: 'images/corgi.jpg',
        height: '30 сантиметров',
        age: '13 лет',
        color: 'Рыжий, соболиный, палевый, чёрно-подпалый, с белыми отметинами на ногах, груди и шее или без них',
        wool: 'прямая, с густым подшёрстком'
    },
    {   
        id: uuid(),
        breed: 'Пекинес',
        img: 'images/pekines.jpg',
        height: '25 сантиметров',
        age: '18 лет',
        color: 'Самый распространённый — рыжий. Также встречаются чёрные, палевые, цветные пекинесы. ',
        wool: '	умеренно длинная'
    },
    {   
        id: uuid(),
        breed: 'Джек-рассел',
        img: 'images/jack',
        height: '30 сантиметров',
        age: '15 лет',
        color: 'На преобладающем белом фоне рыжие, черные или черно-рыжие пятнами.',
        wool: 'жёсткая, с изломом (брокен), гладкая'
    },
    {   
        id: uuid(),
        breed: 'Шпиц',
        img: 'images/shpitz',
        height: '35 сантиметров',
        age: '16 лет',
        color: 'Шерсть прямая и длиннаяб под ней наблюдается плотный подшерсток.',
        wool: 'прямая, с густым подшёрстком'
    },
    {   
        id: uuid(),
        breed: 'Йоркширский терьер',
        img: 'images/yourk',
        height: '20 сантиметров',
        age: '15  лет',
        color: 'черно-белый, бело-голубой, чисто черный ,чисто голубой с белесым воротничком',
        wool: 'На туловище средней длины, совершенно прямая (не волнистая), блестящая, тонкой шелковистой структуры, не пушистая.'
    }

    ]

app.get('/breeds', (req, res) => {
    res.render('breeds', {db})
})

app.get('/breeds/new', (req, res) => {
    res.render('create')
})

app.get('/breeds/:id', (req, res) => {
    const { id } = req.params
    const foundBreed = db.find(b => id === b.id)
    res.render('detail', { breed: foundBreed })
})

app.get('/breeds/:id/edit', (req, res) => {
    const { id } = req.params
    const foundBreed = db.find(b => id === b.id)
    res.render('edit', { breed: foundBreed })
})

app.post('/breeds', (req, res) => {
    const { breed, height, weight, age, color, wool } = req.body
    db.push({id: uuid(), breed: breed, weight: weight, height: height, age: age, color: color, wool: wool })
    res.redirect('/breeds')
})

app.patch('/breeds/:id', (req, res) => {
    const { id } = req.params
    const { breed, height, age, color, wool } = req.body
    const foundBreed = db.find(b => id === b.id)
    foundBreed.breed = breed
    foundBreed.height = height
    foundBreed.age = age
    foundBreed.color = color
    foundBreed.wool = wool
    res.redirect('/breeds')
})

app.delete('/breeds/:id', (req, res) => {
    const { id } = req.params
    db = db.filter(b => id != b.id)
    res.redirect('/breeds')

})


app.listen(3000, () => {
    console.log('Listening to port 3000')
})