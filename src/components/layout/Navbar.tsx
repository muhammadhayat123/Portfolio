"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "AI Engineering", href: "#ai-engineering" },
  { name: "DevOps", href: "#devops" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.href.replace("#", ""));
        return {
          id: item.href,
          offset: el ? el.offsetTop - 120 : 0,
          height: el ? el.offsetHeight : 0,
        };
      });

      const currentPosition = window.scrollY;
      let active = "";

      for (let i = 0; i < sections.length; i++) {
        const s = sections[i];
        if (currentPosition >= s.offset && currentPosition < s.offset + s.height) {
          active = s.id;
          break;
        }
      }

      setActiveSection(active);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/60 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/20"
            >
              <Cpu className="w-5 h-5" />
            </motion.div>
            <motion.a
              href="#"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-bold tracking-wider font-space bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400"
            >
              MUHAMMAD
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors font-space rounded-md ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-zinc-800/40 border border-zinc-700/30 rounded-md -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden md:flex items-center">
            <motion.a
                href="https://wa.me/923183608176?text=Assalamualaikum"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="group flex items-center space-x-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider font-space text-zinc-100 bg-zinc-900 border border-zinc-800/80 rounded-lg hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-sm"
              >
                <span>Attract Me</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/95 border-b border-zinc-900 backdrop-blur-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium font-space transition-colors ${
                      isActive
                        ? "text-purple-400 bg-purple-500/10 border border-purple-500/20"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, "#contact")}
                  className="w-full flex items-center justify-center space-x-1 py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium font-space text-center text-sm shadow-lg shadow-purple-600/20 transition-all"
                >
                  <span>Attract Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
