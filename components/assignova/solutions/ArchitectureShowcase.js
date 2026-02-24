"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  Network,
  Shield,
  Zap,
  GitBranch,
  Cloud,
  Server,
  Code,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const architectureLayers = [
  {
    layer: "Digital Interfaces",
    icon: Layers,
    color: "from-dark-accent to-mid-accent",
    description: "High-performance web and mobile frontends",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    components: ["Web Apps", "Mobile Apps", "UI/UX Components", "Admin Dashboards"],
  },
  {
    layer: "Automation & Logic",
    icon: Cpu,
    color: "from-mid-accent to-light-accent",
    description: "Core business logic and automated scripting",
    technologies: ["Node.js", "Python", "Make", "REST APIs"],
    components: ["API Gateways", "RPA Bots", "Web Scrapers", "Authentication"],
  },
  {
    layer: "CMS & ERP Core",
    icon: Database,
    color: "from-light-accent to-dark-accent",
    description: "Centralized data storage and content management",
    technologies: ["PostgreSQL", "Headless CMS", "Redis", "Supabase"],
    components: ["Databases", "Inventory systems", "POS Syncs", "Data Lakes"],
  },
  {
    layer: "Cloud & Support",
    icon: Cloud,
    color: "from-contrast-accent to-mid-accent",
    description: "Secure infrastructure and global deployment",
    technologies: ["Vercel", "AWS", "Docker", "Cloudflare"],
    components: ["Edge Networks", "Server Monitoring", "Security Patching"],
  },
];

const architecturePatterns = [
  {
    name: "Headless CMS Architecture",
    icon: GitBranch,
    description: "Decoupled frontends for blazing fast user experiences",
    benefits: ["Omnichannel Delivery", "Security Isolation", "Flexible UIs"],
    useCase: "Content-heavy marketing sites and e-commerce platforms",
  },
  {
    name: "Automated Workflows",
    icon: Zap,
    description: "Intelligent API bridging and background task scraping",
    benefits: ["Zero Manual Entry", "Error Reduction", "Rapid Execution"],
    useCase: "Data synchronization across distinct enterprise tools",
  },
  {
    name: "Centralized Systems",
    icon: Network,
    description: "Unified databases linking POS, inventory, and logic",
    benefits: ["Single Source of Truth", "Real-time Sync", "Cross-department visibility"],
    useCase: "Enterprises needing custom ERP replacements",
  },
  {
    name: "Rapid MVP Deployment",
    icon: Server,
    description: "Agile-focused foundation to launch core products fast",
    benefits: ["Faster Time-to-Market", "Scalable Base", "Cost Effective"],
    useCase: "Startups and experimental enterprise ventures",
  },
];

