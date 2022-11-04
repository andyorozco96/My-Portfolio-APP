import React, { useContext } from "react";
import { ThemeContext } from "../context";

import Me from "../img/Portfolio1.png";
import style from "../sass/components/_introduction.module.scss";

function Introduction() {
  const theme = useContext(ThemeContext)

  const {state} = theme


  return (
    <div className={style.main}>
      <div className={style.introLeft}>
        <div className={style.leftWrapper}>
          <h2 className={style.introHello}>Hello, my name is</h2>
          <h2 className={style.introName}>Andrés Orozco</h2>

          <div className={style.titleCont}>
            <div className={style.titleContWrapper}>
              <div className={style.titleItem}>Front-End Developer 💻</div>
              <div className={style.titleItem}>Back-End Developer 👨‍💻</div>
              <div className={style.titleItem}>Graphic Designer 🎨</div>
              <div className={style.titleItem}>Video Editor 📹</div>
              <div className={style.titleItem}>Content Creator 🎮</div>
            </div>
          </div>

          <div className={style.description}>
            &#123;
            <p>
              dreamJob:{" "}
              <span className={style.span1}>"full-stack web developer"</span>,{" "}
              <br />
              lookingForJob: <span className={style.span2}>true</span>,<br />
              availability: <span className={style.span1}>"full-time"</span>
              <br />
            </p>
            &#125;
          </div>
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className={style.iconScroll}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>

          <div className={style.btnContainer}>
            <div className={style.infoItem}>
              <a
                href="https://github.com/andyorozco96"
                target="_blank"
                rel="noreferrer"
              >
                <i class={`uil uil-github ${style.navIcon}`} style={{color: state.darkMode ? 'white' : '#333'}}></i>
              </a>
            </div>
            <div className={style.infoItem}>
              <a
                href="https://github.com/andyorozco96"
                target="_blank"
                rel="noreferrer"
              >
                <i class={`uil uil-linkedin ${style.navIcon}`} style={{color: state.darkMode ? 'white' : '#333'}}></i>
              </a>
            </div>

            <div className={style.infoItem}>
              <a
                href="https://github.com/andyorozco96"
                target="_blank"
                rel="noreferrer"
              >
                <i class={`uil uil-twitter ${style.navIcon}`} style={{color: state.darkMode ? 'white' : '#333'}}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.introRight}>
        <div className={style.imgBg}></div>
        <img className={style.rightImg} src={Me} alt="" />
      </div>
    </div>
  );
}

export default Introduction;
