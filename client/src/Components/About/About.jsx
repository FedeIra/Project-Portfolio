// Import external dependencies:
import React, { useState, useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { IconButton } from "@chakra-ui/react";

// Import local dependencies:
import * as images from "../../Assets/home_images";
import style from "./About.module.css";
import CardAbout from "./CardAbout.jsx";
import technologies from "./technologies.json";
import Landing from "../Landing/Landing.jsx";
import Projects from "../Projects/Projects.jsx";
import Experience from "../Experience/Experience.jsx";
import Contact from "../Contact/Contact.jsx";
import Skills from "../Skills/Skills.jsx";
import Footer from "../Footer/Footer.jsx";
import OtherProjects from "../Other projects/Other_Projects.jsx";

const About = () => {
  // State:
  const [activeSection, setActiveSection] = useState("");

  // Functions to handle scroll:
  const handleScroll = () => {
    const sections = ["aboutMe", "projects", "experience", "getInTouch"];
    const scrollPosition = window.scrollY;

    const newActiveSection = sections.find((section) => {
      const element = document.getElementById(section);
      return element && element.offsetTop <= scrollPosition + 100;
    });

    setActiveSection(newActiveSection || "");
  };

  // UseEffect to handle scroll:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to get the active section:
  const getNavLinkClass = (section) =>
    section === activeSection ? style.underline : "";

  // Framer motion variants:
  const boxVariants = {
    hidden: { opacity: 0, x: window.innerWidth < 767 ? 0 : -1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

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
          className={style.scrollUp}
        />
        <Container fluid className={style.about}>
          <Row>
            <motion.h2
              className={`text-center ${style.about_heading} ${getNavLinkClass(
                "aboutMe"
              )}`}
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
                        quality and well-organized code, ensuring optimal user
                        experiences are prioritized at all times. <br />
                        <a
                          href="#getInTouch"
                          style={{
                            textDecoration: "underline",
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
