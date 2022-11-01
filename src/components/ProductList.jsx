import React from "react";
import { moviefy } from "../data";
import style from "../sass/components/_productList.module.scss";
import Product from "./Product";

function ProductList() {
  return (
    <div className={style.pl}>
      <div className={style.plTexts}>
        <h1 className={style.plTitle}>
          Design & Develop. An integral solution
        </h1>
        <p className={style.plDesc}>
          This portfolio has just started, and I think our work together will
          look very good here. <br />
          In the meantime, here is some of the work I have done...
        </p>
      </div>

      <div className={style.list}>
        {moviefy.map((item) => (
          <Product key={item.id} img={item.img} alt={item.alt} link={item.link}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
