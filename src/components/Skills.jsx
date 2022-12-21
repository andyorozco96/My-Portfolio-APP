import React, { useContext } from "react";
import { ThemeContext } from "../context";
import style from "../sass/components/_skills.module.scss";

function Skills() {
  const theme = useContext(ThemeContext);

  const { state } = theme;

  return (
    <div className={style.s}>
      <div className={style.sTexts}>
        <h1 className={style.sTitle}>Skills & Tools</h1>
      </div>
      <div
        className={style.sBackground}
        style={{ backgroundColor: state.darkMode ? "#222" : "white" }}
      >
        <div className={style.sContainer}>
          <div className={style.sItem}>
            <i class="devicon-javascript-plain colored"></i>
            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Javascript
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-react-original-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              React.js
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-redux-original colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Redux
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-nodejs-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Node.js
            </p>
          </div>

          <div className={style.sItem}>
            <i
              class="devicon-express-original colored"
              style={{ color: state.darkMode && "white" }}
            ></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Express.js
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-sass-original colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Sass
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-less-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Less
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-bootstrap-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Bootstrap
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-html5-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              HTML5
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-css3-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              CSS3
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-git-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Git
            </p>
          </div>

          <div className={style.sItem}>
            <i
              class="devicon-github-original-wordmark colored"
              style={{ color: state.darkMode && "white" }}
            ></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Github
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-postgresql-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              PostgreSQL
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-sequelize-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Sequelize
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-mongodb-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              MongoDB
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-firebase-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Firebase
            </p>
          </div>

          <div className={style.sItem}>
            <i
              class="devicon-wordpress-plain colored"
              style={{ color: state.darkMode && "white" }}
            ></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Wordpress
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-illustrator-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Adobe Illustrator
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-photoshop-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Adobe Photoshop
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-aftereffects-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Adobe After Effects
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-premierepro-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Adobe Premiere Pro
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-docker-plain-wordmark colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Docker
            </p>
          </div>

          <div className={style.sItem}>
            <i class="devicon-jira-plain colored"></i>

            <p className={state.darkMode ? style.sNameDark : style.sName}>
              Jira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
