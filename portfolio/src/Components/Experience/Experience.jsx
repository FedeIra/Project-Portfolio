import React from 'react';
import * as images from '../../Assets/home_images';
import style from './Experience.module.css';
import { Container, Row, Col, Popover, OverlayTrigger } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import ProjectKinema from './Projects/Projects.jsx';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa';

const Experience = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        <strong>Enjoy some pics!</strong>
      </Popover.Header>
      <Popover.Body>
        <ProjectKinema />
      </Popover.Body>
    </Popover>
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
                          <a
                            href="https://kinema-entertainment.vercel.app/"
                            target="blank"
                            rel="nofollow"
                          >
                            <FaGlobe />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className={style.card}>
                        <div className={style.img1}>
                          <img src={images.gaming1} alt="gaming" />
                        </div>
                        <div className={style.img2}>
                          <img src={images.gaming_logo} alt="gaming-logo" />
                        </div>
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
                          <a
                            href="https://gamingweb.vercel.app/"
                            target="blank"
                            rel="nofollow"
                          >
                            <FaGlobe />
                          </a>
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
    </div>
  );
};

export default Experience;
