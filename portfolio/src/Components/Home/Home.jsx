import React from 'react';
import style from './Home.module.css';
import Landing from '../Landing/Landing.jsx';
import Experience from '../Experience/Experience.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import About from '../About/About.jsx';

const Home = () => {
  return (
    <div className={style.container_general}>
      <Landing />
      <NavBar />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
