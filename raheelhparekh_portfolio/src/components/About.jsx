import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaGit } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import myImage from "../image/raheel.jpg"; // Replace with your image path

// Define keyframes for zoom-in animation
const zoomInAnimation = {
  hidden: { scale: 0.5, opacity: 0.1 },
  visible: { scale: 1, opacity: 1, transition: { duration: 2 } },
};

function About({ darkMode }) {
  const controls = useAnimation();
  const { ref: intersectionRef, inView } = useInView({ triggerOnce: true });
  const [imgStyle, setImgStyle] = useState({ transform: 'translate(0px, 0px)' });
  const textRefs = useRef([]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xOffset = ((clientX / innerWidth) * 2 - 1) * 10; // Adjust the multiplier to control movement intensity
    const yOffset = ((clientY / innerHeight) * 2 - 1) * 10;

    setImgStyle({ transform: `translate(${xOffset}px, ${yOffset}px)` });
  };

  return (
    <section className={`py-20 px-10 min-h-screen flex items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container-lg"
        onMouseMove={handleMouseMove}
        ref={intersectionRef} // observe this div
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Written content */}
          <div className="md:mx-auto">
            <div className="text-center md:text-center">
              <motion.h2
                initial="hidden"
                animate={controls}
                variants={zoomInAnimation} // Apply zoom-in animation to text
                className="text-4xl mb-4 font-bold"
              >
                About Me
              </motion.h2>
            </div>
            <div className="ml-20 md:text-left text-1xl space-x-3 space-y-8">
              {[
                "I'm from Mumbai, a final-year Computer Science student at KJ Somaiya College of Engineering, pursuing a B.Tech degree in Computer science. In addition to Btech I am also pursuing an Honours degree in Cybersecurity. My Honours in Cybersecurity further fuels my curiosity and commitment to remaining at the forefront of technological innovation.",
                "I have developed a strong foundation in programming languages such as Java. I have a strong passion for problem-solving and brainstorming innovative solutions, with a keen interest in Cloud computing, Data Structures & Algorithms, and Full-stack development.",
                "When I'm not coding or studying, you'll likely find me playing cricket or expanding my knowledge in finance and involving myself in trading & investing in the Indian stock market. I love exploring new technologies and stay up-to-date with the latest advancements in the tech world. I believe my eagerness to learn, passion for technology, and my strong problem-solving skills would allow me to make a meaningful impact.",
                "Here are a few technologies I've been working with recently:",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={zoomInAnimation} // Apply zoom-in animation to text
                  className="mb-4"
                  ref={(ref) => (textRefs.current[index] = ref)}
                >
                  {text}
                </motion.p>
              ))}
              <div className="flex justify-center md:justify-start mb-8">
                {[
                  { icon: FaReact, label: "React" },
                  { icon: FaNodeJs, label: "Node" },
                  { icon: FaDatabase, label: "MySQL" },
                  { icon: FaJava, label: "Java" },
                  { icon: FaGit, label: "Git" },
                ].map(({ icon: Icon, label }, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate={controls}
                    variants={zoomInAnimation} // Apply zoom-in animation to text
                    className="flex items-center mx-4"
                  >
                    <Icon className={`text-4xl mr-2 ${darkMode ? 'text-white' : 'text-black'}`} />
                    {label}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start">
                <motion.a
                  initial="hidden"
                  animate={controls}
                  variants={zoomInAnimation} // Apply zoom-in animation to text
                  href="https://drive.google.com/drive/folders/1fHkCISfEEKPlyWJZzZwPx_HJBmJt0khh" // Replace with the actual path to your resume
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg md:text-xl py-2 px-4 rounded-full flex items-center ${darkMode ? 'dark:bg-black dark:text-white hover:bg-white hover:dark:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
                >
                  Download My Resume
                  <BiLinkExternal className="ml-2" />
                </motion.a>
              </div>
            </div>
          </div>
          {/* Image */}
          <motion.div
            className="flex justify-center"
            style={imgStyle}
            initial="hidden"
            animate={controls}
            variants={zoomInAnimation} // Apply zoom-in animation to image
          >
            <motion.img
              src={myImage}
              alt="My Profile"
              className={`w-3/4 h-3/4 md:max-h-max md:w-auto border-4 rounded-md ${darkMode ? 'border-white' : 'border-black'}`}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
