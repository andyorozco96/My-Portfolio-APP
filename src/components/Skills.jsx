import React from "react";
import style from "../sass/components/_skills.module.scss";

function Skills() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../img/skills", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className={style.s}>
      <div className={style.sTexts}>
        <h1 className={style.sTitle}>Skills & Tools</h1>
      </div>
      <div className={style.sBackground}>
        <div className={style.sContainer}>
          <div className={style.sItem}>
            {images.map((e) => {
              return <img src={e}></img>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
