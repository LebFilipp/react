import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './Component/CustomLink'
import './Layout.css'

const Layout = () => {
  return (
    <>
        <header>
            <CustomLink to={'/profile'}>PROFILE</CustomLink>
            <CustomLink to={'/chats'}>CHATS</CustomLink>
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Layout
