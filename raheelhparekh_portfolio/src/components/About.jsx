import React, { useState, useEffect } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import profileImage from '../image/raheel.jpg'; // Adjust the path based on your project structure

function About({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) { // Adjust this value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColor = darkMode ? 'text-white' : 'text-black';
  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const buttonClasses = darkMode
    ? 'bg-transparent text-white hover:bg-white hover:text-black'
    : 'bg-black text-white hover:bg-white hover:text-black';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 pt-16 pb-16 ${bgColor}`}>
      <div
        className={`w-full mx-auto max-w-5xl p-6 flex flex-col md:flex-row items-center transition-transform duration-1500 ease-in-out ${isScrolled ? 'animate-zoom-in' : ''}`}
        style={{
          opacity: isScrolled ? 1 : 0.8, // Initial opacity
          transform: isScrolled ? 'scale(1)' : 'scale(0.8)', // Initial scale
          transition: 'opacity 1.5s ease, transform 1.5s ease', // Transition effect
        }}
      >
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
          <p className={`text-lg mt-2 ${textColor}`}>
            I'm from Mumbai, a final-year Computer Science student at KJ Somaiya College of Engineering, pursuing a B.Tech degree in Computer Science. Additionally, I am pursuing an Honours degree in Cybersecurity, which further fuels my curiosity and commitment to remaining at the forefront of technological innovation.
          </p>
          <p className={`text-lg mt-2 ${textColor}`}>
            Driven by a relentless eagerness to learn and a knack for problem-solving, I aspire to leverage my skills to make a meaningful impact. With a blend of curiosity, technological passion, and analytical prowess, I am poised to contribute significantly to the ever-evolving tech world.
          </p>

          <hr className="mt-10" />
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://drive.google.com/drive/folders/1fHkCISfEEKPlyWJZzZwPx_HJBmJt0khh"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg md:text-xl py-2 px-4 rounded-full flex items-center ${buttonClasses}`}
            >
              Download My Resume
              <BiLinkExternal className="ml-2" />
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={profileImage} 
            alt="Profile" 
            className={`w-3/4 md:w-full rounded-lg shadow-md border-4 ${darkMode ? 'border-white' : 'border-black'}`} 
          />
        </div>
      </div>
    </div>
  );
}

export default About;
