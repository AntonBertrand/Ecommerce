import React from 'react'
import {FaRegThumbsUp} from 'react-icons/fa';
import './orderConfirm.css';
import { useNavigate } from 'react-router-dom';


const OrderConfirm = (props) => {

    const navigate = useNavigate();

  return (
    <div className='orderConfirm'>
        <div className="orderConfirm__container">
            <FaRegThumbsUp className='orderConfirm__icon'/>
            <h1>Thanks For Your Order!</h1>
            <p>Thanks for placing order number: {props.orderId}</p>
            <p>We will send you a notification within 5 days when it ships.</p>
            <b>If you have any questions or queries then feel free to get in contact with us</b>
            <button className='orderConfirm__homeBtn' onClick={() => navigate('/')}>Back To Home</button>
        </div>
    </div>
  )
}

export default OrderConfirm