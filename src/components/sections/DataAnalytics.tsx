"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, AlertCircle } from "lucide-react";

type ChartType = "loss" | "latency";

export default function DataAnalytics() {
  const [activeChart, setActiveChart] = useState<ChartType>("loss");
  const [hoveredPoint, setHoveredPoint] = useState<{ x: number; y: number; val: string; label: string } | null>(null);

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 220;
  const padding = 30;

  // Chart 1: Model Loss Curve Data
  // Epochs 1 to 6
  const lossPoints = [
    { label: "Ep 1", val: "0.95", cx: 40, cy: 35 },
    { label: "Ep 2", val: "0.58", cx: 120, cy: 90 },
    { label: "Ep 3", val: "0.34", cx: 200, cy: 130 },
    { label: "Ep 4", val: "0.21", cx: 280, cy: 155 },
    { label: "Ep 5", val: "0.14", cx: 360, cy: 170 },
    { label: "Ep 6", val: "0.08", cx: 440, cy: 180 },
  ];

  // Chart 2: API Latency Profiles (ms)
  // Options
  const latencyPoints = [
    { label: "Direct DB Scan", val: "142ms", cx: 40, cy: 45, height: 145 },
    { label: "Indexed DB Lookup", val: "22ms", cx: 120, cy: 165, height: 25 },
    { label: "Redis Cache Hit", val: "2ms", cx: 200, cy: 185, height: 5 },
    { label: "LangGraph Flow", val: "185ms", cx: 280, cy: 10, height: 180 },
    { label: "FastAPI Route", val: "12ms", cx: 360, cy: 175, height: 15 },
    { label: "Vector Search", val: "68ms", cx: 440, cy: 120, height: 70 },
  ];

  return (
    <section id="data-analytics" className="py-24 relative px-4">
      {/* Background glow spot */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs font-semibold tracking-wider font-space uppercase">
            07 . Insights & Analytics
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Data Analytics & BI
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            Translating complex server database metrics and AI token consumption charts into business intelligence dashboards.
          </p>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Tools & Capabilities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold font-space text-zinc-200 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                <span>Exploratory Analysis (EDA)</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Muhammad cleans messy dataset streams using Python (Pandas/NumPy) and draws statistical relationships to optimize operational bottlenecks.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-zinc-300 font-space pt-2">
                <div className="p-3 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                  <div className="text-emerald-400 font-bold">Data Cleaning</div>
                  <div className="text-[10px] text-zinc-500 font-normal mt-0.5">Handling nulls & formats</div>
                </div>
                <div className="p-3 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                  <div className="text-purple-400 font-bold">Reporting</div>
                  <div className="text-[10px] text-zinc-500 font-normal mt-0.5">Power BI dashboards</div>
                </div>
              </div>
            </div>

            {/* Tools list card */}
            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md flex-1 flex flex-col justify-center">
              <h4 className="text-xs font-bold font-space text-zinc-500 uppercase tracking-widest mb-4">
                Analytics Tooling Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn", "Jupyter Notebook"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950/70 text-xs font-semibold font-space text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Chart Display */}
          <div className="lg:col-span-7">
            <div className="w-full rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative min-h-[400px]">
              {/* Tabs */}
              <div className="flex items-center justify-between border-b border-zinc-800/50 pb-4 mb-6">
                <span className="text-xs text-zinc-400 font-mono font-bold">Active Insights Sandbox:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setActiveChart("loss");
                      setHoveredPoint(null);
                    }}
                    className={`px-3 py-1.5 text-xs font-space font-semibold rounded-lg transition-colors ${
                      activeChart === "loss"
                        ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                        : "border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    Model Loss
                  </button>
                  <button
                    onClick={() => {
                      setActiveChart("latency");
                      setHoveredPoint(null);
                    }}
                    className={`px-3 py-1.5 text-xs font-space font-semibold rounded-lg transition-colors ${
                      activeChart === "latency"
                        ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                        : "border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    System Latencies
                  </button>
                </div>
              </div>

              {/* Chart SVG Window */}
              <div className="flex-1 w-full bg-zinc-950/60 border border-zinc-850 rounded-xl p-4 flex items-center justify-center relative min-h-[220px]">
                {/* SVG Graph */}
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full select-none overflow-visible">
                  {/* Grid Lines */}
                  <line x1={padding} y1={padding} x2={padding} y2={svgHeight - padding} stroke="#1f1f2e" strokeWidth={1} />
                  <line x1={padding} y1={svgHeight - padding} x2={svgWidth - padding} y2={svgHeight - padding} stroke="#1f1f2e" strokeWidth={1} />
                  <line x1={padding} y1={padding} x2={svgWidth - padding} y2={padding} stroke="#1f1f2e" strokeWidth={0.5} strokeDasharray="3" />
                  <line x1={padding} y1={(svgHeight) / 2} x2={svgWidth - padding} y2={(svgHeight) / 2} stroke="#1f1f2e" strokeWidth={0.5} strokeDasharray="3" />

                  {/* LINE CHART: Model Loss */}
                  {activeChart === "loss" && (
                    <>
                      {/* Gradient fill */}
                      <path
                        d={`M 40 35 L 120 90 L 200 130 L 280 155 L 360 170 L 440 180 L 440 190 L 40 190 Z`}
                        fill="rgba(16, 185, 129, 0.05)"
                      />

                      {/* Main connecting lines */}
                      <path
                        d={`M 40 35 L 120 90 L 200 130 L 280 155 L 360 170 L 440 180`}
                        fill="none"
                        stroke="#10b981"
                        strokeWidth={2}
                      />

                      {/* Data nodes */}
                      {lossPoints.map((pt, idx) => (
                        <circle
                          key={idx}
                          cx={pt.cx}
                          cy={pt.cy}
                          r={hoveredPoint?.label === pt.label ? 6 : 4}
                          fill="#10b981"
                          stroke="#030014"
                          strokeWidth={1.5}
                          className="cursor-pointer transition-all duration-150"
                          onMouseEnter={() =>
                            setHoveredPoint({ x: pt.cx, y: pt.cy, val: pt.val, label: pt.label })
                          }
                        />
                      ))}
                    </>
                  )}

                  {/* BAR CHART: API Latency */}
                  {activeChart === "latency" && (
                    <>
                      {latencyPoints.map((pt, idx) => {
                        const barWidth = 32;
                        const rx = pt.cx - barWidth / 2;
                        const ry = pt.cy;
                        const rheight = pt.height;

                        return (
                          <g key={idx}>
                            <rect
                              x={rx}
                              y={ry}
                              width={barWidth}
                              height={rheight}
                              rx={3}
                              fill="url(#barGradient)"
                              stroke="#06b6d4"
                              strokeWidth={0.5}
                              className="cursor-pointer transition-opacity duration-150 hover:opacity-85"
                              onMouseEnter={() =>
                                setHoveredPoint({ x: pt.cx, y: pt.cy - 10, val: pt.val, label: pt.label })
                              }
                            />
                          </g>
                        );
                      })}

                      {/* Defs for gradients */}
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                          <stop offset="100%" stopColor="rgba(6, 182, 212, 0.05)" />
                        </linearGradient>
                      </defs>
                    </>
                  )}

                  {/* Labels on Y axis */}
                  <text x={10} y={padding + 5} fill="#52526b" fontSize={8} fontFamily="monospace">MAX</text>
                  <text x={10} y={(svgHeight) / 2 + 3} fill="#52526b" fontSize={8} fontFamily="monospace">MID</text>
                  <text x={10} y={svgHeight - padding + 3} fill="#52526b" fontSize={8} fontFamily="monospace">0</text>

                  {/* Labels on X axis */}
                  {(activeChart === "loss" ? lossPoints : latencyPoints).map((pt, idx) => (
                    <text
                      key={idx}
                      x={pt.cx}
                      y={svgHeight - 12}
                      fill="#52526b"
                      fontSize={8}
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {pt.label}
                    </text>
                  ))}
                </svg>

                {/* Live values tooltips */}
                <AnimatePresence>
                  {hoveredPoint && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-[9px] text-zinc-300 shadow-xl pointer-events-none"
                      style={{
                        left: `${(hoveredPoint.x / svgWidth) * 90}%`,
                        top: `${(hoveredPoint.y / svgHeight) * 80}%`,
                      }}
                    >
                      <div className="font-bold text-zinc-100">{hoveredPoint.label}</div>
                      <div className="text-emerald-400 mt-0.5">Value: {hoveredPoint.val}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Status footer bar */}
              <div className="flex items-center space-x-2 text-[10px] text-zinc-500 font-mono mt-4">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>
                  {activeChart === "loss"
                    ? "Plotting cross-validation evaluation loss curves over deep training steps."
                    : "Plotted average transaction roundtrip response profiles for Docker-to-Gateway routing."}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
