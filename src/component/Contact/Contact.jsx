import React from "react";
import "../Contact/Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>arjunn881@gmail.com</h5>
            <a href="arjunn881@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>arjunn881@gmail.com</h5>
            <a href="arjunn881@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp  className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>9036985518</h5>
            <a href="arjunn881@gmail.com">Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="" required />
          <input type="email" name="email" placeholder="" required />
          <textarea type="message" name="message" placeholder="" required />
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </section>
  );
};
