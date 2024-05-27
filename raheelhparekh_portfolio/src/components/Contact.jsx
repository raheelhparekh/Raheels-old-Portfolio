import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".zoom-in");
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError) {
      console.log("Invalid email, please correct it before submitting.");
      return;
    }

    emailjs
      .sendForm('service_u878wp5', 'template_caa4u8a', formRef.current, {
        publicKey: 'gNFQa4SZihiiwRucp',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const textColor = darkMode ? "text-white" : "text-black";
  const bgColor = darkMode ? "bg-black" : "bg-white";
  const formInputColor = darkMode ? "text-white" : "text-black";
  const contactBoxBg = darkMode ? "bg-gray-800" : "bg-gray-200";
  const buttonColor = darkMode ? "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" : "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300";
  const labelColor = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div className={darkMode ? "dark" : ""}>
      <section className={`min-h-screen flex flex-col items-center justify-center ${bgColor} p-8 pt-16 pb-16`}>
        <h1 className={`text-4xl mb-8 ${textColor} zoom-in`}>Get in Touch</h1>
        <div className={`${contactBoxBg} rounded-lg shadow-lg p-10 max-w-4xl w-full flex flex-col md:flex-row zoom-in`}>
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h2 className={`text-2xl mb-4 ${textColor}`}>My Contact Information</h2>
            <p className={`mb-2 ${textColor}`}>
              Email: <a href="mailto:rhparekh2003@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">rhparekh2003@gmail.com</a>
            </p>
            <p className={textColor}>
              WhatsApp: <a href="https://wa.me/8169013763" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">+91-8169013763</a>
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 zoom-in">
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
                    className={`peer-focus:font-medium absolute text-sm ${labelColor} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
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
                    className={`peer-focus:font-medium absolute text-sm ${labelColor} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    Enter Your Email
                  </label>
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none ${formInputColor}`}
                    placeholder=" "
                    required
                    autoComplete="message"
                  />
                  <label
                    htmlFor="message"
                    className={`peer-focus:font-medium absolute text-sm ${labelColor} duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
                  >
                    Enter Your Message
                  </label>
                </div>
                <button
                  type="submit"
                  className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${buttonColor}`}
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className={`text-2xl mb-4 ${textColor}`}>Thank You for Submitting!</h2>
                <p className={`text-lg ${textColor}`}>I have received your message and will get back to you soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
