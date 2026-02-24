"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Heart,
  ShoppingCart,
  Zap,
  Truck,
  Factory,
  Globe,
  CheckCircle,
  Database,
  BarChart,
  Shield,
} from "lucide-react";
import Link from "next/link";

const industries = {
  automation: {
    title: "Process Automation",
    icon: Zap,
    color: "from-dark-accent to-mid-accent",
    description: "Intelligent workflows that eliminate manual tasks",
    challenges: [
      "Repetitive manual data entry",
      "High human error rates",
      "Inefficient process bottlenecks",
      "Disjointed legacy systems",
    ],
    solutions: ["Custom Workflow Automation", "RPA Integration", "API Bridging", "Document Parsing"],
    technologies: ["Node.js", "Python", "Make", "AWS Lambda", "Azure Functions"],
    stats: { processes: "500+", hours_saved: "10k+", roi: "300%" },
  },
  healthcare: {
    title: "Healthcare Technology",
    icon: Heart,
    color: "from-mid-accent to-light-accent",
    description: "HIPAA-compliant healthcare management systems",
    challenges: ["Patient data security", "Interoperability standards", "Real-time monitoring", "Compliance management"],
    solutions: ["Electronic Health Records (EHR)", "Telemedicine platforms", "Medical IoT integration", "AI diagnostics tools"],
    technologies: ["React", "Python", "Azure", "MongoDB", "TensorFlow"],
    stats: { clients: 18, projects: 32, accuracy: "95%" },
  },
  ecommerce: {
    title: "E-Commerce Platforms",
    icon: ShoppingCart,
    color: "from-light-accent to-dark-accent",
    description: "High-performance online retail solutions",
    challenges: [
      "Scalability during peak traffic",
      "Personalized shopping experiences",
      "Multi-channel integration",
      "Real-time inventory management",
    ],
    solutions: ["Headless e-commerce platforms", "AI-powered recommendations", "Omnichannel solutions", "Supply chain automation"],
    technologies: ["Next.js", "Node.js", "AWS", "Redis", "Elasticsearch"],
    stats: { clients: 42, projects: 68, growth: "300%" },
  },
  erp: {
    title: "CMS / POS / ERP",
    icon: Database,
    color: "from-contrast-accent to-mid-accent",
    description: "Centralized platforms to manage your entire business",
    challenges: [
      "Fragmented data silos",
      "Lack of real-time inventory",
      "Poor cross-department visibility",
      "Scaling operational complexities",
    ],
    solutions: ["Custom ERP Systems", "Cloud POS Integrations", "Headless CMS Architecture", "Supply Chain Dashboards"],
    technologies: ["React", "PostgreSQL", "Next.js", "Redis", "Elasticsearch"],
    stats: { systems: 45, uptime: "99.9%", visibility: "100%" },
  },
};

const industryCards = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    color: "from-mid-accent to-dark-accent",
  },
  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,
    color: "from-dark-accent to-light-accent",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    icon: Building2,
    color: "from-light-accent to-mid-accent",
  },
  {
    id: "government",
    title: "Government",
    icon: Globe,
    color: "from-contrast-accent to-dark-accent",
  },
];

