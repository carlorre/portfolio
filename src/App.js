import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

const lightTheme = {
  '--primary-color': '#f0f2f5',
  '--secondary-color': 'white',
  '--font-color': '#2e2e2e',
};

const darkTheme = {
  '--primary-color': '#242526',
  '--secondary-color': '#18191a',
  '--font-color': '#e4e4e4',
};

const App = () => {
  const [currentTheme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage) {
      if (localStorage.getItem('theme') === 'dark') {
        applyTheme(darkTheme);
        setTheme('dark');
      }
    }
  }, [currentTheme]);

  const onClick = () => {
    if (currentTheme === 'light') {
      applyTheme(darkTheme);
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      applyTheme(lightTheme);
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const applyTheme = (theme) => {
    Object.keys(theme).forEach((key) => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
  };

  return (
    <div className="main-container">
      <Header currentTheme={currentTheme} onClick={onClick} />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
    </div>
  );
};

export default App;
