import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Home from './Component/Home'

const Layout = () => {
  return (
    <>
        <Home />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout
