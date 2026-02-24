"use client";

import { motion } from "framer-motion";
import Link from "next/link";
const coreStack = [
  {
    category: "Frontend Development",
    technologies: [
      { name: "React", icon: null, level: "Expert" },
      { name: "Next.js", icon: null, level: "Expert" },
      { name: "TypeScript", icon: null, level: "Expert" },
    ],
  },
  {
    category: "Backend & APIs",
    technologies: [
      { name: "Node.js", icon: null, level: "Expert" },
      { name: "Python", icon: null, level: "Advanced" },
      { name: "GraphQL", icon: null, level: "Expert" },
    ],
  },
  {
    category: "Data & Storage",
    technologies: [
      { name: "PostgreSQL", icon: null, level: "Expert" },
      { name: "MongoDB", icon: null, level: "Expert" },
      { name: "Redis", icon: null, level: "Advanced" },
    ],
  },
];

const vendorPartners = [
  {
    category: "Cloud Infrastructure",
    technologies: [
      { name: "AWS", icon: null, type: "Advanced Tier Partner" },
      { name: "Google Cloud", icon: null, type: "Select Partner" },
      { name: "Microsoft Azure", icon: null, type: "Solutions Partner" },
    ],
  },
  {
    category: "DevOps & Containerization",
    technologies: [
      { name: "Docker", icon: null, type: "Certified Partner" },
      { name: "Kubernetes", icon: null, type: "KCSP Verified" },
      { name: "Vercel", icon: null, type: "Agency Partner" },
    ],
  },
];

const certifications = [
  { name: "AWS Certified", provider: "Amazon Web Services" },
  { name: "Microsoft Certified: Azure", provider: "Microsoft" },
  { name: "Google Cloud Certified", provider: "Google" },
  { name: "Docker Certified Associate", provider: "Docker" },
  { name: "Kubernetes Certified", provider: "CNCF" },
  { name: "React Expert Certification", provider: "Meta" },
];

export default function TechnologyPartners() {
  return (
    <section id="partners" className="py-20 relative">
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
            Technology{" "}
            <span className="text-light-accent">Partners</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with leading technology providers to deliver cutting-edge solutions and stay at the forefront of innovation.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Core Technology Stack */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreStack.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-dark-accent rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-dark-accent/50 transition-colors h-full">
                    <h4 className="text-xl font-bold text-white mb-6">{category.category}</h4>

                    <div className="space-y-4">
                      {category.technologies.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                            <div className="flex items-center">
                              {Icon ? (
                                <div className="w-10 h-10 rounded-lg bg-dark-accent/10 flex items-center justify-center mr-4">
                                  <Icon className="w-6 h-6 text-dark-accent" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center mr-4">
                                  <span className="text-gray-400 font-bold">{tech.name.charAt(0)}</span>
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-white">{tech.name}</div>
                                <div className="text-xs px-2 py-1 rounded-full text-dark-accent bg-dark-accent/10 mt-1 inline-block">{tech.level}</div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vendor Partnerships */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Vendor Partnerships</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {vendorPartners.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative">
                  <div className="absolute inset-0 bg-dark-accent rounded-2xl opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
                  <div className="relative bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-dark-accent/30 transition-colors h-full">
                    <h4 className="text-xl font-bold text-white mb-6 hidden">{category.category}</h4>

                    <div className="space-y-4">
                      {category.technologies.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.1 }}
                            className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                            {Icon ? (
                              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4">
                                <Icon className="w-8 h-8 opacity-80" />
                              </div>
                            ) : (
                              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mr-4">
                                <span className="text-gray-400 font-bold">{tech.name.charAt(0)}</span>
                              </div>
                            )}
                            <div>
                              <div className="font-bold text-lg text-white">{tech.name}</div>
                              <div className="text-sm text-gray-400 mt-1">{tech.type}</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Drop */}

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h3>

              {[
                {
                  title: "Technical Excellence",
                  description: "Leverage our deep expertise in modern tech stacks to deliver complex solutions.",
                },
                {
                  title: "Dedicated Engineering Pods",
                  description: "Direct access to senior engineers integrated directly into your workflows.",
                },
                {
                  title: "Co-marketing",
                  description: "Joint marketing opportunities and white-labeled case study development.",
                },
                {
                  title: "Strategic Consulting",
                  description: "Benefit from our architectural design and enterprise architecture experience.",
                },
              ].map((benefit, index) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-dark-accent/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-dark-accent font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800/50">
              <h3 className="text-3xl font-bold text-white mb-6">Become a Partner</h3>
              <p className="text-gray-400 mb-8">
                Interested in partnering with us? We collaborate with digital agencies, consultancies, and technology providers globally to scale engineering bandwidth.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-dark-accent rounded-full mr-3"></span>
                  Technology providers
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-dark-accent rounded-full mr-3"></span>
                  Enterprise solution providers
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-dark-accent rounded-full mr-3"></span>
                  Digital & Creative Agencies
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-dark-accent rounded-full mr-3"></span>
                  Start-up Incubators
                </div>
              </div>

              <Link href={"/contact"}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full btn-primary py-4 rounded-xl font-bold text-lg transition-all">
                  Request Partnership Info
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
