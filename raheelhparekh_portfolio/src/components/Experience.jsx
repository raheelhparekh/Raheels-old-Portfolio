import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';

function Experience({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setIsInView(false);
    setTimeout(() => {
      setIsInView(true);
    }, 100);
  };

  const textColor = darkMode ? 'text-white' : 'text-black';
  const bgColor = darkMode ? 'bg-black' : 'bg-white';
  const cardBgColor = darkMode ? 'bg-gray-800' : 'bg-gray-200';

  return (
    <section
      ref={sectionRef}
      className={`p-8 pt-16 pb-16 h-auto md:h-screen flex flex-col items-center justify-center ${bgColor} ${textColor} ${isScrolled ? 'scrolled' : ''}`}
      onClick={handleClick}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl mb-8 justify-center">My Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* First Experience */}
          <motion.div
            className={`p-8 rounded-md shadow-md ${cardBgColor} ${textColor}`}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-2xl mb-2">
              <Typing text={['Web Developer']} speed={50} eraseDelay={2000} />
            </h2>
            <p className="text-lg">SPESSA | 2023</p>
            <p className="text-lg mt-2">Built an expense tracker website for financial management with budget planning feature.</p>
          </motion.div>
          {/* Second Experience */}
          <motion.div
            className={`p-8 rounded-md shadow-md ${cardBgColor} ${textColor}`}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-2xl mb-2">
              <Typing text={['Full Stack Web Developer']} speed={50} eraseDelay={2000} />
            </h2>
            <p className="text-lg">Luxury Lane | 2024</p>
            <p className="text-lg mt-2">Built an E-commerce website displaying various luxury products for selection.</p>
          </motion.div>
          {/* Add more experiences as needed */}
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
