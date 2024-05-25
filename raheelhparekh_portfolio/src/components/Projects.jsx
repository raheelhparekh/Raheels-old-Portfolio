import React from 'react';
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
  return (
    <section className={`p-8 h-auto md:h-screen flex items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }} className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-${darkMode ? 'gray-800' : 'white'} shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={`../src/image/${project.image}`}
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
      </motion.div>
    </section>
  );
}

export default Projects;
