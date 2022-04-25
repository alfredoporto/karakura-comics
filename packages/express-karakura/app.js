const express = require('express')
const userRouter = require('./routers/user')
const bookRouter = require('./routers/book')
const cartRouter = require('./routers/cart')
const stripeRouter = require('./routers/stripe')
const cors = require("cors")

require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/carts", cartRouter);
app.use("/api/checkout", stripeRouter);

app.listen(port, () => {
  console.log('server en: ' + port)
})