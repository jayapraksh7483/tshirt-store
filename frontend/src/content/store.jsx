import React, { createContext, useState, useEffect } from 'react';
import allproducts from '../assets/allproduct';
import Displayproducts from '../components/displayproducts/displayproducts';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart items and count from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }

    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount) {
      setCartCount(parseInt(savedCartCount));
    }
  }, []);

  // Save cart items and count to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount.toString());
  }, [cartItems, cartCount]);

  const addToCart = (item, availablequantity) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    const totalQuantity = existingItem ? existingItem.quantity + 1 : 1;
  
    if (availablequantity && totalQuantity > availablequantity) {
      console.log("Cannot add item. Exceeds available quantity.");
      return;
    }
  
    const updatedCartItems = existingItem
      ? cartItems.map((i) => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + 1, availablequantity } 
            : i)
      : [...cartItems, { ...item, quantity: 1, availablequantity }]; // Ensure availablequantity is added
  
    setCartItems(updatedCartItems);
    setCartCount((prevCount) => prevCount + 1);
  };
  
  const increaseQuantity = (id, availablequantity) => {
    const itemToUpdate = cartItems.find((item) => item.id === id);
  
    
  
    if (itemToUpdate && itemToUpdate.quantity < availablequantity) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
      setCartCount((prevCount) => prevCount + 1);
    } else {
      alert(`Only ${availablequantity} T-shirts are available`);

    }
  };
  



 


  // Function to decrease quantity of an item in the cart
  const decreaseQuantity = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
    setCartCount((prevCount) => prevCount - 1);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
    setCartCount((prevCount) => prevCount - 1);
  };
  

  const clearCart = () => {
    setCartItems([]);
    // Reset cart count to zero
    setCartCount(0);
};


  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount:cartItems.length,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
