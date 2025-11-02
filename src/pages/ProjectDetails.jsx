import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import PROJECTS from "../data/projects";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const location = useLocation();
  // Prefer state if passed, else lookup by id
  const proj =
    (location.state && location.state.project) ||
    PROJECTS.find((p) => p.id === id);

  if (!proj) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/" className="text-blue-400 underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24 px-6 bg-gradient-to-b from-[#020617] to-[#03102a] text-white">
      <motion.div
        className="max-w-4xl mx-auto bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl border border-white/6 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-2">{proj.title}</h1>
        <p className="text-gray-400 mb-4">{proj.tech}</p>
        {/* Render bullet points */}
        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
          {Array.isArray(proj.longDesc) ? (
            proj.longDesc.map((point, i) => <li key={i}>{point}</li>)
          ) : (
            <li>{proj.longDesc}</li>
          )}
        </ul>

        <div className="flex gap-4 mb-6">
          <a
            href={proj.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href={proj.live || "#"}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-green-700 rounded-md hover:bg-green-600"
          >
            Live Demo
          </a>
        </div>

        <div className="mb-6">
          {proj.video ? (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-md"
                src={proj.video}
                title="Project overview"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="bg-[rgba(255,255,255,0.02)] p-8 rounded-md text-gray-400">
              No video added yet. You can paste a YouTube embed link in the
              project data.
            </div>
          )}
        </div>

        <Link to="/" className="text-blue-400 underline">
          ← Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
