import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCertificate } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education & Achievements
      </motion.h2>

      {/* --- Education Section --- */}
      <div className="max-w-4xl w-full space-y-10 relative">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-600 h-full rounded-full blur-[1px] opacity-30"></div>

        <motion.div
          className="relative md:w-1/2 md:ml-auto bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-500 shadow-lg"></div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaGraduationCap /> B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-gray-400 mt-2">
            <strong>Guru Gobind Singh Indraprastha University</strong> | Delhi,
            India
          </p>
          <p className="text-gray-400">CGPA: 8.33 | 2021 - 2025</p>
          <p className="text-gray-300 mt-2">
            Graduated with solid foundations in algorithms, databases, and
            full-stack development.
          </p>
        </motion.div>
      </div>

      {/* --- Certifications Section --- */}
      <motion.div
        className="mt-20 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-blue-400 flex items-center gap-2 mb-8">
          <FaCertificate /> Certifications
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Full Stack Web Development Bootcamp",
              org: "Dr. Angela Yu – Udemy",
              link: "https://www.udemy.com/certificate/UC-03fbaa93-5f21-41f0-968d-b16fef83b6cd/",
            },
            {
              title: "Frontend Developer Internship & Agile Collaboration",
              org: "MotionCut",
              link: "https://drive.google.com/file/d/1f3gc00-pJvpo8BGStYbmVD3kKsDoZT2C/view?usp=drive_link",
            },
            {
              title: "Data Analytics and Python",
              org: "Anudip Foundation",
              link: "https://drive.google.com/file/d/1aQnd0osj2M1e3N9qjly1rH9vQRcTsJ1c/view?usp=drive_link",
            },
          ].map((cert, i) => (
            <motion.div
              key={i}
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-5 shadow-md hover:shadow-blue-600/30 transition"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-semibold text-blue-300">
                {cert.title}
              </h4>
              <p className="text-gray-400 text-sm mt-2">{cert.org}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm mt-3 inline-block hover:underline"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* --- Honors & Achievements --- */}
      <motion.div
        className="mt-20 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-blue-400 flex items-center gap-2 mb-8">
          <FaAward /> Honors & Achievements
        </h3>
        <motion.div
          className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-2xl p-6 shadow-lg"
          whileHover={{ scale: 1.03 }}
        >
          <p className="text-gray-300 leading-relaxed">
            🏆 Solved <span className="text-blue-400 font-semibold">200+</span>{" "}
            algorithmic problems across LeetCode, CodeChef, and HackerRank.
            Demonstrated strong problem-solving and optimization abilities with
            efficient data structures and algorithms.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
