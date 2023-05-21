import React from 'react'
import './shop.css'
import {AiFillStar} from 'react-icons/ai'
import PIC1 from '../assets/headphones-1.png'

const Shop = () => {
  return (
    <div className='shop'>
        <h2>Headphones For You!</h2>
        <div className="shop-grid">
            <div className="shop-card">
                <div className="shop-image">
                    <img src={PIC1} alt="" />
                </div>
                <div className="shop-product-title">
                    <p><b>Wireless Earbuds, IPX8</b></p>
                    <p><b>£49.99</b></p>
                </div>
                <div className="shop-product-desc">
                    <p>Organic, Cotton, Fairtrade Certified</p>
                </div>
                <div className="shop-product-rating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <p>(172)</p>
                </div>
                <button>Add To Cart</button>
            </div>

            <div className="shop-card">
                <div className="shop-image">
                    <img src={PIC1} alt="" />
                </div>
                <div className="shop-product-title">
                    <p><b>Wireless Earbuds, IPX8</b></p>
                    <p><b>£49.99</b></p>
                </div>
                <div className="shop-product-desc">
                    <p>Organic, Cotton, Fairtrade Certified</p>
                </div>
                <div className="shop-product-rating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <p>(172)</p>
                </div>
                <button>Add To Cart</button>
            </div>

            <div className="shop-card">
                <div className="shop-image">
                    <img src={PIC1} alt="" />
                </div>
                <div className="shop-product-title">
                    <p><b>Wireless Earbuds, IPX8</b></p>
                    <p><b>£49.99</b></p>
                </div>
                <div className="shop-product-desc">
                    <p>Organic, Cotton, Fairtrade Certified</p>
                </div>
                <div className="shop-product-rating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <p>(172)</p>
                </div>
                <button>Add To Cart</button>
            </div>

            <div className="shop-card">
                <div className="shop-image">
                    <img src={PIC1} alt="" />
                </div>
                <div className="shop-product-title">
                    <p><b>Wireless Earbuds, IPX8</b></p>
                    <p><b>£49.99</b></p>
                </div>
                <div className="shop-product-desc">
                    <p>Organic, Cotton, Fairtrade Certified</p>
                </div>
                <div className="shop-product-rating">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <p>(172)</p>
                </div>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Shop;