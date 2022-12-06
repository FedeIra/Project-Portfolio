import React from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import BackgroundExperience from './Background Experience/Background_Experience.jsx';
import BackgroundEducation from './Background Education/Background_Education.jsx';

const Background = () => {
  return (
    <Accordion
      /* classname that do not have border radius: */

      defaultActiveKey={['0']}
      alwaysOpen
    >
      <Row>
        <Col xs={12} md={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <Accordion.Item
            eventKey="0"
            style={{
              backgroundColor: 'white',
              border: '1px solid #172139',
              borderRadius: '0px',
            }}
          >
            <Accordion.Header>
              <strong>Background Experience</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: '#172139',
              }}
            >
              <BackgroundExperience />
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item
            eventKey="1"
            style={{
              backgroundColor: 'white',
              border: '1px solid #172139',
              borderRadius: '0px',
            }}
          >
            <Accordion.Header>
              <strong>Background Education</strong>
            </Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: '#172139',
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
