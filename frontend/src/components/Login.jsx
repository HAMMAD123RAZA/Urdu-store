import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Login</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <div className=''>
    <input type="email" placeholder='email' name='email' required aria-required/>
    </div>
    <div className='py-3'>
        
    <input type="password" name="password" id="" placeholder='password' required aria-required />
    </div>
    <button className="btn my-2  px-3 bg-pink-500 text-white rounded-md hover:text-pink-600 hover:bg-white ">Login</button>

<p className=' '>Not Registered?<span className='text-blue-700 underline cursor-pointer' ><Link to="/signup">Sign-Up</Link></span></p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn ">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </>
  )
}

export default Login