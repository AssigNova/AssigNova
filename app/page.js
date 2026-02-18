"use client";

import { useRef, useState, useEffect } from "react"; // Added useState, useEffect
import { motion, useScroll, useTransform } from "framer-motion";
import AssignovaHero from "@/components/assignova/AssignovaHero";
import ServicesShowcase from "@/components/assignova/ServicesShowcase";
import TechStack from "@/components/assignova/TechStack";
import CaseStudiesPreview from "@/components/assignova/CaseStudiesPreview";
import ContactCTA from "@/components/assignova/ContactCTA";
import GoogleReviewsWidget from "google-reviews-widget";

export default function AssignovaHome() {
  const containerRef = useRef(null);

  // 1. Create state to hold the particle data
  const [particles, setParticles] = useState([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  // 2. Generate random values ONLY on the client after mount
  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100 + "vw",
      initialY: Math.random() * 100 + "vh",
      moveX: Math.random() * 100 + "vw",
      moveY: Math.random() * 100 + "vh",
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gray-950 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-pink-500/3 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative">
        <AssignovaHero />
        <ServicesShowcase />
        <TechStack />
        <CaseStudiesPreview />
        <ContactCTA />
      </motion.div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {/* 3. Render using the state variable instead of direct Math.random() */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.initialX,
              y: particle.initialY,
              scale: 0,
            }}
            animate={{
              x: [null, particle.moveX],
              y: [null, particle.moveY],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
