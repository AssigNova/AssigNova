"use client";

import { motion } from "framer-motion";
import {
  Aws,
  Azure,
  GoogleCloud,
  ReactLogo,
  Nodejs,
  Python,
  Docker,
  Kubernetes,
  Postgresql,
  Redis,
  Graphql,
  Tensorflow,
} from "@/components/icons/TechnologyIcons";

const partners = [
  {
    category: "Cloud Platforms",
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "AWS", icon: Aws, level: "Expert" },
      { name: "Microsoft Azure", icon: Azure, level: "Expert" },
      { name: "Google Cloud", icon: GoogleCloud, level: "Advanced" },
      { name: "Digital Ocean", icon: null, level: "Proficient" },
    ],
  },
  {
    category: "Frontend",
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "React", icon: ReactLogo, level: "Expert" },
      { name: "Next.js", icon: null, level: "Expert" },
      { name: "TypeScript", icon: null, level: "Expert" },
      { name: "Vue.js", icon: null, level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: Nodejs, level: "Expert" },
      { name: "Python", icon: Python, level: "Expert" },
      { name: ".NET Core", icon: null, level: "Expert" },
      { name: "Java", icon: null, level: "Advanced" },
    ],
  },
  {
    category: "DevOps",
    color: "from-yellow-500 to-orange-500",
    technologies: [
      { name: "Docker", icon: Docker, level: "Expert" },
      { name: "Kubernetes", icon: Kubernetes, level: "Advanced" },
      { name: "Terraform", icon: null, level: "Advanced" },
      { name: "Jenkins", icon: null, level: "Proficient" },
    ],
  },
  {
    category: "Database",
    color: "from-red-500 to-pink-500",
    technologies: [
      { name: "PostgreSQL", icon: Postgresql, level: "Expert" },
      { name: "MongoDB", icon: null, level: "Expert" },
      { name: "Redis", icon: Redis, level: "Advanced" },
      { name: "Elasticsearch", icon: null, level: "Advanced" },
    ],
  },
  {
    category: "Specialized",
    color: "from-indigo-500 to-blue-500",
    technologies: [
      { name: "GraphQL", icon: Graphql, level: "Expert" },
      { name: "TensorFlow", icon: Tensorflow, level: "Advanced" },
      { name: "Blockchain", icon: null, level: "Advanced" },
      { name: "Web3.js", icon: null, level: "Proficient" },
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We partner with leading technology providers to deliver cutting-edge solutions and stay at the forefront of innovation.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Technology Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {partners.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-gray-700 transition-colors h-full">
                  <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>

                  <div className="space-y-4">
                    {category.technologies.map((tech, i) => {
                      const Icon = tech.icon;
                      const levelColor =
                        tech.level === "Expert"
                          ? "text-green-400 bg-green-400/10"
                          : tech.level === "Advanced"
                          ? "text-blue-400 bg-blue-400/10"
                          : "text-yellow-400 bg-yellow-400/10";

                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                          <div className="flex items-center">
                            {Icon && (
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mr-4">
                                <Icon className="w-6 h-6 text-blue-400" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-white">{tech.name}</div>
                              <div className={`text-xs px-2 py-1 rounded-full ${levelColor} mt-1 inline-block`}>{tech.level}</div>
                            </div>
                          </div>

                          {/* Progress Indicator */}
                          <div className="w-16">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                style={{
                                  width: tech.level === "Expert" ? "95%" : tech.level === "Advanced" ? "85%" : "75%",
                                }}
                              />
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">Certifications & Accreditations</h3>
                <p className="text-gray-400">Our team maintains the highest standards with industry-recognized certifications.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <h4 className="font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.provider}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partnership Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Why Partner With Us?</h3>

              {[
                {
                  title: "Early Access",
                  description: "Get early access to new features and technologies before general release",
                },
                {
                  title: "Priority Support",
                  description: "Direct access to senior engineers and priority technical support",
                },
                {
                  title: "Co-marketing",
                  description: "Joint marketing opportunities and case study development",
                },
                {
                  title: "Training & Resources",
                  description: "Exclusive training sessions and technical resources",
                },
              ].map((benefit, index) => (
                <div key={benefit.title} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-400 font-bold">{index + 1}</span>
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
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-gray-800">
              <h3 className="text-3xl font-bold text-white mb-6">Become a Partner</h3>
              <p className="text-gray-400 mb-8">
                Interested in partnering with us? We're always looking for innovative technology partners to collaborate with.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Technology providers
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Enterprise solution providers
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Research institutions
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Digital agencies
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Request Partnership Info
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
