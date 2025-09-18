const express = require('express')
const db = require('./db')

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())              // stores in req.body

app.get('/',(req,res)=>
{
    res.send("Welcome from HomePage Of New Learning!")
})

app.listen(3000, ()=>{
    console.log("Server Listening on port 3000")
})

const personRoute=require('./routes/personRoutes')
const menuRoute=require('./routes/menuRoutes')

app.use('/person',personRoute)
app.use('/menu',menuRoute)