import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import Cards from './Cards'
import data from "../data.json"
import axios from 'axios'
const FreeBook = () => {
const [book,setBook]=useState([]);

useEffect(()=>{
const getBook=async()=>{
  const data=await axios.get("http://localhost:4040/book")
  const res=data.data.filter((cat)=>cat.category==="free  ")
  setBook(res)
}
getBook()
},[])

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
    <>
    <div className='max-w-screen-2xl container md:px-20 px-5 mt-5'>
<div>
<h1 className='font-semibold text-xl pb-2' >Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo molestias autem eos? Voluptas, aut dolorum totam est corporis consectetur mollitia quia blanditiis.</p>
    </div>
    <div className="slider">
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>{
          return (
            <Cards key={item.id} item={item} />
          )
        })}
      </Slider>
    </div>
    </div>

    </div>
    </>
  )
}

export default FreeBook