import React from 'react'
import './Hero.css'
import TechIcons from './TechIcons'

const stack = [
  {name: 'HTML', url:'/images/html_logo.png'},
  {name: 'CSS', url: '/images/css_logo.png'},
  {name: 'JavaScript', url: '/images/javascript_logo.png'},
  {name: 'Node', url: '/images/node_logo.png'},
  {name: 'React', url: '/images/react_logo.png'},
  {name: 'Firebase', url: '/images/firebase_logo.png'},
  {name: 'GitHub', url: '/images/github_logo.png'},
]

const Hero = () => (
  <div className="hero-container">
    <div className="hero-text-container">
      <h1 className="hero-heading">Hi, I'm Carl</h1>
      <h2 className="hero-text">
        I'm a Full-Stack JavaScript Developer from Stockholm.
        I enjoy creative problem solving, building websites and mobile applications.
        I am always looking to learn and develop my abilities.
        These are the tools i am most familiar with:
        </h2>
        <div className="icon-row-container">
          {stack.map((item, i) => (
            <TechIcons
              key={i}
              name={item.name}
              url={item.url}
            />
      
    ))}
    </div>
    </div>
    <div className="hero-image-container">
      <div className="hero-image-frame">
        <img className="hero-image" src="/images/profile_picture.png" alt=""/>
      </div>
    </div>
  </div>
)

export default Hero
