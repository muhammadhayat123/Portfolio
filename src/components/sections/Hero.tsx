"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Enthusiast",
];

// Let's write the complete file:
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 3D Neural Network Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 500);
    let height = (canvas.height = 500);

    const handleResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        width = canvas.width = Math.min(rect.width, 500);
        height = canvas.height = Math.min(rect.width, 500);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // 3D points
    interface Point3D {
      x: number;
      y: number;
      z: number;
      px: number; // projected x
      py: number; // projected y
    }

    const numPoints = 50;
    const points: Point3D[] = [];
    const radius = 160;

    for (let i = 0; i < numPoints; i++) {
      // Uniform spherical distribution
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;

      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        px: 0,
        py: 0,
      });
    }

    // Rotation angles
    let angleX = 0.002;
    let angleY = 0.003;

    const rotateX = (p: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const y1 = p.y * cos - p.z * sin;
      const z1 = p.z * cos + p.y * sin;
      p.y = y1;
      p.z = z1;
    };

    const rotateY = (p: Point3D, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const x1 = p.x * cos - p.z * sin;
      const z1 = p.z * cos + p.x * sin;
      p.x = x1;
      p.z = z1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse-influenced dynamic rotation speeds
      const targetAngleX = 0.002 + mouseRef.current.ry * 0.0001;
      const targetAngleY = 0.003 + mouseRef.current.rx * 0.0001;
      angleX += (targetAngleX - angleX) * 0.1;
      angleY += (targetAngleY - angleY) * 0.1;

      // Project points
      const cx = width / 2;
      const cy = height / 2;
      const fov = 350;

      points.forEach((p) => {
        rotateX(p, angleX);
        rotateY(p, angleY);

        // Perspective projection
        const scale = fov / (fov + p.z);
        p.px = cx + p.x * scale;
        p.py = cy + p.y * scale;
      });

      // Draw connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        let connections = 0;

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Connect points that are close
          if (dist < 100 && connections < 3) {
            connections++;
            // Line color depends on depth (z)
            const alpha = (1 - dist / 100) * 0.25 * ((p1.z + p2.z + 2 * radius) / (4 * radius));
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      points.forEach((p) => {
        const size = (p.z + radius) / (2 * radius) * 3.5 + 1.5;
        const alpha = (p.z + radius) / (2 * radius) * 0.6 + 0.2;

        // Base glow color
        let color = `rgba(168, 85, 247, ${alpha})`;
        if (p.x > 50) color = `rgba(6, 182, 212, ${alpha})`;
        else if (p.y > 50) color = `rgba(16, 185, 129, ${alpha})`;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();

        // Extra subtle node halo
        if (p.z > 80) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw subtle orbital ring
      ctx.strokeStyle = "rgba(168, 85, 247, 0.03)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = e.clientX - rect.left - cx;
      const y = e.clientY - rect.top - cy;
      mouseRef.current.rx = x;
      mouseRef.current.ry = y;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      {/* Decorative gradient glowing spots */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12 md:py-24">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-violet-300 text-xs font-semibold font-space w-fit shadow-md shadow-violet-500/5"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span>Open for International Collaborations</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="text-zinc-100 block">Hello, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400">
                Muhammad
              </span>
            </motion.h1>

            {/* Role Switcher Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-[44px] md:h-[52px] overflow-hidden flex items-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-space text-zinc-300 flex items-center">
                <span className="mr-3 text-zinc-500 font-normal">as a</span>
                <div className="relative inline-block h-full align-middle">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -25, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 14 }}
                      className="absolute left-0 top-0 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                  {/* Invisible spacer to maintain layout layout */}
                  <span className="opacity-0 select-none pointer-events-none">
                    Backend Developer Specialist
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans"
          >
            Building scalable software architectures, intelligent AI pipelines with multi-agent coordination, and enterprise cloud-native containerized workloads.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="group flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-xl text-sm transition-all duration-300 shadow-lg shadow-purple-500/25 border border-purple-500/20 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center space-x-2 px-6 py-3.5 bg-zinc-900 border border-zinc-800/80 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium rounded-xl text-sm transition-all duration-300 active:scale-95"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Contact Me</span>
            </button>

            <a
              href="\Muhammad00.pdf"
              className="flex items-center space-x-2 px-5 py-3.5 bg-transparent border border-zinc-800/40 hover:border-zinc-700/60 text-zinc-400 hover:text-zinc-200 font-medium rounded-xl text-sm transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Right Graphic Container */}
        <div
          ref={containerRef}
          className="lg:col-span-5 flex items-center justify-center relative select-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-square max-w-[450px] flex items-center justify-center"
          >
            {/* Holographic backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse-glow" />

            {/* Neural Net Canvas */}
            <canvas
              ref={canvasRef}
              className="w-full h-full max-w-[450px] max-h-[450px] cursor-pointer drop-shadow-2xl"
            />

            {/* Floating SaaS Icon badges around neural network */}
            <div className="absolute top-[10%] right-[10%] animate-float" style={{ animationDelay: "0s" }}>
              <div className="px-3 py-1.5 rounded-lg border border-purple-500/20 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold font-space text-purple-300 flex items-center space-x-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>FastAPI</span>
              </div>
            </div>

            <div className="absolute bottom-[20%] left-[5%] animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="px-3 py-1.5 rounded-lg border border-cyan-500/20 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold font-space text-cyan-300 flex items-center space-x-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Next.js</span>
              </div>
            </div>

            <div className="absolute bottom-[10%] right-[15%] animate-float" style={{ animationDelay: "3s" }}>
              <div className="px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold font-space text-emerald-300 flex items-center space-x-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Docker</span>
              </div>
            </div>

            <div className="absolute top-[20%] left-[10%] animate-float" style={{ animationDelay: "0.8s" }}>
              <div className="px-3 py-1.5 rounded-lg border border-indigo-500/20 bg-zinc-950/80 backdrop-blur-md text-xs font-semibold font-space text-indigo-300 flex items-center space-x-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>LangGraph</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => handleScrollTo("about")}>
        <span className="text-[10px] uppercase font-bold tracking-widest font-space">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
