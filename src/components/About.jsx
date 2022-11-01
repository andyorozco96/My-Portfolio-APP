import React from "react";

import style from "../sass/components/_about.module.scss";
import aboutImg from "../img/about.jpg";
import certificateImg from '../img/certificadoSoyHenry.PNG'

function About() {
  return (
    <div className={style.mainAbout}>
      <div className={style.left}>
        <div className={`${style.card} ${style.bg}`}></div>
        <div className={style.card}>
          <img className={style.cardImg} src={aboutImg} alt="" />
        </div>
      </div>

      <div className={style.right}>
        <h1 className={style.title}>About Me</h1>
        <p className={style.sub}>
          Working for more than 4 years in the Graphic Design industry, I became
          interested in web development after doing a volunteer exchange in
          which I fulfilled the role of Web Designer.
        </p>

        <p className={style.desc}>
          After finishing my intensive Bootcamp to become a Full-Stack web
          developer, I am able to leverage my knowledge in these areas to offer
          a comprehensive and professional solution to the market.
        </p>

        <div className={style.award}>
            <img className={style.awardImg} src={certificateImg} alt="" />
            <div className={style.awardTexts}>
                <h4 className={style.awardTitle}>Certificate Full-Stack Developer at @SoyHenry bootcamp</h4>
                <div className={style.awardDesc}>
                <span className={style.awardDescSubtitle}>+700 hours of theoretical and practical material</span>
                Advanced JavaScript, Data Structure and Algorithms | Advanced DOM and CSS, ES6, AJAX, React and Redux | NodeJS, Promises, Web Server, Express, Testing | SQL, ORM, Sequelize | Workshops: SCRUM, TypeScript, Deployment, Git Flow
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
