import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({ to, children, ...prop}) => {
    const match = useMatch(to)
  return (
    <div>
      <Link 
        style={{
            textDecoration: 'none',
            fontSize: '20px',
            color: match ? 'blue' : 'black',
            borderBottom: match ? ' 2px solid blue' : 'none',
        }} 
        to={to} {...prop}>
            {children}
      </Link>
    </div>
  )
}

export default CustomLink