export default function ArchitectureShowcase() {
  const [expandedLayer, setExpandedLayer] = useState(null);
  const [activePattern, setActivePattern] = useState("microservices");

  return (
    <section id="architecture" className="py-20 relative overflow-hidden">
      {/* Background - Network Nodes */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="network-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Network Nodes */}
              <circle cx="20" cy="20" r="2" fill="currentColor" />
              <circle cx="50" cy="20" r="2" fill="currentColor" />
              <circle cx="80" cy="20" r="2" fill="currentColor" />
              <circle cx="20" cy="50" r="2" fill="currentColor" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="80" cy="50" r="2" fill="currentColor" />
              <circle cx="20" cy="80" r="2" fill="currentColor" />
              <circle cx="50" cy="80" r="2" fill="currentColor" />
              <circle cx="80" cy="80" r="2" fill="currentColor" />

              {/* Connection Lines */}
              <line x1="20" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="20" x2="20" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
              <line x1="20" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
              <line x1="80" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" className="text-light-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Modern{" "}
            <span className="text-light-accent">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scalable, maintainable, and future-proof architectural patterns designed to support your growth and innovation.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Architectural Layers - Stack Visualization */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 bg-dark-accent/10 border border-light-accent/30 rounded-full">
                <Layers className="w-4 h-4 text-light-accent" />
                <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Layered Architecture</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Scalable System Design</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Each layer serves a specific purpose while maintaining separation of concerns
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                const isExpanded = expandedLayer === index;

                return (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative">
                    {/* Layer Card */}
                    <motion.button
                      onClick={() => setExpandedLayer(isExpanded ? null : index)}
                      whileHover={{ x: isExpanded ? 0 : 10 }}
                      className={`w-full bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 text-left transition-all duration-300 ${isExpanded ? "border-gray-700 shadow-xl" : "border-gray-800 hover:border-gray-700"
                        }`}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${layer.color} flex-shrink-0`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{layer.layer}</h4>
                            <p className="text-gray-400 text-sm mt-1">{layer.description}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto pt-4 sm:pt-0 border-t border-gray-800 sm:border-0 mt-4 sm:mt-0">
                          <div className="flex flex-wrap gap-2">
                            {layer.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">
                                {tech}
                              </span>
                            ))}
                          </div>
                          {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-6 border-t border-gray-800">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-bold text-gray-300 mb-3">Technologies</h5>
                              <div className="flex flex-wrap gap-2">
                                {layer.technologies.map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-bold text-gray-300 mb-3">Components</h5>
                              <ul className="space-y-2">
                                {layer.components.map((component) => (
                                  <li key={component} className="flex items-center text-gray-400">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-dark-accent to-light-accent mr-3" />
                                    {component}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.button>

                    {/* Connection Line */}
                    {index < architectureLayers.length - 1 && (
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-gray-800 to-transparent" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Architecture Patterns - Card Grid */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 mb-4 bg-dark-accent/10 border border-light-accent/30 rounded-full">
                <Network className="w-4 h-4 text-light-accent" />
                <span className="text-xs font-semibold text-light-accent uppercase tracking-widest">Architectural Patterns</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Choose the Right Pattern</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">Different challenges require different architectural approaches</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {architecturePatterns.map((pattern, index) => {
                const Icon = pattern.icon;
                const isActive = activePattern === pattern.name.toLowerCase().replace(/\s+/g, "-");

                return (
                  <motion.button
                    key={pattern.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActivePattern(pattern.name.toLowerCase().replace(/\s+/g, "-"))}
                    whileHover={{ y: -10 }}
                    className={`relative group ${isActive ? "transform lg:scale-105" : ""}`}>
                    {/* Background Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${index === 0
                        ? "from-dark-accent/20 to-mid-accent/20"
                        : index === 1
                          ? "from-mid-accent/20 to-light-accent/20"
                          : index === 2
                            ? "from-light-accent/20 to-dark-accent/20"
                            : "from-contrast-accent/20 to-mid-accent/20"
                        } rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 ${isActive ? "opacity-100" : ""
                        }`}
                    />

                    {/* Pattern Card */}
                    <div
                      className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 ${isActive ? "border-gray-700" : "border-gray-800 group-hover:border-gray-700"
                        }`}>
                      <div className="text-center">
                        <div
                          className={`inline-flex p-3 rounded-xl mb-4 ${index === 0
                            ? "bg-gradient-to-r from-dark-accent to-mid-accent"
                            : index === 1
                              ? "bg-gradient-to-r from-mid-accent to-light-accent"
                              : index === 2
                                ? "bg-gradient-to-r from-light-accent to-dark-accent"
                                : "bg-gradient-to-r from-contrast-accent to-mid-accent"
                            }`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3">{pattern.name}</h4>

                        <p className="text-gray-400 text-sm mb-6">{pattern.description}</p>

                        <div className="space-y-2">
                          {pattern.benefits.slice(0, 2).map((benefit) => (
                            <div key={benefit} className="flex items-center justify-center text-gray-300 text-sm">
                              <Shield className="w-4 h-4 text-contrast-accent mr-2" />
                              {benefit}
                            </div>
                          ))}
                        </div>

                        {/* Use Case */}
                        <div className="mt-6 pt-6 border-t border-gray-800">
                          <div className="text-xs text-gray-500 mb-2">Best for</div>
                          <div className="text-sm text-gray-300">{pattern.useCase}</div>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Security & Performance */}
          <div className="bg-gradient-to-r from-dark-accent/10 via-mid-accent/10 to-light-accent/10 rounded-3xl p-8 border border-gray-800">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Security & Performance</h3>
                  <p className="text-gray-400 mb-8">
                    Our architectures are built with security and performance as foundational principles, not afterthoughts.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-dark-accent/10 to-mid-accent/10 border border-dark-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <Shield className="w-6 h-6 text-mid-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Security First</h4>
                        <p className="text-gray-400">
                          End-to-end encryption, regular security audits, and compliance with industry standards.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-mid-accent/10 to-light-accent/10 border border-mid-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <Zap className="w-6 h-6 text-light-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Optimized Performance</h4>
                        <p className="text-gray-400">
                          Load balancing, caching strategies, and performance monitoring for optimal user experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Performance Metrics Visualization */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Response Time</span>
                          <span>&lt; 100ms</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="h-2 rounded-full bg-gradient-to-r from-dark-accent to-light-accent w-11/12" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Uptime</span>
                          <span>99.9%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="h-2 rounded-full bg-gradient-to-r from-mid-accent to-dark-accent w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Security Score</span>
                          <span>A+</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div className="h-2 rounded-full bg-gradient-to-r from-contrast-accent to-mid-accent w-10/12" />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 w-full bg-gradient-to-r from-dark-accent via-mid-accent to-light-accent text-white py-3 px-2 sm:px-4 rounded-xl font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-dark-accent/30 transition-all flex items-center justify-center space-x-2 sm:space-x-3">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                      <span className="text-center leading-tight whitespace-normal sm:whitespace-nowrap">View Technical White Paper</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
