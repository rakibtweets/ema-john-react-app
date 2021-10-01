import React from 'react';

const ReviewItem = (props) => {
  const { name, price, quantity, img, key } = props.product;
  const { handleRemove } = props;
  return (
    <div className="container d-flex align-items-center gap-3">
      <img src={img} alt="" />
      <div>
        <h4 className="text-primary">{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>$ {price}</p>
        <button
          onClick={() => handleRemove(key)}
          className="text-white btn btn-danger"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
