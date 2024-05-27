import React, { useState, useEffect, useRef } from "react";
import myImage from "../image/Photo10.jpeg"; // Replace with your image path
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Typing from "react-typing-effect";

const HomeProfile = ({ darkMode }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);

      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    const bodyElement = document.body;

    if (darkMode) {
      rootElement.classList.add("dark");
      bodyElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
      bodyElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
        style={{
          opacity: isScrolled ? 1 : 0.8,
          transform: isScrolled ? "scale(1)" : "scale(0.8)",
          transition: "opacity 1.5s ease, transform 1.5s ease",
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust offset to ensure the about page is fully visible
            >
              <img
                src={myImage}
                alt="My Profile"
                className={`max-w-full h-auto md:max-h-[50vh] lg:max-h-[60vh] xl:max-h-[60vh] border ${
                  darkMode ? "border-white" : "border-black"
                } rounded-md`}
              />
            </Link>
          </div>
          {/* Name and Details */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 md:space-y-6">
            <h1
              ref={textRef}
              className="text-4xl md:text-6xl font-montserrat font-semibold mb-4"
            >
              Hi, I am Raheel Parekh
            </h1>
            <Typing
              text={["Software Engineer", "Web Developer", "Tech Enthusiast"]}
              speed={50}
              eraseSpeed={50}
              className="text-lg md:text-xl mb-4"
            />
            <p className="text-lg md:text-xl mb-4">
              I am passionate about learning, constantly improving my skills,
              and turning innovative dreams into reality. Welcome to my
              portfolio!
            </p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} // Adjust offset to ensure the about page is fully visible
              className={`text-lg md:text-xl py-2 px-4 rounded-full mt-4 inline-block cursor-pointer ${
                darkMode
                  ? "dark:bg-black dark:text-white hover:bg-white hover:dark:text-black"
                  : "bg-black text-white hover:bg-white hover:text-black"
              }`}
            >
              Know me more
            </Link>
          </div>
        </div>
      </div>
      {/* Scroll to bottom arrow */}
      {!isAtBottom && (
        <div
          className="fixed bottom-8 right-8 cursor-pointer rounded-full p-2 transition-transform transform hover:scale-110"
          onClick={scrollToBottom}
        >
          <FaArrowDown
            className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
          />
        </div>
      )}
      {/* Scroll to top arrow */}
      {isAtBottom && (
        <div
          className="fixed bottom-8 right-8 cursor-pointer rounded-full p-2 transition-transform transform hover:scale-110"
          onClick={scrollToTop}
        >
          <FaArrowUp
            className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
          />
        </div>
      )}
    </div>
  );
};

export default HomeProfile;
