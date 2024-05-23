import React, { useState, useEffect, useRef } from "react";
import myImage from "../image/Photo_dark.jpeg"; // Replace with your image path
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const HomeProfile = ({ darkMode }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

    const navbar = document.querySelector("header");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

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
    const bodyElement = document.body; // Get the body element

    if (darkMode) {
      rootElement.classList.add("dark");
      bodyElement.classList.add("dark"); // Add 'dark' class to body element
    } else {
      rootElement.classList.remove("dark");
      bodyElement.classList.remove("dark"); // Remove 'dark' class from body element
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ paddingTop: navbarHeight }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
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
                className={`w-full h-auto md:max-h-96 md:w-auto border ${
                  darkMode ? "border-white" : "border-black"
                } rounded-md transition-transform transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
              />
            </Link>
          </div>
          {/* Name and Details */}
          <div className="md:w-1/2">
            <h1
              ref={textRef}
              className={`text-4xl md:text-6xl font-montserrat font-semibold mb-4 ${
                isVisible ? "animate-zoom-in" : ""
              }`}
            >
              Hi, I am Raheel Parekh
            </h1>
            <p
              className={`text-lg md:text-xl mb-4 ${
                isVisible ? "animate-zoom-in" : ""
              }`}
            >
              Software Engineer | Web Developer | Tech Enthusiast
            </p>
            <p
              className={`text-lg md:text-xl mb-4 ${
                isVisible ? "animate-zoom-in" : ""
              }`}
            >
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
              className={`text-lg md:text-xl py-2 px-4 rounded-full mt-4 inline-block cursor-pointer
                ${darkMode ? 'dark:bg-black dark:text-white hover:bg-white hover:dark:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
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
