// import external dependencies:
import React from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";

// import local components:
import * as images from "../../../../Assets/indexExportImages";
import style from "./Background_Courses.module.css";
import backgroundCourses from "./Background Courses Data/Background_Courses.json";
import { getFile } from "../../../../actions";

// Define CourseItem for Background_Courses
const CourseItem = ({ course }) => {
  const dispatch = useDispatch();

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
              <p className={style.date}>{course.date}</p>
            </div>
            <h4 className="d-flex card-title text-white align-items-center">
              <img src={icon} alt={course.title} width="40" className="me-2" />
              <strong>{course.title}</strong>
            </h4>
            <p className="card-text text-white">{course.description}</p>
            <button
              onClick={() => dispatch(getFile(course.key))}
              className={style.icon_eye}
            >
              <Eye size={20} />
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

// Main component:
const Background_Courses = () => {
  const dispatch = useDispatch();
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
                  backgroundColor: "#2ECC71",
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
                  <p className={style.date}> 2024 </p>
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
                  AWS. Amazon Elastic Compute Cloud (EC2).
                </p>
                <button
                  onClick={() =>
                    dispatch(
                      getFile("Certificado Platzi. AWS. Cómputo con EC2.pdf")
                    )
                  }
                  className={style.icon_eye}
                >
                  <Eye size={20} />
                </button>
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
