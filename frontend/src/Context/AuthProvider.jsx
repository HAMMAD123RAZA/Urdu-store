import React, { createContext, useContext, useState } from 'react'

export const userContext=createContext()
function AuthProvider({children}) {
  const initialUser=localStorage.getItem("User")
  const [authUser,setAuthUser]=useState(initialUser?JSON.parse(initialUser):undefined)
  return (  
    <userContext.Provider value={[authUser,setAuthUser]}  >
{children}
      </userContext.Provider >
    
  )
}
export const useAuth=()=>useContext()

export default AuthProvider