import React from 'react';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container fluid className={style.landing}>
      <Link to="/about">
        <Button
          className={style.button}
          variant="outline-light"
          size="lg"
          block
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          View my profile! &nbsp;
        </Button>
      </Link>
    </Container>
  );
};

export default Landing;
