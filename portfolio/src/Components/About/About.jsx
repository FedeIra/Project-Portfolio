import React from 'react';
import * as images from '../../Assets/home_images';
import style from './About.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardAbout from './CardAbout.jsx';
import technologies from './technologies.json';
import Landing from '../Landing/Landing.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import Projects from '../Projects/Projects.jsx';
import Experience from '../Experience/Experience.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import { motion } from 'framer-motion';

const About = () => {
  /* Underline navBar according to section */
  const navBarLinks = document.getElementsByClassName('nav-link');

  window.onscroll = function () {
    const aboutMe = document.getElementById('aboutMe');
    const projects = document.getElementById('projects');
    const experience = document.getElementById('experience');
    const contact = document.getElementById('getInTouch');

    const navBarLinksArray = Array.from(navBarLinks);
    const navBarLinksArrayLength = navBarLinksArray.length;

    const aboutMePosition = aboutMe.getBoundingClientRect().top;
    const projectsPosition = projects.getBoundingClientRect().top;
    const experiencePosition = experience.getBoundingClientRect().top;
    const contactPosition = contact.getBoundingClientRect().top;

    const navBarLinksArrayPositions = [
      aboutMePosition,
      projectsPosition,
      experiencePosition,
      contactPosition,
    ];

    for (let i = 0; i < navBarLinksArrayLength; i++) {
      if (navBarLinksArrayPositions[i] < 100) {
        navBarLinksArray[i].style.textDecoration = 'underline';
        for (let j = 0; j < navBarLinksArrayLength; j++) {
          if (j !== i) {
            navBarLinksArray[j].style.textDecoration = 'none';
          }
        }
      } else {
        navBarLinksArray[i].style.textDecoration = 'none';
      }
    }
  };

  return (
    <div
      className="
      scrollspy-example
      "
    >
      <Landing />
      <div className={style.container_general}>
        <NavBar />
        <Container fluid className={style.about}>
          <Row className={style.about_row}>
            <Col
              xs={12}
              md={4}
              className={`${style.about_col} ${style.about_col_left}`}
            >
              <motion.img
                src={images.profile_picture}
                alt="profile-pic"
                className={`rounded-circle ${style.about_img}`}
                style={{ width: '25rem', height: '25rem' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
            <Col xs={12} md={8} className={style.about_col_text}>
              <motion.h2
                className={`text-center ${style.about_heading}`}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                id="aboutMe"
              >
                About me
              </motion.h2>
              <br />
              <motion.div
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p>I am proactive and disciplined.</p>
                <br />
                <p>
                  For the last 7 years I have dedicated my time in specializaing
                  on employment law and advising local and foreign companies on
                  such matters. This helped me further develop these qualities
                  as well as aquiring new ones, such as an advance level of
                  english, a client-oriented mindset, and the ability to solve
                  problems, transmit knowledge and work cooperatively with
                  others.
                </p>
                <br />
                <p>
                  I decided to redirect all my efforts and skills to
                  programming, which is my new found passion. Currently, I
                  managed to overcome my first obstacle, concluding Henry Web
                  Developer Bootcamp. This helped me aquire the following tools
                  which will help me continue on with my studies:
                </p>
              </motion.div>

              <br />
              <div
                className={`d-flex flex-wrap justify-content-center ${style.about_techs}`}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CardAbout
                      key={index}
                      name={tech.name}
                      avatar={tech.avatar}
                    />
                  </motion.div>
                ))}
              </div>
              <br />
              <motion.div
                initial={{ opacity: 0, x: 1000 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p>
                  I am currently looking for a job as a Junior Web Developer,
                  where I can continue to learn and grow as a professional.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default About;
