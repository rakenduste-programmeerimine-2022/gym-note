const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const port = 8080
require('dotenv').config()

const GymNoteRoutes = require('./routes/GymNote.routes')
app.use('/gymnotes', GymNoteRoutes)

app.use(morgan('dev'))
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gymnote.gfo0hqs.mongodb.net/?retryWrites=true&w=majority`
mongoose
    .connect(uri)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("Error connecting to DB", err))
    .then(() => console.log('Database connection established'))
    .catch((e) => console.error(e))

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})