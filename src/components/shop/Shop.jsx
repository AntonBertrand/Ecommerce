import React, { useState } from 'react'
import { useEffect } from 'react';
import './shop.css'
import {AiFillStar} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Shop = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            try {

            const response = await fetch('http://localhost:4000/api/products');
            const json = await response.json();

            if (response.ok) setProducts(json);

            } catch(err) {
                console.log(err.message);
            }
        }

        fetchProducts();

    }, []);

    const navProduct = (id) => {
        navigate(`/product/${id}`)
    }


  return (

    <div className='shop'>
        <h2>Headphones For You!</h2>
        <div className="shop-grid">

        { products && products.map((product, i) => {
           
                return (<div className="shop-card" key={i} onClick={() => { navProduct(product._id) }}>
                    <div className="shop-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="shop-product-title">
                        <p><b>{product.title}</b></p>
                        <p><b>£{product.price}</b></p>
                    </div>
                    <div className="shop-product-desc">
                        <p>{product.features}</p>
                    </div>
                    <div className="shop-product-rating">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <p>({product.rating})</p>
                    </div>
                    <button>Add To Cart</button>
                </div>)
        })}

        </div>
    </div>
  )
}

export default Shop;