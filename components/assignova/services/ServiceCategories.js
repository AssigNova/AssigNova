"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Shield, Database, Smartphone, Globe, BarChart, Workflow, Server, Lock, MessageSquare } from "lucide-react";

const serviceCategories = {
  development: {
    title: "Custom Development",
    description: "Tailored software solutions built from scratch to meet your unique business requirements.",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "Web Application Development",
        description: "Scalable web apps with modern frameworks and best practices",
        features: ["React/Next.js", "TypeScript", "RESTful APIs", "Microservices"],
      },
      {
        name: "Mobile App Development",
        description: "Native and cross-platform mobile solutions",
        features: ["iOS/Android", "React Native", "Flutter", "PWA"],
      },
      {
        name: "Enterprise Software",
        description: "Custom solutions for complex business processes",
        features: ["ERP Systems", "CRM Solutions", "Inventory Management"],
      },
      {
        name: "API Development",
        description: "Robust API design and integration services",
        features: ["REST APIs", "GraphQL", "WebSockets", "API Gateway"],
      },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and DevOps practices for modern applications.",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Cloud Migration",
        description: "Seamless migration to AWS, Azure, or Google Cloud",
        features: ["AWS Migration", "Azure Deployment", "GCP Setup", "Hybrid Cloud"],
      },
      {
        name: "DevOps Implementation",
        description: "Automated CI/CD pipelines and infrastructure",
        features: ["Docker/Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"],
      },
      {
        name: "Cloud Architecture",
        description: "Design and implementation of cloud-native solutions",
        features: ["Microservices", "Serverless", "Containerization", "Auto-scaling"],
      },
      {
        name: "Monitoring & Optimization",
        description: "Performance monitoring and cost optimization",
        features: ["Performance Monitoring", "Cost Optimization", "Security Scanning"],
      },
    ],
  },
  ai: {
    title: "AI & Machine Learning",
    description: "Intelligent solutions that learn, adapt, and automate complex processes.",
    icon: Brain,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Machine Learning Models",
        description: "Custom ML models for predictive analytics",
        features: ["Predictive Analytics", "Recommendation Systems", "Anomaly Detection"],
      },
      {
        name: "Natural Language Processing",
        description: "Text analysis and language understanding solutions",
        features: ["Chatbots", "Sentiment Analysis", "Text Classification"],
      },
      {
        name: "Computer Vision",
        description: "Image and video analysis solutions",
        features: ["Object Detection", "Image Recognition", "Video Analytics"],
      },
      {
        name: "AI Integration",
        description: "Integrating AI capabilities into existing systems",
        features: ["API Integration", "Real-time Processing", "Model Deployment"],
      },
    ],
  },
  security: {
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions.",
    icon: Shield,
    color: "from-yellow-500 to-orange-500",
    services: [
      {
        name: "Security Audit & Assessment",
        description: "Comprehensive security analysis and risk assessment",
        features: ["Vulnerability Assessment", "Penetration Testing", "Risk Analysis"],
      },
      {
        name: "Security Implementation",
        description: "Implementation of security protocols and measures",
        features: ["Firewall Setup", "Encryption", "Access Control", "Multi-factor Auth"],
      },
      {
        name: "Compliance & Governance",
        description: "Meeting regulatory requirements and standards",
        features: ["GDPR Compliance", "HIPAA Compliance", "SOC 2 Certification"],
      },
      {
        name: "Incident Response",
        description: "24/7 monitoring and incident management",
        features: ["Threat Detection", "Incident Response", "Forensic Analysis"],
      },
    ],
  },
};

const tabs = [
  { id: "development", label: "Development", icon: Code2 },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
  { id: "ai", label: "AI & ML", icon: Brain },
  { id: "security", label: "Cybersecurity", icon: Shield },
];

export default function ServiceCategories({ activeCategory, setActiveCategory }) {
  const currentCategory = serviceCategories[activeCategory];

  return (
    <section id="categories" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service{" "}
            <span className="bg-linear-to-r from-dark-accent via-light-accent to-primary bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions across multiple domains, delivered with technical excellence and business acumen.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${serviceCategories[tab.id].color} text-white shadow-lg`
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Category Details */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
              <div className="flex items-start mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color} mr-6`}>
                  <currentCategory.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">{currentCategory.title}</h3>
                  <p className="text-gray-400 text-lg">{currentCategory.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentCategory.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${currentCategory.color} rounded-xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300`}
                    />
                    <div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 group-hover:border-gray-700 transition-colors h-full">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-400 mb-6">{service.description}</p>

                      <div className="space-y-2">
                        <div className="text-sm text-gray-500">Key Features:</div>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Indicator */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center text-blue-400">
                          <span className="text-sm font-medium mr-2">Learn more</span>→
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 border border-gray-800">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
              <p className="text-gray-400">Complementary services to enhance your digital transformation journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Data Engineering",
                  description: "ETL pipelines, data warehousing, and analytics",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Solutions",
                  description: "Progressive web apps and mobile-first development",
                },
                {
                  icon: Workflow,
                  title: "Process Automation",
                  description: "Workflow automation and business process optimization",
                },
                {
                  icon: Server,
                  title: "Infrastructure",
                  description: "On-premise and hybrid infrastructure solutions",
                },
                {
                  icon: Lock,
                  title: "Blockchain",
                  description: "Blockchain development and smart contracts",
                },
                {
                  icon: MessageSquare,
                  title: "Consulting",
                  description: "Technical strategy and digital transformation consulting",
                },
              ].map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
