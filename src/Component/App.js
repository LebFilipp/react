import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Message from './Message'




const App = () => {
  return (
     <Routes>
       <Route path='/' element={<Message />} />
     </Routes>
  )
}

export default App
