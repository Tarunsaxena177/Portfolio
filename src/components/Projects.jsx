import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PROJECTS from "../data/projects";

const filters = ["All", "Frontend", "Full Stack", "AI"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  // Filter by category
  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const viewDetails = (proj) => {
    navigate(`/projects/${proj.id}`, { state: { project: proj } });
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Filters */}
      <div className="flex gap-6 mb-10 flex-wrap justify-center">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full border border-blue-500 transition-all ${
              activeFilter === f
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "text-blue-300 hover:bg-blue-800"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl"
      >
        <AnimatePresence>
          {filtered.map((proj) => (
            <motion.div
              key={proj.id}
              className="bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{proj.tech}</p>

                {/* Show first bullet point as summary */}
                {Array.isArray(proj.longDesc) && proj.longDesc.length > 0 ? (
                  <p className="text-gray-300 mb-4">{proj.longDesc[0]}</p>
                ) : (
                  <p className="text-gray-300 mb-4">{proj.desc}</p>
                )}

                <button
                  onClick={() => viewDetails(proj)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
