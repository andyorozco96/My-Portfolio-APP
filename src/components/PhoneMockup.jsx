import React from "react";

import style from "../sass/components/_phoneMockup.module.scss";

function PhoneMockup({ img, alt, link }) {
  return (
    <div className={style.p}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={alt} className={style.pImg} />
      </a>
    </div>
  );
}

export default PhoneMockup;
