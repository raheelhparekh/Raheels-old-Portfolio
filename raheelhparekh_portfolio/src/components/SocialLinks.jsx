import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: 'https://github.com/raheelhparekh',
    icon: <FaGithub />,
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/raheelhparekh/',
    icon: <FaLinkedin />,
    label: 'LinkedIn'
  },
  {
    href: 'https://drive.google.com/drive/folders/1fHkCISfEEKPlyWJZzZwPx_HJBmJt0khh',
    icon: <FaFilePdf />,
    label: 'Resume'
  },
  {
    href: 'https://www.instagram.com/_raheelhp/',
    icon: <FaInstagram />,
    label: 'Instagram'
  },
  {
    href: 'https://twitter.com/codew_rhp',
    icon: <FaTwitter />,
    label: 'Twitter'
  }
];

function SocialLinks({ darkMode }) {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth >= 1136);

  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth >= 1136);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isBigScreen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-12 md:left-7 flex flex-col space-y-4 md:space-y-8 z-50">
      {socialLinks.map(({ href, icon, label }) => (
        <motion.div
          key={label}
          className="relative flex items-center group"
        >
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl md:text-3xl ${darkMode ? 'text-white' : 'text-black'}`}
            aria-label={label}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 1.4 }}
          >
            {icon}
          </motion.a>
          <motion.span
            className={`absolute left-full ml-2 opacity-0 group-hover:opacity-100 ${darkMode ? 'text-white bg-black' : 'text-black bg-white'} p-1 md:p-2 rounded-md shadow-md transition-opacity duration-300 whitespace-nowrap`}
          >
            {label}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

export default SocialLinks;
