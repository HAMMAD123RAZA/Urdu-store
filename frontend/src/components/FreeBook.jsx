import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import Search from './Search';

const FreeBook = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching the books data:", error);
      }
    };
    getBooks();
  }, []);


  const handleSearchChange=(e)=>{
    setSearchQuery(e.target.value);
  }

  const filteredBooks = books.filter((item) => 
    item.category.trim() === "free" && item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container md:px-20 px-5 mt-5'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo molestias autem eos? Voluptas, aut dolorum totam est corporis consectetur mollitia quia blanditiis.</p>
      </div>
      <div className="flex justify-center py-10  ">
    <div className="relative">
      <input type="text" onChange={handleSearchChange} value={searchQuery}   placeholder='Search Book' className="rounded-full px-4 py-3  border border-x-4 border-pink-500 pl-12"  />
      <Search handleSearch={() => setSearchQuery(searchQuery)} />
    </div>
      </div>

      <div className="slider">
        <div className="slider-container">
          <Slider {...settings}>
            {filteredBooks.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;