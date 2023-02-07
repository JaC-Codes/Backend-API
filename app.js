const express = require('express')
const PORT = 3000
const morgan = require('morgan')
const mongoose = require('mongoose')
const userController = require('./controllers/userController')
const bcrypt = require('bcrypt')
const { expr } = require('jquery')


const app = express()

const dbURI = 'mongodb+srv://sn0wey:root@cluster0.eotbt6q.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT))
    .catch((err) => console.log(err))
mongoose.set('strictQuery', true)

app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded( {extended: true} ))




app.use(morgan('dev'))




app.get('/', (req, res) => {
    res.render('index', { title: 'JaCCodes - Home' })
    //res.sendFile('index.html', { root: 'C:/Users/jackc/Desktop/Sn0wey Portfolio/src/pages'})
})

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'JaCCodes - Contact' })
    //res.sendFile('contact.html', { root: 'C:/Users/jackc/Desktop/Sn0wey Portfolio/src/pages'})
})

app.get('/projects', (req, res) => {
    res.render('projects', { title: 'JaCCodes - Projects' })
    //res.sendFile('projects.html', { root: 'C:/Users/jackc/Desktop/Sn0wey Portfolio/src/pages'})
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'JaCCodes - About' })
    //res.sendFile('about.html', { root: 'C:/Users/jackc/Desktop/Sn0wey Portfolio/src/pages'})
})

app.get('/register', (req, res) => {
    res.render('register', { title: 'JaCCodes - Register' })
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'JaCCodes - Login' })
})

app.post('/api/user', userController.user_create)

app.post('/auth', userController.user_login)

app.use((req, res) => {
    res.status(404).render('404', { title: 'JaCCodes - Page Not Found' })
    //res.sendFile('404.html', { root: 'C:/Users/jackc/Desktop/Sn0wey Portfolio/src/pages'})
})

