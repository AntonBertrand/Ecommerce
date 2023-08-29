import React from "react";
import "./product.css";
import { AiFillStar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiNotepad } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/productsSlice";
import { setLoading } from "../../features/productsSlice";
import { Iproduct } from "../../interfaces/interfaces";

const Product = () => {
  const dispatch = useDispatch();

  const PlaceHolderIMG = require("../assets/NoImg.png");

  let location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState<Iproduct>();
  const [quantity, setQuantity] = useState<number>(1);

  function quantityIncrease() {
    setQuantity(quantity + 1);
  }

  function quantityDecrease() {
    setQuantity(quantity - 1);
  }

  function addProduct(product: Iproduct) {
    const newItem = { ...product, amount: quantity };
    dispatch(addToCart(newItem));
  }

  useEffect(() => {
    dispatch(setLoading(true));

    const fetchProduct = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}products/${id}`
      );

      const json = await response.json();

      if (response.ok) setProduct(json.product);

      dispatch(setLoading(false));
    };

    fetchProduct();
  }, []);

  return (
    <div className="product">
      {!product ? (
        <div> Loading ... </div>
      ) : (
        <>
          <div className="breadcrumbs">
            Electronics / Audio / Headphones / <b>{product.title}</b>
          </div>
          <div className="product-container">
            <div className="product-left">
              <img src={product.image} className="product-mainImg" />
              <div className="product-altImgs">
                <img
                  src={product.image3 ? product.image3 : PlaceHolderIMG}
                  className="product-altImg"
                />
                <img
                  src={product.image4 ? product.image4 : PlaceHolderIMG}
                  className="product-altImg"
                />
                <img src={PlaceHolderIMG} className="product-altImg" />
              </div>
            </div>
            <div className="product-right">
              <div className="product-details">
                <h1 className="product-title">{product.title}</h1>
                <p>{product.desc}</p>
                <div className="product-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p>({product.rating})</p>
                </div>

                <div className="product-pricing">
                  <h2>
                    £{product.price} or £{Math.ceil(product.price / 5)} / Month
                  </h2>
                  <p>Suggested payments with 5 months of special financing</p>
                </div>
              </div>

              <div className="product-quantity">
                <div className="product-quantity-button">
                  <button onClick={quantityDecrease} disabled={quantity == 0}>
                    -
                  </button>
                  <b>{quantity}</b>
                  <button onClick={quantityIncrease} disabled={quantity == 10}>
                    +
                  </button>
                </div>
                <p>
                  Only <span className="highlight">12 items left!</span> Don't
                  miss it
                </p>
              </div>

              <div className="product-purchase">
                <button className="buy-now">Buy Now</button>
                <button
                  className="add-to-cart"
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  Add To Cart
                </button>
              </div>

              <div className="product-delivery">
                <div className="product-delivery-free">
                  <div className="product-delivery-free-title">
                    <TbTruckDelivery className="highlight" />
                    <b>Free Delivery</b>
                  </div>
                  <a href="#">
                    Enter your Postal code for Delivery Availability
                  </a>
                </div>

                <div className="divider"></div>

                <div className="product-delivery-return">
                  <div className="product-delivery-return-title">
                    <BiNotepad className="highlight" />
                    <b>Return Delivery</b>
                  </div>
                  <p>Free 30 Days Delivery Returns</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
