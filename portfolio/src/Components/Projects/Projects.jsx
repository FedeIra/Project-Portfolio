import React from 'react';
import * as images from '../../Assets/home_images';
import style from './Projects.module.css';
import {
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import ProjectKinema from './Projects/ProjectKinema.jsx';
import ProjectGaming from './Projects/ProjectGaming.jsx';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa';
import Footer from '../Footer/Footer.jsx';

const Projects = () => {
  const popover = (
    <Popover
      id="popover-basic"
      className={style.popover}
      style={{
        width: '60rem',
        maxWidth: '100%',
      }}
    >
      <Popover.Body>
        <ProjectKinema />
      </Popover.Body>
    </Popover>
  );

  const popover2 = (
    <Popover
      id="popover-basic"
      className={style.popover}
      style={{
        width: '60rem',
        maxWidth: '100%',
      }}
    >
      <Popover.Body>
        <ProjectGaming />
      </Popover.Body>
    </Popover>
  );

  const renderTextProject = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );

  return (
    <div className={style.container_general}>
      <NavBar />
      <Container fluid className={style.about}>
        <Row className={style.about_row}>
          <Col xs={11} md={12} lg={12} className={style.about_col_text}>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={style.profile_area}>
                <div>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div
                      className="col-md-4"
                      style={{
                        marginBottom: '40px',
                      }}
                    >
                      <div className={style.card}>
                        <div className={style.img1}>
                          <img src={images.kinema_picture2} alt="kinema" />
                        </div>
                        <OverlayTrigger
                          trigger="click"
                          placement="bottom"
                          overlay={popover}
                        >
                          <div className={style.img2}>
                            <img src={images.kinema_logo} alt="kinema-logo" />
                          </div>
                        </OverlayTrigger>
                        <div className={style.main_text}>
                          <h2>Kinema</h2>

                          <p>
                            Kinema is a movie and TV Show streaming website with
                            the following features: Third-party authentication
                            (Google); Stripe payment platform integration;
                            Combined filters; Image loading with Cloudinary;
                            E-mail and live notifications; Logic user delete;
                            Redux persist; Rating and review system; and Admin.
                            and owner dashboard.
                          </p>
                          <br />
                          <div className={style.stars}>
                            <FaStar
                              style={{
                                color: 'orange',
                              }}
                            />
                            <p>
                              Selected by Henry among the best 4 projects of the
                              course.
                            </p>
                          </div>
                        </div>
                        <div className={style.socials}>
                          <a
                            href="https://github.com/PG-Movies-Group-1/Kinema-Project"
                            target="blank"
                            rel="nofollow"
                          >
                            <FaGithub />
                          </a>
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTextProject('Go see Kinema!')}
                          >
                            <a
                              href="https://kinema-entertainment.vercel.app/"
                              target="blank"
                              rel="nofollow"
                            >
                              <FaGlobe />
                            </a>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={style.card}>
                        <div className={style.img1}>
                          <img src={images.gaming1} alt="gaming" />
                        </div>
                        <OverlayTrigger
                          trigger="click"
                          placement="bottom"
                          overlay={popover2}
                        >
                          <div className={style.img2}>
                            <img src={images.gaming_logo} alt="gaming-logo" />
                          </div>
                        </OverlayTrigger>

                        <div className={style.main_text}>
                          <h2>Gaming & Beyond</h2>
                          <p>
                            G&B is a gaming website with the following features:
                            Search engine; Combined filters and sorts; Paging;
                            User interaction to create, delete and modify
                            videogames added by users.
                          </p>
                        </div>
                        <div className={style.socials}>
                          <a
                            href="https://github.com/FedeIra/VideoGames-Web"
                            target="blank"
                            rel="nofollow"
                          >
                            <FaGithub />
                          </a>
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTextProject('Go see G&B!')}
                          >
                            <a
                              href="https://gamingweb.vercel.app/"
                              target="blank"
                              rel="nofollow"
                            >
                              <FaGlobe />
                            </a>
                          </OverlayTrigger>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
