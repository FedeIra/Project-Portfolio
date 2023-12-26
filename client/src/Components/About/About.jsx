import React from 'react';
import * as images from '../../Assets/home_images';
import style from './About.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardAbout from './CardAbout.jsx';
import technologies from './technologies.json';
import Landing from '../Landing/Landing.jsx';
import Projects from '../Projects/Projects.jsx';
import Experience from '../Experience/Experience.jsx';
import Contact from '../Contact/Contact.jsx';
import Skills from '../Skills/Skills.jsx';
import Footer from '../Footer/Footer.jsx';
import { motion } from 'framer-motion';
import { IconButton } from '@chakra-ui/react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import OtherProjects from '../Other projects/Other_Projects.jsx';

const About = () => {
  /* underline correspondant navlink when scrolling down through id: */
  const navBarLinks = document.getElementsByClassName('nav-link');

  window.onscroll = function () {
    // const landing = document.getElementById('landing');
    const aboutMe = document.getElementById('aboutMe');
    const projects = document.getElementById('projects');
    const experience = document.getElementById('experience');
    const contact = document.getElementById('getInTouch');

    const navBarLinksArray = Array.from(navBarLinks);
    const navBarLinksArrayLength = navBarLinksArray.length;

    // const landingPosition = landing.getBoundingClientRect().top;
    const aboutMePosition = aboutMe.getBoundingClientRect().top;
    const projectsPosition = projects.getBoundingClientRect().top;
    const experiencePosition = experience.getBoundingClientRect().top;
    const contactPosition = contact.getBoundingClientRect().top;

    const navBarLinksArrayPositions = [
      // landingPosition,
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

  /* variants for animations responsive */
  let boxVariants = {};
  const isMobile2 = window.innerWidth < 768;

  if (!isMobile2) {
    boxVariants = {
      hidden: { opacity: 0, x: -1000 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
  } else {
    boxVariants = {
      hidden: { opacity: 0, x: 0 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
  }

  return (
    <div
      className="
      scrollspy-example
      "
    >
      <Landing />
      <div className={style.container_general}>
        <IconButton
          icon={<BsChevronDoubleUp />}
          id="scrollUp"
          size="lg"
          onClick={() => window.scrollTo(0, 0)}
          style={{
            position: 'fixed',
            bottom: '15px',
            right: '5px',
            margin: '1rem',
            backgroundColor: 'rgba(4, 1, 19, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
          }}
          _hover={{
            transform: 'scale(1.1)',
          }}
        />
        <Container fluid className={style.about}>
          <Row>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={boxVariants}
              id="aboutMe"
            >
              About me
            </motion.h2>
            <Col xs={12} md={12}>
              <Skills />
              <Row>
                <Col
                  xs={12}
                  md={12}
                  lg={{ span: 4, offset: 2 }}
                  className={style.about_col}
                >
                  <motion.img
                    src={images.profile_picture}
                    alt="profile-pic"
                    className={style.about_img}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1 },
                      },
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, x: 1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <Col xs={12} md={{ span: 8, offset: 2 }}>
                      <p className={`text-center `}>
                        I'm a Full Stack Web Developer. I strive to deliver high
                        quality, responsive and dinamic products, always
                        prioritizing user experience above all. <br />
                        <a
                          href="#getInTouch"
                          style={{
                            textDecoration: 'underline',
                          }}
                        >
                          Let's work together.
                        </a>
                      </p>
                    </Col>
                  </motion.div>
                </Col>
                <Col xs={12} md={12} lg={3}>
                  <div
                    className={`d-flex flex-wrap justify-content-center ${style.about_techs}`}
                  >
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: { delay: index * 0.1 },
                          },
                        }}
                      >
                        <CardAbout
                          key={index}
                          name={tech.name}
                          avatar={tech.avatar}
                        />
                      </motion.div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Projects />
        <OtherProjects />
        <Experience />
        <br />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default About;
