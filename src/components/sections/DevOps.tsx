"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCommit, Terminal, Cpu, Cloud, Settings, Layers, CheckCircle } from "lucide-react";

interface PipelineStage {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  command: string;
  logs: string[];
}

const pipelineStages: PipelineStage[] = [
  {
    id: "commit",
    name: "Git Push",
    icon: <GitCommit className="w-5 h-5" />,
    color: "border-purple-500 text-purple-400 bg-purple-500/5",
    glow: "rgba(168, 85, 247, 0.4)",
    command: "git push origin main",
    logs: [
      "Enumerating objects: 18, done.",
      "Counting objects: 100% (18/18), done.",
      "Delta compression using up to 8 threads",
      "Compressing objects: 100% (12/12), done.",
      "Writing objects: 100% (12/12), 1.48 KiB | 1.48 MiB/s, done.",
      "Total 12 (delta 8), reused 0 (delta 0), pack-reused 0",
      "To github.com:muhammad/ai-knowledge-assistant.git",
      "   a42b103..e5cf198  main -> main",
    ],
  },
  {
    id: "jenkins",
    name: "Jenkins Test",
    icon: <Settings className="w-5 h-5" />,
    color: "border-indigo-500 text-indigo-400 bg-indigo-500/5",
    glow: "rgba(99, 102, 241, 0.4)",
    command: "jenkins-cli build check-pipeline --sync",
    logs: [
      "[Jenkins-CI] Started by GitHub push event...",
      "[Pipeline] stage (Checkout Git Repo)",
      "Checking out revision: e5cf198db1821cfdfc",
      "[Pipeline] stage (Environment Audit)",
      "Python version detected: 3.11.2",
      "[Pipeline] stage (pytest Suite)",
      "pytest -v tests/",
      "test_rag_pipeline.py::test_vector_retrieval PASSED     [ 50%]",
      "test_agent.py::test_agent_memory_state PASSED          [100%]",
      "===> 12 passed in 1.43s",
      "[Pipeline] Success! Tests cleared.",
    ],
  },
  {
    id: "docker",
    name: "Docker Build",
    icon: <Layers className="w-5 h-5" />,
    color: "border-cyan-500 text-cyan-400 bg-cyan-500/5",
    glow: "rgba(6, 182, 212, 0.4)",
    command: "docker build -t muhammad/ai-assistant:latest .",
    logs: [
      "Sending build context to Docker daemon  42.5MB",
      "Step 1/7 : FROM python:3.11-slim",
      " ---> 20120dcff81a",
      "Step 2/7 : WORKDIR /app",
      " ---> Running in c95bfb321a",
      "Step 3/7 : COPY requirements.txt .",
      " ---> e84ba10293d4",
      "Step 4/7 : RUN pip install --no-cache-dir -r requirements.txt",
      " ---> Installing wheels and packages... done",
      "Step 5/7 : COPY . .",
      " ---> 42b5cf81a0e2",
      "Step 6/7 : EXPOSE 8000",
      "Step 7/7 : CMD ['uvicorn', 'src.main:app', '--host', '0.0.0.0']",
      " ---> Successfully built f613da82be1e",
      " ---> Successfully tagged muhammad/ai-assistant:latest",
    ],
  },
  {
    id: "k8s",
    name: "Kubernetes Ops",
    icon: <Cpu className="w-5 h-5" />,
    color: "border-emerald-500 text-emerald-400 bg-emerald-500/5",
    glow: "rgba(16, 185, 129, 0.4)",
    command: "kubectl rollout restart deployment/ai-assistant-deployment -n production",
    logs: [
      "deployment.apps/ai-assistant-deployment restarted",
      "$ kubectl get pods -n production -w",
      "NAME                                     READY   STATUS              RESTARTS   AGE",
      "ai-assistant-deployment-8cf9b-p5lrx      1/1     Running             0          3d4h",
      "ai-assistant-deployment-6dfba-f2l48      0/1     ContainerCreating   0          1s",
      "ai-assistant-deployment-6dfba-f2l48      1/1     Running             0          2s",
      "ai-assistant-deployment-8cf9b-p5lrx      1/1     Terminating         0          3d4h",
      "ai-assistant-deployment-6dfba-f2l48      1/1     Running             0          6s",
      "Rolling update successful. 2 Pods active.",
    ],
  },
  {
    id: "cloud",
    name: "Cloud hosting",
    icon: <Cloud className="w-5 h-5" />,
    color: "border-violet-500 text-violet-400 bg-violet-500/5",
    glow: "rgba(139, 92, 246, 0.4)",
    command: "curl -I https://api.muhammad.dev/healthz",
    logs: [
      "HTTP/2 200 OK",
      "date: Wed, 03 Jun 2026 11:00:00 GMT",
      "content-type: application/json",
      "x-powered-by: Railway-Server",
      "cache-control: no-store",
      "strict-transport-security: max-age=63072000; includeSubDomains",
      "access-control-allow-origin: *",
      "connection: keep-alive",
      "server: cloudflare",
      "",
      "{ 'status': 'healthy', 'version': '1.4.0', 'latency_ms': 12 }",
    ],
  },
];

