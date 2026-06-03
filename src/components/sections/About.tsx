"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, FileCode, Award, BookOpen, Layers } from "lucide-react";

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
  content: string;
  language: string;
}

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs: Tab[] = [
    {
      id: "profile",
      name: "profile.ts",
      icon: <FileCode className="w-4 h-4 text-cyan-400" />,
      language: "typescript",
      content: `const engineer = {
  name: "Muhammad",
  education: "Bachelor of Software Engineering",
  university: "Sindh Madressatul Islam University",
  gpa: "3.2 / 4.0",
  location: "Karachi, Pakistan",
  focus: [
    "Backend Architectures",
    "AI & Agentic Workflows",
    "Scalable Cloud Pipelines",
    "Full-Stack Integration"
  ],
  passion: "Building intelligent software that scales"
};`,
    },
    {
      id: "stack",
      name: "stack.json",
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
      language: "json",
      content: `{
  "core": {
    "language": ["Python", "TypeScript", "SQL"],
    "backend": ["FastAPI", "RESTful APIs", "JWT Auth"],
    "frontend": ["Next.js 15", "React 19", "TailwindCSS"]
  },
  "intelligence": {
    "frameworks": ["LangChain", "LangGraph", "OpenAI SDK"],
    "systems": ["RAG", "Multi-Agent Networks", "MCP Servers"],
    "vectorDBs": ["Pinecone", "ChromaDB", "FAISS"]
  },
  "infrastructure": {
    "containers": ["Docker", "Kubernetes"],
    "ci_cd": ["Jenkins", "GitHub Actions"],
    "deployments": ["Railway", "Vercel", "Ubuntu VPS"]
  }
}`,
    },
    {
      id: "awards",
      name: "achievements.md",
      icon: <Award className="w-4 h-4 text-emerald-400" />,
      language: "markdown",
      content: `# Awards & Contributions

* 🏆 **Rising Star Award**
  - Awarded under Governor Sindh IT Initiative
  - For outstanding contributions to AI-driven automation
  - Recognizes impact in GenAI, Web3 and Metaverse

* 🌟 **IT & AI Innovation**
  - Designed & deployed automated pipelines
  - Guided 50+ students in backend engineering`,
    },
  ];

  return (
    <section id="about" className="py-24 relative px-4 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-semibold tracking-wider font-space uppercase">
            01 . Core Profile
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            About Muhammad
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
        </div>

        {/* Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Prose */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 font-space">
              Bridging Backend Scalability & AI Autonomy
            </h3>

            <p className="text-zinc-400 leading-relaxed font-sans">
              I am a Software Engineer passionate about building scalable backend architectures, AI-powered workflows, Retrieval-Augmented Generation (RAG) pipelines, and containerized cloud solutions. I focus on creating fast, reliable web infrastructures that interface smoothly with cutting-edge Large Language Models.
            </p>

            <p className="text-zinc-400 leading-relaxed font-sans">
              My engineering philosophy revolves around performance optimization, clean code principles, and automation. By combining FastAPI frameworks with orchestrators like LangGraph, I develop multi-agent workflows and custom Model Context Protocol (MCP) ecosystems that solve complex, autonomous tasks.
            </p>

            {/* Micro details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-800/80 transition-colors">
                <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 font-space">Education</h4>
                  <p className="text-xs text-zinc-400 mt-1">B.S. Software Engineering</p>
                  <p className="text-[10px] text-zinc-500">SMI University, GPA: 3.2</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl border border-zinc-800/40 bg-zinc-900/20 hover:border-zinc-800/80 transition-colors">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-200 font-space">Achievements</h4>
                  <p className="text-xs text-zinc-400 mt-1">Rising Star Award</p>
                  <p className="text-[10px] text-zinc-500">Governor Sindh IT Initiative</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive VS Code IDE */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-2xl overflow-hidden glass-panel-glow border border-zinc-800/80 flex flex-col shadow-2xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/60 border-b border-zinc-800/60 select-none">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-xs text-zinc-500 font-mono ml-4">editor - bash_profile</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-[10px] text-zinc-600 font-mono uppercase">TS v5.3</span>
                </div>
              </div>

              {/* IDE Editor Tabs */}
              <div className="flex bg-zinc-950/30 border-b border-zinc-800/50 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2.5 text-xs font-mono border-r border-zinc-800/40 transition-colors relative whitespace-nowrap ${
                        isActive ? "text-zinc-100 bg-zinc-900/60" : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Editor Code Area */}
              <div className="flex-1 p-6 bg-zinc-900/20 backdrop-blur-md font-mono text-xs overflow-auto min-h-[300px] leading-relaxed max-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-300 whitespace-pre-wrap select-text selection:bg-purple-500/20"
                  >
                    <code>
                      {tabs.find((t) => t.id === activeTab)?.content.split("\n").map((line, idx) => (
                        <div key={idx} className="flex">
                          <span className="text-zinc-600 w-6 text-right mr-4 select-none">{idx + 1}</span>
                          <span className="flex-1">{line}</span>
                        </div>
                      ))}
                    </code>
                  </motion.pre>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
