import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background neon glow */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="text-blue-400 mb-3 text-lg font-medium tracking-wider">
            Hi, I’m
          </div>
          <motion.h1
            className="font-extrabold text-5xl md:text-7xl leading-tight text-white drop-shadow-lg"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Tarun Saxena<span className="text-blue-500">.</span>
          </motion.h1>

          <motion.h2
            className="mt-3 text-2xl md:text-3xl font-semibold text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="animate-pulse">Full-Stack Developer 👨‍💻</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-white/70 max-w-xl mx-auto md:mx-0 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Passionate about building interactive, scalable, and visually
            engaging web applications that bring ideas to life.
          </motion.p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-base font-medium bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl text-base font-medium border border-white/20 hover:bg-white/10 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center perspective-1000"
        >
          <motion.div
            whileHover={{
              rotateY: 15,
              rotateX: -10,
              translateZ: 60,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl p-6 backdrop-blur-lg bg-white/10 border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.15)] cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {/* Neon ring glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-2xl" />
            <img
              src={profile}
              alt="Profile"
              className="relative z-10 w-full h-full rounded-2xl object-cover border-4 border-white/10 shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
