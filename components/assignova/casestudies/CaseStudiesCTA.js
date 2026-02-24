"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesCTA() {
    return (
        <section className="py-24 relative z-10 bg-gray-950 border-t border-gray-900 overflow-hidden">
            {/* Background Mist */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] w-[600px] h-[300px] left-1/2 -translate-x-1/2 bg-dark-accent/10 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 mt-12 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/40 backdrop-blur-md rounded-[3rem] p-10 md:p-16 border border-gray-800/80 max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
                >
                    {/* Internal Glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dark-accent/50 to-transparent" />

                    <div className="text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to write your <span className="text-dark-accent">Success Story?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Partner with Assignova to engineer high-performance systems and scalable solutions tailored perfectly to your enterprise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/contact"
                                className="btn-primary w-full sm:w-auto px-8 py-5 text-lg flex items-center justify-center gap-3 group"
                            >
                                <span>Schedule a Consultation</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
