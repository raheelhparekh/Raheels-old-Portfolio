import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 text-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://twitter.com/codew_rhp"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:text-gray-400 transition duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/raheelhparekh/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:text-gray-400 transition duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/raheelhparekh"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl hover:text-gray-400 transition duration-300 ${darkMode ? 'text-white' : 'text-black'}`}
        >
          <FaGithub />
        </a>
      </div>
      <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>© {new Date().getFullYear()} Raheel Parekh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
