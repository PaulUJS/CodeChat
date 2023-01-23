import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { MessageContextProvider } from './context/MessageContext'
import { NameContextProvider } from './context/NameContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NameContextProvider>
    <MessageContextProvider>
      <App />
    </MessageContextProvider>
  </NameContextProvider>
)
