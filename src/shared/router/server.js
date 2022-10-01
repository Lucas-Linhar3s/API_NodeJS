const env = require('dotenv');
const {ConnectionDB} = require('../db/db');
const app = require('./app');
env.config()
const port = process.env.PORT

app.listen(port, () => {
        console.log("listener")
        ConnectionDB
})
console.log(port)