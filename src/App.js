import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Drinks from './components/Drinks';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';
import PortfolioGallery from './components/PortfolioGallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} />
      <Hero />
      <Drinks />
      <Resume />
      <About />
      <Projects />
      <PortfolioGallery />
      <Contact />
    </div>
  );
}

export default App; 