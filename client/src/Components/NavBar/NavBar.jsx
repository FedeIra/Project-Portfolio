// import external dependencies:
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

// import local components:
import style from "./NavBar.module.css";
import "./NavBar.module.css";
import * as images from "../../Assets/home_images.js";
import Icons from "./Icons/Icons.jsx";

function NavBar() {
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={`
      navbar
      fixed-top
      ${style.navbar_container}`}
    >
      <Container
        color="white"
        style={{
          marginLeft: "5%",
          width: "100%",
        }}
      >
        <Navbar.Brand href="#landing">
          <img
            src={images.portfolio_picture}
            style={{ filter: "invert(100%)", marginLeft: "15px" }}
            width="30"
            alt="portfolio_image"
          />
        </Navbar.Brand>
        <a
          style={{
            color: "white",
            marginLeft: "15px",
          }}
          className="d-lg-none"
          href="#getInTouch"
        >
          Get in touch!
        </a>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav "
          style={{
            boxShadow: "none",
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link
              className="nav-link"
              style={{
                color: "white",
                marginLeft: "15px",
              }}
              href="#aboutMe"
            >
              About me
            </Nav.Link>
            <Nav.Link
              className="nav-link "
              style={{ color: "white", marginLeft: "15px" }}
              href="#projects"
            >
              Personal Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: "white", marginLeft: "15px" }}
              href="#experience"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: "white", marginLeft: "15px" }}
              href="#getInTouch"
            >
              Get in touch
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              style={{ color: "white", marginLeft: "15px" }}
              href="#userComments"
            >
              Post comments
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  style={{
                    color: "white",
                  }}
                >
                  Resume
                </span>
              }
              id="nav-dropdown"
              className={style.navbar_dropdown}
            >
              <NavDropdown.Item>
                <button
                  onClick={() => {
                    window.open(images.cv_english);
                  }}
                >
                  English
                </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button
                  onClick={() => {
                    window.open(images.cv_spanish);
                  }}
                >
                  Spanish
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <button
                  onClick={() => {
                    window.open(images.cv_both);
                  }}
                >
                  Both Languages
                </button>
              </NavDropdown.Item>
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
