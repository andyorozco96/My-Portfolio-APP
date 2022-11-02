import React from "react";

import style from "../sass/components/_product.module.scss";
import Error404 from "../img/Error404.png"


function Product({img, alt, link}) {
  return (
    <div className={style.p}>
        <div className={style.pBrowser}>
            <div className={style.pCircle}></div>
            <div className={style.pCircle}></div>
            <div className={style.pCircle}></div>
        </div>
        <a  href={link} target="_blank" rel="noreferrer">
            <img src={img ? img : Error404} alt={alt} className={style.pImg}/>
        </a>
    </div>
  )
}

export default Product