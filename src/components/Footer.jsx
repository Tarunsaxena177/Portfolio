import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[rgba(255,255,255,0.02)] border-t border-[rgba(255,255,255,0.04)] backdrop-blur-md py-10 text-gray-300 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-6 px-6 text-center">
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="https://github.com/Tarunsaxena177"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-saxena-980b86239/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://twitter.com/tarunsaxena"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={26} />
          </a>
        </motion.div>

        <motion.button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 md:right-12 md:bottom-10 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm md:text-base">
            Designed & Built by{" "}
            <span className="text-blue-400 font-medium">Tarun Saxena</span> 💻
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2025 All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
