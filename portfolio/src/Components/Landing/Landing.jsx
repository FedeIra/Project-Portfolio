import React from 'react';
import style from './Landing.module.css';
import * as images from '../../Assets/home_images.js';

const Landing = () => {
  return (
    <div className={style.landing_container}>
      <img
        src={images.landing_picture}
        alt="landing_image"
        className={style.landing_image}
      />
      <button
        type="button"
        className={style.landing_button}
        onClick={() => {
          window.location.href = '#navbar';
        }}
      >
        View my profile! &nbsp;
      </button>
    </div>
  );
};

export default Landing;
