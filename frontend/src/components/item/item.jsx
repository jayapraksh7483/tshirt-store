import React, { useContext } from 'react';
import './item.css';
import { CartContext } from '../../content/store';

const Item = ({ id, name, price, image, color, availablequantity }) => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const cartItem = cartItems.find(item => item.id === id);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, color }, availablequantity);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(id, availablequantity);
  };

  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className='item-pa'>
        <p>Rs{price}</p>
        {cartItem ? (
          <div className='qua'>
            <button className="btn btn-l" onClick={() => decreaseQuantity(id)}>-</button>
            <span>{cartItem.quantity}</span>
            <button className="btn" onClick={handleIncreaseQuantity}>+</button>
          </div>
        ) : (
          <button onClick={handleAddToCart}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};

export default Item;
