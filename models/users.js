const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, { timestamps: true })


/* Calls before saving user - Pre saving of user */

userSchema.pre('save', async function (next) {
    try {
        console.log(this.password)
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(this.password, salt)
        this.password = hashedPass
        next()
    } catch (error) {
    next(error)
   }
})


const User = mongoose.model('User', userSchema)

module.exports = User
