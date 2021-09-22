import React from 'react';
import './Product.css';

const Product = (props) => {
  console.log(props.product);
  const { name, img, price, seller, stock, features } = props.product;
  return (
    <div className="product">
      <div className="product__img">
        <img src={img} alt="" />
      </div>
      <div className="product__details p-2 ">
        <h5 className="text-primary">{name}</h5>
        <p>
          by <strong>{seller}</strong>
        </p>
        <p>${price}</p>
        <p>only {stock} in stock -Order soon </p>
        <button className="btn btn-primary px-5">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
