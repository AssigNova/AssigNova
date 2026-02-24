"use client";

import { motion } from "framer-motion";
import { Search, Layers, Code, Zap } from "lucide-react";

const processSteps = [
    {
        step: "01",
        title: "Discovery & Analysis",
        description: "Deep dive into your industry challenges, architecture requirements, and growth opportunities to build the perfect roadmap.",
        icon: Search,
    },
    {
        step: "02",
        title: "Architecture Design",
        description: "Crafting scalable, cloud-native solutions that guarantee enterprise availability and hyper-fast UX.",
        icon: Layers,
    },
    {
        step: "03",
        title: "Implementation",
        description: "Agile, transparent development cycles ensuring clean code delivery, continuous integration, and rapid deployment.",
        icon: Code,
    },
    {
        step: "04",
        title: "Optimization & Scale",
        description: "Post-launch performance tuning, zero-downtime maintenance, and continuous iterative improvements.",
        icon: Zap,
    },
];

export default function CaseStudyProcess() {
    return (
        <section className="py-24 bg-gray-950 relative border-t border-gray-900 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our Proven <span className="text-dark-accent">Process</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        From architecture discovery to post-launch scaling, our methodology ensures enterprise-grade success at every stage.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="relative group flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-0 last:mb-0"
                        >
                            {/* Vertical Connecting Line (Mobile & Desktop) */}
                            {index < processSteps.length - 1 && (
                                <div className="absolute left-8 md:left-24 top-20 bottom-[-3rem] md:bottom-[-4rem] w-px bg-gradient-to-b from-dark-accent/30 to-transparent z-0" />
                            )}

                            {/* Step Node */}
                            <div className="relative z-10 flex flex-col items-center md:items-start shrink-0">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-dark-accent/50 group-hover:shadow-[0_0_30px_rgba(177,158,239,0.15)] transition-all flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-dark-accent/0 group-hover:bg-dark-accent/10 transition-colors duration-500" />
                                    <span className="text-2xl md:text-3xl font-bold text-white font-mono">{step.step}</span>
                                </div>
                            </div>

                            {/* Content Box */}
                            <div className="flex-1 bg-gray-900/40 backdrop-blur-md border border-gray-800/80 group-hover:border-gray-700 rounded-3xl p-8 transition-colors md:mt-2 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                                    <step.icon className="w-24 h-24 text-dark-accent" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed relative z-10">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
