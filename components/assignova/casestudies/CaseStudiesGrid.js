"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies, categories } from "@/app/data/case-studies";
import {
    Calendar,
    Users,
    CheckCircle,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudiesGrid() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredStudies = caseStudies.filter((study) => {
        return selectedCategory === "all" || study.category.includes(selectedCategory);
    });

    return (
        <section className="py-20 relative z-10 bg-gray-950">
            <div className="container mx-auto px-6">

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        const isActive = selectedCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${isActive
                                    ? "bg-dark-accent/20 border-dark-accent text-white"
                                    : "bg-gray-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{category.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Masonry-Style Grid */}
                <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStudies.map((study, index) => (
                            <Link href={`/case-studies/${study.id}`} key={study.id}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative flex flex-col h-full bg-gray-900/40 backdrop-blur-md border border-gray-800/80 hover:border-dark-accent/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(177,158,239,0.1)] hover:-translate-y-2 cursor-pointer"
                                >
                                    {/* Glow Core */}
                                    <div className="absolute inset-0 bg-dark-accent/0 group-hover:bg-dark-accent/5 transition-colors duration-500 pointer-events-none" />

                                    {/* Card Header */}
                                    <div className="p-8 border-b border-gray-800/50">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="text-4xl filter drop-shadow-md">{study.logo}</div>
                                            <div className="px-3 py-1 bg-gray-800 rounded-full text-xs font-bold text-gray-300 border border-gray-700">
                                                {study.impact.toUpperCase()} IMPACT
                                            </div>
                                        </div>
                                        <div className="text-sm text-dark-accent font-medium mb-2">{study.industry}</div>
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{study.client}</h3>
                                        <h4 className="text-lg text-gray-300 mb-4 font-medium">{study.title}</h4>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                            {study.challenge}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {study.technologies.slice(0, 4).map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-gray-950 border border-gray-800 text-gray-300 rounded-full text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                            {study.technologies.length > 4 && (
                                                <span className="px-3 py-1 bg-gray-950 border border-gray-800 text-gray-500 rounded-full text-xs">
                                                    +{study.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Results Section */}
                                    <div className="p-8 bg-gray-950/30 flex-grow">
                                        <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Key Results</h5>
                                        <div className="space-y-3">
                                            {study.results.slice(0, 3).map((result, i) => (
                                                <div key={i} className="flex items-start space-x-3">
                                                    <CheckCircle className="w-5 h-5 text-dark-accent mt-0.5 flex-shrink-0" />
                                                    <span className="text-gray-400 text-sm">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Card Footer */}
                                    <div className="p-8 border-t border-gray-800/50 flex items-center justify-between mt-auto">
                                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                                            <div className="flex items-center space-x-1 border border-gray-800 px-2 py-1 rounded bg-gray-900/50">
                                                <Calendar className="w-3 h-3" />
                                                <span>{study.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 border border-gray-800 px-2 py-1 rounded bg-gray-900/50">
                                                <Users className="w-3 h-3" />
                                                <span>{study.teamSize}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2 text-dark-accent font-medium text-sm">
                                            <span>Explore</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                    </div>

                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </AnimatePresence>

                {filteredStudies.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-white mb-4">No case studies found</h3>
                        <p className="text-gray-400">Try adjusting your category filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
