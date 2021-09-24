import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
  const { name, img, price, seller, stock, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
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
        <div className="mb-2">
          <Rating
            initialRating={star}
            emptySymbol="far fa-star fa-2x text-warning"
            fullSymbol="fas fa-star fa-2x text-warning"
            readonly
          />
        </div>
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn btn-primary px-5"
        >
          {cartIcon} Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
