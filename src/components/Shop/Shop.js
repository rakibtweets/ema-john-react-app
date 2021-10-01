import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css';

const Shop = () => {
  // using react state
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  // useEffect is used to fetch data
  useEffect(() => {
    fetch('./products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  // getting data from local storage
  //useEffect(callBackFn,dependency)
  useEffect(() => {
    // যদি products এর length থাকে
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]); // dependency
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // save to loacal storage
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };
  return (
    <div className="shop">
      <div className="search__container">
        <input
          onChange={handleSearch}
          className="form-control w-75 mx-auto"
          type="text"
          placeholder="Search for products"
        />
      </div>
      <div className="shop__container pt-3">
        <div className="product__container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              handleAddToCart={handleAddToCart}
              product={product}
            />
          ))}
        </div>
        <div className="cart__container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn btn-warning">review your order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
