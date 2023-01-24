import React, { createContext, useState } from 'react';

export const Context = createContext();

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({
    username: '',
    reciever: '',
    connected: false,
    message: ''
  });

  return (
    <Context.Provider value={{ userData, setuserData }}>
      {children}
    </Context.Provider>
  )
}

export default UserContextProvider;