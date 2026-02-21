"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Server, Database, Network, Users, Globe, Cpu, Zap, Play, Pause, RotateCcw, Eye, EyeOff, ChevronRight } from "lucide-react";

const demoScenarios = [
  {
    id: "scaling",
    title: "Auto Scaling",
    description: "Watch the system automatically scale based on traffic",
    icon: Zap,
    steps: [
      "Normal traffic - 2 instances",
      "Traffic increase - 4 instances",
      "Peak load - 8 instances",
      "Traffic decreases - back to 4 instances",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "failover",
    title: "High Availability",
    description: "Observe automatic failover during regional outage",
    icon: Globe,
    steps: ["Primary region active", "Regional failure detected", "Traffic rerouted to backup region", "Zero downtime achieved"],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "microservices",
    title: "Service Communication",
    description: "Visualize microservices communication patterns",
    icon: Network,
    steps: [
      "API Gateway receives request",
      "Authentication service validates",
      "Business logic processes",
      "Database transactions complete",
      "Response sent back",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const serviceNodes = [
  { id: 1, name: "API Gateway", type: "gateway", x: 50, y: 50 },
  { id: 2, name: "Auth Service", type: "service", x: 25, y: 25 },
  { id: 3, name: "User Service", type: "service", x: 75, y: 25 },
  { id: 4, name: "Order Service", type: "service", x: 25, y: 75 },
  { id: 5, name: "Payment Service", type: "service", x: 75, y: 75 },
  { id: 6, name: "Database", type: "database", x: 50, y: 90 },
];

export default function InteractiveDemo() {
  const [activeScenario, setActiveScenario] = useState("scaling");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showNetwork, setShowNetwork] = useState(true);
  const [instanceCount, setInstanceCount] = useState(2);

  const startDemo = () => {
    setIsPlaying(true);
    const scenario = demoScenarios.find((s) => s.id === activeScenario);
    if (!scenario) return;

    let step = 0;
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = prev + 1;
        if (nextStep >= scenario.steps.length) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }

        // Update instance count for scaling demo
        if (activeScenario === "scaling") {
          if (nextStep === 1) setInstanceCount(4);
          if (nextStep === 2) setInstanceCount(8);
          if (nextStep === 3) setInstanceCount(4);
        }

        return nextStep;
      });
    }, 2000);
  };

  const resetDemo = () => {
    setIsPlaying(false);
    setCurrentStep(0);
    setInstanceCount(2);
  };

  const activeDemo = demoScenarios.find((s) => s.id === activeScenario);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-4 py-2 rounded-full mb-4">
            <Play className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our Architecture{" "}
            <span className="bg-linear-to-r from-dark-accent via-light-accent to-mid-accent bg-clip-text text-transparent">In Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience how our architecture handles real-world scenarios with this interactive demonstration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Controls */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Demo Scenarios</h3>

              <div className="space-y-4">
                {demoScenarios.map((scenario) => {
                  const Icon = scenario.icon;
                  return (
                    <motion.button
                      key={scenario.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setActiveScenario(scenario.id);
                        resetDemo();
                      }}
                      className={`w-full text-left p-4 rounded-xl border transition-all ${
                        activeScenario === scenario.id
                          ? `border-gray-700 bg-gradient-to-r ${scenario.color} bg-opacity-10`
                          : "border-gray-800 hover:border-gray-700"
                      }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${scenario.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{scenario.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{scenario.description}</p>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Demo Controls */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">Demo Controls</h4>
                  <button
                    onClick={() => setShowNetwork(!showNetwork)}
                    className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white">
                    {showNetwork ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    <span>{showNetwork ? "Hide Network" : "Show Network"}</span>
                  </button>
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                    className={`flex-1 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 ${
                      isPlaying ? "bg-yellow-500 text-white" : "bg-gradient-to-r from-dark-accent via-mid-accent to-light-accent text-white"
                    }`}>
                    {isPlaying ? (
                      <>
                        <Pause className="w-5 h-5" />
                        <span>Pause Demo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Start Demo</span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetDemo}
                    className="px-6 py-3 bg-gray-800 text-gray-300 rounded-xl font-bold hover:bg-gray-700 flex items-center justify-center">
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Progress */}
                {activeDemo && (
                  <div className="mt-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>
                        Step {currentStep + 1} of {activeDemo.steps.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep + 1) / activeDemo.steps.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Current Step Info */}
            {activeDemo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${activeDemo.color}`}>
                    <activeDemo.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Current Step</h4>
                </div>

                <div className="space-y-3">
                  {activeDemo.steps.map((step, index) => (
                    <div
                      key={step}
                      className={`p-3 rounded-lg flex items-start space-x-3 ${
                        index === currentStep ? "bg-gray-800 border border-gray-700" : "opacity-50"
                      }`}>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                          index === currentStep ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-800 text-gray-400"
                        }`}>
                        {index + 1}
                      </div>
                      <p className={`text-sm ${index === currentStep ? "text-white" : "text-gray-400"}`}>{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">System Visualization</h3>
                  <p className="text-gray-400">{activeDemo?.title} - Real-time system behavior</p>
                </div>

                {/* Metrics */}
                <div className="flex space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{instanceCount}</div>
                    <div className="text-sm text-gray-400">Instances</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">&lt;100ms</div>
                    <div className="text-sm text-gray-400">Latency</div>
                  </div>
                </div>
              </div>

              {/* Network Visualization */}
              <div className="relative h-[500px] bg-gray-900/50 rounded-xl border border-gray-800 overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-700" />
                  </svg>
                </div>

                {/* Service Nodes */}
                {showNetwork &&
                  serviceNodes.map((node) => (
                    <motion.div
                      key={node.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                        node.type === "gateway"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : node.type === "database"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : "bg-gradient-to-r from-purple-500 to-pink-500"
                      } rounded-xl p-4 min-w-[120px] text-center`}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                      }}
                      animate={
                        isPlaying
                          ? {
                              scale: [1, 1.05, 1],
                              boxShadow: [
                                "0 0 0px rgba(59, 130, 246, 0)",
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                                "0 0 0px rgba(59, 130, 246, 0)",
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}>
                      <div className="text-white font-bold text-sm mb-1">{node.name}</div>
                      <div className="text-xs text-white/80">{node.type}</div>
                    </motion.div>
                  ))}

                {/* Connection Lines */}
                {showNetwork && (
                  <svg className="absolute inset-0 pointer-events-none">
                    {serviceNodes.map((node, i) =>
                      serviceNodes.slice(i + 1).map((target) => (
                        <motion.line
                          key={`${node.id}-${target.id}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${target.x}%`}
                          y2={`${target.y}%`}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={
                            isPlaying
                              ? {
                                  pathLength: 1,
                                  opacity: 0.5,
                                  strokeDashoffset: [0, 10],
                                }
                              : { pathLength: 1, opacity: 0.3 }
                          }
                          transition={
                            isPlaying
                              ? {
                                  strokeDashoffset: {
                                    repeat: Infinity,
                                    duration: 1,
                                  },
                                }
                              : {}
                          }
                        />
                      )),
                    )}
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                {/* Load Balancer Animation */}
                {showNetwork && isPlaying && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      {/* Load Balancer */}
                      <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Server className="w-12 h-12 text-white" />
                      </div>

                      {/* Pulsing Circles */}
                      <motion.div
                        className="absolute inset-0 border-2 border-yellow-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.7, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Traffic Flow Animation */}
                {isPlaying && showNetwork && (
                  <>
                    {[...Array(instanceCount)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-blue-400 rounded-full"
                        initial={{
                          left: "50%",
                          top: "50%",
                          x: -6,
                          y: -6,
                        }}
                        animate={{
                          left: ["50%", `${25 + Math.random() * 50}%`],
                          top: ["50%", `${25 + Math.random() * 50}%`],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <span className="text-sm text-gray-400">API Gateway</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <span className="text-sm text-gray-400">Microservices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                  <span className="text-sm text-gray-400">Database</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
                  <span className="text-sm text-gray-400">Load Balancer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
