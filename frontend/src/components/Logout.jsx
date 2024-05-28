import React from 'react'
import { useAuth } from '../Context/AuthProvider'

const Logout = () => {
  const [authUser,setAuthUser]=useAuth()
  const handleLogout=()=>{
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("User")
      window.location.reload()
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
        <button onClick={handleLogout}  className="btn bg-red-500 text-white rounded-md hover:bg-white hover:text-red-500">Logout</button>
    </>
  )
}

export default Logout