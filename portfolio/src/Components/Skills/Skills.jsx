import React from 'react';
import style from './Skills.module.css';
import * as images from './Assets/skill_images.js';
import { Row, Col } from 'react-bootstrap';

const Skills = () => {
  return (
    <div className={style.container}>
      <Row className={style.row}>
        <Col xs={12} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.client_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>User Oriented</h2>
            <Col xs={6} md={{ span: 8, offset: 2 }}>
              <p>Fulfill user's needs, my highest priority.</p>
            </Col>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.responsive_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Responsive</h2>
            <Col xs={6} md={{ span: 9, offset: 2 }}>
              <p>My layouts will work on any device, big or small.</p>
            </Col>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.quality_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Quality</h2>
            <Col xs={6} md={{ span: 11, offset: 1 }}>
              <p>
                I'm not satisfied with anything less than the best quality I can
                deliver.
              </p>
            </Col>
          </div>
        </Col>
        <Col xs={12} md={3}>
          <div className={style.hexagon}>
            <div
              className={style.shape}
              style={{
                backgroundImage: `url(${images.dinamic_picture}
            )`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%)',
              }}
            ></div>
          </div>
          <div className={style.text}>
            <h2 className={style.title}>Dynamic</h2>
            <Col xs={6} md={{ span: 9, offset: 2 }}>
              <p>I enjoy turning static websites to a living thing.</p>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
