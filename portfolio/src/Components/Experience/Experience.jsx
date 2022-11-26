import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import { motion } from 'framer-motion';
import style from './Experience.module.css';
import * as images from '../../Assets/home_images.js';

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
                <div className="float-end">November, 2022 - Ongoing</div>

                <h4 className="card-title text-muted">
                  <img
                    src={images.portfolio_picture}
                    alt="portfolio"
                    width="15"
                  />
                  <strong>Portfolio</strong>
                </h4>

                <p className="card-text text-muted">
                  Built my portfolio using the following techs:
                </p>
                <br />
                <p>HTML | CSS | React | Chakra UI | Bootstrap | JSON </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 2 */}
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
                <div className="float-end">Thu, Dec 10th, 2018</div>
                <h4 className="card-title text-muted">Lecture Day 2</h4>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  atque est vel nesciunt ratione cumque animi eligendi suscipit
                  in ducimus dignissimos laborum necessitatibus dicta illum
                  rerum, voluptatem vitae saepe voluptate.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* Timeline item 3 */}
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
              <div className="card-body">
                <div className="float-end">Thu, Dec 10th, 2015</div>
                <h4 className="card-title text-muted">Lecture Day 3</h4>
                <p className="card-text text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  atque est vel nesciunt ratione cumque animi eligendi suscipit
                  in ducimus dignissimos laborum necessitatibus dicta illum
                  rerum, voluptatem vitae saepe voluptate.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* end time line */}
        <Row>
          <Col xs={12} md={12} lg={12}>
            <motion.h2
              className={`text-center ${style.about_heading}`}
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Background
            </motion.h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
