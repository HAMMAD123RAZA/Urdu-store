import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';

const Course = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book");
        console.log(response.data);
        setBooks(response.data);
        // window.location.reload()
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  // Filter out the free books
  const filteredBooks = books.filter((item) => item.category.trim() !== "free");

  return (
    <>
      <div className="md:text-4xl text-2xl text-center my-7 font-bold">
        Welcome to our <span className='text-pink-600'>book store</span>
      </div>
      <p className='text-center font-semibold md:px-16 py-7'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat minus impedit debitis, nisi sit dolor minima, perspiciatis deserunt cum atque provident neque nulla mollitia? Lorem ipsum dolor sit amet consectetur minima, perspiciatis deserunt cum atque provident neque nulla mollitia? Lorem ipsum dolor sit amet consectet adipisicing elit. Corrupti qui saepe numquam?
      </p>
      <div className="text-center py-4">
        <Link to="/" className="btn bg-pink-600 text-white rounded-md hover:text-pink-500 hover:bg-white">
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:px-1 px-8">
        {filteredBooks.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>

    </>
  );
};

export default Course;
