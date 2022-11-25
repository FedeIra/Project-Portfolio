import React from 'react';
import {
  Container,
  Row,
  Col,
  Popover,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import { motion } from 'framer-motion';
import style from './Experience.module.css';

const Experience = () => {
  return (
    <div>
      <NavBar />
      <Container /* fluid */>
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
            d-sm-flex`}
          >
            <Row
              className={`
              h-50
              `}
            >
              <Col>&nbsp;</Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5 className={`m-2`}>
              <span className={`badge rounded-circle bg-dark border`}>
                &nbsp;
              </span>
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
                <div className="float-end">Thu, Dec 10th, 2020</div>
                <h4 className="card-title text-muted">Lecture Day 1</h4>
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
        {/* Timeline item 2 */}
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
