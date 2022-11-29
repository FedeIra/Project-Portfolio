import React from 'react';
import style from './NavBar.module.css';
import * as images from '../../Assets/home_images.js';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`sticky-top 

      ${style.navbar_container}`}
    >
      <Container color="white">
        <Navbar.Brand href="/">
          <img
            src={images.portfolio_picture}
            style={{ filter: 'invert(100%)' }}
            width="30"
            alt="portfolio_image"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: 'white' }} href="/about">
              About me
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/experience">
              Experience & Background
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
