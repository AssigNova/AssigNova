"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Cpu } from "lucide-react";
import SplitText from "../SplitText";
import Shuffle from "../Shuffle";
import Antigravity from "../Antigravity";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function AssignovaHero() {
  const features = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized for speed and scalability",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deployed across multiple regions",
    },
    {
      icon: Cpu,
      title: "AI Powered",
      description: "Intelligent automation and insights",
    },
  ];

  return (
    <>
      {/* Fixed: Added pointer-events-none to prevent interaction with particles */}
      <div
        style={{
          width: "100%",
          height: "650px",
          position: "absolute",
          zIndex: "30",
          opacity: "0.5",
          pointerEvents: "none", // This allows clicks to pass through
        }}
      >
        <Antigravity
          count={200}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={0.5}
          lerpSpeed={0.05}
          color={"#FF9FFC"}
          autoAnimate={true}
          particleVariance={1}
        />
      </div>
      <section className="min-h-screen relative overflow-hidden pt-32 pb-20">
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="relative w-full h-96">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-300">
                  Next-Gen Digital Solutions
                </span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <SplitText
                  text="Transform Your"
                  className="block"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />

                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              >
                We deliver cutting-edge software solutions that drive
                innovation, accelerate growth, and transform businesses in the
                digital age.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                >
                  <span className="flex items-center space-x-2">
                    <span>View Our Work</span>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
              >
                {[
                  { value: "30+", label: "Enterprise Clients" },
                  { value: "98.9%", label: "Uptime SLA" },
                  { value: "90+", label: "Projects Delivered" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-gray-700 transition-colors">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
