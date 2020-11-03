import React from 'react';
import TechIcons from './TechIcons';
import './TechStack.css';

const stack = [
  { name: 'HTML', icon: 'fab fa-html5', color: '#cd5434' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: '#369ad6' },
  { name: 'JavaScript', icon: 'fab fa-js', color: '#e9d44d' },
  { name: 'TypeScript', logo: '/images/typescript_logo.png', size: '1em' },
  { name: 'Node', icon: 'fab fa-node-js', color: '	#90c53f' },
  { name: 'React', icon: 'fab fa-react', color: '#6fbfdb' },
  { name: 'Redux', logo: '/images/redux_logo.png', size: '1em' },
  { name: 'Firebase', logo: '/images/firebase_logo.png', size: '0.75em' },
  { name: 'GCS', logo: '/images/gcs_logo.png', size: '1.3em' },
  { name: 'GitHub', icon: 'fab fa-github' },
];

const TechStack = () => {
  return (
    <div className="tech-stack-container">
      <h1 className="stack-heading">My Tools</h1>
      <div className="icon-row-container">
        {stack.map((item, i) => (
          <TechIcons
            key={i}
            name={item.name}
            icon={item.icon}
            color={item.color}
            logo={item.logo}
            size={item.size}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
