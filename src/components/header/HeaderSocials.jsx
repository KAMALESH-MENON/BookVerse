import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://github.com/KAMALESH-MENON' target='_blank'><BsGithub/></a>
        <a href='https://www.linkedin.com/in/kamalesh-s-`71a0601b8' target='_blank'><BsLinkedin/></a>
        <a href='https://www.instagram.com/kamalesh.menon/' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials