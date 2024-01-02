const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/SAINANDU/OneDrive-Capgemini/Documents/VsCode/FullStack/REST/data.json','utf-8'));

const getAllProducts = (req,res)=>{
    res.send(data)
}

const getProduct = (req,res)=>{
    const {pid} = req.params
    const product = data.products.filter((p)=> pid == p.id)
    res.send(product[0]);
}

const deleteProduct = (req,res)=>{
    const {pid}=req.params
    const productIndex= data.products.findIndex((p)=> pid ==p.id)
    const product = data.products[productIndex]
    data.products.splice(productIndex,1)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
}

const replaceProduct = (req,res)=>{
    const product = req.body;
    const productIndex = data.products.findIndex((p)=>p.id == product.id)
    if(productIndex === undefined){
        data.products.push(product)
    }else{
        data.products[productIndex] = product
    }
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
}

const createProduct = (req,res)=>{
    const product = req.body
    data.products.push(product)
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
}

const updateProduct = (req,res)=>{
    const product = req.body
    const productIndex = data.products.findIndex((p)=>p.id == product.id)
    const originalProduct = data.products[productIndex];
    const updatedProduct = {...originalProduct, ...product}
    data.products[productIndex]= updatedProduct
    fs.writeFileSync('data.json',JSON.stringify(data),'utf-8')
    res.status(200).json(product)
 }

 module.exports = {
   createProduct,
   updateProduct,
   getAllProducts,
   getProduct,
   deleteProduct,
   replaceProduct
 }
