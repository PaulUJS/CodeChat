import { useState } from 'react'
import './App.css'

import Createroom from './pages/Createroom';
import Chatroom from './pages/Chatroom';

function App() {
  return (
    <>
      <Createroom/>
      <Chatroom/>
    </>
  )
}

export default App
