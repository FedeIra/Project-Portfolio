import React from 'react';
import style from './Landing.module.css';
import { Button, Container } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container fluid className={style.landing} id="landing">
      <Button
        className={style.button}
        variant="outline-light"
        size="lg"
        block
        style={{
          position: 'absolute',
          top: '60vh',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        onClick={() => {
          window.location.href = '#navbar';
          window.history.pushState(null, null, window.location.pathname);
        }}
      >
        View my profile! &nbsp;
      </Button>
    </Container>
  );
};

export default Landing;
