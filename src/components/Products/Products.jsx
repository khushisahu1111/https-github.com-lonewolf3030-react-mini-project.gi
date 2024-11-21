import React from 'react'
import ProductCard from '../product-card/ProductCard'
import "./products.css"

const Products = (props) => {
  return (
    <div>
        <h1>Products Page</h1>
        <div className='products-list'>
        {
            props.products.map((item, idx) => {
                return (
                    <ProductCard product = {item} key = {idx}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Products