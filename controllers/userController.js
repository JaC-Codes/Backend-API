const User = require('../models/users')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { getTokenSourceMapRange } = require('typescript')
const { max } = require('lodash')


const user_create = async (req, res) => {
    const SaveUser = new User(req.body)
    const email = await User.findOne({ email: req.body.email })
    if (email) {
        res.status(409).json({ error: "Email already exists" })
        return;
    }
    SaveUser.save( (err, savedUser) => {
        if (err) throw err
        res.redirect('/login')
    })
}

const user_login = async (req, res) => {
    try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        const pass = await User.findOne({ password: req.body.password })
        if (pass) {
            const token = createToken(user._id)
            res.cookie('jac-logged', token, { maxAge: maxAge * 1000 })
            res.status(201)
            res.redirect('/')
        }
    }
} catch (error) {
    res.status(400).json({ error }) 
    }
}

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
    return jwt.sign({ id }, 'userSecret', {
        expiresIn: maxAge 
    })
}



module.exports = {
    user_create,
    user_login
}