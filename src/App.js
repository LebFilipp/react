import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Component/Profile'
import Chats from './Component/Chats'
import Error from './Component/Error'
import Home from './Component/Home'
import Layout from './Layout'

const App = () => {
  return (
    <Routes>
      <Route to={'/'} element={<Layout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/chats'} element={<Chats />} />
        <Route path={'*'} element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
