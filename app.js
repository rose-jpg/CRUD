const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT,(req, res)=>{
    console.log(`You re on port:${PORT}`)
})
app.get("/",(req, res)=>{
    res.status(200).send('working')
})