import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IconButton } from '@chakra-ui/react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link-wrapper">
            <div
              className="footer__link-items"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '300px',
              }}
            >
              <a
                href="https://www.linkedin.com/in/federico-irarr%C3%A1zaval-314b89a1/"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  size="lg"
                  icon={<FaLinkedin size="1.5rem" />}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0',
                  }}
                />
              </a>
              <a
                href="https://github.com/FedeIra"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  size="lg"
                  icon={<FaGithub size="1.5rem" />}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0',
                  }}
                />
              </a>
              <a
                href="mailto: fedeirar@gmail.com"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  size="lg"
                  icon={<FaEnvelope size="1.5rem" />}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0',
                  }}
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5491167887879&text=Hey"
                target="blank"
                rel="nofollow"
              >
                <IconButton
                  size="lg"
                  icon={<FaWhatsapp size="1.5rem" />}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0',
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={style.copyright}> © 2022 Federico Irarrazaval</p>
      </div>
    </footer>
  );
};

export default Footer;
