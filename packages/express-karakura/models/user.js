const mongoose = require('mongoose')
const validator = require('validator')

const weakPasswords = ["password", "123456"]
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (weakPasswords.indexOf(value) > -1) {
                throw new Error("Weak Password")
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User