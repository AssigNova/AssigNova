"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative w-16 h-16 sm:w-20 sm:h-20"
            >
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-t-2 border-r-2 border-light-accent opacity-80"
                />
                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-2 rounded-full border-b-2 border-l-2 border-dark-accent opacity-60"
                />
                {/* Core Glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-light-accent to-dark-accent blur-md opacity-50" />
            </motion.div>
            <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="mt-6 text-sm font-medium tracking-[0.2em] text-gray-400 uppercase"
            >
                Initializing
            </motion.p>
        </div>
    );
}
