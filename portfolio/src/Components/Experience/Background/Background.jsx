import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import BackgroundExperience from './Background Experience/Background_Experience.jsx';
import BackgroundEducation from './Background Education/Background_Education.jsx';

const Background = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundColor: '#172139',
              border: 'none',
            }}
          >
            <Accordion.Header>
              <strong>Background Experience</strong>
            </Accordion.Header>
            <Accordion.Body>
              <BackgroundExperience />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            style={{
              backgroundColor: '#172139',
              border: 'none',
            }}
          >
            <Accordion.Header>
              <strong>Background Education</strong>
            </Accordion.Header>
            <Accordion.Body>
              <BackgroundEducation />
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
};

export default Background;
