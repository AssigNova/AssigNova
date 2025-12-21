"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Puzzle,
  Zap,
  Target,
  Layers,
  ArrowRight,
  Sparkles,
  Cloud,
  Brain,
  Database,
  Shield,
  GitBranch,
  Cpu,
  Server,
  Network,
  Code,
  Lock,
  Globe,
  BarChart,
} from "lucide-react";

export default function SolutionsHero() {
  // Change this line:
  const [hoveredFace, setHoveredFace] = useState(null);
  const [cubeRotation, setCubeRotation] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [randomValues, setRandomValues] = useState([]);

  useEffect(() => {
    // Generate random values only once on the client
    const values = [...Array(8)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      targetX: Math.random() * 100,
      targetY: Math.random() * 100,
      duration: Math.random() * 30 + 30,
      fontSize: Math.random() * 10 + 8,
    }));
    setRandomValues(values);
    setIsMounted(true);
  }, []);

  const solutionPillars = [
    {
      icon: Puzzle,
      title: "Modular Design",
      description: "Scalable components that fit together seamlessly",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Rapid deployment with minimal disruption",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Targeted solutions for specific business challenges",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Layers,
      title: "Future-proof",
      description: "Built to adapt and grow with your business",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  // Cube faces with relevant architecture content
  const cubeFaces = [
    {
      id: "cloud",
      title: "Cloud Native",
      icon: Cloud,
      description: "Designed for cloud scalability",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      rotation: "rotateY(0deg) translateZ(100px)",
      position: "front",
    },
    {
      id: "ai",
      title: "AI Ready",
      icon: Brain,
      description: "ML & AI integration ready",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      rotation: "rotateY(180deg) translateZ(100px)",
      position: "back",
    },
    {
      id: "data",
      title: "Data Driven",
      icon: Database,
      description: "Real-time analytics & insights",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      rotation: "rotateY(90deg) translateZ(100px)",
      position: "right",
    },
    {
      id: "secure",
      title: "Secure",
      icon: Shield,
      description: "Enterprise-grade security",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      rotation: "rotateY(-90deg) translateZ(100px)",
      position: "left",
    },
    {
      id: "microservices",
      title: "Microservices",
      icon: GitBranch,
      description: "Decoupled architecture",
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30",
      rotation: "rotateX(90deg) translateZ(100px)",
      position: "top",
    },
    {
      id: "scalable",
      title: "Scalable",
      icon: Server,
      description: "Auto-scaling infrastructure",
      color: "from-rose-500/20 to-red-500/20",
      borderColor: "border-rose-500/30",
      rotation: "rotateX(-90deg) translateZ(100px)",
      position: "bottom",
    },
  ];

  // Architecture metrics for the cube
  const architectureMetrics = [
    { label: "99.9%", value: "Uptime" },
    { label: "<100ms", value: "Response" },
    { label: "Auto", value: "Scaling" },
    { label: "Zero", value: "Downtime" },
  ];

  // Handle cube rotation on mouse move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    // Calculate rotation based on mouse position relative to center
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateY = ((clientX - centerX) / width) * 40; // Max 40 degrees
    const rotateX = ((centerY - clientY) / height) * 40; // Max 40 degrees

    setCubeRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCubeRotation({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-32 pb-20">
      {/* Animated Background - Moving Geometric Pattern */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10">
          <div
            className="w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
            style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
          />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-10">
          <div
            className="w-full h-full bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-emerald-500/10"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)" }}
          />
        </motion.div>

        {/* Floating Code Snippets */}
        {isMounted &&
          randomValues.map((val, i) => (
            <motion.div
              key={i}
              initial={{
                x: val.left + "vw",
                y: val.top + "vh",
                rotate: 0,
              }}
              animate={{
                x: [null, val.targetX + "vw"],
                y: [null, val.targetY + "vh"],
                rotate: 360,
              }}
              transition={{
                duration: val.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-blue-400/10 font-mono text-sm"
              style={{ fontSize: `${val.fontSize + 3}px` }}>
              {`<${["div", "component", "module", "service"][i % 4]} />`}
            </motion.div>
          ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Content with Asymmetric Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20">
            {/* Left Column - Headline */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Tailored Digital Solutions</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                  <span className="block">Smart</span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
                  <span className="block text-gray-400 text-4xl md:text-5xl mt-6">for Modern Challenges</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-400 mb-12 max-w-2xl">
                  We don't just build software, we architect intelligent solutions that solve real business problems and drive measurable
                  growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Explore Solutions</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                    <span className="flex items-center space-x-2">
                      <span>Watch Demo</span>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - 3D Cube with Architecture Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block">
              {/* Cube Container with Perspective */}
              <div
                className="relative w-72 h-72 mx-auto"
                style={{ perspective: "1200px" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                {/* Rotating 3D Cube */}
                <motion.div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${cubeRotation.x}deg) rotateY(${cubeRotation.y}deg)`,
                  }}
                  animate={{
                    rotateX: [0, 180, 360],
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}>
                  {/* Cube Faces */}
                  {cubeFaces.map((face) => {
                    const Icon = face.icon;
                    const isHovered = hoveredFace === face.id;

                    return (
                      <div
                        key={face.id}
                        className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${face.color} border ${face.borderColor} rounded-xl backdrop-blur-sm transition-all duration-300`}
                        style={{
                          transform: face.rotation,
                          transformStyle: "preserve-3d",
                        }}
                        onMouseEnter={() => setHoveredFace(face.id)}
                        onMouseLeave={() => setHoveredFace(null)}>
                        {/* Hover overlay */}
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl"
                          />
                        )}

                        {/* Icon */}
                        <motion.div
                          animate={isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="relative mb-3 p-3 bg-white/10 rounded-xl">
                          <Icon className="w-8 h-8 text-white" />

                          {/* Glow effect on hover */}
                          {isHovered && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 bg-current rounded-xl blur-md opacity-30"
                            />
                          )}
                        </motion.div>

                        {/* Title */}
                        <motion.h3 animate={isHovered ? { y: -5 } : { y: 0 }} className="text-lg font-bold text-white text-center mb-2">
                          {face.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
                          className="text-xs text-gray-300 text-center px-2">
                          {face.description}
                        </motion.p>

                        {/* Decorative Corner */}
                        <div className={`absolute top-2 right-2 w-6 h-6 border-t border-r ${face.borderColor}`} />
                        <div className={`absolute bottom-2 left-2 w-6 h-6 border-b border-l ${face.borderColor}`} />

                        {/* Hover indicator */}
                        {isHovered && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          />
                        )}
                      </div>
                    );
                  })}

                  {/* Cube Center - Architectural Metrics */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${-cubeRotation.y * 0.5}deg) rotateX(${-cubeRotation.x * 0.5}deg)`,
                    }}>
                    {/* Central Architecture Metrics */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 border border-gray-800 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center p-4">
                      <div className="text-center mb-3">
                        <div className="text-xs text-gray-400 mb-1">Architecture</div>
                        <div className="text-sm font-bold text-white">Metrics</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 w-full">
                        {architectureMetrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-2 bg-gray-800/50 rounded cursor-pointer">
                            <div className="text-xs font-bold text-white">{metric.label}</div>
                            <div className="text-[10px] text-gray-400">{metric.value}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Central Icon */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Cpu className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glowing Orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.4)",
                      "0 0 60px rgba(236, 72, 153, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-md pointer-events-none"
                />

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <radialGradient id="connection-gradient">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const length = 140;
                    const x1 = 144;
                    const y1 = 144;
                    const x2 = x1 + length * Math.cos(angle);
                    const y2 = y1 + length * Math.sin(angle);

                    return (
                      <motion.line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#connection-gradient)"
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Floating Architecture Elements */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}>
                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-3 backdrop-blur-sm">
                  <Code className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}>
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3 backdrop-blur-sm">
                  <Database className="w-5 h-5 text-green-400" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8"
                animate={{
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-3 backdrop-blur-sm">
                  <Network className="w-5 h-5 text-purple-400" />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Solution Pillars - Geometric Layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent hidden lg:block" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/10 to-transparent hidden md:block" />

            {solutionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const positionClass = index === 0 ? "lg:mb-12" : index === 1 ? "lg:mt-12" : index === 2 ? "lg:mb-12" : "lg:mt-12";

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className={`relative ${positionClass}`}>
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/30" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-purple-500/30" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-pink-500/30" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/30" />

                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className={`relative mb-6`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} rounded-full blur-xl opacity-20`} />
                        <div
                          className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>

                      <p className="text-gray-400 text-sm">{pillar.description}</p>
                    </div>

                    {/* Animated Dot Pattern */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 opacity-10">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1, 0] }}
                          transition={{
                            delay: i * 0.1,
                            repeat: Infinity,
                            duration: 2,
                          }}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
                          style={{
                            left: `${(i % 3) * 8}px`,
                            top: `${Math.floor(i / 3) * 8}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Unique Design */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Discover Solutions</span>
          <div className="relative w-8 h-12">
            <div className="absolute inset-0 border border-gray-800 rounded-full" />
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute left-1/2 top-2 transform -translate-x-1/2 w-1.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
            
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 border border-blue-500/30 rounded-full"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
