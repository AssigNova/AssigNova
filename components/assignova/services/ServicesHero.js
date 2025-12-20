"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, Cpu, TrendingUp } from "lucide-react";

export default function ServicesHero() {
  const stats = [
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime Guarantee",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Security Monitoring",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Served",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      value: "200+",
      label: "Projects Delivered",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden pt-32 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Comprehensive Digital Solutions</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="">Our </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto">
              End-to-end digital solutions designed to transform your business, accelerate growth, and deliver measurable results through
              innovation and technical excellence.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300`}
                    />
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-gray-700 transition-colors">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-20">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Technical Excellence</h3>
                  <p className="text-gray-400">Cutting-edge technologies and best practices for optimal performance</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                  <p className="text-gray-400">Military-grade security protocols and compliance standards</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Business Growth</h3>
                  <p className="text-gray-400">Solutions designed to drive measurable business outcomes</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
