import React from 'react';
import style from './NavBar.module.css';
import * as images from '../../Assets/home_images.js';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Icons from './Icons/Icons.jsx';
import './NavBar.module.css';

/* import and use styles from NavBar.module.css: */

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
        <Nav.Link
          style={{
            color: 'white',
            marginLeft: '15px',
          }}
          className="d-lg-none"
          href="#getInTouch"
        >
          Get in touch!
        </Nav.Link>
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
