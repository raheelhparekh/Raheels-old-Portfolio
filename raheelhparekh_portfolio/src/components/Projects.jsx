import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import projectImage1 from '../image/RP light 2.png';
import projectImage2 from '../image/RP dark 2.png';
import projectImage3 from '../image/RP light.png';

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/project1",
    image: projectImage1
  },
  {
    title: "Project 2",
    description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/project2",
    image: projectImage2
  },
  {
    title: "Project 3",
    description: "Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["Python", "Django", "PostgreSQL"],
    githubLink: "https://github.com/username/project3",
    image: projectImage3
  }
];

function Projects({ darkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isBigScreen = window.innerWidth >= 768; // Define the breakpoint for big screens
      const scrollThreshold = isBigScreen ? 50 : 20; // Adjust the scroll threshold based on screen size
      
      if (scrollTop > scrollThreshold) {
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

  return (
    <section className={`py-16 flex items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isScrolled ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.5 }}
              className={`shadow-lg rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">
                      {tool}
                    </span>
                  ))}
                </div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`flex items-center hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
                  <FaGithub className="mr-2" /> View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
