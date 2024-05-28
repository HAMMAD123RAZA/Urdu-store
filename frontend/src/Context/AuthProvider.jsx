import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

function AuthProvider({ children }) {
  const initialUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(initialUser ? JSON.parse(initialUser) : undefined);

  return (
    <UserContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);
export default AuthProvider;