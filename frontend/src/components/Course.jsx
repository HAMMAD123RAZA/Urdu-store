import React, { useEffect, useState } from 'react'
import data from "../data.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
import axios from "axios"
const Course = () => {
    
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook= async ()=>{
                try {
                    const data=await axios.get("http://localhost:4040/book")
                    console.log(data.data)
                    setBook(data.data)
                } catch (error) {
                    console.log(error)
                }
        }
        getBook()
    },[])
    const filter=data.filter((item)=>item.category!=="free" )

    return (
    <>
   <div className="md:text-4xl text-2xl  text-center my-7 font-bold"> Welcome to our <span className='text-pink-600 '>book store</span></div>
   <p className='text-center font-semibold  md:px-16 py-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat minus impedit debitis, nisi sit dolor minima, perspiciatis deserunt cum atque provident neque nulla mollitia?Lorem ipsum dolor sit amet consectetur  minima, perspiciatis deserunt cum atque provident neque nulla mollitia?Lorem ipsum dolor sit amet consectet adipisicing elit. Corrupti qui saepe numquam?</p>
   <div className="text-center py-4  ">
<Link to= "/" className="btn  bg-pink-600 text-white rounded-md hover:text-pink-500 hover:bg-white ">Back</Link>
   </div>

    <div className="grid grid-cols-1 md:grid-cols-3 md:px-1 px-8">

    {book.map((item)=>{
        return (
            <>
            <Cards key={item.id} item={item} />
            </>
        )
    })}
                </div>
    </>
  )
}

export default Course