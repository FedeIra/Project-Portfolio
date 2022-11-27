/* built footer: */
import React from 'react';
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '130px',
        width: '100%',
        background: 'linear-gradient(0deg, rgba(4, 1, 19, 0.5), #1a294e)',
        color: 'white',
        fontSize: '1.5rem',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link-wrapper">
            <div
              className="footer__link-items"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '350px',
              }}
            >
              <a
                href="https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaLinkedin size="1.5rem" color="white" />}
                />
              </a>
              <a
                href="https://github.com/FedeIra"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaGithub size="1.5rem" color="white" />}
                />
              </a>
              <a
                href="mailto: fedeirar@gmail.com"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaEnvelope size="1.5rem" color="white" />}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5491167887879&text=Hey"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaWhatsapp size="1.5rem" color="white" />}
                />
              </a>
              <a
                href="https://www.instagram.com/fedeira/"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaInstagram size="1.5rem" color="white" />}
                />
              </a>
              <a
                href="https://www.facebook.com/fede.irarrazaval"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  colorScheme="whiteAlpha"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<FaFacebook size="1.5rem" color="white" />}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
