import React, { createContext, useState } from 'react';

export const Context = createContext();

export function PrivateContextProvider({ children }) {
  const [privateChat, setPrivateChat] = useState(new Map());

  return (
    <Context.Provider value={{ privateChat, setPrivateChat }}>
      {children}
    </Context.Provider>
  )
}

export default PrivateContextProvider;