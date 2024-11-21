import React from 'react'
import "./product-card.css";

const ProductCard = ({product}) => {

  const returnTrimmedLength = (string) => {
    return string.substring(0, 15)
  }

  return (
    <div className='product-card'>
       <img src={product.image} alt="" />

       <div className='card-content'>
          <h1>{returnTrimmedLength(product.title)}</h1>
         <p>{returnTrimmedLength(product.description)}</p>
         <h4>{product.price}</h4>
         <h6>{product.category}</h6>

       </div>
    </div>
  )
}

export default ProductCard