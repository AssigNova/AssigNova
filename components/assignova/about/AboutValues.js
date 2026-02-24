"use client";

import { motion } from "framer-motion";
import { Target, Users, Zap, Globe, Award, Code } from "lucide-react";

export default function AboutValues() {
    const values = [
        {
            icon: Target,
            title: "Precision",
            description: "Every pixel, every line of code is crafted with intention and purpose.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We work with you, not just for you. Your vision becomes our mission.",
        },
        {
            icon: Zap,
            title: "Innovation",
            description: "Constantly pushing boundaries with cutting-edge technologies.",
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Building solutions that transcend borders and transform industries.",
        },
        {
            icon: Award,
            title: "Excellence",
            description: "Setting new standards for quality and performance in every project.",
        },
        {
            icon: Code,
            title: "Technical Mastery",
            description: "Deep expertise across modern frameworks and architectures.",
        },
    ];

    return (
        <section className="relative w-full py-24 overflow-hidden bg-gray-950">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase">Core Values</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {values.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative p-8 rounded-2xl bg-gray-950/50 border border-white/5 hover:border-light-accent/30 transition-all duration-500 hover:bg-white/[0.02]"
                            >
                                <div className="mb-6 inline-flex">
                                    <Icon className="w-6 h-6 text-gray-500 group-hover:text-light-accent transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-200 mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
