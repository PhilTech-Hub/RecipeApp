const express = require('express')
const cors = require('cors')
const mongoose =require('mongoose')
const router = require('./Routes/auth')
const cookieParser = require('cookie-parser')



const app = express()

app.use(cors({
    origin: ["http://localhost:5173"],
    method: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/auth', router)

mongoose.connect('mongodb://127.0.0.1:27017/recipe-app')


app.listen(3001, () => {
    console.log("Server Is Running" )
})