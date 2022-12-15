import React from 'react';
import style from './Landing.module.css';
import { Nav } from 'react-bootstrap';
import { IconButton } from '@chakra-ui/react';
import { HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import NavBar from '../NavBar/NavBar.jsx';

const Landing = () => {
  const [buttonHover, setButtonHover] = React.useState(false);

  const isMobile1 = window.innerWidth < 767;
  const isIpad1 = window.innerWidth < 1024 && window.innerWidth > 767;

  const button = (
    <Nav.Link href="#aboutMe">
      <button
        className={style.buttonGeneral}
        style={{
          position: 'absolute',
          top: isMobile1 ? '60vh' : '62vh',
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
              size={isMobile1 ? 'md' : isIpad1 ? 'md' : 'lg'}
              icon={
                <HiOutlineArrowDown size="2rem" className={style.icon_arrow} />
              }
            />
          </div>
        ) : (
          <span>
            <IconButton
              backgroundColor="white"
              size={isMobile1 ? 'md' : isIpad1 ? 'md' : 'lg'}
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
