import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';
import Search from './Search';

const Course = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book");
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBooks();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBooks = books.filter((item) => 
    item.category.trim() !== "free" && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="md:text-4xl text-2xl text-center md:mx-0 mx-10 my-7 font-bold">
        Welcome to our <span className="text-pink-600">book store</span>
      </div>
      <p className="text-center font-semibold md:px-16 px-4 py-7">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat minus impedit debitis, nisi sit dolor minima, perspiciatis deserunt cum atque provident neque nulla mollitia? Lorem ipsum dolor sit amet consectetur minima, perspiciatis deserunt cum atque provident neque nulla mollitia? Lorem ipsum dolor sit amet consectet adipisicing elit. Corrupti qui saepe numquam?
      </p>
      <div className="text-center py-4">
        <Link to="/" className="btn bg-pink-600 text-white rounded-md hover:text-pink-500 hover:bg-white">
          Back
        </Link>
      </div>

      <div className="flex justify-center my-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search book"
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded-full px-4 py-3  border border-x-4 border-pink-500 pl-12"
          />
          <Search handleSearch={() => setSearchQuery(searchQuery)} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-1 px-14">
        {filteredBooks.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Course;
