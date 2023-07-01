import React from "react";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
  },

  {
    id: 2,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
  },

  {
    id: 3,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
  },

  {
    id: 4,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
  },

  {
    id: 5,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
  },

  {
    id: 6,
    img: "",
    title: " Wbsite for Demo",
    demo: "///",
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
                src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?w=360&t=st=1688030270~exp=1688030870~hmac=7424fdf0abcfaa18ae4272019c5720a1ebe85c219f52824c79c0ffed9adddd1b"
                alt=""
              />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/arjunn881" className="btn">
                Github
              </a>
              <a href="http://github.com/arjunn881" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
