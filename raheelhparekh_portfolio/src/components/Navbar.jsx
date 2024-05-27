import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import logoDark from '../image/RP dark 2.png';
import logoLight from '../image/RP light 2.png';

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`p-7 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} fixed w-full z-10`}
    >
      <div className="flex justify-between items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={closeMenu}>
          <img src={darkMode ? logoDark : logoLight} alt="Logo" className="h-14 transition-transform duration-300 hover:scale-110" />
        </Link>

        {/* Responsive Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          {['home', 'about', 'projects', 'experience', 'contact'].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              variants={navVariants}
              className="relative"
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                className={`cursor-pointer transition duration-500 ${darkMode ? 'text-white' : 'text-black'} relative after:absolute after:w-full after:h-[2px] ${darkMode ? 'after:bg-white' : 'after:bg-black'} after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300`}
                onClick={closeMenu} 
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <RiSunLine size={24} className="text-white" /> : <RiMoonClearLine size={24} className="text-black" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
