import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link style={{gap:"10px"}} to="/">Clients</Link>
      <Link style={{gap:"10px"}} to="/login">login</Link>
      <Link style={{gap:"10px"}} to="/registration">registration</Link>
    </div>
  )
}

export default Navbar
