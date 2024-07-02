// import external dependencies:
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Eye } from "react-bootstrap-icons";

// import local components:
import * as images from "../../../../Assets/indexExportImages";
import style from "./Background_Courses.module.css";
import backgroundCourses from "./Background Courses Data/Background_Courses.json";
import { getFile } from "../../../../actions";
import useToastNotifications from "../../../../Components/Comments/commentToast/commentToast";

// Define CourseItem for Background_Courses
const CourseItem = ({ course }) => {
  const dispatch = useDispatch();
  const { showToast } = useToastNotifications();

  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [postAttemptPdfView, setPostAttemptPdfView] = useState(false);

  useEffect(() => {
    if (!loading.FILE_REQUEST && postAttemptPdfView) {
      if (error.FILE_FAILURE) {
        showToast({
          title: "Error.",
          description: "Error loading file. Please try again.",
          status: "error",
        });
      }
      setPostAttemptPdfView(false);
    }
  }, [loading.FILE_REQUEST, error.FILE_FAILURE, showToast, postAttemptPdfView]);

  // Define path to icon:
  const icon = require(`./Icons/${course.picture}`);

  const handleGetFile = (key) => {
    if (!user || !user.token) {
      showToast({
        description: "Please log in to view file.",
        status: "warning",
      });
      return;
    }
    dispatch(getFile(user.token, key));
  };

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
              onClick={() => handleGetFile(course.key)}
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

  const { showToast } = useToastNotifications();

  const user = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const [postAttemptPdfView, setPostAttemptPdfView] = useState(false);

  useEffect(() => {
    if (!loading.FILE_REQUEST && postAttemptPdfView) {
      if (error.FILE_FAILURE) {
        showToast({
          title: "Error.",
          description: "Error loading file. Please try again.",
          status: "error",
        });
      }
      setPostAttemptPdfView(false);
    }
  }, [loading.FILE_REQUEST, error.FILE_FAILURE, showToast, postAttemptPdfView]);

  const handleGetFile = (key) => {
    if (!user || !user.token) {
      showToast({
        description: "Please log in to view file.",
        status: "warning",
      });
      return;
    }
    dispatch(getFile(user.token, key));
  };

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
                    handleGetFile(
                      "Certificado Platzi. AWS. Cómputo con EC2.pdf"
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
