"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Database, Cloud, Brain, Shield, Smartphone, Globe } from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Code2,
    color: "from-dark-accent to-light-accent",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Vue.js" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "from-light-accent to-dark-accent",
    technologies: [
      { name: "Node.js" },
      { name: ".NET Core" },
      { name: "Python" },
      { name: "Java" },
      { name: "Go" },
    ],
  },
  {
    id: "database",
    name: "Database",
    icon: Database,
    color: "from-mid-accent to-contrast-accent",
    technologies: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "MySQL" },
      { name: "Elasticsearch" },
    ],
  },
  {
    id: "cloud",
    name: "Infrastructure & Tools",
    icon: Cloud,
    color: "from-contrast-accent to-dark-accent",
    technologies: [
      { name: "AWS" },
      { name: "Vercel" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Google Analytics" },
    ],
  },
];

const trendingTech = [
  { name: "Next.js App Router", trend: "up" },
  { name: "Headless CMS", trend: "up" },
  { name: "Serverless Architecture", trend: "steady" },
  { name: "Programmatic SEO", trend: "up" },
  { name: "Motion Design (GSAP)", trend: "up" },
  { name: "Generative AI Integration", trend: "emerging" },
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
            <span className="text-light-accent">Stack</span>
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
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all ${isActive
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

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCat.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl max-w-sm p-4 flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-colors text-center cursor-default">
                      <span className="text-gray-300 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{tech.name}</span>
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
            className="bg-gradient-to-r from-dark-accent/10 via-mid-accent/10 to-light-accent/10 rounded-3xl p-8 border border-gray-800">
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
                    className={`text-center p-4 rounded-xl border ${tech.trend === "up"
                      ? "border-light-accent/30 bg-light-accent/5"
                      : tech.trend === "steady"
                        ? "border-mid-accent/30 bg-mid-accent/5"
                        : "border-contrast-accent/30 bg-contrast-accent/5"
                      }`}>
                    <div className="text-sm font-medium text-white mb-1">{tech.name}</div>
                    <div
                      className={`text-xs ${tech.trend === "up" ? "text-light-accent" : tech.trend === "steady" ? "text-mid-accent" : "text-contrast-accent"
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
