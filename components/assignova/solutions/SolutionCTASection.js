"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Download, ArrowRight, CheckCircle, Users, Award, BarChart } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    text: "30-day implementation guarantee",
  },
  {
    icon: Users,
    text: "Dedicated technical support team",
  },
  {
    icon: Award,
    text: "Industry-leading SLAs",
  },
  {
    icon: BarChart,
    text: "Performance optimization included",
  },
];

const resources = [
  {
    title: "Technical White Paper",
    description: "Detailed architecture documentation",
    icon: Download,
    action: "Download PDF",
  },
  {
    title: "Case Studies",
    description: "Real-world implementation examples",
    icon: Users,
    action: "View Cases",
  },
  {
    title: "API Documentation",
    description: "Complete API reference guide",
    icon: MessageSquare,
    action: "Explore APIs",
  },
];

export default function SolutionCTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="currentColor" />
                <path d="M 40 0 V 80 M 0 40 H 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" className="text-blue-500" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready to Transform Your{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Architecture?
                    </span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Join hundreds of companies who have modernized their infrastructure with our proven architectural solutions
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Benefits */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">What You Get</h3>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                          <motion.div
                            key={benefit.text}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                            <div className="p-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg">
                              <Icon className="w-6 h-6 text-green-400" />
                            </div>
                            <span className="text-gray-300">{benefit.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form/Contact */}
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Schedule a Demo</h3>
                    <p className="text-gray-400 mb-6">Get a personalized walkthrough of our architecture solutions</p>

                    <div className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Your work email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company name"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-blue-500">
                          <option value="">What best describes your role?</option>
                          <option value="cto">CTO / Technical Lead</option>
                          <option value="architect">Solution Architect</option>
                          <option value="engineer">Engineering Manager</option>
                          <option value="developer">Developer</option>
                        </select>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-3">
                        <Calendar className="w-5 h-5" />
                        <span>Schedule Free Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>

                      <p className="text-center text-sm text-gray-500 mt-4">No credit card required • 30-minute session</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-gray-400">Uptime SLA</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-400">Support</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="text-3xl font-bold text-white mb-2">&lt;100ms</div>
                    <div className="text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-400">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-4">Explore More Resources</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Dive deeper into our architecture with comprehensive documentation and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group">
                    <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 transition-all hover:border-gray-700 hover:shadow-xl">
                      <div className="inline-flex p-3 rounded-xl bg-gray-800 mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20">
                        <Icon className="w-8 h-8 text-gray-300 group-hover:text-white" />
                      </div>

                      <h4 className="text-xl font-bold text-white mb-3">{resource.title}</h4>
                      <p className="text-gray-400 mb-6">{resource.description}</p>

                      <motion.button whileHover={{ x: 5 }} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                        <span className="font-medium">{resource.action}</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center">
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-6">Start Your Architecture Modernization Today</h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get in touch with our solution architects for a free infrastructure assessment
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>Contact Sales</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gray-800 text-gray-300 rounded-xl font-bold hover:bg-gray-700 transition-all border border-gray-700">
                  View Pricing
                </motion.button>
              </div>

              <p className="text-gray-500 text-sm mt-6">Enterprise plans available • Volume discounts • Custom SLA options</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
