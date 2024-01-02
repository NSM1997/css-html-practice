const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.get('/products',productController.getAllProducts)
.get('/products/:pid',productController.getProduct)
.post('/products',productController.createProduct)
.delete('/products/:pid',productController.deleteProduct)
.put('/products',productController.replaceProduct)
.patch('/products',productController.updateProduct)

exports.router = router