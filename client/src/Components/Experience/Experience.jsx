import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import style from "./Experience.module.css";
import * as images from "../../Assets/indexExportImages.js";
import Background from "./Background/Background.jsx";

const Experience = () => {
  let boxVariants = {};
  const isMobile4 = window.innerWidth < 769;

  if (!isMobile4) {
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
    <div id="experience" className={style.experience_container}>
      <motion.h2
        className={`text-center ${style.about_heading}`}
        initial={window.innerWidth < 769 ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Experience
      </motion.h2>
      <Container>
        {/* Timeline item 1 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <Row>
            <Col
              pro
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
              h-0
              `}
              >
                <Col>&nbsp;</Col>
                <Col>&nbsp;</Col>
              </Row>
              <h5
                className={`m-0
            `}
              >
                <span
                  className={`badge
                  border`}
                  style={{
                    backgroundColor: "#2ECC71",
                  }}
                >
                  &nbsp;
                </span>
              </h5>
              <Row
                className={`
              h-100
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
            py-3`}
            >
              <div
                className="card"
                style={{
                  borderRadius: "0",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgba(4, 1, 19, 0.9)",
                  }}
                >
                  <div className="float-end text-white">
                    <p className={style.date}>Feb. 2023 - Current</p>
                  </div>
                  <h4
                    className="d-flex card-title text-white
                  align-items-center
                  "
                  >
                    <img
                      src={images.itglobers_picture}
                      alt="portfolio"
                      width="40"
                      className="me-2"
                    />
                    <strong> ITGlobers </strong>
                    <span className={style.construction_text}>Present</span>
                  </h4>
                  <p className="card-text text-white">Backend Developer:</p>
                  <p className="card-text text-white">
                    I contributed to the following projects:
                    <br /> <br />
                    <b> • Chapur: </b> E-commerce and ERP Synchronization: I
                    contributed to the development of a service to synchronize
                    order statuses between the e-commerce platform and the
                    client's ERP system, ensuring seamless order management and
                    tracking across platforms. <br /> <br />
                    <b> • Vista Energy: </b>
                    I worked on migrating documents and implementing document
                    upload functionalities with PHP from the repository to
                    Google Cloud Storage buckets, ensuring a seamless transition
                    and enhanced document management capabilities. <br /> <br />
                    <b> • Macromex: </b>
                    Audit of architecture, integrations, and custom applications
                    for e-commerce optimization.
                    <br />
                    <br /> <b> • Chapur: </b> I spearheaded the creation of a
                    middleware designed to facilitate the utilization of payment
                    services from a payment provider. Leading a team in this
                    project, I played a pivotal role in ensuring its successful
                    implementation. Additionally, I developed features for
                    tokenizing credit card data and implementing an autocomplete
                    functionality for payment forms, enhancing the security and
                    user experience of the payment process. <br />
                    <br />
                    <b> • Jira integration: </b>
                    I took the initiative in crafting a service that integrates
                    with Jira, enabling the addition of tickets through Google
                    Forms. <br /> <br />
                    <b> • OBI: </b> I actively participated in the development
                    of a service dedicated to synchronizing product stock levels
                    between two warehouses; and <br />
                  </p>
                  <p className="card-text text-white">
                    The technologies and tools employed in most of these
                    projects are as follows:
                    <br />
                    Javascript | Typescript | Node.js | Koa.js | VTEX.IO | JSON
                    | JIRA | SCRUM | GitHub
                    <br /> <br />
                    Moreover, in most projects, I was responsible for leading a
                    team of developers and maintaining direct communication with
                    the client, ensuring the successful completion of the areas
                    of the project assigned to me.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 2 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
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
              h-0
              `}
              ></Row>
              <h5
                className={`m-0
            `}
              >
                <span className={`badge bg-success border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-100
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
            py-3`}
            >
              <div
                className="card"
                style={{
                  borderRadius: "0",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgba(4, 1, 19, 0.9)",
                  }}
                >
                  <div className="float-end text-white">
                    <p className={style.date}>Nov. 2022 - Dec. 2022</p>
                  </div>
                  <h4
                    className="d-flex card-title text-white
                  align-items-center
                  "
                  >
                    <img
                      src={images.portfolio_picture}
                      alt="portfolio"
                      width="40"
                      className="me-2"
                      style={{
                        filter: "invert(100%)",
                      }}
                    />
                    <strong> Project Portfolio </strong>
                  </h4>
                  <p className="card-text text-white">
                    Building my portfolio using the following techs:{" "}
                  </p>

                  <p className="card-text text-white">
                    Javascript | Node.js | Express.js | JWS and Passpprt |
                    MongoDB | JSON | Email.js | React.js | Redux | HTML | CSS |
                    Chakra UI | Bootstrap | Toastify
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 3 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 2 } },
          }}
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
              h-0
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
              <h5 className={`m-0`}>
                <span className={`badge bg-success border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-100
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
            py-0`}
            >
              <div
                className="card"
                style={{
                  borderRadius: "0",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgba(4, 1, 19, 0.9)",
                  }}
                >
                  <div className="float-end text-white">
                    <p className={style.date}>Oct. 2022 - Nov. 2022</p>
                  </div>
                  <h4 className="d-flex card-title text-white align-items-center">
                    <img
                      src={images.kinema_logo}
                      alt="portfolio"
                      width="40"
                      className="me-2"
                    />
                    <strong>Project Kinema</strong>
                  </h4>
                  <p className="card-text text-white">
                    Team project to build a movie and TV show streaming service
                    that includes the following features: <br />
                  </p>
                  <p className="card-text text-white">
                    • Third-party authentication (Google);
                    <br /> • Stripe payment platform integration; <br />•
                    Combined filters; <br />• Image loading with Cloudinary;{" "}
                    <br />• Cloudinary/upload/bucket; <br />• E-mail and live
                    notifications; <br />• Logic user delete; <br />• Redux
                    persist; <br />• Likes and review system; and <br />•
                    Dashboard admin. and owner.
                  </p>
                  <p className="card-text text-white">
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
        {/* Timeline item 4 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 3 } },
          }}
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
              h-0
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
              <h5 className={`m-0`}>
                <span className={`badge bg-success border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-100
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
            py-3`}
            >
              <div
                className="card"
                style={{
                  borderRadius: "0",
                }}
              >
                <div
                  className="card-body
              "
                  style={{
                    backgroundColor: "rgba(4, 1, 19, 0.9)",
                  }}
                >
                  <div className="float-end text-white">
                    <p className={style.date}>Sep. 2022 - Oct. 2022</p>
                  </div>
                  <h4 className="d-flex card-title text-white align-items-center">
                    <img
                      src={images.gaming_logo}
                      alt="portfolio"
                      width="40"
                      className="me-2"
                    />
                    <strong>Project Gaming & Beyond</strong>
                  </h4>
                  <p className="card-text text-white">
                    Individual Project to build a single page application
                    consisting of videogames information with the following
                    features:
                  </p>
                  <p className="card-text text-white">
                    • Interaction with API data;
                    <br /> • Combined filters and sorts; <br />• Combined
                    filters;
                    <br />• Paginate; and <br />• User can create, modify and
                    delete added videgoames.
                  </p>
                  <p className="card-text text-white">
                    G&B was built using the following tools:
                    <br />
                    Javascript | Typescript | Node.js | Express.js | Fastify |
                    JSON | PostgreSQL | MongoDB Sequelize | HTML | React.js |
                    Redux.js | CSS Railway | Vercel | Railway
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* Timeline item 5 */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -1000 },
            visible: { opacity: 1, y: 0, transition: { duration: 4 } },
          }}
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
              h-0
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
              <h5 className={`m-0`}>
                <span className={`badge bg-success border`}>&nbsp;</span>
              </h5>
              <Row
                className={`
              h-100
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
            py-0
            `}
            >
              <div
                className="card"
                style={{
                  borderRadius: "0",
                }}
              >
                <div
                  className="card-body
              "
                  style={{
                    backgroundColor: "rgba(4, 1, 19, 0.9)",
                  }}
                >
                  <div className="float-end text-white">
                    <p className={style.date}>May. 2022 - Nov. 2022</p>
                  </div>
                  <h4 className="d-flex card-title text-white align-items-center">
                    <img
                      src={images.henry_picture}
                      alt="portfolio"
                      width="40"
                      className="me-2"
                    />
                    <strong>Henry Bootcamp</strong>
                  </h4>
                  <p className="card-text text-white">
                    1000 hours of a theoretical-practical course.
                  </p>
                  <p className="card-text text-white">
                    Technologies: Javascript | Node.js | Express | PostgreSQL |
                    Sequelize | React.js | Redux.js | HTML | CSS | SCRUM
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </motion.h2>
        {/* end time line */}
      </Container>
      <br />
      <br />
      <br />
      <br />
      <motion.h2
        className={`text-center ${style.about_heading}`}
        initial={window.innerWidth < 769 ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true }}
        variants={boxVariants}
      >
        Background
      </motion.h2>
      <Background />
    </div>
  );
};

export default Experience;
