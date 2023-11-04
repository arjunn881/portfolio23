import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';


export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/arjuna-nayak-7162aa245/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/arjunn881" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/techie.arjuna/" target='_blank'><BsInstagram/></a>
        
    </div>
  )
}
