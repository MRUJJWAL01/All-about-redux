import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    
  return (
    <nav className='flex justify-center gap-10 mt-10 font-bold text-2xl'>
        <Link to="/home">Home</Link>
        <Link to="/users">User</Link>
        <Link to="/products">Product</Link>
    </nav>
  )
}

export default Nav