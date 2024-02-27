// import external dependencies:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import local components:
import * as images from '../../../../Assets/home_images';
import style from './Background_Courses.module.css';
import backgroundCourses from './Background Courses Data/Background_Courses.json';

// Define CourseItem for Background_Courses
const CourseItem = ({ course }) => {
  // Define path to icon:
  const icon = require(`./Icons/${course.picture}`);
  return (
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
        <Row className={`h-0`}>
          <Col className={`border-end`}>&nbsp;</Col>
          <Col>&nbsp;</Col>
        </Row>
        <h5 className={`m-0`}>
          <span className={`badge bg-success border`}>&nbsp;</span>
        </h5>
        <Row className={`h-100`}>
          <Col className={`border-end`}>&nbsp;</Col>
          <Col>&nbsp;</Col>
        </Row>
      </Col>
      <Col className={`py-3`}>
        <div
          className="card"
          style={{
            borderRadius: '0',
          }}
        >
          <div
            className="card-body"
            style={{
              backgroundColor: 'rgba(4, 1, 19, 0.9)',
            }}
          >
            <div className="float-end text-white">
              <p className={style.date}>{course.date}</p>
            </div>
            <h4 className="d-flex card-title text-white align-items-center">
              <img src={icon} alt={course.title} width="40" className="me-2" />
              <strong>{course.title}</strong>
            </h4>
            <p className="card-text text-white">{course.description}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

// Main component:
const Background_Courses = () => {
  return (
    <div>
      <Container>
        {/* Timeline item 1 */}
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
              <Col>&nbsp;</Col>
              <Col>&nbsp;</Col>
            </Row>
            <h5 className={`m-0`}>
              <span
                className={`badge border`}
                style={{
                  backgroundColor: '#2ECC71',
                }}
              >
                &nbsp;
              </span>
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
                borderRadius: '0',
              }}
            >
              <div
                className="card-body
              "
                style={{
                  backgroundColor: 'rgba(4, 1, 19, 0.9)',
                }}
              >
                <div className="float-end text-white">
                  <p className={style.date}> 2023 </p>
                </div>
                <h4 className="d-flex card-title text-white align-items-center">
                  <img
                    src={images.platzi_picture}
                    alt="portfolio"
                    width="40"
                    className="me-2"
                  />
                  <strong>Platzi</strong>
                </h4>
                <p className="card-text text-white">
                  Introduction to AWS. Networking, Governance and Machine
                  Learning.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/*Additional timelines:*/}
        {backgroundCourses.map((course) => (
          <CourseItem course={course} />
        ))}
      </Container>
    </div>
  );
};

export default Background_Courses;
