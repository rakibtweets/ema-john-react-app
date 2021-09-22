import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop__container pt-3">
      <div className="product__container">
        {products.map((product) => (
          <Product
            key={product.key}
            handleAddToCart={handleAddToCart}
            product={product}
          />
        ))}
      </div>
      <div className="cart__container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
