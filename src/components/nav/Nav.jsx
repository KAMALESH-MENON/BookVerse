import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {BsBookmarks} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarks/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages/></a>
    </nav>
  )
}

export default Nav