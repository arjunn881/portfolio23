import React from 'react'
import './Header.css';
import Resume from '../../asset/Resume.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download = "Resume"  className='btn'>Download Resume</a>
        <a href="#contact" className='btn  btn-primary'>Let's Talk</a>
    </div>
  )
}
