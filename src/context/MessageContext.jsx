import React, { createContext, useState } from 'react';

export const Context = createContext();

export function MessageContextProvider({ children }) {
  const [message, setMessage] = useState([]);

  return (
    <Context.Provider value={{ message, setMessage }}>
      {children}
    </Context.Provider>
  )
}

export default MessageContextProvider;