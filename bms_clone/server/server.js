const express = require('express')
const app = express.Router();
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

app.use('/api/users',userRoutes)
app.use(express.json())

const dbConfig=require('./config/dbConfig')
app.listen(8081, ()=>{
    console.log('server started');
})