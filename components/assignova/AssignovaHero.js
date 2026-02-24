"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Cpu } from "lucide-react";
import Link from "next/link";
import Antigravity from "../Antigravity";
import HeroNexus from "./HeroNexus";

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
        }}>
        <Antigravity
          count={100}
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
      <section className="min-h-screen relative overflow-hidden pt-32 pb-20 flex items-center">
        <div className="container mx-auto px-6 relative z-10 block">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 bg-dark-accent/10 border border-light-accent/30 rounded-full"
              >
                <Cpu className="w-4 h-4 text-light-accent" />
                <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Next-Gen Solutions</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Unlocking</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-dark-accent to-light-accent">
                  Possibilities
                </span>

              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-500 mb-12 max-w-2xl">
                Assignova is a premier digital solutions provider specializing in transforming ideas into impactful, high-performance digital experiences.
              </motion.p>

              {/* CTA Buttons */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 items-start mb-16 w-full">
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative btn-primary px-8 py-4 rounded-xl text-lg overflow-hidden w-full flex justify-center items-center">
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Start Your Project</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </motion.button>
                </Link>

                <Link href="/case-studies" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group btn-secondary px-8 py-4 rounded-xl text-lg w-full flex justify-center items-center">
                    <span className="flex items-center space-x-2">
                      <span>View Our Work</span>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </span>
                  </motion.button>
                </Link>
              </motion.div> */}


            </motion.div>

            {/* Right Interactive Nexus Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center -z-10"
            >
              <HeroNexus />
            </motion.div>

          </div>

          <div className="w-full border-y border-white/5 bg-gray-900/20 backdrop-blur-sm mt-12 py-12">
            <div className="max-w-7xl mx-auto px-6">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { value: "30+", label: "Enterprise Clients" },
                  { value: "98.9%", label: "Uptime SLA" },
                  { value: "90+", label: "Projects Delivered" },
                  { value: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-light-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-24">
            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-dark-accent/5 to-mid-accent/5 rounded-2xl group-hover:bg-dark-accent/10 transition-colors duration-300 pointer-events-none" />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-mid-accent/50 transition-colors">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-dark-accent/20 to-mid-accent/20 border border-light-accent/20 mb-4">
                        <Icon className="w-6 h-6 text-light-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section >
    </>
  );
}
