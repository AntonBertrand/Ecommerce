import React from 'react'
import './cart.css'
import CartItem from '../cartItem/CartItem'

import { useSelector  } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const Navigate = useNavigate();

    const products = useSelector(state => state.products.cartProducts);

  return (
    <div className='cart'>
        <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h3>3 Items</h3>
        </div>

        <div className="cart-divider"></div>

        <div className="cart-headers">
            <p>Product Details</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Total</p>
        </div>


        {products.map((product) => {

        return (
            <CartItem product={product} />
        )

        })}

        <button className='back-button' onClick={() => Navigate('/')}> ← Continue Shopping</button>
        <button className='checkout-button' onClick={() => Navigate('/')}>Proceed to Checkout</button>

    </div>
  )
}

export default Cart