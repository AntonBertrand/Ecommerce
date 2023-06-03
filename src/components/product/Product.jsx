import React from 'react'
import './product.css'
import IMG1 from '../assets/airpodpromax.jpg'
import IMG2 from '../assets/airpod2.jpg'
import IMG3 from '../assets/airpod3.jpg'
import IMG4 from '../assets/airpod4.jpg'
import {AiFillStar} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiNotepad} from 'react-icons/bi'
import { useState } from 'react';



const Product = () => {

  const [quantity, setQuantity] = useState(1);

  function quantityIncrease() {
    setQuantity(quantity + 1);
  }

  function quantityDecrease() {
    setQuantity(quantity - 1);
  }

  return (
    <div className='product'>
      <div className="breadcrumbs">Electronics / Audio / Headphones / <b>Airpods Max</b></div>
      <div className="product-container">
      <div className="product-left">
        <img src={IMG1} className='product-mainImg'/>
        <div className="product-altImgs">
          <img src={IMG3} className='product-altImg'/>
          <img src={IMG3} className='product-altImg'/>
          <img src={IMG4} className='product-altImg'/>
        </div>
      </div>
      <div className="product-right">
        <div className="product-details">
          <h1 className='product-title'>Airpods Max</h1>
          <p>A perfect balance of exhilirating high-fidelity audio and the effortless magic of Airpods.</p>
          <div className="product-rating">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <p>(121)</p>
          </div>

          <div className="product-pricing">
            <h2>£489.99 or £99.99 / Month</h2>
            <p>Suggested payments with 5 months of special financing</p>
          </div>
        </div>
        
        <div className="product-quantity">
          <div className="product-quantity-button">
            <button onClick={quantityDecrease}>-</button>
            <b>{quantity}</b>
            <button onClick={quantityIncrease}>+</button>
          </div>
          <p>Only <span className='highlight'>12 items left!</span> Don't miss it</p>
        </div>

        <div className="product-purchase">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add To Cart</button>
        </div>

        <div className="product-delivery">
          <div className="product-delivery-free">
            <div className="product-delivery-free-title">
              <TbTruckDelivery className='highlight'/>
              <b>Free Delivery</b>
            </div>
            <a href="#">Enter your Postal code for Delivery Availability</a>
          </div>

            <div className="divider"></div>

          <div className="product-delivery-return">
            <div className="product-delivery-return-title">
              <BiNotepad className='highlight'/>
              <b>Return Delivery</b>
            </div>
            <p>Free 30 Days Delivery Returns</p>
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Product;