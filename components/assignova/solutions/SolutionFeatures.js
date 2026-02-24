"use client";

import { motion } from "framer-motion";
import { Scale, Lock, Globe, TrendingUp, Users, Brain, ShieldCheck, Zap, Cpu, Database, Cloud, Code } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Web & App Expansion",
    description: "High-performance React/Next.js platforms and cross-platform native applications.",
    color: "from-dark-accent to-mid-accent",
    metrics: ["Custom UI/UX", "SEO-Optimized", "Global CDN"],
  },
  {
    icon: Zap,
    title: "Process Automation Engines",
    description: "Eliminating manual data entry through custom APIs and deep integration scripting.",
    color: "from-mid-accent to-light-accent",
    metrics: ["Python Scrapers", "Make/Zapier", "Zero Human Error"],
  },
  {
    icon: Database,
    title: "CMS & ERP Centralization",
    description: "Unified enterprise platforms linking POS, inventory management, and content.",
    color: "from-light-accent to-dark-accent",
    metrics: ["Headless CMS", "Real-time Sync", "Single Source of Truth"],
  },
  {
    icon: TrendingUp,
    title: "Strategic SEO & Growth",
    description: "Organic search optimizations and technical audits to drive high-converting traffic.",
    color: "from-contrast-accent to-mid-accent",
    metrics: ["Top Rankings", "Technical SEO", "Growth Analytics"],
  },
  {
    icon: Brain,
    title: "Brand Identity & Design",
    description: "Stunning graphic design and visual component libraries for long-term consistency.",
    color: "from-dark-accent to-light-accent",
    metrics: ["Logo Systems", "Figma Prototypes", "Brand Guidelines"],
  },
  {
    icon: ShieldCheck,
    title: "IT Infrastructure Support",
    description: "24/7 maintenance, proactive security patching, and unshakeable Uptime SLAs.",
    color: "from-mid-accent to-contrast-accent",
    metrics: ["24/7 Monitoring", "Disaster Recovery", "Cloud Management"],
  },
];

const techStack = [
  { name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind"], icon: Code },
  { name: "Backend", technologies: ["Node.js", "Python", "Go", ".NET"], icon: Cpu },
  { name: "Data", technologies: ["PostgreSQL", "Redis", "MongoDB", "Kafka"], icon: Database },
  { name: "Infrastructure", technologies: ["AWS", "Docker", "K8s", "Terraform"], icon: Cloud },
];

export default function SolutionFeatures() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-dark-accent rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mid-accent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 bg-dark-accent/10 border border-light-accent/30 rounded-full">
            <ShieldCheck className="w-4 h-4 text-light-accent" />
            <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Enterprise Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="text-light-accent">
              Scale & Security
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every core service is designed with enterprise requirements in mind, ensuring reliability, automation, and performance at scale.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group">
                <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-gray-700 hover:shadow-xl">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>

                  {/* Metrics */}
                  <div className="space-y-3">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-dark-accent to-light-accent mr-3" />
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 bg-dark-accent/10 border border-light-accent/30 rounded-full">
              <Zap className="w-4 h-4 text-light-accent" />
              <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Technology Stack</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Modern Technology Foundation</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with industry-leading technologies for maximum performance and developer experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{stack.name}</h4>
                  </div>

                  <div className="space-y-3">
                    {stack.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all">
                        {tech}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
