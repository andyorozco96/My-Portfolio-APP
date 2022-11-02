import React, { useRef, useState } from "react";
import style from "../sass/components/_contact.module.scss";
import Phone from "../img/phone.png";
import Location from "../img/address.png";
import Email from "../img/email.png";
import emailjs from "@emailjs/browser";
import validate from './Validate'
import Swal from "sweetalert2/dist/sweetalert2.all.min.js"



function Contact() {
  const form = useRef();

  const [values, setValues] = useState({
    name: '',
    email: '',
    message:'',
  })

  const [errors, setErrors] = useState({
  name: '',
  email: '',
  message:''
})

  const handleChange = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })

    setErrors(validate(values))
  }

  // useEffect(()=>{
  //   console.log(values)
  //   console.log(errors)
  // },[values])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_smriwi4', 'template_b82nohj', form.current, 'rIh43K6zsr1iwyfIb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      Swal.fire({
        text: "Message send successfully",
        icon: "success",
        iconColor: "rgb(62, 138, 62)",
        showCloseButton: true,
        confirmButtonText: "Continue",
        allowEnterKey: false,
        customClass: {
          popup: "Alert",
          closeButton: "closeButton",
          confirmButton: "confirmButton",
        },
      }).then((result) => {
      if (result.isConfirmed) {
        setValues({
          name: '',
          email: '',
          message:'',
        })
      }
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
              <input onChange={(e) => handleChange(e)} placeholder='Name' type="text" name="name" value={values.name}/>
              { errors.name && <span className={style.errors}>* {errors.name}</span> }
              <input onChange={(e) => handleChange(e)} placeholder='Email' type="email" name="email" value={values.email}/>
              { errors.email && <span className={style.errors}>* {errors.email}</span> }
              <textarea rows="5" onChange={(e) => handleChange(e)} placeholder='Please type a message'  name="message" value={values.message} />
              { errors.message && <span className={style.errors}>* {errors.message}</span> }
              <button type="submit" disabled={Object.keys(errors).length <= 0 ? false : true }>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
