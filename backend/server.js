const express = require('express')
const path = require('path');
const app = express()
const cors = require('cors')
const connect = require('./db')
require('dotenv').config({path:".env"})
const handleError = require('./error/handleError')
const notFound = require('./middleware/notfound')
const router = require('./routers')
const port = process.env.PORT || 5000

console.log(port)
//middleware
app.use(cors())
app.use(express.json())
app.use('/api/v1', router)

app.use(notFound)
app.use(handleError)

const start = async () => {
    try {
        await connect(process.env.DATABASE_CONNECTION)
        console.log('connected to dabatase sucessfully')
        app.listen(port, console.log(`server is listening on port ${port}`))

    } catch (error) {
        console.log(err.message)
    }
}

start();