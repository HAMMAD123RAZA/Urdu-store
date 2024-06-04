
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';
import Delete from './Delete';
import { addItem } from '../../RTK/CartSlice';
// import { addItem } from '../RTK/cartSlice.js';

const Cards = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="card w-80 md:px-0 pr-3 bg-base-100 shadow-xl hover:scale-105 duration-400">
      <img src={`http://localhost:8080${item.image}`} alt="Book" className='' />
      <div className="card-body">
        <div className='flex justify-between cursor-pointer text-pink-500 '>
          <Link to={`/update/${item._id}`}><FaPencil/></Link>
          <Delete bookId={item._id} />
        </div>
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline px-5 py-4">{item.price}</div>
          <button
            className='hover:bg-white hover:text-pink-800 bg-pink-500 text-white px-2 py-1 rounded-md focus:outline-none focus:bg-purple-600'
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
