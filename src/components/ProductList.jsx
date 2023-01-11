import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { moviefy, countriesAPP, ruloteca, deliveroo } from "../data";
import style from "../sass/components/_productList.module.scss";
import PhoneMockup from "./PhoneMockup";
import Product from "./Product";

function ProductList() {
  const theme = useContext(ThemeContext);

  const { state } = theme;

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

      <h5 className={style.listTitle}>
        Linkedin Clone{" "}
        <a
          href="https://github.com/andyorozco96/LinkedIn-Clone-React"
          target="_blank"
        >
          <i class="devicon-github-original"></i>
        </a>
      </h5>
      <div className={style.pl__proyectDescription}>
        <p className>
          The goal of this project was to rebuild the LinkedIn publishing
          system, keeping the functionality of refreshing the information in
          real time, using Firebase.
        </p>

        <div className={style.pl__techContainer}>
          <span>Technologies:</span>
          <div
            className={style.pl__tech}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-express-original"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-materialui-plain"></i>
            <i class="devicon-firebase-plain-wordmark"></i>
            <i class="devicon-yarn-plain"></i>
          </div>
          <span>Extras:</span>
          <div
            className={style.pl__extra}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <p>React Flip Move - Module</p>
          </div>
        </div>
      </div>

      <div className={style.pl__ytContainer}>
        <iframe
          src="https://www.youtube.com/embed/1-W0qwUGNNg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h5 className={style.listTitle}>Deliveroo Clone Mobile App</h5>
      <div className={style.pl__proyectDescription}>
        <p className>
          The objective of this project was to clone the food delivery
          application called Deliveroo. Developed with React Native + Expo
          envoriment.
        </p>

        <div className={style.pl__techContainer}>
          <span>Technologies:</span>
          <div
            className={style.pl__tech}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-androidstudio-plain"></i>
            <i class="devicon-tailwindcss-plain"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-yarn-plain"></i>
          </div>
          <span>Extras:</span>
          <div
            className={style.pl__extra}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <p>
              Sanity CMS / NativeWind / React Currency Formatter / React Native
              Maps / Google Maps API / React Native Animatable{" "}
            </p>
          </div>
        </div>
      </div>
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
      <div className={style.pl__proyectDescription}>
        <p className>
          Final project of @SoyHenry's intensive bootcamp - Argentina. Done as a
          group with 7 members. The goal was to create a web application with a
          minimum level of difficulty of an e-commerce.
        </p>

        <div className={style.pl__techContainer}>
          <span>Technologies:</span>
          <div
            className={style.pl__tech}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-redux-original"></i>
            <i class="devicon-nodejs-plain"></i>

            <i class="devicon-express-original"></i>

            <i class="devicon-mongodb-plain-wordmark"></i>

            <i class="devicon-sass-original"></i>

            <i class="devicon-git-plain"></i>

            <i class="devicon-github-original"></i>

            <i class="devicon-google-plain"></i>
          </div>
          <span>Extras:</span>
          <div
            className={style.pl__extra}
            style={{
              backgroundColor: state.darkMode && "#333",
            }}
          >
            <p>
              Adobe XD / Google Auth / MercadoPago / SweetAlert2 / Postman /
              Log4js / Mongoose
            </p>
          </div>
        </div>
      </div>

      <div className={style.pl__ytContainer}>
        <iframe
          src="https://www.youtube.com/embed/poxn0ZRXXxM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
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
