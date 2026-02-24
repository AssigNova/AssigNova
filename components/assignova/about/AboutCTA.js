"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="relative w-full py-40 overflow-hidden bg-black">
            {/* Deep Mist Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dark-accent rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl mx-auto flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight">
                        Ready to shape the future?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Let's build something extraordinary together.
                    </p>

                    <Link href="/contact" className="group relative btn-primary px-8 py-4 rounded-xl text-lg overflow-hidden flex justify-center items-center inline-flex">
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Start Your Project</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
