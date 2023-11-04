import React from "react";
import "../About/About.css";
import Me from "../../asset/Arjun.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>40+ Worldwide</small>
            </article> */}

            <a
              href="https://github.com/arjunn881?tab=repositories"
              target="_blank"
            >
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </a>
          </div>
          <p>
            Proficient in HTML, CSS, JavaScript, jQuery, ReactJS, React Router,
            MongoDB, Node.js, and Express.js. Experience in developing web
            applications with a focus on performance, scalability, and user
            experience. Knowledge of front-end frameworks and libraries such as
            Bootstrap, Material UI, and Redux. Ability to work with back-end
            technologies and databases such as MongoDB, MySQL, and Firebase.
            Experience in building RESTful APIs and integrating third-party
            APIs. Familiarity with Git and GitHub. Strong problem-solving skills
            and attention to detail. Excellent communication and collaboration
            skills. If you're looking for a Full Stack Web Developer with
            expertise in the technologies mentioned above, feel free to reach
            out to me. I am open to new opportunities and excited to take on new
            challenges.
          </p>
          <a href="#contact" className="btn btn-primary ">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
