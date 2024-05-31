import React from 'react';
import { IoIosSearch } from "react-icons/io";

const Search = ({ handleSearch }) => {
  return (
    <>
      <button onClick={handleSearch}>
        <IoIosSearch size={24} className="absolute  right-4 top-1/2 transform -translate-y-1/2 text-pink-600" />
      </button>
    </>
  );
};

export default Search;