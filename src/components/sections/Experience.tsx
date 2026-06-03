"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, MapPin } from "lucide-react";

interface Role {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  color: string;
}

const experiences: Role[] = [
  {
    company: "ITVE Pvt. Ltd.",
    role: "Backend Developer",
    duration: "2024 - Present",
    location: "Karachi, Pakistan (Hybrid)",
    responsibilities: [
      "Built scalable backend systems and high-throughput application servers using FastAPI",
      "Designed and documented standard REST APIs for seamless frontend integration",
      "Implemented secure JWT Token Authentication and role-based route guards",
      "Developed relational database architectures using PostgreSQL and SQLAlchemy",
      "Managed database schema migrations using Alembic without downtime",
      "Optimized application performance by tuning queries, indexing, and connection pools",
      "Automated server deployments on Railway cloud infrastructure",
    ],
    skills: ["FastAPI", "PostgreSQL", "Alembic", "Railway", "REST APIs", "JWT", "SQLAlchemy"],
    color: "from-purple-500/20 to-indigo-500/20 hover:border-purple-500/40",
  },
  {
    company: "Combine Foundation",
    role: "Full Stack Developer",
    duration: "2023 - 2024",
    location: "Karachi, Pakistan (On-site)",
    responsibilities: [
      "Developed comprehensive donor and student management systems with analytics dashboard",
      "Built responsive full-stack applications with Next.js frontend and Python API servers",
      "Integrated MongoDB for flexible document-driven database requirements",
      "Implemented strict Role-Based Access Control (RBAC) authorization models",
      "Containerized dev/prod architectures using Docker multi-stage builds",
      "Designed scalable system architectures prioritizing modularity and security",
    ],
    skills: ["Next.js", "FastAPI", "MongoDB", "Docker", "RBAC", "Full Stack Development"],
    color: "from-cyan-500/20 to-teal-500/20 hover:border-cyan-500/40",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative px-4">
      {/* Background ambient glowing nodes */}
      <div className="absolute top-[50%] left-[5%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-semibold tracking-wider font-space uppercase">
            02 . Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-zinc-800/80 ml-4 md:ml-32 space-y-16">
          {experiences.map((exp, index) => {
            return (
              <div key={exp.company} className="relative">
                {/* Timeline node icon */}
                <span className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-400 shadow-md">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                </span>

                {/* Left side year tag (desktop only) */}
                <div className="hidden md:block absolute -left-28 top-3 text-right">
                  <span className="font-space text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 to-zinc-500">
                    {exp.duration}
                  </span>
                </div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`ml-8 p-6 md:p-8 rounded-2xl border border-zinc-800/60 bg-gradient-to-br ${exp.color} backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/60 pb-6 mb-6">
                    <div>
                      {/* Job Title & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 font-space tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-purple-400 font-semibold font-space text-sm mt-1">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-zinc-400 font-space">
                      {/* Duration for mobile view */}
                      <span className="flex items-center space-x-1.5 md:hidden">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-3.5 text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3 group">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-semibold font-space rounded-md border border-zinc-800/80 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
