import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { MessageContextProvider } from './context/MessageContext'
import { UserContextProvider } from './context/UserContext';
import { PublicContextProvider } from './context/PublicContext';
import { PrivateContextProvider } from './context/PrivateContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <PublicContextProvider>
      <PrivateContextProvider>
        <MessageContextProvider>
          <App />
        </MessageContextProvider>
      </PrivateContextProvider>
    </PublicContextProvider>
  </UserContextProvider>
)
