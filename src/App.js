import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';



const App = () => (
  <div className="main-container">
    <Header/> 
    <main>
      <Hero/>
      <Projects/>
      <TechStack/>
      <Footer/>
    </main>
  </div>
)

export default App
