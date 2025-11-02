import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  return (
    <div className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}
