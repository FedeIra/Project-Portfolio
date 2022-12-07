import React from 'react';
import style from './Landing.module.css';
import { Container, Nav } from 'react-bootstrap';
import { IconButton } from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { HiOutlineArrowRight } from 'react-icons/hi';

import { motion } from 'framer-motion';

const Landing = () => {
  const [buttonHover, setButtonHover] = React.useState(false);

  const button = (
    <button
      style={{
        position: 'absolute',
        top: '60vh',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // display: 'flex',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
      variant="outline-light"
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
    >
      {buttonHover ? (
        <Nav.Link href="#aboutMe">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              color: 'black',
              padding: '13px',
              fontSize: '23px',
              fontWeight: 'bold',
              borderRadius: '0',
              backgroundColor: 'white',
              // width: '15%',
            }}
          >
            <IconButton size="lg" icon={<HiOutlineArrowRight size="2rem" />} />
            View my profile!
          </motion.span>
        </Nav.Link>
      ) : (
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
            transition: 'all 0.5s ease',
          }}
          className={style.spanOffHover}
        >
          <IconButton
            size="lg"
            icon={<IoIosArrowForward size="2rem" />}
            style={{
              color: 'black',
              borderRadius: '0',
            }}
          />
          <p className={style.button}> View my profile!</p>
        </span>
      )}
    </button>
  );

  return (
    <Container fluid className={style.landing} id="landing">
      {button}
    </Container>
  );
};

export default Landing;
