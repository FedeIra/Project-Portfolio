import { useState, useEffect, type FC } from 'react';
import { HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import NavBar from '../../Navigation/components/NavBar';
import landingBg from '../../../Assets/portfolio_General/Landing.gif';

const Landing: FC = () => {
  const [buttonHover, setButtonHover] = useState(false);
  const [, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = window.innerWidth < 767;
  const isTablet = window.innerWidth < 1024 && window.innerWidth > 767;
  const iconSize = isMobile || isTablet ? 'text-lg' : 'text-2xl';

  return (
    <div
      className="h-screen w-screen bg-center bg-no-repeat"
      id="landing"
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundColor: '#161f37',
        backgroundSize: isMobile ? '100vh' : undefined,
      }}
    >
      <NavBar />
      <a href="#aboutMe" className="no-underline">
        <button
          className="absolute top-[60vh] left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block whitespace-nowrap bg-white text-black font-semibold cursor-pointer py-2 pr-4 pl-8 md:text-xl text-[2.5vw] md:py-2 md:pr-4 md:pl-8"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          style={{ fontSize: isMobile ? '2.5vw' : '23px' }}
        >
          View my profile!
          <span className="inline-block ml-2 align-middle">
            <span className={`inline-flex items-center justify-center bg-white ${iconSize}`}>
              {buttonHover ? (
                <HiOutlineArrowDown size={isMobile ? 16 : 32} />
              ) : (
                <HiOutlineArrowRight size={isMobile ? 16 : 32} />
              )}
            </span>
          </span>
        </button>
      </a>
    </div>
  );
};

export default Landing;
