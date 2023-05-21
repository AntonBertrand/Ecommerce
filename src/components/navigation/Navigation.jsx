import React from 'react';
import './navigation.css'
import {AiOutlinePhone} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Navigation = () => {
  return (
    <nav>
        <div className="nav-top">
            <div className="nav-top-left">
                <AiOutlinePhone/>
                <p>+44 123 456 678</p>
            </div>
            
            <div className="nav-top-middle">
                <p>Get 50% off on Selected Items | Shop Now</p>
            </div>

            <div className="nav-top-right">
                <p>English</p>
                <p>Location</p>
            </div>
        </div>

        <div className="nav-bot">
            <h1 className='nav-bot-logo'>ShopCart</h1>
            <a href="" className='nav-bot-categories'>Categories</a>
            <a href="" className='nav-bot-deals'>Deals</a>
            <form action="">
                <input type="text" placeholder='Search Product' />
            </form>
            <div className="account-btn">
                <AiOutlineUser/>
                <a href="" className='nav-bot-account'>Account</a>
            </div>
            <div className="cart-btn">
                <AiOutlineShoppingCart/>
                <a href="" className='nav-bot-cart'>Cart</a>
            </div>
        </div>
    </nav>
  )
}

export default Navigation;