import React from "react";
import { moviefy, countriesAPP, ruloteca, deliveroo } from "../data";
import style from "../sass/components/_productList.module.scss";
import PhoneMockup from "./PhoneMockup";
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
      <h5 className={style.listTitle}>Deliveroo Clone Mobile App</h5>

      <div className={style.phone}>
        {deliveroo.map((item) => (
          <div className={style.phoneDiv}>
            <PhoneMockup
              key={item.id}
              img={item.img}
              alt={item.alt}
              link={item.link}
            />
          </div>
        ))}
      </div>

      <h5 className={style.listTitle}>Moviefy+</h5>
      <div className={style.list}>
        {moviefy.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            alt={item.alt}
            link={item.link}
          />
        ))}
      </div>

      <h5 className={style.listTitle}>Ruloteca</h5>
      <div className={style.list}>
        {ruloteca.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            alt={item.alt}
            link={item.link}
          />
        ))}
      </div>

      <h5 className={style.listTitle}>The Countries APP</h5>
      <div className={style.list}>
        {countriesAPP.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            alt={item.alt}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
