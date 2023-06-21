import React from 'react'
import '../Header/Header.css';
import { CTA } from './CTA';
import { HeaderSocials } from './HeaderSocials';
import Me from '../../asset/Arjun.png'



export const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Arjuna Nayak</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="me">
        <img src={Me} alt="" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}
