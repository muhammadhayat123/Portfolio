"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Sparkles, Cpu } from "lucide-react";

interface Project {
  title: string;
  isFlagship?: boolean;
  tech: string[];
  features: string[];
  description: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: "AI Knowledge Assistant",
    isFlagship: true,
    tech: ["LangChain", "LangGraph", "OpenAI", "Next.js", "FastAPI", "PostgreSQL"],
    features: [
      "Dynamic document uploading & preprocessing",
      "Semantic similarity indexing via vector search",
      "LangGraph cyclic state graph execution",
      "Context-augmented prompt generation",
      "Conversational memory persistence",
    ],
    description:
      "A flagship corporate intelligence engine executing agentic document retrieval. It uses a FastAPI server backend to load documents, parse metadata, store vector embeddings in PGVector, and orchestrates dynamic multi-agent query routing via LangGraph cycles.",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Multi-Agent AI System",
    tech: ["LangGraph", "OpenAI Agents SDK", "FastAPI"],
    features: [
      "Dynamic agent cooperation protocols",
      "Local/web search tool call binding",
      "Recursive planning task loops",
      "Persistent session state databases",
    ],
    description:
      "A multi-agent team designed to solve complex software debugging objectives autonomously. Configured with a Router node that decomposes user prompts, delegates sub-tasks to specialized coder/tester agents, and consolidates the output.",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Donor Management System",
    tech: ["FastAPI", "MongoDB", "Docker"],
    features: [
      "Custom JWT Auth authorization state",
      "Role-Based Access Control (RBAC)",
      "Structured aggregation metrics pipelines",
      "Production Docker container profiles",
    ],
    description:
      "A full-fledged platform managing donation campaigns, matching donors to charities, and plotting detailed donation analytical metrics. Implements robust audit logging and route protections using custom FastAPI middleware.",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Student Management Platform",
    tech: ["FastAPI", "MongoDB", "Docker"],
    features: [
      "Student registration and grade records",
      "Role-based teacher/admin capabilities",
      "Visual analytical dashboard tables",
    ],
    description:
      "An administration hub designed to streamline educational record operations. Features clean REST endpoints, bulk grade data uploading, and database indexing for quick student queries under heavy loads.",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-Commerce Platform",
    tech: ["Next.js", "Sanity CMS", "Clerk"],
    features: [
      "Clerk third-party authorization integrations",
      "Sanity database content management",
      "Responsive checkout shopping systems",
    ],
    description:
      "A consumer shopping web application featuring static site generation for optimized loading speeds. Interfaces with Sanity CMS for product updates and Clerk for secure authentication.",
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  const [showArch, setShowArch] = useState(false);

  return (
    <section id="projects" className="py-24 relative px-4">
      {/* Background glow highlights */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-semibold tracking-wider font-space uppercase">
            06 . Works & Code
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            Selected engineering solutions combining API infrastructure, autonomous LLM orchestration, and modern user interfaces.
          </p>
        </div>

        {/* Flagship Project Card (Wide Card) */}
        {projects
          .filter((p) => p.isFlagship)
          .map((proj) => (
            <div
              key={proj.title}
              className="w-full p-6 md:p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-tr from-[#0c0a21] via-zinc-900/40 to-zinc-950/60 backdrop-blur-md shadow-2xl mb-12 relative overflow-hidden"
            >
              {/* Corner flagship tag */}
              <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-l from-purple-600 to-indigo-600 rounded-bl-xl text-[10px] uppercase font-bold tracking-wider font-space text-white shadow-lg flex items-center space-x-1">
                <Sparkles className="w-3 h-3 animate-pulse" />
                <span>Flagship Project</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Info Column */}
                <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-space tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-3 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {proj.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 text-[11px] font-semibold font-space rounded-md border border-zinc-800 bg-zinc-950/80 text-zinc-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setShowArch(!showArch)}
                      className="px-4 py-2 border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-purple-300 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors font-space uppercase"
                    >
                      <Layers className="w-4 h-4" />
                      <span>{showArch ? "Hide Architecture" : "View Architecture"}</span>
                    </button>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors font-space uppercase"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>

                {/* Diagram/Architecture Column */}
                <div className="lg:col-span-5 flex items-center justify-center min-h-[300px]">
                  <div className="w-full h-full p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      {showArch ? (
                        <motion.div
                          key="architecture-diag"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="flex flex-col space-y-4 font-mono text-[10px] text-zinc-400"
                        >
                          <div className="text-center font-bold text-purple-400 border-b border-zinc-900 pb-2">
                            SYSTEM DATAFLOW SCHEMA
                          </div>

                          {/* Node 1: client */}
                          <div className="p-2 border border-purple-500/25 bg-purple-500/5 rounded text-center">
                            <div className="font-bold text-purple-300">Next.js Client (SPA)</div>
                            <div>Exposes Chat Interface & File Uploaders</div>
                          </div>

                          <div className="text-center text-zinc-600">▼ HTTP request</div>

                          {/* Node 2: api */}
                          <div className="p-2 border border-cyan-500/25 bg-cyan-500/5 rounded text-center">
                            <div className="font-bold text-cyan-300">FastAPI Middleware Gateway</div>
                            <div>JWT Authentication check & File upload stream</div>
                          </div>

                          <div className="text-center text-zinc-600">▼ Python context payload</div>

                          {/* Node 3: engine */}
                          <div className="grid grid-cols-2 gap-2">
                            <div className="p-2 border border-zinc-800 bg-zinc-900/60 rounded text-center">
                              <div className="font-bold text-zinc-300">LangGraph Agent</div>
                              <div>Cyclic memory graph</div>
                            </div>
                            <div className="p-2 border border-zinc-800 bg-zinc-900/60 rounded text-center">
                              <div className="font-bold text-zinc-300">PGVector Database</div>
                              <div>Semantic cosine query</div>
                            </div>
                          </div>

                          <div className="text-center text-zinc-600">▼ OpenAI query lookup</div>

                          <div className="p-2 border border-emerald-500/25 bg-emerald-500/5 rounded text-center font-bold text-emerald-300">
                            Augmented LLM Response Generation
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="visual-card"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center space-y-3 text-center"
                        >
                          <div className="w-16 h-16 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400">
                            <Cpu className="w-8 h-8 animate-pulse" />
                          </div>
                          <div>
                            <h4 className="text-zinc-200 font-bold font-space">AI Knowledge Assistant</h4>
                            <p className="text-[11px] text-zinc-500 font-mono mt-1 max-w-[240px]">
                              Next.js 15, FastAPI, LangGraph, PGVector, OpenAI API
                            </p>
                          </div>
                          <span className="text-[10px] text-zinc-600 font-mono italic">
                            Click &apos;View Architecture&apos; to inspect internal design layers
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Small Project Cards Grid (2 Columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.isFlagship)
            .map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-2xl border border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-850 hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold font-space text-zinc-200 tracking-tight">
                      {proj.title}
                    </h4>
                    <Code className="w-4 h-4 text-zinc-600" />
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-1.5 text-[11px] text-zinc-400 font-mono">
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/40 space-y-3.5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 text-[10px] font-semibold font-space rounded border border-zinc-900 bg-zinc-950/60 text-zinc-500"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center space-x-3 text-[11px] font-bold text-zinc-400 uppercase font-space">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-200 flex items-center space-x-1 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-zinc-200 flex items-center space-x-1 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
