const express = require('express');

//create server
const app = express();
const PORT = 8081;


const loggingMiddleware = (req,res,next) =>{
    console.log("This is logging middleware")

    next() // to forward request
}

const authMiddleware = (req,res,next) =>{
    const {password} = req.query

    if(password == 123){
        next()
    }else{
        res.send('Un-authorised request')
    }
}
app.use(authMiddleware)
app.use(loggingMiddleware)

const staticMiddleware = express.static('public')
app.use(staticMiddleware)

app.get('/',(req,res)=>{
    console.log('On Route / ')
    res.send({"name" :"manohar"})
})

app.post('/',(req,res)=>{
    res.send("some data")
})

// app.get('/',(req,res)=>{
//     console.log('On Route / ')
//     res.send("Hello Express from 2")
// })


app.listen(PORT,()=>{
    console.log(`The server is up and running on port ${PORT}`)
})