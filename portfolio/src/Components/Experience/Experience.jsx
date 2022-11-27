import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import { motion } from 'framer-motion';
import style from './Experience.module.css';
import * as images from '../../Assets/home_images.js';
import Background from './Background/Background.jsx';
import Footer from '../Footer/Footer.jsx';

const Experience = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Experience
            </motion.h2>
          </Col>
        </Row>
        {/* Timeline item 1 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex
            `}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col>&nbsp;</Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5
                className={`m-2
            `}
              >
                <span className={`badge bg-success border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              w-30
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card border-success shadow">
                <div
                  className="card-body
              "
                >
                  <div className="float-end">Nov. 2022 - Ongoing</div>

                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.building_picture}
                      alt="building"
                      width="20"
                      className="me-2"
                    />
                    <img
                      src={images.portfolio_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong> Project Portfolio</strong>
                  </h4>

                  <p className="card-text text-muted">
                    Building my portfolio using the following techs:
                    <br />
                    Javascript | JSON | HTML | React.js | CSS | Chakra UI |
                    Bootstrap | Email.js | Toastify
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 2 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              w-30
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border-success`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div className="card-body">
                  <div className="float-end">Oct. 2022 - Nov. 2022</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.kinema_logo}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>Project Kinema</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Team project to build a movie and TV show streaming service
                    that includes the following features: <br /> • Third-party
                    authentication (Google);
                    <br /> • Stripe payment platform integration; <br />•
                    Combined filters; <br />• Image loading with Cloudinary;{' '}
                    <br />• Cloudinary/upload/bucket; <br />• E-mail and live
                    notifications; <br />• Logic user delete; <br />• Redux
                    persist; <br />• Likes and review system; and <br />•
                    Dashboard admin. and owner.
                  </p>
                  <br />
                  <p className="card-text text-muted">
                    Kinema was built using the following tools:
                    <br />
                    Javascript | Node.js | Express.js | JSON | Mongo Db |
                    Mongoose | HTML | React.js | Redux.js | CSS | Chakra UI |
                    Cloudinary | Firebase | Toastify | emailJS | Railway |
                    Vercel | SCRUM
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 3 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> Sep. 2022 - Oct. 2022</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.gaming_logo}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>Project Gaming & Beyond</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Individual Project to build a single page application
                    consisting of videogames information with the following
                    features:
                    <br /> • Interaction with API data;;
                    <br /> • Combined filters and sorts; <br />• Combined
                    filters;
                    <br />• Paginate; and <br />• User can create, modify and
                    delete added videgoames.
                  </p>
                  <br />
                  <p className="card-text text-muted">
                    G&B was built using the following tools:
                    <br />
                    Javascript | Node.js | Express.js | JSON | PostgreSQL |
                    Sequelize | HTML | React.js | Redux.js | CSS Railway |
                    Vercel | Railway
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 4 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4 }}
        >
          {' '}
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> June. 2022 - Nov. 2022</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.henry_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>Henry Bootcamp</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Henry Bootcamp. 1000 hours of a theoretical-practical
                    course.
                  </p>
                  <br />
                  <p className="card-text text-muted">
                    Technologies: Javascript | Node.js | Express | PostgreSQL |
                    Sequelize | React.js | Redux.js | HTML | CSS | SCRUM
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>

        {/* Timeline item 5 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          {' '}
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> Nov. 2021 - Jan. 2022</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.educacionIT_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>EducacionIT</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Online Course, Python Programming.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>

        {/* Timeline item 6 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 6 }}
        >
          {' '}
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> May. 2021 - Jan 2022</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.pildoras_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>Píldoras Informáticas</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Online Course, Python programming.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>

        {/* Timeline item 7 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 7 }}
        >
          {' '}
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> Oct. 2021 - Dec. 2021</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.educacionIT_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>EducacionIT</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Online Course, Python for non-programmers.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>

        {/* Timeline item 8 */}
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 8 }}
        >
          {' '}
          <Row>
            <Col
              className={`
            text-center
            flex-column
            d-none
            d-sm-flex`}
              xs={3}
              md={3}
              lg={3}
            >
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5 className={`m-2`}>
                <span className={`badge bg-dark border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-50
              `}
              >
                <Col
                  className={`
                border-end
                `}
                >
                  &nbsp;
                </Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
            <Col
              className={`
            py-2`}
            >
              <div className="card">
                <div
                  className="card-body
              "
                >
                  <div className="float-end"> May 2021 - May 2021</div>
                  <h4 className="d-flex card-title text-muted">
                    <img
                      src={images.linkedin_picture}
                      alt="portfolio"
                      width="20"
                      className="me-2"
                    />
                    <strong>LinkedIn Learning</strong>
                  </h4>
                  <p className="card-text text-muted">
                    Online Course, Intro to Python.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* end time line */}
        <Row>
          <Col xs={12} md={12} lg={12}>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 9 }}
            >
              Background
            </motion.h2>
          </Col>
        </Row>
        <Background />
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Experience;
