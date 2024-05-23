import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Experience({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`p-8 h-auto md:h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} ${isScrolled ? 'scrolled' : ''}`}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl mb-8">My Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* First Experience */}
          <motion.div className={`p-6 rounded-md shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <h2 className="text-2xl mb-2">Web Developer</h2>
            <p className="text-lg">SPESSA | 2023</p>
            <p className="text-lg mt-2">Built an expense tracker website for financial management with budget planning feature.</p>
          </motion.div>
          {/* Second Experience */}
          <motion.div className={`p-6 rounded-md shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <h2 className="text-2xl mb-2">Full Stack Web Developer</h2>
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
