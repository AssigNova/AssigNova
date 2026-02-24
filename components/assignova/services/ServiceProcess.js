"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, TestTube, Rocket, Users, CheckCircle, ArrowRight } from "lucide-react";

const processSteps = [
  {
    phase: 1,
    title: "Discovery & Blueprinting",
    description: "Aligning technical strategy with your business vision and budget constraints.",
    icon: Search,
    duration: "1-2 Weeks",
    deliverables: ["Requirements Document", "Technology Stack Selection", "Project Timeline", "Cost Estimation"],
  },
  {
    phase: 2,
    title: "Design & Prototyping",
    description: "Crafting intuitive user experiences tailored for your target audience.",
    icon: Palette,
    duration: "2-3 Weeks",
    deliverables: ["Wireframes", "UI/UX Mockups", "Interactive Prototypes", "Client Approval"],
  },
  {
    phase: 3,
    title: "Agile Development",
    description: "Iterative development with regular touchpoints and transparent progress tracking.",
    icon: Code2,
    duration: "4-12+ Weeks",
    deliverables: ["Staging Environment Access", "Bi-weekly Sprints", "API Integration", "Progress Reports"],
  },
  {
    phase: 4,
    title: "Quality Assurance (QA)",
    description: "Rigorous testing to ensure reliability across devices and networks.",
    icon: TestTube,
    duration: "1-2 Weeks",
    deliverables: ["UAT (User Acceptance Testing)", "Bug Fixes", "Performance Testing", "Security Review"],
  },
  {
    phase: 5,
    title: "Deployment & Launch",
    description: "Seamless transition to production with zero downtime strategies.",
    icon: Rocket,
    duration: "1 Week",
    deliverables: ["Production Deployment", "Cloud Infrastructure Provisioning", "Go-Live Support"],
  },
  {
    phase: 6,
    title: "Ongoing Support",
    description: "Dedicated maintenance, monitoring, and future scaling.",
    icon: Users,
    duration: "Ongoing",
    deliverables: ["SLA Monitoring", "Monthly Maintenance", "Feature Enhancements", "Technical Support"],
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="text-light-accent">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A structured, transparent approach that ensures quality delivery and successful outcomes at every stage.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Process Timeline */}
          <div className="relative mb-20">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} mb-8 md:mb-0`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                      <div className="flex items-start mb-4">
                        <div className={`p-3 rounded-xl bg-dark-accent/10 border border-dark-accent/20 mr-4`}>
                          <step.icon className="w-6 h-6 text-dark-accent" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h4 className="text-xl font-bold text-white">
                              Phase {step.phase}: {step.title}
                            </h4>
                            <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full text-sm">{step.duration}</span>
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
                      className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg bg-gray-900 border-2 border-dark-accent shadow-[0_0_15px_rgba(var(--dark-accent-rgb),0.3)]`}>
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
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Collaborative Execution</h3>
                <p className="text-gray-400">
                  We integrate seamlessly with your internal teams, prioritizing clear communication and measurable milestones.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-accent/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-dark-accent font-bold text-xl px-2 text-center leading-none">Weekly<br />Syncs</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Transparent Updates</h4>
                  <p className="text-gray-400">Regular progress reports and staging link reviews.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-accent/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-dark-accent font-bold text-2xl">Jira</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Shared Tracking</h4>
                  <p className="text-gray-400">Full visibility into sprints, backlog, and blockers.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-accent/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-dark-accent font-bold text-xl px-2 text-center leading-none">Code<br />Review</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Quality Control</h4>
                  <p className="text-gray-400">Peer-reviewed codebase ensuring scalable architecture.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center space-x-3 px-8 py-4 rounded-xl text-lg">
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
