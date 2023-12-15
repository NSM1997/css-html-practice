import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice'
import { fetchProduct } from '../store/productSlice'

const Products = () => {

    // const [products, setProducts] = useState([])
      const {data:products , status} = useSelector(state => state.product)

    useEffect(() => {
        // const getProducts = async () => {
        //     const response = await axios.get('https://fakestoreapi.com/products')
        //     setProducts(response.data)
        // }
        // getProducts()
        dispatcher(fetchProduct())
    }, [])

    const dispatcher = useDispatch()

    const addtocart = (product) =>{
        // console.log(product);
        dispatcher(add(product))
    }

   return (
    <div className='productsWrapper'>
        {
            products.map(product => {
                return <div className='card'>
                    <img src={product.image} alt='product'/>
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>

                    <button className='btn' onClick={() =>addtocart(product)}>Add to Cart</button>
                </div>
            })
        }
    </div>
  )
}

export {Products}