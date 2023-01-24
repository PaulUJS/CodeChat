import React, { createContext, useState } from 'react';

export const Context = createContext();

export function PublicContextProvider({ children }) {
  const [publicChat, setPublicChat] = useState([]);

  return (
    <Context.Provider value={{ publicChat, setPublicChat }}>
      {children}
    </Context.Provider>
  )
}

export default PublicContextProvider;