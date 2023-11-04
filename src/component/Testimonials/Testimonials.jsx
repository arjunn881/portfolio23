import React from "react";
import "./Testimonials.css";

import KIIT from '../../asset/KIIT.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const articleData = [
  {
    id: 1,
    avatar: KIIT,
    name: "Dr. Shradhanjali Nayak",
    desig : "Director, PR, KIIT",
    review:
      "I am immensely thankful to Mr. Arjuna Nayak for his support and involvement with Kalinga Institute of Industrial Technology (KIIT) as Mern Stack Developer in the PR Digital Cell. I extend my deepest appreciation to him for joining the movement in true spirit.We wish Mr. Arjuna Nayak the best in his future endeavors and have no hesitation in recommending them for any suitable opportunities.",
  },

];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {articleData.map((data) => (
          <SwiperSlide className="testimonial" key={data.id}>
            <div className="client__avatar">
              <img
                src={data.avatar}
                alt=""
              />
            </div>

            <h5c className="client__name">{data.name}</h5c>
            <h6 className="client__name">{data.desig}</h6>

            <small className="client__review">{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
