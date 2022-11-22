import React from 'react';
import * as images from '../../Assets/home_images';
import style from './Experience.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar.jsx';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className={style.container_general}>
      <NavBar />
      <Container fluid className={style.about}>
        <Row className={style.about_row}>
          <Col xs={12} md={12} className={style.about_col_text}>
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
              <p>Here will go my cards</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
