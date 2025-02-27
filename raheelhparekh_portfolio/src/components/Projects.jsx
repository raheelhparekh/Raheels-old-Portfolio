import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {FaYoutube } from 'react-icons/fa';
import projectImage1 from '../image/luxury_lane.png';
import projectImage2 from '../image/spessa.png';
import projectImage3 from '../image/raheel_ss_portfolio.png';
import projectImage4 from '../image/tippani.png';
import projectImage5 from '../image/symphony_hub.png';
import projectImage6 from '../image/bhool-bhulaiyaa.png';

const projectsData = [
  {
    title: "SPESSA",
    description: "Expense tracker website for financial management with budget planning features, various financial Calculators with dynamic charts based on user input.",
    tools: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://youtu.be/PVavGsoddIU",
    image: projectImage2
  },
  {
    title: "Portfolio Website",
    description: "Built a personal portfolio website to showcase my projects and skills. The website is responsive and has a dark & light mode feature.",
    tools: ["ReactJS", "TailwindCSS", "Email-JS"],
    githubLink: "https://github.com/raheelhparekh/Raheel-s-Portfolio",
    image: projectImage3
  },
  {
    title: "Luxury Lane",
    description: "E commerce website for luxury products shopping. Designed a user-friendly interface to showcase and track users' past purchases, providing valuable insights for decision-making.",
    tools: ["React", "Node.js", "Javascript", "MongoDB", "Express"],
    githubLink: "https://youtu.be/rnB2DHSVWzE",
    image: projectImage1
  },
  {
    title: "Tippani",
    description: "A blogging app for users to share their thoughts, POV's around the internet ",
    tools: ["React", "Node.js", "Javascript", "Appwrite", "TinyMCE"],
    githubLink: "https://tippani-vert.vercel.app/",
    image: projectImage4
  },
  {
    title: "Symphony Hub",
    description: "Symphony Hub is a web application designed to enhance your musical journey. It provides a platform to explore featured webinars, courses, and other music-related content",
    tools: ["NextJS", "Typescript", "ShadCN", "Accertinity UI","TailwindCSS"],
    githubLink: "https://symphony-hub.vercel.app/",
    image: projectImage5
  },
  {
    title: "Bhool Bhulaiyaa",
    description: "An annonymous feedback website where users can share their secrets without revealing their identity.",
    tools: ["Next JS", "TypeScript", "MongoDB", "Shadcn", "TailwindCSS","Gemini AI"],
    githubLink: "https://bhool-bhulaiyaa.vercel.app/",
    image: projectImage6
  },
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
                  <FaYoutube className="mr-2" /> View Demo
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
