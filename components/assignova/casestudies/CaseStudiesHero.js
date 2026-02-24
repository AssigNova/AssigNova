"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function CaseStudiesHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center justify-center">
            {/* Cinematic Orbital Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-full blur-[100px] opacity-50 translate-y-[-20%]" />
                <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-[80px] opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 bg-dark-accent/10 border border-light-accent/30 rounded-full"
                >
                    <Target className="w-4 h-4 text-light-accent" />
                    <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Success Stories</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
                >
                    Case Studies
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                >
                    Interactive showcase of how we transform challenges into{" "}
                    <span className="text-white font-semibold">remarkable results.</span>
                </motion.p>
            </div>
        </section>
    );
}
