import axios from 'axios';
import React from 'react'
import { MdDelete } from "react-icons/md";


const Delete = ({bookId}) => {

    const handleDelete=async()=>{
        try {
            const del=await axios.delete(`http://localhost:8080/book/${bookId}`)  
            console.log(del);

            window.location.reload()
            alert("Book Deleted")
        } catch (error) {
            console.log(error)
            alert("Book Not Deleted")
        }
    }   

  return (
    <>
    <button onClick={handleDelete} ><MdDelete size={30} /></button>
    </>
  )
}

export default Delete