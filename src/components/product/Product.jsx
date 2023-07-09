import React from 'react'
import './product.css'
import IMG1 from '../assets/airpodpromax.jpg'
import IMG3 from '../assets/airpod3.jpg'
import IMG4 from '../assets/airpod4.jpg'
import {AiFillStar} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiNotepad} from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



const Product = () => {

  let location = useLocation();
  const id = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  function quantityIncrease() {
    setQuantity(quantity + 1);
  }

  function quantityDecrease() {
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    
    setLoading(true);

    const fetchProduct = async () => {

      const response = await fetch(`http://localhost:4000/api/products/${id}`)

      const json = await response.json();

      if (response.ok) setProduct(json);

      setLoading(false);

    }

    fetchProduct();
    console.log(product)

  }, [])
  

  return (
    <div className='product'>

      { !product ? (<div> Loading ... </div>) :  (<>
        <div className="breadcrumbs">Electronics / Audio / Headphones / <b>Airpods Max</b></div>
        <div className="product-container">
        <div className="product-left">
          <img src={product.product.image} className='product-mainImg'/>
          <div className="product-altImgs">
            <img src={IMG3} className='product-altImg'/>
            <img src={IMG3} className='product-altImg'/>
            <img src={IMG4} className='product-altImg'/>
          </div>
        </div>
        <div className="product-right">
          <div className="product-details">
            <h1 className='product-title'>{product.product.title}</h1>
            <p>A perfect balance of exhilirating high-fidelity audio and the effortless magic of Airpods.</p>
            <div className="product-rating">
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <p>({product.product.rating})</p>
            </div>

            <div className="product-pricing">
              <h2>£{product.product.price} or £{Math.ceil(product.product.price / 5)} / Month</h2>
              <p>Suggested payments with 5 months of special financing</p>
            </div>
          </div>
          
          <div className="product-quantity">
            <div className="product-quantity-button">
              <button onClick={quantityDecrease} disabled={quantity == 0} >-</button>
              <b>{quantity}</b>
              <button onClick={quantityIncrease} disabled={quantity == 10} >+</button>
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

      </>)}
    </div>
  )
}

export default Product;