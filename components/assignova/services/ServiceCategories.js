"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Shield, Database, Smartphone, Globe, BarChart, Workflow, Server, Lock, MessageSquare, Target, Layout, Star, ShieldCheck, Zap } from "lucide-react";

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
  automation: {
    title: "Process Automation",
    description: "Intelligent digital workflows to eliminate manual data entry and connect distinct business applications.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Custom Workflow Automation",
        description: "Zero manual entry through intelligent triggered scripts",
        features: ["Make", "Zapier", "REST APIs", "Python Scrapers"],
      },
      {
        name: "API Bridging & Syncing",
        description: "Seamless data synchronization across your tech stack",
        features: ["Webhooks", "Database Migrations", "Real-time Sync", "Error Handling"],
      },
      {
        name: "Robotic Process Automation",
        description: "Custom bots for browser automation and extraction",
        features: ["Data Extraction", "Automated Form Fills", "Reporting Bots"],
      },
      {
        name: "Business Logic Scripts",
        description: "Serverless execution and scheduled background tasks",
        features: ["Cron Jobs", "AWS Lambda", "Azure Functions", "Vercel Edge"],
      },
    ],
  },
  erp: {
    title: "CMS, ERP & Centralization",
    description: "Unified enterprise platforms linking Point of Sale, inventory management, and headless content architecture.",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Headless CMS Development",
        description: "Decoupled content backends for blazing fast user experiences",
        features: ["Sanity", "Strapi", "Contentful", "Next.js Integration"],
      },
      {
        name: "Custom ERP Systems",
        description: "Tailored enterprise resource management dashboards",
        features: ["Inventory Tracking", "HR Management", "Custom Dashboards"],
      },
      {
        name: "Cloud POS Integrations",
        description: "Syncing retail locations directly to your e-commerce backbone",
        features: ["Omnichannel Retail", "Stripe API", "Real-time Inventory"],
      },
      {
        name: "Data Lake & Analytics",
        description: "Centralized metric tracking for deep business insights",
        features: ["PostgreSQL", "Grafana", "Custom BI Tools"],
      },
    ],
  },
  agency: {
    title: "Digital Agency Services",
    description: "Premium secondary services designed to support and scale your primary application architecture.",
    icon: Target,
    color: "from-yellow-500 to-orange-500",
    services: [
      {
        name: "Strategic SEO & Analytics",
        description: "Organic search optimizations to drive high-converting traffic",
        features: ["Technical Audits", "Keyword Research", "On-page Optimization"],
      },
      {
        name: "Brand Identity & UI/UX",
        description: "Stunning visual component libraries and branding systems",
        features: ["Figma Prototypes", "Logo Systems", "Brand Guidelines"],
      },
      {
        name: "Ongoing IT Support",
        description: "24/7 maintenance, proactive patching, and Uptime SLAs",
        features: ["Server Monitoring", "Disaster Recovery", "Security Patching"],
      },
      {
        name: "Technical Consultancy",
        description: "Expert guidance for your global software architecture",
        features: ["Code Audits", "Infrastructure Design", "Cloud Optimization"],
      },
    ],
  },
};

const tabs = [
  { id: "development", label: "Development", icon: Code2 },
  { id: "automation", label: "Automation", icon: Zap },
  { id: "erp", label: "CMS / ERP", icon: Database },
  { id: "agency", label: "Agency Stack", icon: Target },
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
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service{" "}
            <span className="text-light-accent">Categories</span>
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
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all ${isActive
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
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/40 rounded-3xl p-8 border border-gray-800/50 mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Additional Services</h3>
              <p className="text-gray-400">Complementary services to enhance your digital transformation journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Strategic SEO",
                  description: "Search engine optimization to maximize your organic digital reach",
                },
                {
                  icon: Layout,
                  title: "Graphic Design",
                  description: "Stunning visual assets for marketing, social, and web",
                },
                {
                  icon: Star,
                  title: "Brand Identity",
                  description: "Comprehensive branding, logos, and style guidelines",
                },
                {
                  icon: Cloud,
                  title: "Cloud Integrations",
                  description: "Seamless deployment and management on modern cloud providers",
                },
                {
                  icon: Code2,
                  title: "API Development",
                  description: "Robust, secure APIs to connect your entire digital ecosystem",
                },
                {
                  icon: ShieldCheck,
                  title: "Quality Assurance",
                  description: "Rigorous testing protocols to ensure flawless execution",
                },
              ].map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                    <div className="inline-flex p-3 rounded-lg bg-dark-accent/10 border border-dark-accent/20 mb-4 group-hover:bg-dark-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-dark-accent" />
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
