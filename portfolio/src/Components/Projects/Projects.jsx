import React from 'react';
import {
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger,
  Tooltip,
  Button,
  Card,
} from 'react-bootstrap';
import ProjectKinema from './Projects/ProjectKinema.jsx';
import ProjectGaming from './Projects/ProjectGaming.jsx';
import { motion } from 'framer-motion';
import style from './Projects.module.css';
import * as images from '../../Assets/home_images';
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa';
import Overlay from './Overlays/Overlay.jsx';

const Projects = () => {
  const renderTextProject = (text) => (
    <Tooltip id="button-tooltip" className={style.tooltip}>
      {text}
    </Tooltip>
  );

  return (
    <div id="projects">
      <motion.h2
        className={`text-center ${style.projects_heading}`}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <Container fluid className={style.project}>
        <Row>
          <Col xs={12} md={12}>
            <motion.div
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className={style.profile_area}>
                <div>
                  <div
                    className="row
                  justify-content-center
                  "
                  >
                    <div
                      className="col-md-4"
                      style={{
                        marginBottom: '30px',
                      }}
                    >
                      <Card className={style.card}>
                        <div className={style.img1}>
                          <Card.Img src={images.kinema_picture2} alt="kinema" />
                          <Card.ImgOverlay className={style.card_overlay}>
                            <Overlay name={'Kinema'} />
                          </Card.ImgOverlay>
                        </div>
                        <a
                          href="https://kinema-entertainment.vercel.app/"
                          target="blank"
                          rel="nofollow"
                        >
                          <div className={style.img2}>
                            <img src={images.kinema_logo} alt="kinema-logo" />
                          </div>
                        </a>
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
                            href="https://kinema-entertainment.vercel.app/"
                            target="blank"
                            rel="nofollow"
                          >
                            <Button
                              variant="primary"
                              className={style.buttonCard}
                            >
                              View site
                              <FaGlobe
                                style={{
                                  marginLeft: '5px',
                                  fontSize: '20px',
                                }}
                              />
                            </Button>
                          </a>
                          <a
                            href="https://github.com/PG-Movies-Group-1/Kinema-Project"
                            target="blank"
                            rel="nofollow"
                          >
                            <Button
                              variant="secondary"
                              className={style.buttonCard}
                            >
                              View Code
                              <FaGithub
                                style={{
                                  marginLeft: '5px',
                                  fontSize: '20px',
                                }}
                              />
                            </Button>
                          </a>
                        </div>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card className={style.card}>
                        <div className={style.img1}>
                          <Card.Img src={images.gaming1} alt="gaming" />
                          <Card.ImgOverlay className={style.card_overlay}>
                            <Overlay name={'Gaming & Beyond'} />
                          </Card.ImgOverlay>
                        </div>
                        <a
                          href="https://gamingweb.vercel.app/"
                          target="blank"
                          rel="nofollow"
                        >
                          <div className={style.img2}>
                            <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 100, hide: 0 }}
                              overlay={renderTextProject('Go see G&B!')}
                            >
                              <img src={images.gaming_logo} alt="gaming-logo" />
                            </OverlayTrigger>
                          </div>
                        </a>
                        <div className={style.main_text}>
                          <h2>Gaming & Beyond</h2>
                          <p>
                            G&B is a gaming website with the following features:
                            Search engine; Combined filters and sorts; Paging;
                            User interaction to create, delete and modify
                            videogames added by users.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className={style.socials}>
                          <a
                            href="https://gamingweb.vercel.app/"
                            target="blank"
                            rel="nofollow"
                          >
                            <Button
                              variant="primary"
                              className={style.buttonCard}
                            >
                              View site
                              <FaGlobe
                                style={{
                                  marginLeft: '5px',
                                  fontSize: '20px',
                                }}
                              />
                            </Button>
                          </a>
                          <a
                            href="https://github.com/FedeIra/VideoGames-Web"
                            target="blank"
                            rel="nofollow"
                          >
                            <Button
                              variant="secondary"
                              className={style.buttonCard}
                            >
                              View Code
                              <FaGithub
                                style={{
                                  marginLeft: '5px',
                                  fontSize: '20px',
                                }}
                              />
                            </Button>
                          </a>
                        </div>
                      </Card>
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

export default Projects;
