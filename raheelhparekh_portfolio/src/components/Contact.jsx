import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

function Contact({ darkMode, setDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm('service_u878wp5', 'template_caa4u8a', formRef.current, {
        publicKey: 'gNFQa4SZihiiwRucp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const textColor = darkMode ? "text-white" : "text-black";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const formInputColor = darkMode ? "text-white" : "text-white";

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className={`min-h-screen flex flex-col items-center justify-center ${bgColor} p-8`}>
        <h1 className={`text-4xl mb-8 ${textColor}`}>Get in Touch</h1>
        <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl w-full flex`}>
          <div className="w-1/2 pr-8">
            <h2 className={`text-2xl mb-4 ${formInputColor}`}>Contact Information</h2>
            <p className={`mb-2 ${formInputColor}`}>
              Email: <a href="mailto:rhparekh2003@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rhparekh2003@gmail.com</a>
            </p>
            <p className={formInputColor}>
              WhatsApp: <a href="https://wa.me/8169013763" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">+91-8169013763</a>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-1/2"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${formInputColor}`}
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <label
                  htmlFor="name"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formInputColor}`}
                >
                  Enter Your Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer ${formInputColor}`}
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label
                  htmlFor="email"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formInputColor}`}
                >
                  Enter Your Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none ${formInputColor}`}
                  placeholder=""
                  required
                  autoComplete="message"
                
                />
                <label
                  htmlFor="message"
                  className={`peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${formInputColor}`}
                >
                  Enter Your Message
                </label>
              </div>
              <button
                type="submit"
                className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${darkMode ? 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300'}`}
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
