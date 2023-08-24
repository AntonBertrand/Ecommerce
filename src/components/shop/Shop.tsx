import React, { useState } from "react";
import { useEffect } from "react";
import "./shop.css";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/productsSlice";
import { setLoading } from "../../features/productsSlice";

type product = {
  _id: string;
  title: string;
  desc: string;
  features: string;
  image: string;
  image3: string;
  image4: string;
  price: number;
  rating: number;
  amount: number;
};

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<product[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}products`
        );
        const json = await response.json();

        if (response.ok) {
          dispatch(setLoading(false));
          setProducts(json);
        }
      } catch (err: any) {
        dispatch(setLoading(false));
        console.log(err.message);
      }
    };

    fetchProducts();
  }, []);

  const navProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const addProduct = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: product
  ) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="shop">
      <h2>Headphones For You!</h2>
      <div className="shop-grid">
        {products &&
          products.map((product: product, i: number) => {
            return (
              <div
                className="shop-card"
                key={i}
                onClick={() => {
                  navProduct(product._id);
                }}
              >
                <div className="shop-image">
                  <img src={product.image} alt="" />
                </div>
                <div className="shop-product-title">
                  <p>
                    <b>{product.title}</b>
                  </p>
                  <p>
                    <b>£{product.price}</b>
                  </p>
                </div>
                <div className="shop-product-desc">
                  <p>{product.features}</p>
                </div>
                <div className="shop-product-rating">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <p>({product.rating})</p>
                </div>
                <button onClick={(e) => addProduct(e, product)}>
                  Add To Cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
