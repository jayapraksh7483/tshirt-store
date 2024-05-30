import React from 'react';
import Item from '../item/item';
import allproducts from '../../assets/allproduct';
import './displayproducts.css';

const Displayproducts = ({products}) => {
  return (
    <div className="item-list">
      {products.map(product => (
        <Item key={product.id} id={product.id}    name={product.name} price={product.price} image={product.image} color={product.color}   availablequantity={product.availablequantity} />
      ))}
    </div>
  );
}

export default Displayproducts;
