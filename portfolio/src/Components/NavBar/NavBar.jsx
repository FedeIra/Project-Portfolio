import React from 'react';
import style from './NavBar.module.css';

/* import porfolio image: */
import * as images from '../../Assets/home_images.js';

const NavBar = () => {
  return (
    <nav
      className={`navbar navbar-expand-md navbar-light ${style.navbar_container}`}
      id="navbar"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar navbar-expand-md navbar-light ${style.navbar_collapse}`}
          id="navbar-toggler"
        >
          <a className="navbar-brand" href="#">
            <img
              src={images.portfolio_picture}
              alt="portfolio_image"
              width="50px"
            />
          </a>
          <ul
            className="navbar-nav d-flex justify-content-center align-items-center
          "
          >
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
