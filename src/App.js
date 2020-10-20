import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

const lightTheme = {
  "--primary-color": "#f0f2f5",
  "--secondary-color": "white",
  "--font-color": "black"
}

const darkTheme = {
  "--primary-color": "#242526",
  "--secondary-color": "#18191a",
  "--font-color": "#e4e4e4"
};



const App = () => {

  const [currentTheme, setTheme] = useState("light");

  
  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

  const applyTheme = (nextTheme, cb) => {
    const theme = nextTheme === "light" ? lightTheme : darkTheme;
    Object.keys(theme).forEach(key => {
      const value = theme[key];
      document.documentElement.style.setProperty(key, value);
    });
    cb();
  };

  return (
    <div className="main-container">
      <Header onClick={onClick}/> 
      <main>
        <Hero/>
        <Projects/>
      </main>
    </div>
)}

export default App