export default function DevOps() {
  const [activeStage, setActiveStage] = useState<string>("commit");

  const currentStage = pipelineStages.find((stage) => stage.id === activeStage) || pipelineStages[0];

  return (
    <section id="devops" className="py-24 relative px-4 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-semibold tracking-wider font-space uppercase">
            04 . Systems Operations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            DevOps & Infrastructure
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
          <p className="text-zinc-400 text-sm max-w-2xl mt-2">
            Automating testing, isolating services in containers, orchestrating deployments, and managing bare-metal Linux administration.
          </p>
        </div>

        {/* DevOps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: CI/CD Pipeline Visualizer */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md flex flex-col space-y-8 relative">
              <h3 className="text-lg font-bold font-space text-zinc-200 border-b border-zinc-800 pb-3 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 animate-pulse" />
                <span>Interactive Deployment Pipeline</span>
              </h3>

              {/* Vertical timeline graph */}
              <div className="relative pl-6 md:pl-12 space-y-6">
                {/* Connecting track lines */}
                <div className="absolute left-[31px] md:left-[55px] top-6 bottom-6 w-[2px] bg-zinc-800/80 -z-10" />

                {pipelineStages.map((stage) => {
                  const isActive = activeStage === stage.id;
                  return (
                    <div
                      key={stage.id}
                      onMouseEnter={() => setActiveStage(stage.id)}
                      onClick={() => setActiveStage(stage.id)}
                      className="flex items-center cursor-pointer group"
                    >
                      {/* Node circle */}
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-md ${
                          isActive
                            ? `${stage.color} border-current scale-110 shadow-[0_0_20px_rgba(255,255,255,0.05)]`
                            : "border-zinc-800 bg-zinc-950/80 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300"
                        }`}
                        style={{
                          boxShadow: isActive ? `0 0 25px ${stage.glow}` : "none",
                        }}
                      >
                        {stage.icon}
                      </div>

                      {/* Node details */}
                      <div className="ml-4 md:ml-6 flex-1 py-1.5 px-4 rounded-xl border border-transparent group-hover:border-zinc-850 hover:bg-zinc-900/30 transition-all duration-300">
                        <span
                          className={`text-sm font-bold font-space tracking-tight transition-colors ${
                            isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {stage.name}
                        </span>
                        <div className="text-[10px] text-zinc-500 font-mono mt-0.5 max-w-[250px] truncate">
                          {stage.command}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Terminal console view */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex-1 w-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/90 shadow-2xl flex flex-col relative font-mono text-[11px] text-zinc-300 min-h-[380px]">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80 select-none">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-800" />
                  <span className="text-[10px] text-zinc-500 font-bold ml-4">Terminal: {currentStage.id}.sh</span>
                </div>
                <div className="flex items-center space-x-1.5 text-zinc-500">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="text-[9px]">BASH</span>
                </div>
              </div>

              {/* Terminal code prompt and output */}
              <div className="flex-1 p-5 overflow-y-auto no-scrollbar space-y-4 select-text leading-relaxed">
                <div>
                  <span className="text-emerald-400 font-bold">muhammad@karachi-vps</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-purple-400 font-bold">~/projects/assistant</span>
                  <span className="text-zinc-200 font-bold">$</span>
                  <span className="text-zinc-100 font-bold ml-1.5">{currentStage.command}</span>
                </div>

                <div className="space-y-1.5 text-zinc-400">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStage.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-1"
                    >
                      {currentStage.logs.map((log, index) => (
                        <div key={index} className="flex">
                          <span className="text-zinc-600 mr-3 select-none">[{index + 1}]</span>
                          <span className="flex-1 whitespace-pre-wrap">{log}</span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Status footer bar */}
              <div className="px-4 py-2 border-t border-zinc-800/60 bg-zinc-900/30 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="uppercase">State: Success</span>
                <span className="font-bold text-emerald-500 uppercase">Deployed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Small architecture block */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/10 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-200 font-space uppercase tracking-wider">Docker Isolation</h4>
              <p className="text-xs text-zinc-400 leading-normal max-w-xs mx-auto">
                Containerizing application services ensures environment consistency across development and Railway.
              </p>
            </div>
            <div className="space-y-1.5 border-y md:border-y-0 md:border-x border-zinc-800 py-4 md:py-0">
              <h4 className="text-sm font-bold text-zinc-200 font-space uppercase tracking-wider">Kubernetes Pods</h4>
              <p className="text-xs text-zinc-400 leading-normal max-w-xs mx-auto">
                Managing pod deployments, config mapping, routing node gateways, and horizontal scaling.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-zinc-200 font-space uppercase tracking-wider">Bare-Metal VPS</h4>
              <p className="text-xs text-zinc-400 leading-normal max-w-xs mx-auto">
                Linux administration, SSH authorization configurations, setting firewalls, and server tuning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
