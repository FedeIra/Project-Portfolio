import React from 'react';
import style from './Landing.module.css';
import { Nav } from 'react-bootstrap';
import { IconButton } from '@chakra-ui/react';
import { HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import NavBar from '../NavBar/NavBar.jsx';

const Landing = () => {
  const [buttonHover, setButtonHover] = React.useState(false);

  const button = (
    <Nav.Link href="#aboutMe">
      <button
        className={style.buttonGeneral}
        style={{
          position: 'absolute',
          top: '61.5vh',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'inline-block',
          width: 'auto',
          whiteSpace: 'nowrap',
        }}
        variant="outline-light"
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        View my profile!
        {buttonHover ? (
          <div className={style.divOnHover}>
            <IconButton
              backgroundColor="white"
              size="lg"
              icon={
                <HiOutlineArrowDown size="2rem" className={style.icon_arrow} />
              }
            />
          </div>
        ) : (
          <span>
            <IconButton
              backgroundColor="white"
              size="lg"
              icon={
                <HiOutlineArrowRight size="2rem" className={style.icon_arrow} />
              }
            />
          </span>
        )}
      </button>
    </Nav.Link>
  );

  return (
    <div>
      <div className={style.landing} id="landing">
        <NavBar />
        {button}
      </div>
    </div>
  );
};

export default Landing;
