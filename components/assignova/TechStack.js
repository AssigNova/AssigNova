"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Database, Cloud, Brain, Shield, Smartphone, Globe } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Node.js", level: 92 },
      { name: ".NET Core", level: 88 },
      { name: "Python", level: 85 },
      { name: "Java", level: 82 },
      { name: "Go", level: 80 },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "MySQL", level: 87 },
      { name: "Elasticsearch", level: 82 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-yellow-500 to-orange-500",
    technologies: [
      { name: "AWS", level: 92 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Azure", level: 83 },
      { name: "Terraform", level: 80 },
    ],
  },
];

const trendingTech = [
  { name: "AI/ML Integration", trend: "up" },
  { name: "Blockchain Solutions", trend: "up" },
  { name: "IoT Development", trend: "steady" },
  { name: "AR/VR Experiences", trend: "up" },
  { name: "Edge Computing", trend: "up" },
  { name: "Quantum Computing", trend: "emerging" },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const activeCat = techCategories.find((cat) => cat.id === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology{" "}
            <span className="bg-linear-to-r from-dark-accent via-light-accent to-mid-accent bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Category Details */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${activeCat.color} mr-4`}>
                  <activeCat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeCat.name} Technologies</h3>
                  <p className="text-gray-400">Our expertise in modern {activeCat.name.toLowerCase()} solutions</p>
                </div>
              </div>

              <div className="space-y-6">
                {activeCat.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium">{tech.name}</span>
                      <span className="text-blue-400 font-bold">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${activeCat.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trending Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Trending Technologies</h3>
                <p className="text-gray-400">Emerging technologies we're actively working with</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {trendingTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-center p-4 rounded-xl border ${
                      tech.trend === "up"
                        ? "border-green-500/30 bg-green-500/5"
                        : tech.trend === "steady"
                          ? "border-blue-500/30 bg-blue-500/5"
                          : "border-purple-500/30 bg-purple-500/5"
                    }`}>
                    <div className="text-sm font-medium text-white mb-1">{tech.name}</div>
                    <div
                      className={`text-xs ${
                        tech.trend === "up" ? "text-green-400" : tech.trend === "steady" ? "text-blue-400" : "text-purple-400"
                      }`}>
                      {tech.trend === "up" ? "Growing" : tech.trend === "steady" ? "Steady" : "Emerging"}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
