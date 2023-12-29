// Import external dependencies:
import React from "react";
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

// Import local dependencies:
import style from "./Footer.module.css";
import footerIconButton from "./Footer Icons/FooterIcons.jsx";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link-wrapper">
            <div
              className="footer__link-items"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "300px",
              }}
            >
              {footerIconButton(
                "https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/",
                <FaLinkedin size="1.5rem" />
              )}
              {footerIconButton(
                "https://github.com/FedeIra",
                <FaGithub size="1.5rem" className={style.link_footer_github} />
              )}
              {footerIconButton(
                "mailto: fedeirar@gmail.com",
                <FaEnvelope size="1.5rem" />
              )}
              {footerIconButton(
                "https://api.whatsapp.com/send?phone=5491167887879&text=Hey",
                <FaWhatsapp size="1.5rem" className={style.link_footer_wa} />
              )}
            </div>
          </div>
        </div>
        <p className={style.copyright}> © 2024 Federico Irarrazaval</p>
      </div>
    </footer>
  );
};

export default Footer;
