"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Network, Cpu, Zap, Activity, Share2 } from "lucide-react";
import Image from "next/image";

export default function HeroNexus() {
    const containerRef = useRef(null);

    // Mouse tracking logic for subtle 3D tilt
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(smoothMouseY, [0, 1], [15, -15]);
    const rotateY = useTransform(smoothMouseX, [0, 1], [-15, 15]);
    const coreRotateX = useTransform(smoothMouseY, [0, 1], [25, -25]);
    const coreRotateY = useTransform(smoothMouseX, [0, 1], [-25, 25]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth;
            const y = e.clientY / innerHeight;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className="relative w-full h-full min-h-[500px] flex justify-center items-center lg:min-h-[600px] perspective-1000">
            <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] transform-gpu"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Core Geometry */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center transform-gpu"
                    style={{
                        rotateX: coreRotateX,
                        rotateY: coreRotateY,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Floating Brand Glow Aura */}
                    <motion.div
                        animate={{
                            rotateZ: 360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotateZ: { duration: 20, ease: "linear", repeat: Infinity },
                            scale: { duration: 4, ease: "easeInOut", repeat: Infinity },
                        }}
                        className="absolute w-40 h-40 bg-gradient-to-br from-light-accent to-dark-accent rounded-full opacity-50 blur-2xl"
                        style={{ transform: "translateZ(0px)" }}
                    />

                    {/* Massive Floating Next-Gen Logo Core */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                        className="absolute flex items-center justify-center w-48 h-48 md:w-56 md:h-56"
                        style={{ transform: "translateZ(20px)" }}
                    >
                        <Image
                            src="/AssigNova-logo.svg"
                            alt="Assignova Logo Core"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(177,158,239,0.4)] filter contrast-125 brightness-110"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Outer Orbital Rings */}
                {[
                    { delay: 0, duration: 25, zParams: 40, rx: 60, ry: 45 },
                    { delay: 1, duration: 30, zParams: 20, rx: -30, ry: 60, reverse: true },
                    { delay: 2, duration: 40, zParams: -20, rx: 45, ry: -30 },
                ].map((ring, idx) => (
                    <motion.div
                        key={idx}
                        className="absolute inset-0 border border-dark-accent/30 rounded-full"
                        style={{
                            transform: `translateZ(${ring.zParams}px) rotateX(${ring.rx}deg) rotateY(${ring.ry}deg)`,
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <motion.div
                            animate={{ rotateZ: ring.reverse ? -360 : 360 }}
                            transition={{ duration: ring.duration, ease: "linear", repeat: Infinity }}
                            className="w-full h-full relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Attached tech nodes */}
                            <motion.div
                                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-light-accent rounded-full shadow-[0_0_15px_rgba(var(--light-accent-rgb),0.8)]"
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: ring.delay }}
                                style={{
                                    transform: `rotateX(${-ring.rx}deg) rotateY(${-ring.ry}deg)`, // Anti-rotate to face camera
                                }}
                            />
                            <motion.div
                                className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-3 h-3 bg-mid-accent rounded-full shadow-[0_0_10px_rgba(var(--mid-accent-rgb),0.6)]"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                                transition={{ duration: 3, repeat: Infinity, delay: ring.delay + 1 }}
                                style={{
                                    transform: `rotateX(${-ring.rx}deg) rotateY(${-ring.ry}deg)`,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}

                {/* Data Stream Lines connecting to empty space */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ transform: "translateZ(-50px)" }}>
                    <motion.path
                        d="M 50% 50% Q 20% 20% 0% 10%"
                        stroke="var(--light-accent)"
                        strokeWidth="1"
                        fill="transparent"
                        strokeDasharray="5,5"
                        animate={{ strokeDashoffset: [20, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M 50% 50% Q 80% 80% 100% 90%"
                        stroke="var(--mid-accent)"
                        strokeWidth="1"
                        fill="transparent"
                        strokeDasharray="5,5"
                        animate={{ strokeDashoffset: [-20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                {/* Floating Stat Badges */}
                {[
                    { icon: Activity, label: "Real-time", x: -140, y: -140, z: 60, delay: 0 },
                    { icon: Network, label: "Automated", x: 140, y: -100, z: 40, delay: 0.5 },
                    { icon: Share2, label: "Synced", x: -120, y: 120, z: 80, delay: 1 },
                    { icon: Zap, label: "Ultra-fast", x: 120, y: 140, z: 50, delay: 1.5 },
                ].map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + badge.delay, duration: 0.8 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 px-3 py-1.5 bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-full"
                            style={{
                                x: badge.x,
                                y: badge.y,
                                transform: `translateZ(${badge.z}px)`,
                            }}
                        >
                            <Icon className="w-3 h-3 text-light-accent" />
                            <span className="text-xs text-gray-300 font-medium">{badge.label}</span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
