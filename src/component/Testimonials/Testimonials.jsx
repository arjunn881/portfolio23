import React from "react";
import './Testimonials.css'

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?w=360&t=st=1688030270~exp=1688030870~hmac=7424fdf0abcfaa18ae4272019c5720a1ebe85c219f52824c79c0ffed9adddd1b" alt="" />
          </div>

          <h5c className="client__name">Ernest Achiver</h5c>

          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente
            delectus autem eaque neque ea, error aspernatur nisi exercitationem
            minima voluptatum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?w=360&t=st=1688030270~exp=1688030870~hmac=7424fdf0abcfaa18ae4272019c5720a1ebe85c219f52824c79c0ffed9adddd1b" alt="" />
          </div>

          <h5c className="client__name">Ernest Achiver</h5c>

          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente
            delectus autem eaque neque ea, error aspernatur nisi exercitationem
            minima voluptatum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?w=360&t=st=1688030270~exp=1688030870~hmac=7424fdf0abcfaa18ae4272019c5720a1ebe85c219f52824c79c0ffed9adddd1b" alt="" />
          </div>

          <h5c className="client__name">Ernest Achiver</h5c>

          <small className="client__review">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente
            delectus autem eaque neque ea, error aspernatur nisi exercitationem
            minima voluptatum?
          </small>
        </article>
      </div>
    </section>
  );
};
