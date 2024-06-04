// src/components/Cart.js

import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  console.log("Cart items:", items); // Log the items to inspect their structure

  return (
    <div>
      <h2>Cart</h2>
      <ul>
      <div className="grid md:px-0 px-12 py-10  grid-cols-1 md:grid-cols-3 gap-4 ">

        {items.map((item) => (
          
          <li key={item._id}>
    <div className="card w-80 md:px-0 pr-3 bg-base-100 shadow-xl hover:scale-105 duration-400">
    <img src={`http://localhost:8080${item.image}`} alt="Book" className='' />
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline px-5 py-4">{item.price}</div>
        </div>
      </div>
    </div>
          </li>
        ))}
              </div>

      </ul>
      
    </div>
  );
};

export default Cart;
