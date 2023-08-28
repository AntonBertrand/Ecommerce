import React from "react";
import "./cartItem.css";
import { useDispatch } from "react-redux";
import { incrementAmount } from "../../features/productsSlice";
import { decrementAmount } from "../../features/productsSlice";
import { removeFromCart } from "../../features/productsSlice";
import { Iproduct } from "../../interfaces/interfaces";

type CartItemProps = {
  product: Iproduct;
};

const CartItem = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-product">
      <div className="cart-product-details">
        <img src={product.image} alt="" />
        <div className="cart-product-details-right">
          <h3>{product.title}</h3>
          <p onClick={() => dispatch(removeFromCart(product._id))}>Remove</p>
        </div>
      </div>
      <div className="cart-product-quantity">
        <div className="cart-quantity-button">
          <button onClick={() => dispatch(decrementAmount(product._id))}>
            -
          </button>
          <b className="cart-quantity">{product.amount}</b>
          <button onClick={() => dispatch(incrementAmount(product._id))}>
            +
          </button>
        </div>
      </div>
      <b className="price">£{product.price}</b>
      <b>£{(product.price * product.amount).toFixed(2)}</b>
    </div>
  );
};

export default CartItem;
