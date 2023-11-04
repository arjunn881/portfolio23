import React from "react";
import "./Portfolio.css";
import Stack from '../../asset/Project/stack.png'
import Music from '../../asset/Music.png'

const data = [
  {
    id: 1,
    img: Stack,
    title: "Stack Overflow Clone",
    github: "https://github.com/arjunn881/stackoverflow",
    demo : "https://stack-client.onrender.com/"
  },

  {
    id: 2,
    img: "",
    title: "NetFlix Clone",
    github: "https://github.com/arjunn881",
    demo : ""
  },
  {
    id: 3,
    img: "",
    title: "Kafene",
    github: "https://github.com/arjunn881",
    demo : ""
  },
  {
    id: 4,
    img: "",
    title: "Youtube Clone API",
    github: "https://github.com/arjunn881",
    demo : ""
  },

  {
    id:     5,
    img: "",
    title: "Ecommerce API",
    github: "https://github.com/arjunn881",
    demo : ""
  },
  {
    id: 6,
    img: "",
    title: "Social Media App",
    github: "https://github.com/arjunn881",
    demo : ""
  },
  {
    id: 7,
    img: "",
    title: "Admin Panel",
    github: "https://github.com/arjunn881",
    demo : ""
  },

  {
    id: 8,
    img: Music,
    title: "Music Player",
    github: "https://github.com/arjunn881/Music-Player",
    demo : "https://meek-melba-61ba55.netlify.app/"
  },


];
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((data) => (
          <article className="portfolio__item" key={data.id}>
            <div className="portfolio__item-image">
              <img
                src={data.img}
                alt=""
              />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href={data.github} target="_blank" className="btn">
                Github
              </a>
              <a href={data.demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
