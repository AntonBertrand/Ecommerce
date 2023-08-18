import { useState } from 'react';
import './checkout.css';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import OrderConfirm from '../orderConfirm/OrderConfirm';
import {clearCart} from '../../features/productsSlice';
import { useDispatch } from 'react-redux';
import {setLoading} from '../../features/productsSlice';


const Checkout = () => {

  const dispatch = useDispatch();

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState();


  const { user, isAuthenticated } = useAuth0();

  const [shippingAddress1, setShippingAddress1] = useState();
  const [shippingAddress2, setShippingAddress2] = useState();
  const [country, setCountry] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const [shippingPrice, setShippingPrice] = useState(4.99);
  const cartQuantity = useSelector(state => state.products.cartQuantity);
  const cartTotal = useSelector(state => state.products.cartTotal)
  const cartProducts = useSelector(state => state.products.cartProducts);
  const loading = useSelector(state => state.products.isLoading);

  const handleClick = async () => {

    const order = {
      "user": user.sub,
      "cart": cartProducts,
      "value": (cartTotal + shippingPrice).toFixed(2),
      "shippingAddress": `${firstName} ${lastName}, ${shippingAddress1}, ${shippingAddress2}, ${country}`,
      "paymentType": "Card",
      "itemCount": cartQuantity,
      "paymentStatus":true
    };

    try {

      dispatch(setLoading(true));

      const response = await fetch('http://localhost:4000/api/orders', {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      setOrderId(json._id)
      setOrderConfirmed(true);
      dispatch(clearCart());
      dispatch(setLoading(false));


    } catch (err) {
      dispatch(setLoading(false));
      console.log(err);
    }

  }


  return ( <>
    { orderConfirmed ? <OrderConfirm orderId={orderId}/> : <div className='checkout'>
      <form action="" className='checkout__form'>

        <div className="checkout__form__shipping">
          <h2>Shipping Address</h2>
          <input type="text" className='check__form__shipping__firstname' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
          <input type="text" className='check__form__shipping__lastname' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
          <input type="text" placeholder='Address Line 1' onChange={(e) => setShippingAddress1(e.target.value)}/>
          <input type="text" placeholder='Address Line 2' onChange={(e) => setShippingAddress2(e.target.value)}/>
          <input type="text" placeholder='Country/Region' onChange={(e) => setCountry(e.target.value)}/>
        </div>

        <div className="checkout__form__payment">
          <h2>Payment Details</h2>
          <input type="email" className='checkout__form__payment__email' placeholder='Email Address'/>
          <input type="text" className='checkout__form__payment__cardnum' placeholder='Credit Card Number'/>
          <div className="checkout__form__payment__card">
            <input type="text" className='checkout__form__payment__expiry' placeholder='Expiry Date'/>
            <input type="text" className='checkout__form__payment__cvv' placeholder='CVV'/>
          </div>
        </div>
        
      </form>

      <div className='checkout__summary'>
        <div className="checkout__summary__details">
          <h2>Checkout Summary</h2>
          <span className='checkout__summary__modify'>Modify Shopping Bag</span>
          <div className="checkout__summary__products">

            {cartProducts.map((product) => {
              return (
                <img className='checkout__summary__products__img' src={product.image} alt={product.title} />
              )
            })}


          </div>
          <div className="checkout__summary__row">
            <h4>Quantity</h4>
            <p>{cartQuantity}</p>
          </div>
          <div className="checkout__summary__row">
            <h4>Subtotal</h4>
            <p>£{cartTotal.toFixed(2)}</p>
          </div>
          <div className="checkout__summary__row">
            <h4>Shipping</h4>
            <p>£{shippingPrice}</p>
          </div>
          <div className="checkout__summary__row">
            <h4>Total</h4>
            <b>£{(cartTotal + shippingPrice).toFixed(2)}</b>
          </div>
        </div>
        <button className="checkout__summary_submit" onClick={() => handleClick()}>Confirm Order</button>
      </div>


    </div>} </>
  )
}

export default Checkout