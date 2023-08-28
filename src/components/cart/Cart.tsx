import React from "react";
import "./cart.css";
import CartItem from "../cartItem/CartItem";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Iproduct } from "../../interfaces/interfaces";
import { useAppSelector } from "../../features/hooks";

const Cart: React.FC = () => {
  const Navigate = useNavigate();

  const products = useAppSelector((state) => state.products.cartProducts);
  const quantity = useAppSelector((state) => state.products.cartQuantity);

  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <h3>{quantity} Items</h3>
      </div>

      <div className="cart-divider"></div>

      <div className="cart-headers">
        <p>Product Details</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>

      {products.map((product: Iproduct) => {
        return <CartItem product={product} />;
      })}

      <button className="back-button" onClick={() => Navigate("/")}>
        {" "}
        ← Continue Shopping
      </button>
      <button className="checkout-button" onClick={() => Navigate("/checkout")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
