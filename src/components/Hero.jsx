import React from 'react';
import './Hero.css';

const Hero = () => (
  <div className="hero-container">
    <div className="hero-heading-container">
      <h1 className="hero-heading">Hi, I’m Carl</h1>
    </div>
    <div className="hero-text-container">
      <h2 className="hero-text">
        I’m a Full-Stack JavaScript Developer from Stockholm. I love creative problem solving,
        building websites and mobile applications. I am always looking to learn new skills and
        develop my abilities.
      </h2>
    </div>
    <div className="hero-image-container">
      <div className="hero-image-frame">
        <img className="hero-image" src="/images/profile_picture.png" alt="" />
      </div>
    </div>
  </div>
);

export default Hero;
