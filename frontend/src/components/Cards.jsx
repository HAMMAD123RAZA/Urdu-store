import React from 'react';
import Delete from './Delete';
// import Update from './Update';
import { Link } from 'react-router-dom';
import { FaPencil } from "react-icons/fa6";


const Cards = ({ item }) => {
  return (
    <div className="card w-80 md:px-0 pr-3 bg-base-100 shadow-xl hover:scale-105 duration-400">
      <img src={`http://localhost:8080${item.image}`} alt="Book" className='' />
      <div className="card-body">
         <div className='flex justify-between cursor-pointer text-pink-500 ' ><Link to={`/update/${item._id}`} ><FaPencil/></Link> <Delete bookId={item._id}/></div>   
        <h2 className="card-title">
          
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline px-5 py-4">{item.price}</div>
          <div className="badge badge-outline cursor-pointer px-5 py-4 hover:bg-pink-600 hover:text-white">Buy Now</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;