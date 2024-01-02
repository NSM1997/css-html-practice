const express = require('express');
const productRoutes = require('./routes/productsRoutes')

const app = express()
app.use('/',productRoutes.router)


app.listen(8081,()=>{
    console.log("server has started")
})