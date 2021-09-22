import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop__container pt-3">
      <div className="product__container">
        {products.map((product) => (
          <Product key={product.key} product={product} />
        ))}
      </div>
      <div className="cart__container">
        <h3>Order Summary</h3>
        <h5>Items ordered</h5>
      </div>
    </div>
  );
};

export default Shop;
