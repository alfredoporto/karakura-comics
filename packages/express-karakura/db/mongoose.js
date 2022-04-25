const mongoose = require('mongoose');
console.log(process.env.MONGODB_URL)
mongoose
    .connect(process.env.MONGODB_URL,
        {
            useNewUrlParser: true,
        })
    .then(() => console.log("Mongo connection successfull"))
    .catch((err) => {
        console.log(err);
    });

