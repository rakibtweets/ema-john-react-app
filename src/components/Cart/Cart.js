import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart } = props;

  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    // optional chaining to check is product is there
    product.quantity = !product.quantity ? 1 : product.quantity;
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items ordered: {totalQuantity}</h5>
      <p>Tatal: {total.toFixed(2)}</p>
      <p>Shipping: {shipping}</p>
      <p>Tax: {tax}</p>
      <h6>Grand total: {grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
