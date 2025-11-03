import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    "Home",
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-2 right-2 mx-auto z-50 max-w-6xl px-4 py-2 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(15,20,35,0.85)] backdrop-blur-lg border border-white/10 shadow-lg"
          : "bg-[rgba(15,20,35,0.55)] backdrop-blur-md border border-white/5"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <RouterLink
            to="/"
            className="text-blue-400 font-bold tracking-wide text-lg"
          >
            Tarun Saxena
          </RouterLink>
          <div className="text-xs text-white/60 hidden md:block">
            Full-Stack Dev
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth
              offset={-80}
              className="px-3 py-2 rounded-md text-sm text-white/70 hover:text-blue-400 hover:bg-white/5 cursor-pointer transition-all"
            >
              {l}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setActive((v) => !v)}
            className="p-2 rounded-md bg-white/10 text-white hover:bg-blue-600/40 transition"
          >
            {active ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide Down */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-[64px] left-0 right-0 bg-[rgba(10,14,22,0.95)] backdrop-blur-lg border-t border-white/10 shadow-xl rounded-b-2xl md:hidden"
          >
            <div className="flex flex-col items-center py-4 space-y-3">
              {links.map((l) => (
                <Link
                  key={l}
                  to={l.toLowerCase()}
                  smooth
                  offset={-70}
                  onClick={() => setActive(false)}
                  className="block py-2 px-3 text-white/90 hover:text-blue-400 hover:bg-white/10 rounded-md w-[90%] text-center transition-all"
                >
                  {l}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
