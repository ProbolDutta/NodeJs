const mongoose = require('mongoose')
require('dotenv').config();
//const mongoURL = 'mongodb://localhost:27017/hotels'
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('connected', ()=>{
    console.log("Connected to MongoDB server")
})
db.on('disconnected', ()=>{
    console.log('Disconnected from MongoDB server')
})

db.on('error',(err)=>
{
    console.error('MongoDB connection error',err)
})

module.exports = db


//db comment for testing purpose