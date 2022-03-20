const mongoose = require('mongoose')

/* 
    name: Stell Ball Run
    description: Esta es la historia de Jhonny ...
    number: 1
    publisher: Ivrea 
    category: Shonen
    Price: 65
*/
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    },
    publisher: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imagePath: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book