import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import BackgroundExperience from './Background Experience/Background_Experience.jsx';
import BackgroundEducation from './Background Education/Background_Education.jsx';

const Background = () => {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>Background Experience</strong>
        </Accordion.Header>
        <Accordion.Body>
          <BackgroundExperience />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <strong>Background Education</strong>
        </Accordion.Header>
        <Accordion.Body>
          <BackgroundEducation />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Background;
