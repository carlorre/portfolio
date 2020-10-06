import React from 'react'
import TechIcons from './TechIcons'
import './TechStack.css'

const stack = [
  {name: 'HTML', url:'/images/html_logo.png'},
  {name: 'CSS', url: '/images/css_logo.png'},
  {name: 'JavaScript', url: '/images/javascript_logo.png'},
  {name: 'Node', url: '/images/node_logo.png'},
  {name: 'React', url: '/images/react_logo.png'},
  {name: 'Firebase', url: '/images/firebase_logo.png'},
  {name: 'GitHub', url: '/images/github_logo.png'},
]

const TechStack = () => (
  <div className="tech-stack-container">
    {/* <h3 className="tech-stack-heading">These are the tools I am most familiar with:</h3> */}
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
)

export default TechStack
