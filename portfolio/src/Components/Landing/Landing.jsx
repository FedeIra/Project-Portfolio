import React from 'react';
import style from './Landing.module.css';
import { Button, Container } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import { IconButton } from '@chakra-ui/react';

const Landing = () => {
  /* build button for when button hover true: */
  /* state for button hover true to change content of button: */
  const [buttonHover, setButtonHover] = React.useState(false);

  /* build button if hover true: */
  const button = (
    <Button
      className={style.button}
      /* style for button to set on center of screen: */
      style={{
        position: 'absolute',
        top: '60vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      variant="outline-light"
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
    >
      {buttonHover ? (
        <span>
          <span
            /* circle with icon on middle: */
            style={{
              borderRadius: '100%',
              backgroundColor: 'black',
            }}
          >
            <IconButton size="lg" icon={<IoIosArrowForward size="1.5rem" />} />
          </span>
          <span>View my profile!</span>
        </span>
      ) : (
        /* build button with right arrow */
        'View my profile!'
      )}
    </Button>
  );

  return (
    <Container fluid className={style.landing} id="landing">
      {button}
    </Container>
  );
};

export default Landing;

/* 
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
     </Button>; */
