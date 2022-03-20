const mongoose = require('mongoose')
const validator = require('validator')
/*
    Arreglo simple de passwords no recomendados, 
    creo que la lista es de 1k palabras
*/
const weakPasswords = ["password", "123456"]
/* 
    "tokens" es un array de los tokens generados por
    jwt; estos tokens seran usados para autenticacion

    "timestamps" crea automaticamente los campos de
    auditoria 'createdAt' y 'updatedAt para el model

*/
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