import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import style from './Projects.module.css';
import * as images from '../../Assets/home_images';
import { FaGithub, FaGlobe, FaStar } from 'react-icons/fa';
import Overlay from './Overlays/Overlay.jsx';
import { IconButton } from '@chakra-ui/react';

const Projects = () => {
  return (
    <div id="projects">
      <motion.h2
        className={`text-center ${style.projects_heading}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -1000 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          },
        }}
      >
        Projects
      </motion.h2>
      <Container fluid className={style.project}>
        <Row>
          <Col xs={12} md={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 1000 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1 },
                },
              }}
            >
              <div className={style.profile_area}>
                <div>
                  <Row
                    className="
                  justify-content-center
                  "
                  >
                    <div
                      className="col-md-4"
                      style={{
                        marginBottom: '30px',
                      }}
                    >
                      <Card
                        className={style.card}
                        style={{
                          borderRadius: '0',
                        }}
                      >
                        <div className={style.img1}>
                          <Card.Img src={images.kinema_picture2} alt="kinema" />
                          <Card.ImgOverlay className={style.card_overlay}>
                            <Overlay name={'Kinema'} />
                          </Card.ImgOverlay>
                        </div>
                        <div className={style.img2}>
                          <img src={images.kinema_logo} alt="kinema-logo" />
                        </div>

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
                            <IconButton
                              colorScheme="transparent"
                              fontSize="20px"
                              icon={
                                <FaStar
                                  size="1.4rem"
                                  color="orange"
                                  className={style.iconStar}
                                />
                              }
                            />
                            <p>
                              Selected by Henry among the best 4 projects of the
                              course.
                            </p>
                          </div>
                        </div>
                        <div className={style.socials}>
                          <Row>
                            <Col xs={12} md={6} className={style.buttonColumns}>
                              <a
                                href="https://kinema-entertainment.vercel.app/"
                                target="blank"
                                rel="nofollow"
                              >
                                <Button
                                  variant="primary"
                                  className={style.buttonCard}
                                  style={{
                                    borderRadius: '0',
                                    paddingRight: '20px',
                                  }}
                                >
                                  View Site
                                  <IconButton
                                    colorScheme="transparent"
                                    aria-label="Call Segun"
                                    fontSize="20px"
                                    icon={<FaGlobe size="1.4rem" />}
                                  />
                                </Button>
                              </a>
                            </Col>
                            <Col xs={12} md={6} className={style.buttonColumns}>
                              <a
                                href="https://github.com/PG-Movies-Group-1/Kinema-Project"
                                target="blank"
                                rel="nofollow"
                              >
                                <Button
                                  variant="secondary"
                                  className={style.buttonCard}
                                  style={{
                                    borderRadius: '0',
                                  }}
                                >
                                  View Code
                                  <IconButton
                                    colorScheme="transparent"
                                    fontSize="20px"
                                    icon={<FaGithub size="1.4rem" />}
                                  />
                                </Button>
                              </a>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    </div>
                    <div className="col-md-4">
                      <Card
                        className={style.card}
                        style={{
                          borderRadius: '0',
                        }}
                      >
                        <div className={style.img1}>
                          <Card.Img src={images.gaming1} alt="gaming" />
                          <Card.ImgOverlay className={style.card_overlay}>
                            <Overlay name={'G&B'} />
                          </Card.ImgOverlay>
                        </div>
                        <div className={style.img2}>
                          <img src={images.gaming_logo} alt="gaming-logo" />
                        </div>
                        <div className={style.main_text}>
                          <h2>Gaming & Beyond</h2>
                          <p
                            style={{
                              marginBottom: '17px',
                            }}
                          >
                            G&B is a gaming website with the following features:
                            Search engine; Combined filters and sorts; Paging;
                            User interaction to create, delete and modify
                            videogames added by users.
                          </p>
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        <div className={style.socials}>
                          <Row>
                            <Col xs={12} md={6} className={style.buttonColumns}>
                              <a
                                href="https://gamingweb.vercel.app/"
                                target="blank"
                                rel="nofollow"
                              >
                                <Button
                                  variant="primary"
                                  className={style.buttonCard}
                                  style={{
                                    borderRadius: '0',
                                    paddingRight: '20px',
                                  }}
                                >
                                  View Site
                                  <IconButton
                                    colorScheme="transparent"
                                    fontSize="20px"
                                    icon={<FaGlobe size="1.4rem" />}
                                  />
                                </Button>
                              </a>
                            </Col>
                            <Col xs={12} md={6} className={style.buttonColumns}>
                              <a
                                href="https://github.com/FedeIra/VideoGames-Web"
                                target="blank"
                                rel="nofollow"
                              >
                                <Button
                                  variant="secondary"
                                  className={style.buttonCard}
                                  style={{
                                    borderRadius: '0',
                                  }}
                                >
                                  View Code
                                  <IconButton
                                    colorScheme="transparent"
                                    fontSize="20px"
                                    icon={<FaGithub size="1.4rem" />}
                                  />
                                </Button>
                              </a>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    </div>
                  </Row>
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
