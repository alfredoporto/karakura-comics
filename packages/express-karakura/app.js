const express = require('express')
const userRouter = require('./routers/user')
const bookRouter = require('./routers/book')
const cartRouter = require('./routers/cart')

require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(bookRouter)
app.use(cartRouter)

app.listen(port, () => {
  console.log('server en: ' + port)
})