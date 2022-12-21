import React, { useContext } from "react";
import { ThemeContext } from "../context";
import CVEnglish from "../downloads/CV_OROZCO-ANDRES_ENGLISH.pdf";
import CVEspañol from "../downloads/CV_OROZCO-ANDRES_ESPAÑOL.pdf";

import style from "../sass/components/_download.module.scss";
function Download() {
  const theme = useContext(ThemeContext);

  const { state } = theme;
  return (
    <div className={style.d}>
      <div className={style.dTexts}>
        <h1 className={style.dTitle}>
          Download my <span>Curriculum Vitae 👇</span>
        </h1>
        <p className={style.dDesc} style={{ color: state.darkMode && "white" }}>
          If you want to know more about me, I leave below a button to download
          my CV in English or Spanish version. Note: clicking on the button will
          open a new tab where you can view the PDF and download it.
        </p>
      </div>

      <div className={style.dContainer}>
        <div className={style.dItem}>
          <a href={CVEnglish} target="_blank">
            English PDF version
            <i class="uil uil-adobe"></i>
          </a>
        </div>
        <span>Or</span>
        <div className={style.dItem}>
          <a href={CVEspañol} target="_blank">
            Spanish PDF version
            <i class="uil uil-adobe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Download;
