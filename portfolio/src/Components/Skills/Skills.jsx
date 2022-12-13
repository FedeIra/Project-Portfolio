import React from 'react';
import style from './Skills.module.css';
import * as images from './Assets/skill_images.js';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      className={style.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {
          opasity: 0,
          x: 1000,
        },
        visible: {
          opasity: 1,
          x: 0,
          transition: { duration: 1 },
        },
      }}
    >
      <Row className={style.row}>
        <Col xs={6} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.client_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'invert(0)',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>User Oriented</h2>
            <Col md={{ span: 11, offset: 2 }}>
              <p>Fulfill user's needs, my highest priority.</p>
            </Col>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.responsive_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Responsive</h2>
            <Col md={{ span: 10, offset: 1 }}>
              <p>My layouts will work on any device, big or small.</p>
            </Col>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.quality_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Quality</h2>
            <Col md={{ span: 10, offset: 1 }}>
              <p>
                I'm not satisfied with anything less than the best quality I can
                deliver.
              </p>
            </Col>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.dinamic_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Dynamic</h2>
            <Col md={{ span: 10, offset: 1 }}>
              <p>I enjoy turning static websites to a living thing.</p>
            </Col>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Skills;
