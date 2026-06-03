"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Laptop,
  Server,
  Brain,
  Database,
  Terminal,
  BarChart,
  ShieldCheck,
} from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    icon: <Code className="w-5 h-5 text-purple-400" />,
    color: "border-purple-500/20 bg-purple-500/5",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    name: "Backend Architecture",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    color: "border-indigo-500/20 bg-indigo-500/5",
    skills: [
      "FastAPI",
      "RESTful APIs",
      "JWT Authentication",
      "API Architecture",
      "Server Design",
      "SQLAlchemy"
    ],
  },
  {
    id: "ai",
    name: "AI & LLM Engineering",
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: "border-cyan-500/20 bg-cyan-500/5",
    skills: [
      "OpenAI APIs",
      "OpenAI Agents SDK",
      "LangChain",
      "LangGraph",
      "RAG Systems",
      "Prompt Engineering",
      "Vector DBs",
      "AI Agents",
      "MCP Servers",
      "Multi-Agent Networks",
      "FAISS / Pinecone",
      "Embeddings",
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Laptop className="w-5 h-5 text-violet-400" />,
    color: "border-violet-500/20 bg-violet-500/5",
    skills: ["Next.js 15", "React 19", "Tailwind CSS", "ShadCN UI", "Framer Motion", "TypeScript"],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    color: "border-emerald-500/20 bg-emerald-500/5",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: "devops",
    name: "DevOps & Infrastructure",
    icon: <Terminal className="w-5 h-5 text-pink-400" />,
    color: "border-pink-500/20 bg-pink-500/5",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins CI/CD",
      "Vercel",
      "Linux Administration",
      "Ubuntu VPS",
      "SSH Keys",
      "Bash Scripting",
    ],
  },
  {
    id: "analytics",
    name: "Data Analytics",
    icon: <BarChart className="w-5 h-5 text-teal-400" />,
    color: "border-teal-500/20 bg-teal-500/5",
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Jupyter Notebook",
      "Matplotlib",
      "Seaborn",
      "Data Cleaning",
      "EDA",
    ],
  },
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-24 relative px-4">
      {/* Ambient backgrounds */}
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-semibold tracking-wider font-space uppercase">
            05 . Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            A comprehensive list of engineering frameworks, APIs, tooling, and database systems in my core workflow.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
        >
          {skillCategories.map((category) => {
            const isHovered = hoveredCategory === category.id;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`p-6 rounded-2xl border transition-all duration-300 ${category.color} ${
                  isHovered ? "border-zinc-700/80 shadow-lg scale-[1.01]" : "border-zinc-800/40"
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3.5 border-b border-zinc-800/60 pb-4 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-950/80 border border-zinc-850">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold font-space text-zinc-200 uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>

                {/* Skill badges grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-zinc-800/40 bg-zinc-950/50 hover:bg-zinc-900 hover:border-zinc-700/60 transition-all duration-300"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span className="text-xs text-zinc-300 font-sans tracking-wide">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
