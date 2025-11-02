import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    title: "Frontend Developer Internship",
    company: "MotionCut",
    date: "Aug 2024 - Oct 2024",
    bullets: [
      "Developed and optimized responsive user interfaces using React.js, HTML, CSS, and JavaScript.",
      "Worked with design and backend teams to integrate RESTful APIs and ensure seamless UI/UX across devices.",
      "Built reusable components and used Redux for efficient state management, cutting code redundancy by 25%.",
      "Utilized Git and GitHub to manage version control and deliver sprint-based feature updates efficiently.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Bits and Volts Pvt. Ltd.",
    date: "Sep 2024 - Present",
    bullets: [
      "Architected responsive web interfaces using HTML, CSS, JavaScript, and React.js supporting multi-device.",
      "Implemented backend modules using Node, Express and MongoDB to support scalable feature development.",
      "Deployed RESTful APIs integrated with MongoDB, ensuring seamless data flow and optimized performance.",
      "Executed testing and debugging of MERN applications, improving overall system stability and user experience.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 py-20 sm:py-24"
    >
      {/* Section title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-blue-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        {EXPERIENCE.map((e, idx) => (
          <motion.div
            key={idx}
            className="bg-gradient-to-br from-[#001223]/40 to-[#00102a]/30 border border-blue-500/20 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,20,60,0.5)] hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
          >
            {/* Title + Date */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {e.title}
                </h3>
                <div className="text-sm text-blue-200 mt-1">{e.company}</div>
              </div>
              <div className="text-xs sm:text-sm text-white/60">{e.date}</div>
            </div>

            {/* Bullet Points */}
            <div className="mt-4 text-white/70 space-y-2">
              {e.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-400/80" />
                  <p className="text-sm sm:text-base leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlights Section */}
      <motion.div
        className="mt-10 sm:mt-12 w-full max-w-6xl bg-[rgba(0,20,40,0.35)] border border-blue-500/10 rounded-3xl p-6 sm:p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-base sm:text-lg text-blue-300 font-semibold mb-3">
          Highlights
        </h4>
        <ul className="text-white/70 space-y-2 text-sm sm:text-base leading-relaxed">
          <li>
            • Built reusable components and used Redux for efficient state
            management, cutting code redundancy by 25%.
          </li>
          <li>
            • Executed testing and debugging of MERN applications, improving
            overall system stability and user experience.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
