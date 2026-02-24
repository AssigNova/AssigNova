"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, Cpu, TrendingUp, Code, Database, Cloud, Smartphone, Layout, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesHero() {
  const stats = [
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime Guarantee",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Security Monitoring",
    },
    {
      icon: Globe,
      value: "5+",
      label: "Countries Served",
    },
    {
      icon: TrendingUp,
      value: "90+",
      label: "Projects Delivered",
    },
  ];

  // Abstract Array Items for the right column visualization
  const arrayItems = [
    { icon: Code, label: "Frontend", delay: 0 },
    { icon: Database, label: "Backend", delay: 0.1 },
    { icon: Cloud, label: "Branding", delay: 0.2 },
    { icon: Smartphone, label: "Mobile", delay: 0.3 },
    { icon: Layout, label: "UI/UX", delay: 0.4 },
    { icon: Cpu, label: "AI & Data", delay: 0.5 },
  ];

  return (
    <>
      <section id="hero" className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-16 lg:pt-32 lg:pb-32">
        {/* Abstract Technical Background */}
        <div className="absolute inset-0 bg-dark-background">
          <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-background via-transparent to-dark-background" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-dark-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-1.5 mb-8 bg-dark-accent/10 border border-light-accent/30 rounded-full"
              >
                <Cpu className="w-4 h-4 text-light-accent" />
                <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Enterprise Architecture</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-accent to-light-accent">Digital Excellence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                End-to-end technical solutions built for scale. From custom web platforms to cloud infrastructure, we deliver mission-critical software that accelerates business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={"/solutions"}>
                  <button className="btn-primary px-8 py-4 rounded-xl text-lg flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href={"/contact"}>
                  <button className="btn-secondary px-8 py-4 rounded-xl text-lg w-full sm:w-auto">
                    Book Consultation
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column: Interactive Service Array */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full hidden md:block">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Core */}
                <motion.div
                  animate={{
                    boxShadow: ["0 0 20px rgba(var(--dark-accent-rgb), 0.2)", "0 0 60px rgba(var(--dark-accent-rgb), 0.6)", "0 0 20px rgba(var(--dark-accent-rgb), 0.2)"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20 w-32 h-32 rounded-full glass-effect border border-dark-accent/30 flex items-center justify-center bg-gray-900/80 backdrop-blur-xl">
                  <div className="w-16 h-16 rounded-full bg-dark-accent/20 flex items-center justify-center">
                    {/* <Sparkles className="w-8 h-8 text-dark-accent" /> */}
                  </div>
                </motion.div>

                {/* Orbiting Satellite Nodes */}
                {arrayItems.map((item, i) => {
                  const angle = (i * 360) / arrayItems.length;
                  const radius = 160; // Distance from center
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      custom={i}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{ opacity: 1, x, y, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8 + item.delay,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="absolute z-10 w-24 h-24">

                      <motion.div
                        whileHover={{ scale: 1.15, zIndex: 30 }}
                        className="w-full h-full rounded-2xl glass-effect border border-gray-800 bg-gray-900/60 backdrop-blur-md flex flex-col items-center justify-center p-3 cursor-pointer group hover:border-dark-accent/50 transition-colors">
                        <Icon className="w-6 h-6 text-gray-400 group-hover:text-dark-accent mb-2 transition-colors" />
                        <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold group-hover:text-gray-300">
                          {item.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Full-Width Stats Divider Strip (Relocated out of Hero) */}
      <div className="w-full bg-gray-900 border-y border-gray-800 relative z-20 shadow-2xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 max-w-7xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="py-12 px-4 md:px-8 text-center group cursor-default flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-dark-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-gray-800">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-dark-accent transition-colors" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-dark-accent transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
