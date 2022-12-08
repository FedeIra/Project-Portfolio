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
            className={style.spanOnHover}
            /*  style={{
              color: 'black',
              padding: '13px',
              fontSize: '23px',
              fontWeight: 'bold',
              borderRadius: '0',
              backgroundColor: 'white',
            }} */
          >
            <IconButton size="lg" icon={<HiOutlineArrowRight size="2rem" />} />

            <span> View my profile!</span>
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
        >
          <IconButton
            size="lg"
            icon={<IoIosArrowForward size="2rem" />}
            style={{
              color: 'black',
              borderRadius: '0',
              marginRight: '14px',
            }}
          />
          <p> View my profile!</p>
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
