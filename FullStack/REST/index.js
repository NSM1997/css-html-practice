const express = require('express');
const fs =require('fs')

const data = JSON.parse(fs.readFileSync('./data.json','utf-8'));

const app = express()
app.use(express.json())

app.get('/products',(req,res)=>{
    res.send(data)
})
app.get('/products/:pid',(req,res)=>{
    const {pid} = req.params
    const product = data.products.filter((p)=> pid == p.id)
    res.send(product[0]);
})

app.post('/products',(req,res)=>{
    const product = req.body
    data.products.push(product)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
})
app.delete('/products/:pid',(req,res)=>{
    const {pid}=req.params
    const productIndex= data.products.findIndex((p)=> pid ==p.id)
    const product = data.products[productIndex]
    data.products.splice(productIndex,1)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
})

app.put('/products',(req,res)=>{
    const product = req.body;
    const productIndex = data.products.findIndex((p)=>p.id == product.id)
    if(productIndex === undefined){
        data.products.push(product)
    }else{
        data.products[productIndex] = product
    }
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
})

app.patch('/products',(req,res)=>{
   const product = req.body
   const productIndex = data.products.findIndex((p)=>p.id == product.id)
   const originalProduct = data.products[productIndex];
   const updatedProduct = {...originalProduct, ...product}
   data.products[productIndex]= updatedProduct
   fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
   res.status(200).json(product)
})
app.listen(8081,()=>{
    console.log("server has started")
})