import React from 'react'

const Products = () => {
  // const products=['laptop','headphones','smartwatch']
  const products = [
    {
        "id": 1,
        "name": "Laptop"
    },
    {
        "id": 2,
        "name": "Headphone"
    },
    {
        "id": 3,
        "name": "Smart Watch"
    },
    {
        "id": 4,
        "name": "Headphone"
    }
]
  return (
    <div>
      {
        // products.map((product,index)=>{
        //     return <li key={index}>{product}</li>
        // })

        products.map(product=>{
          return <li key={product.id}>{product.name}</li>
        })
      }
    </div>
  )
}

export default Products