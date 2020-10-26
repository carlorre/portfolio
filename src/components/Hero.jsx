import React from 'react'
import './Hero.css'
import TechIcons from './TechIcons'

const stack = [
  {name: 'HTML', icon:'fab fa-html5', color: '#cd5434'},
  {name: 'CSS', icon: 'fab fa-css3-alt', color: '#369ad6'},
  {name: 'JavaScript', icon: 'fab fa-js', color: '#e9d44d'},
  {name: 'Node', icon: 'fab fa-node-js', color: '	#90c53f'},
  {name: 'React', icon: 'fab fa-react', color: '#6fbfdb'},
  {name: 'GitHub', icon: 'fab fa-github'},
]

const Hero = () => (
  <div className="hero-container">
    <div className="hero-text-container">
      <h1 className="hero-heading">Hi, I'm Carl</h1>
      <h2 className="hero-text">
        I'm a Full-Stack JavaScript Developer from Stockholm.
        I love creative problem solving, building websites and mobile applications.
        I am always looking to learn new skills and develop my abilities. 
        These are the tools I am most familiar with:
      </h2>

        <div className="icon-row-container">
          {stack.map((item, i) => (
            <TechIcons
              key={i}
              name={item.name}
              icon={item.icon}
              color={item.color}
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
