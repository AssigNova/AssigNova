"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import ServicesHero from "@/components/assignova/services/ServicesHero";

const ServiceCategories = dynamic(() => import("@/components/assignova/services/ServiceCategories"), { ssr: false });
const ServiceProcess = dynamic(() => import("@/components/assignova/services/ServiceProcess"), { ssr: false });
const ServicePackages = dynamic(() => import("@/components/assignova/services/ServicePackages"), { ssr: false });
const TechnologyPartners = dynamic(() => import("@/components/assignova/services/TechnologyPartners"), { ssr: false });
const ServiceConsultation = dynamic(() => import("@/components/assignova/services/ServiceConsultation"), { ssr: false });

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const [activeCategory, setActiveCategory] = useState("development");

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Subtle Structural Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Brand Core Glow */}
        <motion.div
          animate={{
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-dark-accent rounded-full blur-[150px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative">
        <ServicesHero />
        <ServiceCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ServiceProcess />
        <ServicePackages />
        <TechnologyPartners />
        <ServiceConsultation />
      </motion.div>

      {/* Floating Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center space-y-4">
          {["Hero", "Categories", "Process", "Packages", "Partners", "Contact"].map((section, index) => (
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
              className="relative group"
              whileHover={{ scale: 1.2 }}>
              <motion.div
                animate={{
                  scale: scrollYProgress.get() > index * 0.16 ? 1.3 : 1,
                  backgroundColor: scrollYProgress.get() > index * 0.16 ? "#3b82f6" : "#4b5563",
                }}
                className="w-3 h-3 rounded-full transition-colors"
              />
              <div className="absolute right-full top-1/2 transform -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border border-gray-800">
                  {section}
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-gray-900" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
