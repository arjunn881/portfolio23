import React from "react";
import { BiCheck } from "react-icons/bi";
import './Services.css';

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services  services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                HTML,CSS, JavaScript & jQuery , Bootstrap
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Figma
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                React Js, CSS, SASS (ReactUI)
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                React Js, MaterialUI
              </p>
            </li>
            <li>
            <BiCheck className="service__list-icon" />
              <p>
                Responsive Design
              </p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                HTML, CSS, JavaScript
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                HTML,CSS,jQuery
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                HTML,Bootstrap, JavaSript or jquery
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                MERN Stack (React js, Expess js, Node js & MongoDB)
              </p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>
                
              </p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Coming Soon....
              </p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </li> */}
          </ul>
        </article>
      </div>
    </section>
  );
};
