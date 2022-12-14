import React from 'react';
import style from './NavBar.module.css';
import * as images from '../../Assets/home_images.js';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Icons from './Icons/Icons.jsx';
import './NavBar.module.css';
/* import pdf download link from react: */
import { PDFDownloadLink } from 'react-pdf';

function NavBar() {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`
      navbar
      sticky-top
      ${style.navbar_container}`}
    >
      <Container
        color="white"
        style={{
          marginLeft: '5%',
          width: '100%',
        }}
      >
        <Navbar.Brand href="#landing">
          <img
            src={images.portfolio_picture}
            style={{ filter: 'invert(100%)', marginLeft: '15px' }}
            width="30"
            alt="portfolio_image"
          />
        </Navbar.Brand>
        <a
          style={{
            color: 'white',
            marginLeft: '15px',
          }}
          className="d-lg-none"
          href="#getInTouch"
        >
          Get in touch!
        </a>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
          style={{
            boxShadow: 'none',
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              className="nav-link"
              style={{
                color: 'white',
                marginLeft: '15px',
              }}
              href="#aboutMe"
            >
              About me
            </Nav.Link>
            <Nav.Link
              className="nav-link "
              style={{ color: 'white', marginLeft: '15px' }}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: 'white', marginLeft: '15px' }}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: 'white', marginLeft: '15px' }}
              href="#getInTouch"
            >
              Get in touch
            </Nav.Link>
            <NavDropdown title="Download CV" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <PDFDownloadLink
                  /* document is cv_english in assets: */
                  document={images.cv_english}
                  fileName="CV.pdf"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'English'
                  }
                </PDFDownloadLink>
              </NavDropdown.Item>
              <NavDropdown.Item>Spanish</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Both</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className={style.navbar_icons}>
            <Icons />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
