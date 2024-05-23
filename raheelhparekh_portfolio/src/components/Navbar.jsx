import React from 'react';
import { Link } from 'react-scroll';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'; // Import React icons for moon and sun
import logoDark from '../image/RP dark 2.png';
import logoLight from '../image/RP light 2.png';

function Navbar({ darkMode, setDarkMode }) {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className={`p-7 ${darkMode ? 'bg-white dark:bg-black text-black dark:text-white' : 'bg-white text-black'} flex justify-between items-center fixed w-full z-10`}
    >
      <div className="flex items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <img src={darkMode ? logoDark : logoLight} alt="Logo" className="h-14 mr-4 transition-transform duration-300 hover:scale-110" />
        </Link>
      </div>
      <nav className="flex space-x-6 text-lg">
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
              offset={-100} // Adjust the offset value as needed
              className={`cursor-pointer transition duration-500 ${darkMode ? 'text-black dark:text-white' : 'text-black'} relative after:absolute after:w-full after:h-[2px] ${darkMode ? 'after:bg-white' : 'after:bg-black'} after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
            </Link>
          </motion.div>
        ))}
      </nav>
      <Switch
        checked={darkMode}
        onChange={toggleDarkMode}
        className={`${darkMode ? 'bg-black' : 'bg-white-200'} relative inline-flex items-center h-6 rounded-full w-11`}
      >
        {/* <span className="sr-only">Enable dark mode</span> */}
        {darkMode ? <RiSunLine size={24} /> : <RiMoonClearLine size={24} style={{ color: 'black' }} />}
      </Switch>
    </motion.header>
  );
}

export default Navbar;
