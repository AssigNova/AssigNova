"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
    return (
        <section className="relative w-full py-32 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Mist */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                <div className="w-[800px] h-[400px] bg-dark-accent rounded-[100%] blur-[120px] opacity-20 transform -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-sm font-semibold tracking-[0.3em] text-light-accent uppercase mb-8"
                    >
                        The Philosophy
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white mb-12"
                    >
                        We strip away the unnecessary to build digital experiences that are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100 italic">intuitive, impactful, and designed to last.</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="w-px h-24 bg-gradient-to-b from-light-accent/50 to-transparent"
                    />
                </div>
            </div>
        </section>
    );
}
