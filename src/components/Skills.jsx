import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaCloud,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiEclipseide,
  SiGooglecloud,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    color: "from-blue-400 to-cyan-400",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js & Express.js", icon: <FaNode /> },
    ],
  },
  {
    title: "Databases",
    color: "from-green-400 to-emerald-400",
    skills: [
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Object-Oriented Programming",
    color: "from-purple-400 to-pink-400",
    skills: [
      {
        name: "Encapsulation, Inheritance, Polymorphism, Abstraction",
        icon: <FaJava />,
      },
      { name: "Design Patterns", icon: <FaJava /> },
    ],
  },
  {
    title: "Data Analytics",
    color: "from-yellow-400 to-orange-400",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "SQL Queries & Data Cleaning", icon: <FaDatabase /> },
      { name: "Data Visualization", icon: <FaPython /> },
    ],
  },
  {
    title: "Tools",
    color: "from-indigo-400 to-violet-400",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <FaReact /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "Cloudinary", icon: <FaCloud /> },
    ],
  },
  {
    title: "Cloud Platforms",
    color: "from-sky-400 to-blue-400",
    skills: [
      { name: "AWS (S3, EC2)", icon: <FaAws /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-16 overflow-hidden"
    >
      {/* Subtle animated matrix particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] animate-pulse blur-3xl"></div>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.3)] text-center px-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full z-10">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            className={`relative bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* Glowing Gradient Line */}
            <div
              className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} rounded-t-2xl`}
            ></div>

            <h3
              className={`text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r ${category.color} mb-4 text-center`}
            >
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-gray-300 text-xs sm:text-sm bg-[rgba(255,255,255,0.03)] px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-transparent hover:border-blue-400 hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] hover:text-blue-300 transition-all duration-300 w-[100px] sm:w-[120px] md:w-auto"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-blue-400 text-lg sm:text-xl mb-1 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">
                    {skill.icon}
                  </div>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
