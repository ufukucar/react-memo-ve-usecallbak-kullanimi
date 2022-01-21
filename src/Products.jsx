import React from 'react'
import Product from './Product'

const Products = ({ products, addToCart }) => {
  return (
    <>
      <h1>Ürünler</h1>
      <div className="products">
        {products.map(({ name, price }) => {
          return (
            <Product
              key={name}
              name={name}
              price={price}
              addToCart={addToCart}
            />
          )
        })}
      </div>
    </>
  )
}

export default React.memo(Products)
