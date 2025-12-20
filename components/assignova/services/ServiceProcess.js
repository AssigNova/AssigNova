"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube, Rocket, Users, CheckCircle, ArrowRight } from "lucide-react";

const processSteps = [
  {
    phase: 1,
    title: "Discovery & Strategy",
    description: "Deep dive into your business goals and technical requirements",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    duration: "1-2 Weeks",
    deliverables: ["Requirements Analysis", "Technical Architecture", "Project Roadmap", "Success Metrics"],
  },
  {
    phase: 2,
    title: "Design & Prototyping",
    description: "Creating intuitive UI/UX designs and interactive prototypes",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    duration: "2-3 Weeks",
    deliverables: ["Wireframes & Mockups", "Design System", "Interactive Prototypes", "User Testing"],
  },
  {
    phase: 3,
    title: "Development",
    description: "Agile development with continuous integration and code reviews",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    duration: "4-12 Weeks",
    deliverables: ["Production Code", "API Documentation", "Unit Tests", "Code Review Reports"],
  },
  {
    phase: 4,
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality and performance",
    icon: TestTube,
    color: "from-yellow-500 to-orange-500",
    duration: "1-2 Weeks",
    deliverables: ["Test Plans", "Bug Reports", "Performance Metrics", "Security Audit"],
  },
  {
    phase: 5,
    title: "Deployment",
    description: "Smooth deployment with monitoring and optimization",
    icon: Rocket,
    color: "from-red-500 to-pink-500",
    duration: "1 Week",
    deliverables: ["Deployed Application", "Infrastructure Setup", "Monitoring Dashboard", "Deployment Docs"],
  },
  {
    phase: 6,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and optimization",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    duration: "Ongoing",
    deliverables: ["Support SLAs", "Performance Reports", "Security Updates", "Feature Enhancements"],
  },
];

export default function ServiceProcess() {
  return (
    <section id="process" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A structured, transparent approach that ensures quality delivery and successful outcomes at every stage.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Process Timeline */}
          <div className="relative mb-20">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mb-8 md:mb-0`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} mr-4`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold text-white">
                              Phase {step.phase}: {step.title}
                            </h4>
                            <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">{step.duration}</span>
                          </div>
                          <p className="text-gray-400 mt-2">{step.description}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-sm text-gray-500 mb-2">Key Deliverables:</div>
                        <div className="space-y-2">
                          {step.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                        index === 0
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                          : index === 1
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : index === 2
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : index === 3
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                          : index === 4
                          ? "bg-gradient-to-r from-red-500 to-pink-500"
                          : "bg-gradient-to-r from-indigo-500 to-blue-500"
                      }`}>
                      <span className="text-white font-bold text-xl">{step.phase}</span>
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Agile Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Agile Methodology</h3>
                <p className="text-gray-400">
                  We follow Agile principles to deliver value quickly, adapt to changes, and ensure continuous improvement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Week Sprints</h4>
                  <p className="text-gray-400">Regular delivery of working software with incremental improvements</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">24/7</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Collaboration</h4>
                  <p className="text-gray-400">Continuous communication and transparency with stakeholders</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">100%</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Flexibility</h4>
                  <p className="text-gray-400">Adapt to changing requirements and market conditions</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  <span>Download Process PDF</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
