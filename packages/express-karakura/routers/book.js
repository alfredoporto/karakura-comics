const express = require('express')
const Book = require('../models/book')

const router = new express.Router()

// todos los mangas
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        res.status(200).send(books)
    } catch (error) {
        res.status(400).send(error)
    }
})

// manga en especifico
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id })
        if (!book) {
            res.status(404).send({ error: "No se encontro el titulo" })
        }
        res.status(200).send(book)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const newBook = new Book({
            ...req.body,
            owner: req.user._id
        })
        await newBook.save()
        res.status(201).send(newBook)
    } catch (error) {
        console.log({ error })
        res.status(400).send({ message: "error" })
    }
})
// las operaciones listadas requeriran del middleware AUTH para modificar los libros
//post nuevo manga
//update manga
//borrar manga

module.exports = router