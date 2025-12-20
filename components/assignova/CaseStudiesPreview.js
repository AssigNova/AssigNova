"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Shield, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "FinTech Enterprise",
    industry: "Financial Services",
    challenge: "Legacy system modernization for 1M+ users",
    solution: "Built microservices architecture with real-time analytics",
    results: [
      { metric: "300%", label: "Performance Improvement", icon: Zap },
      { metric: "99.99%", label: "Uptime", icon: Shield },
      { metric: "50%", label: "Cost Reduction", icon: TrendingUp },
    ],
    technologies: ["Next.js", ".NET Core", "AWS", "Redis", "Kafka"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    client: "Healthcare Platform",
    industry: "Healthcare",
    challenge: "HIPAA compliant patient management system",
    solution: "Secure cloud-native platform with AI diagnostics",
    results: [
      { metric: "40%", label: "Faster Diagnosis", icon: Zap },
      { metric: "100%", label: "Compliance", icon: Shield },
      { metric: "1M+", label: "Patients Served", icon: Users },
    ],
    technologies: ["React", "Python", "Azure", "PostgreSQL", "TensorFlow"],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    client: "E-commerce Giant",
    industry: "Retail",
    challenge: "Scale platform for holiday season traffic",
    solution: "Cloud auto-scaling with edge computing",
    results: [
      { metric: "10x", label: "Traffic Handling", icon: Zap },
      { metric: "70%", label: "Faster Load Times", icon: TrendingUp },
      { metric: "$50M", label: "Revenue Increase", icon: Users },
    ],
    technologies: ["Next.js", "Node.js", "AWS Lambda", "Redis", "CDN"],
    color: "from-green-500 to-emerald-500",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform and achieve exceptional results.
          </p>
        </motion.div>

        {/* Case Studies Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-gray-400">Featured Case Studies</span>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative">
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${study.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                  />

                  {/* Case Study Card */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-gray-700 transition-all duration-300 h-full">
                    {/* Industry Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm mb-6">{study.industry}</div>

                    <h3 className="text-xl font-bold text-white mb-4">{study.client}</h3>

                    <div className="mb-6">
                      <h4 className="text-sm text-gray-400 mb-2">The Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm text-gray-400 mb-2">Our Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h4 className="text-sm text-gray-400 mb-4">Key Results</h4>
                      <div className="space-y-3">
                        {study.results.map((result, i) => {
                          const Icon = result.icon;

                          return (
                            <div key={i} className="flex items-center">
                              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                                <Icon className="w-5 h-5 text-blue-400" />
                              </div>
                              <div>
                                <div className="text-lg font-bold text-white">{result.metric}</div>
                                <div className="text-sm text-gray-400">{result.label}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm text-gray-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="font-medium">View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center">
              <button className="inline-flex items-center space-x-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                <span>View All Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
