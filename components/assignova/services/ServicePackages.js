"use client";

import { motion } from "framer-motion";
import { Building2, Users, Rocket, Check, X, Star, Shield, Zap, Globe, Headphones, BarChart, Target } from "lucide-react";
import Link from "next/link";
const packages = [
  {
    tier: "web-dev",
    title: "Web & App Development",
    description: "End-to-end delivery of high-performance websites and mobile applications.",
    icon: Rocket,
    price: "",
    popular: false,
    features: [
      "Custom UI/UX Design",
      "Responsive Web Applications",
      "Native & Cross-Platform Mobile Apps",
      "SEO-Optimized Architecture",
      "Secure Payment Integrations",
      "Comprehensive Testing & QA",
      "Scalable Cloud Hosting Setup",
    ],
    notIncluded: ["Ongoing IT Helpdesk Support"],
    bestFor: "Brands needing a powerful digital presence or custom e-commerce stores",
    cta: "Start Your Project",
  },
  {
    tier: "erp-cms",
    title: "CMS / POS / ERP Systems",
    description: "Centralized platforms to manage operations and scale your business.",
    icon: Target,
    price: "",
    popular: true,
    features: [
      "Headless CMS Architecture",
      "Custom ERP Integrations",
      "Cloud POS Setup",
      "Data Migration & Synchronization",
      "Inventory Management Systems",
      "Detailed Analytics Dashboards",
      "Staff Training & Documentation",
    ],
    notIncluded: ["Consumer marketing campaigns"],
    bestFor: "Growing enterprises needing to unify their fragmented data silos",
    cta: "Request a Quote",
  },
  {
    tier: "automation",
    title: "Process Automation",
    description: "Automate digital workflows between any of your existing websites, CRMs, or applications.",
    icon: Zap,
    price: "",
    features: [
      "Custom Workflow Automation",
      "Any App & Website Integration",
      "Unlimited Automation Tasks",
      "API Bridging & Scripting",
      "Proactive Bottleneck Removal",
      "Dedicated Automation Support",
      "Monthly Strategy Syncs",
    ],
    notIncluded: ["Core product development from scratch"],
    bestFor: "Businesses looking to eliminate manual data entry and scale efficiently",
    cta: "Start Automating",
  },
];

const includedFeatures = [
  {
    icon: Shield,
    title: "Security First",
    description: "All packages include basic security measures and best practices",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Optimized for speed and efficiency across all plans",
  },
  {
    icon: Globe,
    title: "Cross-platform",
    description: "Responsive designs that work on all devices",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focus on business objectives and measurable outcomes",
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    description: "Integrated analytics and reporting tools",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Ongoing support and maintenance included",
  },
];

export default function ServicePackages() {
  return (
    <section id="packages" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-gray-950" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service{" "}
            <span className="text-light-accent">Packages</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible packages designed to meet the unique needs of businesses at every stage of their growth journey.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Package Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;

              return (
                <motion.div
                  key={pkg.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={`relative ${pkg.popular ? "lg:scale-105 z-10" : ""}`}>
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full">
                        <Star className="w-4 h-4 fill-current mr-2" />
                        <span className="text-sm font-medium">Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Package Card */}
                  <div
                    className={`bg-gray-900/40 backdrop-blur-sm border ${pkg.popular ? "border-dark-accent shadow-[0_0_30px_rgba(var(--dark-accent-rgb),0.15)]" : "border-gray-800"
                      } rounded-3xl overflow-hidden h-full flex flex-col`}>
                    {/* Header */}
                    <div className={`p-8 border-b border-gray-800 relative overflow-hidden ${pkg.popular ? "bg-dark-accent/5" : ""}`}>
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className={`p-3 rounded-xl ${pkg.popular ? "bg-dark-accent text-white" : "bg-gray-800 text-gray-400"}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        {pkg.popular && (
                          <div className="text-xs font-bold text-dark-accent bg-dark-accent/10 px-3 py-1 rounded-full border border-dark-accent/20">RECOMMENDED</div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white relative z-10">{pkg.title}</h3>
                      <p className="text-gray-400 mb-6 relative z-10 h-10">{pkg.description}</p>
                      <div className="text-3xl font-bold mb-2 text-white relative z-10 tracking-tight">{pkg.price}</div>

                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Best For */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-300 mb-4">Perfect For</h4>
                        <p className="text-gray-400">{pkg.bestFor}</p>
                      </div>

                      {/* Included Features */}
                      <div className="mb-8">
                        <h4 className="font-bold text-gray-300 mb-4">What's Included</h4>
                        <ul className="space-y-3">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>



                      {/* CTA Button */}
                      <div className="mt-auto">
                        <Link href="/contact" passHref>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${pkg.popular
                              ? "btn-primary shadow-lg shadow-dark-accent/20"
                              : "btn-secondary"
                              }`}>
                            {pkg.cta}
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* All Packages Include */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">All Packages Include</h3>
                <p className="text-gray-400">
                  Quality and excellence are built into every package, regardless of your business size or budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {includedFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Custom Package CTA */}
              <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                <div className="max-w-2xl mx-auto">
                  <h4 className="text-2xl font-bold text-white mb-4">Need a Custom Package?</h4>
                  <p className="text-gray-400 mb-8">
                    Tell us about your specific requirements and we'll create a tailored solution that fits your exact needs and budget.
                  </p>
                  <Link href={"/contact"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary px-8 py-4 rounded-xl text-lg">
                      Request Custom Quote
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
