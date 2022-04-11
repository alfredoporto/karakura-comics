const express = require("express");
const Cart = require("../models/cart");
const Book = require("../models/book");
const Auth = require("../middleware/auth");

const router = new express.Router();

router.get("/cart", Auth, async (req, res) => {

    const owner = req.user._id;

    try {
        const cart = await Cart.findOne({ owner });
        if (cart && cart.books.length > 0) {
            res.status(200).send(cart);
        } else {
            res.send(null);
        }
    } catch (error) {
        res.status(500).send();
    }
});

router.post("/cart", Auth, async (req, res) => {

    const owner = req.user._id;
    const { bookId, quantity } = req.body;

    try {
        const cart = await Cart.findOne({ owner });
        const book = await Book.findOne({ _id: bookId });

        if (!book) {
            res.status(404).send({ message: "libro no encontrado" });
            return;
        }

        const price = book.price;
        const name = book.name;

        // si el usuario ya tenia un carrito
        if (cart) {
            const bookIndex = cart.books.findIndex((book) => book.bookId == bookId);

            if (bookIndex > -1) {
                let product = cart.books[bookIndex];
                product.quantity += quantity;
                cart.bill = cart.books.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price;
                }, 0)
                cart.books[bookIndex] = product;
                await cart.save();
                res.status(200).send(cart);
            } else {
                cart.books.push({ bookId, name, quantity, price });
                cart.bill = cart.books.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price;
                }, 0)
                await cart.save();
                res.status(200).send(cart);
            }
        }
        // si el usuario no tiene carrito
        else {
            const newCart = await Cart.create({
                owner,
                books: [{ bookId, name, quantity, price }],
                bill: quantity * price,
            });
            return res.status(201).send(newCart);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("F");
    }

    router.delete("/cart/", Auth, async (req, res) => {
        const owner = req.user._id;
        const bookId = req.query.bookId;
        try {
            let cart = await Cart.findOne({ owner });
            const bookIndex = cart.books.findIndex((book) => book.bookId == bookId);

            if (bookIndex > -1) {
                let item = cart.books[bookIndex];
                cart.bill -= item.quantity * item.price;
                if (cart.bill < 0) {
                    cart.bill = 0
                }
                cart.books.splice(bookIndex, 1);
                cart.bill = cart.books.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.price;
                }, 0)
                cart = await cart.save();
                res.status(200).send(cart);
            } else {
                res.status(404).send("libro no encontrado");
            }
        } catch (error) {
            console.log(error);
            res.status(400).send();
        }
    });
})

module.exports = router