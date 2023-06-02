import React from 'react'
import './nav.css'
import SearchBox from './SearchBox.jsx';
import {GiHamburgerMenu} from "react-icons/gi"

import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  const handleSearch = (searchTerm) => {
    // Handle the search functionality here
    console.log('Search term:', searchTerm);
  };
  return (
    <nav>
      <div className='leftside'>
        <div className="logo">
          <h2 className="brand">
            <span>BookVerse</span>
          </h2>
          <h3 className="brandMoto">
            <span>VIRTUAL LIBRARY</span>
          </h3>
        </div>
      </div>
      <div className='rightside'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
      <a href="#newArrival" onClick={()=> setActiveNav('#newArrival')} className={activeNav === '#about' ? 'active' : ''}>New Arrival</a>
      <a href="#browse" onClick={()=> setActiveNav('#browse')} className={activeNav === '#experience' ? 'active' : ''}>Browse</a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#services' ? 'active' : ''}>About us</a>
      </div>
      <div className='search'>
        <a href='#'><SearchBox onSearch={handleSearch} /></a> 
      </div>
      <div className='hamburger-menu'>
        <a href="#"><GiHamburgerMenu /></a>
      </div>

    </nav>
  )
}

export default Nav