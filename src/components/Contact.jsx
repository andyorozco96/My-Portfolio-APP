import React, { useRef } from "react";
import style from "../sass/components/_contact.module.scss";
import Phone from "../img/phone.png";
import Location from "../img/address.png";
import Email from "../img/email.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smriwi4', 'template_b82nohj', form.current, 'rIh43K6zsr1iwyfIb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={style.c}>
      <div className={style.cBg}></div>
      <div className={style.wrapper}>
        <div className={style.left}>
          <h1 className={style.title}>Let's work together!</h1>
          <div className={style.info}>
            <div className={style.infoItem}>
              <img className={style.icon} src={Phone} alt="Phone number icon" />
              +54 9 261 697-7165
            </div>
            <div className={style.infoItem}>
              <img className={style.icon} src={Email} alt="Email icon" />
              andres.orozco.dev@gmail.com
            </div>
            <div className={style.infoItem}>
              <img className={style.icon} src={Location} alt="Location icon" />
              Mendoza, Argentina
            </div>
          </div>
        </div>

        <div className={style.right}>
          <p className={style.cDescription}>
            <span>Are you interested in my profile?</span> <br />
            Get in touch. Always available if the right project comes along me.
          </p>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
