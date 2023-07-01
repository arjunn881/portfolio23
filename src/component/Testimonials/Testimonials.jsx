import React from "react";
import "./Testimonials.css";

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
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 2,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 3,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 4,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 5,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 6,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 7,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
  },
  {
    id: 8,
    avatar: "",
    name: "Ernest Achiver",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae commodi eveniet, rerum esse nobis dolor numquam tenetur sapiente delectus autem eaque neque ea, error aspernatur nisi exercitationem minima voluptatum?",
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
                src="https://img.freepik.com/free-vector/illustration-startup-business_53876-9142.jpg?w=360&t=st=1688030270~exp=1688030870~hmac=7424fdf0abcfaa18ae4272019c5720a1ebe85c219f52824c79c0ffed9adddd1b"
                alt=""
              />
            </div>

            <h5c className="client__name">{data.name}</h5c>

            <small className="client__review">{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