export default function IndustrySolutions({ activeSolution, setActiveSolution }) {
  const activeIndustry = industries[activeSolution];

  return (
    <section id="industries" className="py-20 relative">
      {/* Background Pattern - Diagonal Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-grid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="40" height="40" fill="none" />
              <path d="M0,0 L40,40" stroke="currentColor" strokeWidth="0.5" />
              <path d="M40,0 L0,40" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-grid)" className="text-light-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry{" "}
            <span className="text-light-accent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored digital solutions for specific industry challenges, delivering measurable results and competitive advantage.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Industry Selection - Radial Layout */}
          <div className="relative mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Industry Cards */}
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(industries).map(([key, industry], index) => {
                    const Icon = industry.icon;
                    const isActive = activeSolution === key;

                    return (
                      <motion.button
                        key={key}
                        onClick={() => setActiveSolution(key)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`relative group ${isActive ? "sm:col-span-2" : ""}`}>
                        {/* Background Glow */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${industry.color
                            } rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 ${isActive ? "opacity-20" : ""
                            }`}
                        />

                        {/* Card */}
                        <div
                          className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-xl p-4 md:p-6 transition-all duration-300 w-full overflow-hidden ${isActive ? "border-gray-700 shadow-xl" : "border-gray-800 group-hover:border-gray-700"
                            }`}>
                          <div className="flex items-center space-x-3 md:space-x-4 w-full">
                            <div className={`p-2 md:p-3 shrink-0 rounded-lg bg-gradient-to-r ${industry.color}`}>
                              <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="text-left w-full overflow-hidden">
                              <h3 className="font-bold text-white text-sm md:text-base leading-tight break-words">{industry.title}</h3>
                              {isActive && <p className="text-gray-400 text-xs md:text-sm mt-1 mb-2 line-clamp-2">{industry.description}</p>}
                            </div>
                          </div>

                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="active-industry"
                              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-dark-accent to-light-accent rounded-b-xl"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </div>

                        {/* Connection Line (on hover) */}
                        <div className="absolute top-1/2 right-0 w-6 h-px bg-gradient-to-l from-light-accent/0 via-light-accent/50 to-light-accent/0 opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
                      </motion.button>
                    );
                  })}
                </div>

                {/* Additional Industries */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {industryCards.map((industry, index) => {
                    const Icon = industry.icon;

                    return (
                      <motion.div
                        key={industry.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-900/30 border border-gray-800 rounded-lg p-3 sm:p-4 text-center hover:border-gray-700 transition-colors">
                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${industry.color} mb-3`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-white break-words hyphens-auto">{industry.title}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Active Industry Details */}
              <motion.div key={activeSolution} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
                <div className="sticky top-24">
                  <div className={`relative overflow-hidden rounded-2xl border border-gray-800`}>
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeIndustry.color} opacity-10`} />

                    <div className="relative bg-gray-900/70 backdrop-blur-sm p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${activeIndustry.color}`}>
                              <activeIndustry.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{activeIndustry.title}</h3>
                          </div>
                          <p className="text-gray-400">{activeIndustry.description}</p>
                        </div>

                        {/* Stats */}
                        <div className="text-left sm:text-right w-full sm:w-auto">
                          <div className="text-3xl font-bold gradient-text mb-2">{activeIndustry.stats.projects}</div>
                          <div className="text-sm text-gray-400">Projects Delivered</div>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Challenges */}
                        <div>
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Shield className="w-5 h-5 text-mid-accent mr-2" />
                            Key Challenges
                          </h4>
                          <ul className="space-y-3">
                            {activeIndustry.challenges.map((challenge, i) => (
                              <motion.li
                                key={challenge}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center text-gray-300">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-dark-accent to-light-accent mr-3" />
                                {challenge}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Solutions */}
                        <div>
                          <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Zap className="w-5 h-5 text-contrast-accent mr-2" />
                            Our Solutions
                          </h4>
                          <ul className="space-y-3">
                            {activeIndustry.solutions.map((solution, i) => (
                              <motion.li
                                key={solution}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center text-gray-300">
                                <CheckCircle className="w-5 h-5 text-contrast-accent mr-3 flex-shrink-0" />
                                {solution}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 pt-8 border-t border-gray-800">
                        <h4 className="text-lg font-bold text-white mb-4">Technologies We Use</h4>
                        <div className="flex flex-wrap gap-3">
                          {activeIndustry.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors">
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Stats Bar */}
                      {/* <div className="mt-8 pt-8 border-t border-gray-800">
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-2xl font-bold text-white mb-2">{activeIndustry.stats.clients}+</div>
                            <div className="text-sm text-gray-400">Clients</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white mb-2">{activeIndustry.stats.projects}</div>
                            <div className="text-sm text-gray-400">Projects</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white mb-2">
                              {activeIndustry.stats.savings ||
                                activeIndustry.stats.accuracy ||
                                activeIndustry.stats.growth ||
                                activeIndustry.stats.engagement}
                            </div>
                            <div className="text-sm text-gray-400">
                              {activeIndustry.stats.savings
                                ? "Cost Savings"
                                : activeIndustry.stats.accuracy
                                  ? "Accuracy"
                                  : activeIndustry.stats.growth
                                    ? "Growth"
                                    : "Engagement"}
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-dark-accent/5 via-mid-accent/5 to-light-accent/5 rounded-3xl blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl">
                <div className="absolute inset-0 border-2 border-mid-accent/20 rounded-3xl animate-border-spin" />
              </div>

              <div className="max-w-3xl mx-auto text-center relative z-10">
                <BarChart className="w-16 h-16 text-mid-accent mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Don't See Your Industry?</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Every business is unique. Tell us about your specific challenges, and we'll craft a custom solution tailored to your
                  needs.
                </p>
                <Link href={"/contact"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-8 py-4 rounded-xl text-lg">
                    Request Custom Solution
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div >

      <style jsx global>{`
        @keyframes border-spin {
          0% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          25% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 100% 100%);
          }
          50% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
          75% {
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 0% 100%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>
    </section >
  );
}
