import React, { useState } from 'react'
import Login from './Login'
import { useAuth } from '../Context/AuthProvider'
import Logout from './Logout'
import { FaBars } from "react-icons/fa";
import Admin from './Admin';


const Navbar = () => {
  const [authUser,setAuthUser]=useAuth()

  const [show,setShow]=useState(false)

const handleClick=()=>{
  setShow(!show)
}

  return (
    
    <div className='sticky max-w-screen-2xl container md:px-20 px-5'>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a href='/about' >About </a></li>
      <li><a href='/contact' >Contact</a></li>
      </ul>
    </div>
    <a className=" text-xl cursor-pointer font-bold hover:text-gray-400 " >Book Store</a>
  </div>
  <div className="nav-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href='/'>Home</a></li>
      <li><a href='/course'>Course</a></li>
      <li><a href='/about' >About </a></li>
      <li><a href='/contact' >Contact</a></li>
    </ul>
  </div>
{authUser?<Logout/>:<Login/>}
<div className='' >
<a href="/admin"  className="btn my-4 py-5 px-8 bg-pink-500 text-white rounded-md hover:text-pink-600 hover:bg-white " >Admin</a>
</div>
</div>  
<div>

</div>
</div>
    </div>
  )
}

export default Navbar