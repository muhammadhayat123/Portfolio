"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Database,
  GitBranch,
  Server,
  Play,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeftRight,
} from "lucide-react";

type AISection = "rag" | "langgraph" | "agents" | "mcp";

export default function AIEngineering() {
  const [activeWidget, setActiveWidget] = useState<AISection>("rag");

  // RAG Simulator State
  const [ragState, setRagState] = useState<"idle" | "embedding" | "querying" | "retrieved" | "completed">("idle");
  const [ragQuery, setRagQuery] = useState("What is the state of multi-agent memory?");
  const [ragOutput, setRagOutput] = useState("");

  const runRagSimulation = () => {
    if (ragState !== "idle") return;
    setRagState("embedding");
    setRagOutput("");
    
    setTimeout(() => {
      setRagState("querying");
      setTimeout(() => {
        setRagState("retrieved");
        setTimeout(() => {
          setRagState("completed");
          setRagOutput(
            "Vector retrieval found 3 relevant documents in Pinecone (similarity > 0.89). Context augmented: Multi-agent memory is managed using structured state graphs, allowing agents to checkpoint memory variables asynchronously at edge boundaries."
          );
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const resetRag = () => {
    setRagState("idle");
    setRagOutput("");
  };

  // LangGraph States
  const [activeGraphNode, setActiveGraphNode] = useState<"idle" | "input" | "router" | "tool" | "agent" | "output">("idle");
  const [graphLog, setGraphLog] = useState<string[]>([]);

  const runGraphSimulation = () => {
    if (activeGraphNode !== "idle") return;
    setGraphLog(["[System] Graph initialized. Input payload received."]);
    setActiveGraphNode("input");

    setTimeout(() => {
      setGraphLog((prev) => [...prev, "[Router] Analyzing query intent. Routing to AI Agent..."]);
      setActiveGraphNode("router");

      setTimeout(() => {
        setGraphLog((prev) => [...prev, "[Agent] Invoking Tool calling node (FAISS Vector lookup)..."]);
        setActiveGraphNode("agent");

        setTimeout(() => {
          setGraphLog((prev) => [...prev, "[Tool] Executed FAISS tool. Data sent back to Agent state."]);
          setActiveGraphNode("tool");

          setTimeout(() => {
            setGraphLog((prev) => [...prev, "[Agent] Formulating response with retrieved details."]);
            setActiveGraphNode("agent");

            setTimeout(() => {
              setGraphLog((prev) => [...prev, "[Output] Final response rendered. Closing graph execution."]);
              setActiveGraphNode("output");

              setTimeout(() => {
                setActiveGraphNode("idle");
              }, 1200);
            }, 1200);
          }, 1200);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  // AI Agent Workbench States
  const [agentStep, setAgentStep] = useState(0);
  const agentPlan = [
    { title: "Understand Goal", detail: "Generate summary of revenue data for Q1." },
    { title: "Tool Call", detail: "Invoking 'pandas_db_tool' with sql query." },
    { title: "Consolidate", detail: "Formatting query results into markdown table." },
    { title: "Answer", detail: "Returning final summary table to client." },
  ];

  useEffect(() => {
    if (activeWidget !== "agents") return;
    const intv = setInterval(() => {
      setAgentStep((prev) => (prev + 1) % (agentPlan.length + 1));
    }, 3000);
    return () => clearInterval(intv);
  }, [activeWidget, agentPlan.length]);

  return (
    <section id="ai-engineering" className="py-24 relative px-4 overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-300 text-xs font-semibold tracking-wider font-space uppercase">
            03 . Core Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            AI Engineering & Intelligent Systems
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            Pioneering autonomous reasoning, stateful workflows, and context-aware systems modeled after top industry frameworks.
          </p>
        </div>

        {/* Dynamic Dual-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Menu Selector cards */}
          <div className="lg:col-span-5 flex flex-col space-y-4 justify-between">
            {/* Card 1: RAG */}
            <div
              onClick={() => setActiveWidget("rag")}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                activeWidget === "rag"
                  ? "glass-panel-glow border-purple-500/30 glow-purple"
                  : "border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-800"
              }`}
            >
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                <Database className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-base font-bold text-zinc-100 font-space">
                  Retrieval-Augmented Generation (RAG)
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  High-fidelity knowledge bases using Pinecone, ChromaDB, and semantic queries to expand LLM context.
                </p>
              </div>
            </div>

            {/* Card 2: LangGraph */}
            <div
              onClick={() => setActiveWidget("langgraph")}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                activeWidget === "langgraph"
                  ? "glass-panel-glow border-purple-500/30 glow-purple"
                  : "border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-800"
              }`}
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GitBranch className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-base font-bold text-zinc-100 font-space">
                  LangGraph Stateful Workflows
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Cyclic agent systems with checkpointing, multi-agent router loops, and human-in-the-loop validation gates.
                </p>
              </div>
            </div>

            {/* Card 3: AI Agents */}
            <div
              onClick={() => setActiveWidget("agents")}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                activeWidget === "agents"
                  ? "glass-panel-glow border-cyan-500/30 glow-cyan"
                  : "border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-800"
              }`}
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-base font-bold text-zinc-100 font-space">
                  Autonomous AI Agents
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Decoupled planner/executor loops utilizing tool binding, OpenAI SDK memory layers, and function mapping.
                </p>
              </div>
            </div>

            {/* Card 4: MCP Servers */}
            <div
              onClick={() => setActiveWidget("mcp")}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                activeWidget === "mcp"
                  ? "glass-panel-glow border-cyan-500/30 glow-cyan"
                  : "border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-800"
              }`}
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Server className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-base font-bold text-zinc-100 font-space">
                  Model Context Protocol (MCP)
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Connecting LLM reasoning modules to local development tool environments and custom database protocols.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Interactive Widget Workspace */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[460px] rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Radial gradient background badge */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-violet-600/10 via-cyan-500/5 to-transparent rounded-full blur-xl pointer-events-none" />

              {/* RAG WIDGET CONTENT */}
              <AnimatePresence mode="wait">
                {activeWidget === "rag" && (
                  <motion.div
                    key="rag-widget"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-purple-400 font-mono text-xs uppercase mb-3">
                        <Sparkles className="w-4 h-4 animate-spin-slow" />
                        <span>Interactive RAG Pipeline Demo</span>
                      </div>
                      <h4 className="text-xl font-bold font-space text-zinc-100">
                        Semantic Context Synthesis
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                        Simulate the flow of a user query through text embeddings into a Vector Database to augment LLM context.
                      </p>
                    </div>

                    {/* Interactive diagram area */}
                    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col space-y-4 my-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-zinc-500 font-mono">Query:</span>
                        <input
                          type="text"
                          value={ragQuery}
                          onChange={(e) => setRagQuery(e.target.value)}
                          className="flex-1 bg-zinc-900 border border-zinc-800/60 rounded-md px-2 py-1 text-xs text-zinc-200 focus:outline-none focus:border-purple-500 font-mono"
                          disabled={ragState !== "idle"}
                        />
                      </div>

                      {/* Vector simulation track */}
                      <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono text-zinc-400">
                        {/* Box 1 */}
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            ragState === "embedding"
                              ? "bg-purple-500/20 border-purple-500 text-purple-200 animate-pulse"
                              : ragState !== "idle"
                              ? "border-purple-500/40 text-purple-300/70"
                              : "border-zinc-800 bg-zinc-900/30"
                          }`}
                        >
                          1. Embed
                        </div>
                        {/* Box 2 */}
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            ragState === "querying"
                              ? "bg-cyan-500/20 border-cyan-500 text-cyan-200 animate-pulse"
                              : ragState === "retrieved" || ragState === "completed"
                              ? "border-cyan-500/40 text-cyan-300/70"
                              : "border-zinc-800 bg-zinc-900/30"
                          }`}
                        >
                          2. Vector DB
                        </div>
                        {/* Box 3 */}
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            ragState === "retrieved"
                              ? "bg-emerald-500/20 border-emerald-500 text-emerald-200 animate-pulse"
                              : ragState === "completed"
                              ? "border-emerald-500/40 text-emerald-300/70"
                              : "border-zinc-800 bg-zinc-900/30"
                          }`}
                        >
                          3. Context
                        </div>
                        {/* Box 4 */}
                        <div
                          className={`p-2.5 rounded-lg border transition-all duration-300 ${
                            ragState === "completed"
                              ? "bg-indigo-500/20 border-indigo-500 text-indigo-200 glow-indigo"
                              : "border-zinc-800 bg-zinc-900/30"
                          }`}
                        >
                          4. LLM Out
                        </div>
                      </div>

                      {/* Simulator outputs */}
                      <div className="min-h-[70px] p-3 rounded-lg bg-zinc-900/80 border border-zinc-800/30 font-mono text-[11px] text-zinc-300 leading-relaxed select-text">
                        {ragState === "idle" && (
                          <span className="text-zinc-500 italic">Click Play to simulate active semantic lookup...</span>
                        )}
                        {ragState === "embedding" && (
                          <span className="text-purple-400">Embedding query using text-embedding-3-small...</span>
                        )}
                        {ragState === "querying" && (
                          <span className="text-cyan-400">Scanning vector embeddings in Pinecone db namespace...</span>
                        )}
                        {ragState === "retrieved" && (
                          <span className="text-emerald-400">Context retrieved. Compiling LLM prompt model layout...</span>
                        )}
                        {ragState === "completed" && (
                          <span>{ragOutput}</span>
                        )}
                      </div>
                    </div>

                    {/* Controller bar */}
                    <div className="flex items-center justify-between border-t border-zinc-800/40 pt-4">
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          LangChain
                        </span>
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          Pinecone
                        </span>
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          FAISS
                        </span>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={resetRag}
                          className="p-2 border border-zinc-800/80 bg-zinc-900/80 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={runRagSimulation}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-purple-500/10 active:scale-95 transition-all"
                          disabled={ragState !== "idle"}
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>Simulate Query</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* LANGGRAPH WIDGET CONTENT */}
                {activeWidget === "langgraph" && (
                  <motion.div
                    key="langgraph-widget"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-indigo-400 font-mono text-xs uppercase mb-3">
                        <GitBranch className="w-4 h-4" />
                        <span>State Graph Runner</span>
                      </div>
                      <h4 className="text-xl font-bold font-space text-zinc-100">
                        LangGraph Agent Router
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                        Trace structured request navigation through custom state nodes, dynamic routing decisions, and tool integrations.
                      </p>
                    </div>

                    {/* Nodes graph simulation visualization */}
                    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col space-y-4 my-2">
                      <div className="flex justify-center items-center gap-2 sm:gap-4 relative py-2">
                        {/* Node Input */}
                        <div
                          className={`w-14 h-14 rounded-full border flex flex-col items-center justify-center text-[10px] font-mono transition-all duration-300 ${
                            activeGraphNode === "input"
                              ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 animate-pulse"
                              : "border-zinc-800 bg-zinc-900/30 text-zinc-500"
                          }`}
                        >
                          <span>Input</span>
                        </div>

                        <ArrowRight className="w-4 h-4 text-zinc-700" />

                        {/* Node Router */}
                        <div
                          className={`w-14 h-14 rounded-full border flex flex-col items-center justify-center text-[10px] font-mono transition-all duration-300 ${
                            activeGraphNode === "router"
                              ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 animate-pulse"
                              : "border-zinc-800 bg-zinc-900/30 text-zinc-500"
                          }`}
                        >
                          <span>Router</span>
                        </div>

                        <div className="flex flex-col space-y-2 justify-center items-center">
                          <span className="text-[8px] text-zinc-600 font-mono">invoke</span>
                          <ArrowRight className="w-4 h-4 text-zinc-700" />
                          <span className="text-[8px] text-zinc-600 font-mono">callback</span>
                        </div>

                        {/* Split block: Agent / Tool */}
                        <div className="flex flex-col space-y-2">
                          <div
                            className={`px-3 py-1.5 rounded-lg border text-[9px] font-mono transition-all duration-300 ${
                              activeGraphNode === "agent"
                                ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 animate-pulse"
                                : "border-zinc-800 bg-zinc-900/30 text-zinc-500"
                            }`}
                          >
                            AgentNode
                          </div>
                          <div
                            className={`px-3 py-1.5 rounded-lg border text-[9px] font-mono transition-all duration-300 ${
                              activeGraphNode === "tool"
                                ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 animate-pulse"
                                : "border-zinc-800 bg-zinc-900/30 text-zinc-500"
                            }`}
                          >
                            ToolNode
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 text-zinc-700" />

                        {/* Node Output */}
                        <div
                          className={`w-14 h-14 rounded-full border flex flex-col items-center justify-center text-[10px] font-mono transition-all duration-300 ${
                            activeGraphNode === "output"
                              ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 animate-pulse"
                              : "border-zinc-800 bg-zinc-900/30 text-zinc-500"
                          }`}
                        >
                          <span>Output</span>
                        </div>
                      </div>

                      {/* Log output console */}
                      <div className="h-[75px] p-2.5 overflow-y-auto no-scrollbar rounded-lg bg-zinc-900/80 border border-zinc-800/30 font-mono text-[10px] text-zinc-400 leading-normal">
                        {graphLog.length === 0 ? (
                          <span className="text-zinc-600 italic">Click compile graph to execute pipeline...</span>
                        ) : (
                          graphLog.map((log, i) => <div key={i}>{log}</div>)
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-zinc-800/40 pt-4">
                      <div className="flex space-x-1">
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          StateGraph
                        </span>
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          Conditional Edges
                        </span>
                      </div>

                      <button
                        onClick={runGraphSimulation}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-md shadow-indigo-500/10 active:scale-95 transition-all"
                        disabled={activeGraphNode !== "idle"}
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Run Graph Trace</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* AI AGENTS WIDGET CONTENT */}
                {activeWidget === "agents" && (
                  <motion.div
                    key="agents-widget"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase mb-3">
                        <Brain className="w-4 h-4" />
                        <span>Autonomous Loop Workspace</span>
                      </div>
                      <h4 className="text-xl font-bold font-space text-zinc-100">
                        AI Agent Orchestrator
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                        Watch how the AI agent creates structured plans, utilizes tools, manages self-memory state, and executes decisions.
                      </p>
                    </div>

                    {/* Agent plan list */}
                    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col space-y-3.5 my-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-zinc-400 font-mono font-bold">Execution Plan:</span>
                        <span className="text-[9px] text-cyan-400 font-mono flex items-center space-x-1 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span>Agent processing...</span>
                        </span>
                      </div>

                      <div className="space-y-2">
                        {agentPlan.map((step, idx) => {
                          const isActive = agentStep === idx;
                          const isDone = agentStep > idx;
                          return (
                            <div
                              key={idx}
                              className={`p-2.5 rounded-lg border text-xs font-mono transition-all duration-300 flex items-center justify-between ${
                                isActive
                                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-100"
                                  : isDone
                                  ? "border-zinc-800 bg-zinc-900/10 text-zinc-500 line-through"
                                  : "border-zinc-900 bg-zinc-950/20 text-zinc-600"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                                  isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-zinc-800 text-zinc-500"
                                }`}>
                                  Step {idx + 1}
                                </span>
                                <span className="font-semibold">{step.title}</span>
                              </div>
                              <span className="text-[10px] opacity-75">{step.detail}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-zinc-800/40 pt-4">
                      <div className="flex space-x-1">
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          Function Calling
                        </span>
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          Agent Memory
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">Loop active (3s intervals)</span>
                    </div>
                  </motion.div>
                )}

                {/* MCP WIDGET CONTENT */}
                {activeWidget === "mcp" && (
                  <motion.div
                    key="mcp-widget"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between space-y-6"
                  >
                    <div>
                      <div className="flex items-center space-x-2 text-emerald-400 font-mono text-xs uppercase mb-3">
                        <Server className="w-4 h-4" />
                        <span>Protocol Architecture</span>
                      </div>
                      <h4 className="text-xl font-bold font-space text-zinc-100">
                        Model Context Protocol (MCP) Server
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                        Muhammad designs custom MCP servers that export secure filesystem schemas and databases to LLM agents.
                      </p>
                    </div>

                    {/* MCP connection map */}
                    <div className="p-4 rounded-xl border border-zinc-800/60 bg-zinc-950/60 flex flex-col space-y-4 my-2">
                      <div className="flex items-center justify-between px-2 py-1 bg-zinc-900 border border-zinc-850 rounded-lg text-[10px] font-mono text-zinc-400">
                        <span>Schema Context: standard-mcp-v1.0</span>
                        <span className="text-emerald-400 flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Connected</span>
                        </span>
                      </div>

                      <div className="flex justify-around items-center py-2 relative">
                        {/* Client Node */}
                        <div className="text-center space-y-1">
                          <div className="w-16 h-12 rounded-lg border border-purple-500/40 bg-zinc-900 flex items-center justify-center font-mono text-[10px] text-zinc-200">
                            LLM Client
                          </div>
                          <span className="text-[8px] text-zinc-500 font-mono">Claude / ChatGPT</span>
                        </div>

                        {/* Protocol bridge */}
                        <div className="flex flex-col items-center justify-center">
                          <ArrowLeftRight className="w-5 h-5 text-emerald-400 animate-pulse" />
                          <span className="text-[8px] text-emerald-400 font-mono mt-1">JSON-RPC</span>
                        </div>

                        {/* MCP Server Node */}
                        <div className="text-center space-y-1">
                          <div className="w-16 h-12 rounded-lg border border-emerald-500/40 bg-zinc-900 flex items-center justify-center font-mono text-[10px] text-zinc-200">
                            MCP Server
                          </div>
                          <span className="text-[8px] text-zinc-500 font-mono">Custom API Python</span>
                        </div>

                        {/* Protocol bridge */}
                        <div className="flex flex-col items-center justify-center">
                          <ArrowLeftRight className="w-5 h-5 text-zinc-700" />
                          <span className="text-[8px] text-zinc-600 font-mono mt-1">Queries</span>
                        </div>

                        {/* Local environment resources */}
                        <div className="text-center space-y-1">
                          <div className="w-16 h-12 rounded-lg border border-zinc-800 bg-zinc-900/60 flex flex-col items-center justify-center font-mono text-[8px] text-zinc-400">
                            <span>Local Dev</span>
                            <span>DB/Files</span>
                          </div>
                          <span className="text-[8px] text-zinc-500 font-mono">Secure sandboxes</span>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/40 text-zinc-400 leading-normal">
                        <span className="text-emerald-400 font-semibold">[Info]</span> Exposed tools: <code>filesystem_read_path</code>, <code>postgres_query_table</code>, <code>github_create_pr</code>. Authorization check passed.
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-zinc-800/40 pt-4">
                      <div className="flex space-x-1">
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          JSON-RPC
                        </span>
                        <span className="text-[10px] bg-zinc-950/60 px-2 py-0.5 border border-zinc-800 rounded font-mono text-zinc-500">
                          Agent API Connectivity
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">Secure Context Schema</span>
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
