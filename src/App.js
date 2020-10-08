import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';

const App = () => (
  <div className="main-container">
    <Header/> 
    <main>
      <Hero/>
      <Projects/>
    </main>
  </div>
)

export default App
