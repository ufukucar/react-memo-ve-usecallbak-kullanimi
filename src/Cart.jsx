import React from 'react'
import Product from './Product'

const Cart = ({ cart, emptyCart }) => {
  return (
    <div className="mt-5">
      <h1>
        Sepetiniz{' '}
        <button className="btn btn-danger btn-sm" onClick={() => emptyCart()}>
          Sepeti Boşalt
        </button>
      </h1>
      <div className="products">
        {cart.map(({ name, price }, index) => {
          return <Product key={index} name={name} price={price} />
        })}
      </div>
    </div>
  )
}

export default Cart
