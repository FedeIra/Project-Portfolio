import React from 'react';
import style from './NavBar.module.css';
import * as images from '../../Assets/home_images.js';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Icons from './Icons/Icons.jsx';

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
        }}
      >
        <Navbar.Brand href="#landing">
          <img
            src={images.portfolio_picture}
            style={{ filter: 'invert(100%)' }}
            width="30"
            alt="portfolio_image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              className="nav-link"
              style={{ color: 'white' }}
              href="#aboutMe"
            >
              About me
            </Nav.Link>
            <Nav.Link
              className="nav-link "
              style={{ color: 'white' }}
              href="#projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: 'white' }}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: 'white' }}
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
