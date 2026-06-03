"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, Award } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger Confetti Explosion!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a855f7", "#06b6d4", "#10b981"],
      });

      // Clear Form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset Sent State after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative px-4">
      {/* Background glow grids */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-semibold tracking-wider font-space uppercase">
            08 . Connect
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Attract Collaboration
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            Attract international client engagements, AI engineering tasks, backend designs, or startup partnerships.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Badges */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md space-y-6">
              <h3 className="text-xl font-bold font-space text-zinc-200 tracking-tight">
                Muhammad
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Ready to deploy customized FastAPI routing, LangGraph agents, containerized DevOps grids, or analytics reports to production.
              </p>

              {/* Direct links */}
              <div className="space-y-4 text-xs font-mono text-zinc-300">
                <a
                  href="mailto:muhammad.smiu@gmail.com"
                  className="flex items-center space-x-3 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>muhammad.smiu@gmail.com</span>
                </a>
                <a
                  href="tel:+923183608176"
                  className="flex items-center space-x-3 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+92 318 3608176</span>
                </a>
                <div className="flex items-center space-x-3 text-zinc-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-zinc-800 bg-zinc-950/80 rounded-xl text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all shadow-md"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-zinc-800 bg-zinc-950/80 rounded-xl text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all shadow-md"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Certifications and credentials list card */}
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md space-y-4">
              <h4 className="text-xs font-bold font-space text-zinc-500 uppercase tracking-widest flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Credentials</span>
              </h4>
              <div className="space-y-3">
                <div className="border-l border-zinc-800 pl-4 py-0.5">
                  <div className="text-xs font-bold text-zinc-200 font-space">
                    Governor Sindh Initiative (GIAIC)
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">GenAI, Web3 & Metaverse (2023 - 2025)</div>
                </div>
                <div className="border-l border-zinc-800 pl-4 py-0.5">
                  <div className="text-xs font-bold text-zinc-200 font-space flex items-center space-x-1">
                    <span>Rising Star Award</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">Outstanding contributions to AI-driven automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/10 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider font-space text-zinc-500">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider font-space text-zinc-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider font-space text-zinc-500">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Startup collaboration / Freelance project"
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500 transition-colors font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase font-bold tracking-wider font-space text-zinc-500">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about your role scope, API parameters or agent workflows..."
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-purple-500 transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-zinc-800 disabled:to-zinc-800 text-white font-medium rounded-xl text-sm transition-all duration-300 shadow-lg shadow-purple-500/10 border border-purple-500/20 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs uppercase animate-pulse">Transmitting...</span>
                  ) : isSent ? (
                    <div className="flex items-center space-x-1.5 text-emerald-400 font-mono text-xs uppercase">
                      <CheckCircle className="w-4 h-4 animate-bounce" />
                      <span>Transmission Received</span>
                    </div>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Status display overlay banner */}
              <AnimatePresence>
                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-6 bottom-24 p-4 border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-xl rounded-xl flex items-center space-x-3.5 text-xs text-emerald-300 font-mono"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Transmission Successful!</div>
                      <div className="text-[10px] opacity-75 mt-0.5">Confetti cascade fired. I will respond to your endpoint soon.</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
