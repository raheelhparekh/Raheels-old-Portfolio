import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import HomeProfile from './components/HomeProfile';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for saved theme mode
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark';
  });

  // Update local storage when theme mode changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SocialLinks darkMode={darkMode} /> 
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
        <main>
          <Element name="home">
            <HomeProfile darkMode={darkMode} />
          </Element>
          <Element name="about">
            <About darkMode={darkMode}/>
          </Element>
          <Element name="projects">
            <Projects darkMode={darkMode} />
          </Element>
          <Element name="experience">
            <Experience darkMode={darkMode} />
          </Element>
          <Element name="contact">
            <Contact darkMode={darkMode} />
          </Element>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
