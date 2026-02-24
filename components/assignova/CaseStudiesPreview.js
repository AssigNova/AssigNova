"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredCaseStudies } from "@/app/data/case-studies";
import Link from "next/link";

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
            Success{" "}
            <span className="text-light-accent">Stories</span>
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
                <div className="w-3 h-3 rounded-full bg-light-accent" />
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
              {featuredCaseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
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
                        <p className="text-gray-300">{study.result}</p>
                      </div>

                      {/* Results */}
                      <div className="mb-8">
                        <h4 className="text-sm text-gray-400 mb-4">Key Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-xl font-bold text-white">{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            </div>
                          ))}
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
                      <Link href={`/case-studies/${study.id}`} className="w-full flex items-center justify-center space-x-2 text-light-accent hover:text-dark-accent transition-colors">
                        <span className="font-medium">View Full Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* View All CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center">
              <Link href="/case-studies">
                <button className="btn-secondary inline-flex items-center space-x-3 px-8 py-4 rounded-xl text-lg">
                  <span>View All Case Studies</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
