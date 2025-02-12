// Import external dependencies:
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

// Import local dependencies:
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
            py-2`}
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
                    <p className={style.date}>Aug. 2022 - Current</p>
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
                  <p className="card-text text-white">
                    <strong>Backend Developer:</strong>
                  </p>
                  <p className="card-text text-white">
                    I contributed to multiple backend projects, focusing on
                    system integration, architecture optimization, and
                    automation. My responsibilities included leading technical
                    initiatives, and maintaining direct communication with
                    clients to ensure project success.
                    <br /> <br />
                    <p className="card-text text-white">
                      <strong>Technologies & Tools:</strong>
                      TypeScript | JavaScript | Node.js | Fastify | Koa.js |
                      Express.js | PostgreSQL | Sequelize | MongoDB | Moongose |
                      AWS | VTEX.IO | Docker | JIRA | SCRUM | GitHub | Git |
                      Docker
                    </p>
                    <p className="card-text text-white">
                      <strong>Key Projects:</strong>
                    </p>
                    <b> • Nadro: </b> Developed a messaging service leveraging
                    AWS Lambda and SES to enable event-driven notifications and
                    scalable communication.
                    <br /> <br />
                    <b> • Cencosud: </b> Developed a high-performance
                    reconciliation service to match sales records across
                    different platforms, ensuring data accuracy and integrity in
                    financial transactions.
                    <br /> <br />
                    <b> • Cencosud: </b> Designed and implemented an integration
                    with a logistics provider to enable rapid product delivery
                    based on store configurations and order details.
                    <br /> <br />
                    <b> • Gabrica: </b> Built a system for synchronizing
                    promotional campaigns between an external platform and VTEX,
                    automating the management of discounts and special offers.
                    <br /> <br />
                    <b> • Chapur: </b> E-commerce and ERP Synchronization:
                    Developed a service to synchronize payment statuses between
                    the e-commerce platform and the client's ERP system.
                    Additionally, I integrated a payment connector with an
                    external payment provider, ensuring seamless transactions
                    and order processing. <br /> <br />
                    <b> • Vista Energy: </b>
                    Migrated documents and implemented file upload
                    functionalities using PHP and Google Cloud Storage, ensuring
                    a smooth transition and enhanced document management
                    capabilities. <br /> <br />
                    <b> • Macromex: </b>
                    Conducted an architectural audit, analyzed integrations, and
                    optimized custom applications for better performance and
                    scalability.
                    <br /> <br />
                    <b> • Jira integration: </b>
                    Developed a service that integrates with Jira, enabling
                    ticket creation through Google Forms for streamlined issue
                    tracking. <br /> <br />
                    <b> • OBI: </b> Built a service to synchronize stock levels
                    between multiple warehouses, improving inventory management
                    accuracy. <br />
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
                <span className={`badge bg-success border `}>&nbsp;</span>
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
                ></Col>
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
                    <p className={style.date}>Jul. 2022 - Aug. 2022</p>
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
                    Building my portfolio using the following tools:{" "}
                  </p>

                  <p className="card-text text-white">
                    Javascript | Node.js | Express.js | AWS S3 | JWT and
                    Passport | MongoDB | JSON | Email.js | React.js | Redux |
                    HTML | CSS | Chakra UI | Bootstrap | Vercel | Railway |
                    GitHub
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
                    <p className={style.date}>Jun. 2022 - Jul. 2022</p>
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
                    • Third-party authentication with Google;
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
                    Javascript | Node.js | Express.js | JSON | MongoDB |
                    Mongoose | HTML | React.js | Redux.js | CSS | Chakra UI |
                    Cloudinary | Firebase | EmailJS | Railway | Vercel | SCRUM |
                    Trello | GitHub
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
                    <p className={style.date}>May. 2022 - Jun. 2022</p>
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
                    JSON | PostgreSQL | Sequelize | MongoDB | HTML | React.js |
                    Redux.js | CSS | Heroku | Vercel | Railway | GitHub
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

              <Row
                className={`
              h-80
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
            </Col>
            <Col
              className={`
            py-2
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
                    <p className={style.date}>Mar. 2022 - Jul. 2022</p>
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
                    Sequelize | React.js | Redux.js | HTML | CSS | SCRUM |
                    GitHub
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
