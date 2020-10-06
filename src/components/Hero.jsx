import React from 'react'
import './Hero.css'

const Hero = () => (
  <div className="hero-container">
    <div className="hero-text-container">
      <h1 className="hero-heading">Hi, I'm Carl </h1>
      <h2 className="hero-text">
        I'm a Full-Stack JavaScript developer.
        I enjoy creative problem solving, building wbesites and apps.
        I am always looking to learn and develop my abilities.
        Have a look at some of my projects.
        </h2>
    </div>
    <div className="hero-image-container">
      <div className="hero-image-frame">
        <img className="hero-image" src="/images/profile_picture.png" alt=""/>
      </div>
    </div>
  </div>
)

export default Hero
