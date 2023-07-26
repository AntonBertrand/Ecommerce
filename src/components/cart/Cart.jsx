import React from 'react'
import './cart.css'

const Cart = () => {
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

        <div className="cart-product">
            <div className="cart-product-details">
                <img src="https://www.thesun.co.uk/wp-content/uploads/2022/07/fifa11-kaka-rooney-uk-boxart.jpg" alt="" />
            </div>
            <div className="cart-product-quantity">
                <div className="cart-quantity-button">
                <button>-</button>
                <b className='cart-quantity'>2</b>
                <button>+</button>
                </div>
            </div>
            <b>£44</b>
            <b>£88</b>
        </div>

        <button className='cart-checkout-button'>Proceed to Check Out</button>

    </div>
  )
}

export default Cart