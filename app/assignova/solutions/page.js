"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SolutionsHero from "@/components/assignova/solutions/SolutionsHero";
import IndustrySolutions from "@/components/assignova/solutions/IndustrySolutions";
import ArchitectureShowcase from "@/components/assignova/solutions/ArchitectureShowcase";
import SolutionFeatures from "@/components/assignova/solutions/SolutionFeatures";
import InteractiveDemo from "@/components/assignova/solutions/InteractiveDemo";
import SolutionCTASection from "@/components/assignova/solutions/SolutionCTASection";

export default function SolutionsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const [activeSolution, setActiveSolution] = useState("fintech");

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Unique Background Pattern - Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Geometric Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="geometric-grid" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="30" cy="30" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-grid)" className="text-blue-500" />
          </svg>
        </div>

        {/* Floating 3D Shapes */}
        <motion.div
          animate={{
            rotateX: [0, 180, 360],
            rotateY: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 clip-path-hexagon" />
        </motion.div>

        <motion.div
          animate={{
            rotateX: [360, 180, 0],
            rotateY: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 opacity-10">
          <div className="w-full h-full bg-gradient-to-tr from-pink-500/20 to-orange-500/20 clip-path-diamond" />
        </motion.div>

        {/* Animated Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{ top: `${30 + i * 20}%` }}
          />
        ))}
      </div>

      <motion.div style={{ opacity, scale }} className="relative">
        <SolutionsHero />
        <IndustrySolutions activeSolution={activeSolution} setActiveSolution={setActiveSolution} />
        <ArchitectureShowcase />
        <SolutionFeatures />
        <InteractiveDemo />
        <SolutionCTASection />
      </motion.div>

      {/* Unique Floating Navigation - Orbital System */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative w-24 h-24">
          {/* Center Orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: ["0 0 20px rgba(59, 130, 246, 0.3)", "0 0 40px rgba(139, 92, 246, 0.4)", "0 0 20px rgba(59, 130, 246, 0.3)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
          </div>

          {/* Orbiting Navigation Points */}
          {["Hero", "Industries", "Architecture", "Features", "Demo", "Start"].map((section, index) => {
            const angle = index * 60 * (Math.PI / 180);
            const radius = 40;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                style={{
                  x,
                  y,
                  rotate: -angle * (180 / Math.PI),
                }}
                animate={{
                  rotate: [0, 360],
                  scale: scrollYProgress.get() > index * 0.16 ? 1.3 : 1,
                }}
                transition={{
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border border-gray-800">
                    {section}
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
                  </div>
                </div>
              </motion.a>
            );
          })}

          {/* Orbital Path */}
          <div className="absolute inset-0 border border-blue-500/10 rounded-full" />
        </motion.div>
      </div>

      {/* CSS for custom shapes */}
      <style jsx global>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }

        .clip-path-diamond {
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }

        .clip-path-trapezoid {
          clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
        }

        .clip-path-parallelogram {
          clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
        }
      `}</style>
    </div>
  );
}
