import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReduxChats from './Component/ReduxChats'
import ReduxMessages from './Component/ReduxMessages'



const App = () => {
  return (
     <Routes>
        <Route path={'/'} element={<ReduxChats />} />
        <Route path={'/messages/:id'} element={<ReduxMessages />} />
     </Routes>
  )
}

export default App
