import React from "react";
import "../About/About.css";
import Me from '../../asset/Arjun.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'




export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="abot__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Experience</h5>
              <small>40+ Worldwide</small>
            </article>


            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Experience</h5>
              <small>30+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
