import React, { useState, useCallback } from 'react'
import './App.css'
import Products from './Products'
import { phones } from './phones'
import Cart from './Cart'

function App() {
  const [products] = useState(phones)

  const [cart, setCart] = useState([])

  const addToCart = useCallback((product) => {
    setCart((cart) => [...cart, product])
  }, [])

  // const addToCart = (product) => {
  //   setCart((cart) => [...cart, product])
  // }

  const emptyCart = useCallback(() => {
    setCart([])
  }, [])

  return (
    <div className="container-fluid mt-3 mb-5">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center ">React.memo ve useCallback Kullanımı</h2>
        </div>

        <div className="col-lg-12">
          <div className="wrapper mt-3 border-top pt-3">
            <Products products={products} addToCart={addToCart} />

            <Cart cart={cart} emptyCart={emptyCart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
