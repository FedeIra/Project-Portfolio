import React from 'react';
import * as images from '../../Assets/home_images';
import style from './Home.module.css';
import Landing from '../Landing/Landing.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Experience from '../Experience/Experience.jsx';

const Home = () => {
  return (
    <div className={style.container_general}>
      <Landing />
      <NavBar />
      <section className={`${style.hero} ${'align-items-stretch'}`}>
        <div
          className={`${
            style.hero_principal
          } ${'d-flex flex-column justify-content-center align-items-center'}`}
        >
          <h1
          /*define font size: */
          >
            {' '}
            About
          </h1>
          <img
            src={images.profile_picture}
            alt="profile-pic"
            className={`${
              style.hero_profile_pic
            } ${'img-fluid rounded-circle'}`}
            style={{ width: '20rem', height: '20rem' }}
          />
        </div>
        <div className="hero_lower">
          <img
            src={images.technologies_picture}
            className={`${style.hero_lower_image} ${'img-fluid'}`}
            alt="computer"
          />
        </div>
      </section>
      <section className={`${style.about_me} ${style.section_dark}`}>
        <div className={style.container}>
          <h2 className={style.section_title}>Get to know me</h2>
          <p className={style.section_text}>I am proactive and disciplined.</p>
          <br />
          <p className={style.section_text}>
            For the last 7 years I have dedicated my time in specializaing on
            employment law and advising local and foreign companies on such
            matters. This helped me further develop these qualities as well as
            aquiring new ones, such as an advance level of english, a
            client-oriented mindset, and the ability to solve problems, transmit
            knowledge and the ability to work cooperatively with others.
          </p>
          <br />
          <p className={style.section_text}>
            I decided to redirect all my efforts and skills to programming,
            which is my new found passion. Currently, I managed to overcome my
            first obstacle, concluding Henry Web Developer Bootcamp. This helped
            me aquire the following tools which will help me to continue on with
            my studies:
          </p>
          <br />
          <p className={style.section_text}>
            JavaScript | NodeJs | Express | SQL | MongoDB | React | Redux |
            Firebase | HTML5 | CSS3 | Chakra UI | Bootstrap | SCRUM | GIT |
            Heroku | Vercel | Railway.
          </p>
        </div>
      </section>
      <Experience />
    </div>
  );
};

export default Home;
