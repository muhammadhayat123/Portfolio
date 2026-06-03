import React from "react";
import AnimatedBackground from "@/components/effects/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import AIEngineering from "@/components/sections/AIEngineering";
import DevOps from "@/components/sections/DevOps";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/sections/Projects";
import DataAnalytics from "@/components/sections/DataAnalytics";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100 overflow-x-hidden">
      {/* Background Interactive canvas particles & grid */}
      <AnimatedBackground />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <AIEngineering />
        <DevOps />
        <Skills />
        <Projects />
        <DataAnalytics />
        <Contact />
      </main>

      {/* Futuristic footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/60 backdrop-blur-md py-12 px-4 text-center text-xs text-zinc-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-zinc-400 font-bold font-space tracking-wider">MUHAMMAD</span>
            <span className="text-zinc-600">|</span>
            <span>AI & Backend Portfolio</span>
          </div>

          <div className="space-y-1 md:text-right">
            <div>
              Designed with Next.js 15 & Framer Motion. All rights reserved.
            </div>
            <div className="text-[10px] text-zinc-600">
              Build Endpoint: v1.4.0 • Local Time: 2026 Karachi
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
