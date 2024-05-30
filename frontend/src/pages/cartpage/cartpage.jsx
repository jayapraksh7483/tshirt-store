import React, { useContext, useEffect } from 'react';
import './cart.css';
import { CartContext } from '../../content/store';

const CartPage = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);

  useEffect(() => {
    console.log("CartPage Rendered");
    console.log("Cart Items:", cartItems);
  }, [cartItems]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("cart empty ");
    } else {
      clearCart();
      alert("order successfully");
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-items-title">
        <p>Image</p>
        <p>Name</p>
        <p>Color</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </div>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.color}</p>
          <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => {
              console.log("Increase Quantity Clicked");
              console.log("Item ID:", item.id);
              console.log("Available Quantity:", item.availablequantity); // Log availablequantity
              increaseQuantity(item.id, item.availablequantity); // Pass availablequantity from the cart item
            }}>+</button>
          </div>
          <p>Rs{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <hr />

      <div className="cart-total">
        <h2>Total Amount: Rs{calculateTotal()}</h2>
      </div>

      <div>
        <h2>Checkout</h2>
        <button className='check-btn' onClick={handleCheckout}>Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
