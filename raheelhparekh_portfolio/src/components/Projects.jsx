import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/username/project1",
    image: "RP light 2.png"
  },
  {
    title: "Project 2",
    description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/username/project2",
    image: "RP dark 2.png"
  },
  {
    title: "Project 3",
    description: "Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["Python", "Django", "PostgreSQL"],
    githubLink: "https://github.com/username/project3",
    image: "RP light.png"
  }
];

function Projects({ darkMode }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentProjectIndex];

  return (
    <section className={`p-8 h-auto md:h-screen flex items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex justify-center p-16">
          {/* Project Details */}
          <div className="w-2/5 pr-16">
            <h2 className="text-4xl mb-4">{currentProject.title}</h2>
            <p className="mb-6 leading-relaxed">
              {currentProject.description}
            </p>
            <div className="mb-6">
              {currentProject.tools.map((tool, index) => (
                <div key={index} className="flex items-center mr-4">
                  <span className="mr-2">{tool}</span>
                </div>
              ))}
            </div>
            <a href={currentProject.githubLink} target="_blank" rel="noopener noreferrer" className={`hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-500'}`}>
              <FaGithub className="mr-2" /> View on GitHub
            </a>
          </div>
          {/* Project Images Carousel */}
          <div className="w-3/5 flex items-center justify-end">
            <motion.img
              src={`../src/image/${currentProject.image}`}
              alt={currentProject.title}
              className="h-80 w-80 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
        {/* Navigation buttons */}
        <div className="flex justify-center mt-4">
          <button onClick={handlePrevProject} className={`mr-4 ${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-gray-500 hover:text-gray-700'}`}>
            Prev
          </button>
          <button onClick={handleNextProject} className={`${darkMode ? 'text-gray-300 hover:text-gray-500' : 'text-gray-500 hover:text-gray-700'}`}>
            Next
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
