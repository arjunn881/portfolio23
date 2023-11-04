import React from "react";
import './Footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ARJUNA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Testimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/arjuna-nayak-7162aa245/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/arjunn881" target='_blank'><BsGithub/></a>
        <a href="https://www.instagram.com/techie.arjuna/" target='_blank'><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arjuna. All rights reserved.</small>
      </div>
    </footer>
  );
};
