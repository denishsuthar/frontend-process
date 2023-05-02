import React from 'react'
import "../Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
      <input type='checkbox' id='check'></input>
      <label for="check" className='checkbtn'><i className='fa fa-align-left'></i></label>
        <label className='logo'>Logo</label>
        <ul>
          <li><NavLink to="/" className="active">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
