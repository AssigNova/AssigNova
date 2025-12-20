"use client";

import { motion } from "framer-motion";
import { Code, Cloud, Shield, Brain, Database, Globe, Smartphone, BarChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built from scratch to meet your specific business needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions with AWS, Azure, and Google Cloud expertise.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent systems that learn, adapt, and automate complex processes.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Transform raw data into actionable insights with powerful analytics.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern web applications with cutting-edge technologies.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: BarChart,
    title: "Digital Transformation",
    description: "Comprehensive strategy to modernize your business processes.",
    color: "from-cyan-500 to-green-500",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and technological innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative">
                {/* Gradient Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                />

                {/* Service Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 group-hover:border-gray-700 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                  <p className="text-gray-400 mb-6">{service.description}</p>

                  {/* Hover Arrow */}
                  <div className="flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="ml-2">
                      →
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-12 h-12 overflow-hidden`}>
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${service.color} transform rotate-45 translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
              <p className="text-gray-400 mb-8">
                Let's discuss how our services can drive your digital transformation and deliver measurable results.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Schedule a Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
