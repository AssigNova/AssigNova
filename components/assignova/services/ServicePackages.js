"use client";

import { motion } from "framer-motion";
import { Building2, Users, Rocket, Check, X, Star, Shield, Zap, Globe, Headphones, BarChart, Target } from "lucide-react";

const packages = [
  {
    tier: "enterprise",
    title: "Enterprise Suite",
    description: "Complete digital transformation for large organizations",
    icon: Building2,
    color: "from-blue-600 to-purple-600",
    price: "Custom",
    features: [
      "Dedicated Engineering Team",
      "24/7 Enterprise Support",
      "Enterprise Security Suite",
      "Scalable Microservices Architecture",
      "Disaster Recovery Planning",
      "Performance Optimization",
      "Technical Leadership",
      "Quarterly Strategy Reviews",
    ],
    notIncluded: ["No limitations on features", "No extra charges for priority support", "No hidden costs"],
    bestFor: "Fortune 500 companies, enterprises with 1000+ employees",
    cta: "Schedule Enterprise Demo",
  },
  {
    tier: "business",
    title: "Business Pro",
    description: "Comprehensive solutions for growing businesses",
    icon: Users,
    color: "from-green-600 to-cyan-600",
    price: "From $25,000",
    popular: true,
    features: [
      "Custom Software Development",
      "API Development & Integration",
      "Cloud Infrastructure Setup",
      "Regular Maintenance & Updates",
      "Technical Documentation",
      "Team Training",
      "Monthly Progress Reports",
      "Priority Support",
    ],
    notIncluded: ["Enterprise security suite", "Dedicated 24/7 support team", "Custom hardware solutions"],
    bestFor: "Medium-sized businesses, startups with funding",
    cta: "Start Business Project",
  },
  {
    tier: "startup",
    title: "Startup Launch",
    description: "Essential solutions for startups and MVPs",
    icon: Rocket,
    color: "from-orange-600 to-pink-600",
    price: "From $10,000",
    features: [
      "MVP Development",
      "Rapid Prototyping",
      "Basic Cloud Setup",
      "Core Features Development",
      "Responsive Design",
      "Basic SEO Optimization",
      "Deployment Assistance",
      "3 Months Support",
    ],
    notIncluded: ["Advanced security features", "Custom infrastructure design", "Enterprise support SLA"],
    bestFor: "Startups, small businesses, entrepreneurs",
    cta: "Launch Your MVP",
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Service{" "}
            <span className="bg-linear-to-r from-dark-accent via-light-accent to-primary bg-clip-text text-transparent">Packages</span>
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
                    className={`bg-gray-900/50 backdrop-blur-sm border ${
                      pkg.popular ? "border-blue-500" : "border-gray-800"
                    } rounded-3xl overflow-hidden h-full`}>
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white`}>
                      <div className="flex items-center justify-between mb-6">
                        <Icon className="w-10 h-10" />
                        {pkg.popular && (
                          <div className="text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">RECOMMENDED</div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                      <p className="text-white/80 mb-6">{pkg.description}</p>
                      <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                      <div className="text-white/60 text-sm">{pkg.tier === "enterprise" ? "Enterprise pricing" : "Starting price"}</div>
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

                      {/* Not Included */}
                      {pkg.notIncluded && (
                        <div className="mb-8">
                          <h4 className="font-bold text-gray-300 mb-4">Not Included</h4>
                          <ul className="space-y-3">
                            {pkg.notIncluded.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <X className="w-5 h-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                          pkg.popular
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:shadow-blue-500/30"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}>
                        {pkg.cta}
                      </motion.button>
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
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                    Request Custom Quote
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
