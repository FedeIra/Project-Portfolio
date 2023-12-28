// Import external dependencies:
import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { HiOutlineArrowRight, HiOutlineArrowDown } from "react-icons/hi";
import { IconButton } from "@chakra-ui/react";

// Import local dependencies:
import NavBar from "../NavBar/NavBar.jsx";
import style from "./Landing.module.css";

// Component definition:
const Landing = () => {
  // State management:
  const [buttonHover, setButtonHover] = useState(false);
  const handleMouseEnter = () => setButtonHover(true);
  const handleMouseLeave = () => setButtonHover(false);

  const [, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      handleWindowSize();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = window.innerWidth < 767;
  const isIpad = window.innerWidth < 1024 && window.innerWidth > 767;

  const button = (
    <Nav.Link href="#aboutMe">
      <button
        className={`${style.buttonGeneral} ${style.buttonStyles}`}
        variant="outline-light"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        View my profile!
        {buttonHover ? (
          <div className={style.divOnHover}>
            <IconButton
              backgroundColor="white"
              size={isMobile || isIpad ? "md" : "lg"}
              icon={
                <HiOutlineArrowDown size="2rem" className={style.icon_arrow} />
              }
            />
          </div>
        ) : (
          <span>
            <IconButton
              backgroundColor="white"
              size={isMobile || isIpad ? "md" : "lg"}
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
