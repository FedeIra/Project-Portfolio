// import external dependencies:
import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";

// import local components:
import BackgroundExperience from "./Background Experience/Background_Experience.jsx";
import BackgroundEducation from "./Background Education/Background_Education.jsx";
import ProgrammingCourses from "./Background courses/Background_Courses.jsx";

const Background = () => {
  return (
    <Accordion defaultActiveKey={["0"]}>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <Accordion.Item
            active={true}
            eventKey="courses"
            style={{
              backgroundColor: "white",
              border: "1px solid #172139",
              borderRadius: "0px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Accordion.Header>
              <strong>Programming Courses</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#172139",
              }}
            >
              <ProgrammingCourses />
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item
            eventKey="experience"
            active={false}
            style={{
              backgroundColor: "white",
              border: "1px solid #172139",
              borderRadius: "0px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Accordion.Header>
              <strong>Background Experience</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#172139",
              }}
            >
              <BackgroundExperience />
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item
            active={false}
            eventKey="education"
            style={{
              backgroundColor: "white",
              border: "1px solid #172139",
              borderRadius: "0px",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <Accordion.Header>
              <strong>Background Education</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: "#172139",
              }}
            >
              <BackgroundEducation />
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
};

export default Background;
