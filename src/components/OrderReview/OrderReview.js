import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './OrderReview.css';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };
  return (
    <div>
      <div className="shop__container pt-3">
        <div className="product__container">
          {cart.map((product) => (
            <ReviewItem
              handleRemove={handleRemove}
              key={product.key}
              product={product}
            />
          ))}
        </div>
        <div className="cart__container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
