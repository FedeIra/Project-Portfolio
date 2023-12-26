import React from 'react';
import style from './Landing.module.css';
import { Nav } from 'react-bootstrap';
import { IconButton } from '@chakra-ui/react';
import { HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import NavBar from '../NavBar/NavBar.jsx';

const Landing = () => {
  const [buttonHover, setButtonHover] = React.useState(false);

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth < 767;
  const isIpad = window.innerWidth < 1024 && window.innerWidth > 767;

  const buttonStyles = {
    position: 'absolute',
    top: isMobile || isIpad ? '56vh' : '62vh',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'inline-block',
    width: 'auto',
    whiteSpace: 'nowrap',
  };

  const button = (
    <Nav.Link href='#aboutMe'>
      <button
        className={style.buttonGeneral}
        style={buttonStyles}
        variant='outline-light'
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
      >
        View my profile!
        {buttonHover ? (
          <div className={style.divOnHover}>
            <IconButton
              backgroundColor='white'
              size={isMobile || isIpad ? 'md' : 'lg'}
              icon={
                <HiOutlineArrowDown size='2rem' className={style.icon_arrow} />
              }
            />
          </div>
        ) : (
          <span>
            <IconButton
              backgroundColor='white'
              size={isMobile || isIpad ? 'md' : 'lg'}
              icon={
                <HiOutlineArrowRight size='2rem' className={style.icon_arrow} />
              }
            />
          </span>
        )}
      </button>
    </Nav.Link>
  );

  return (
    <div>
      <div className={style.landing} id='landing'>
        <NavBar />
        {button}
      </div>
    </div>
  );
};

export default Landing;
