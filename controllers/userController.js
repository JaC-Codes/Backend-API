const User = require('../models/users')


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
            res.redirect('/')
        } else {
            res.status(400).json({ error: "Password doesn't match" })
        }
    } else {
        res.status(400).json({ error: "Email doesn't match" })
    }
} catch (error) {
    res.status(400).json({ error }) 
    }
}



module.exports = {
    user_create,
    user_login
}