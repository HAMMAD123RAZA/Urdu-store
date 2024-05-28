import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="card w-80 md:px-0 pr-3 bg-base-100 shadow-xl hover:scale-105 duration-400">
      <img src={`http://localhost:8080${item.image}`} alt="Book" className='h-' />
      <div className="card-body">
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