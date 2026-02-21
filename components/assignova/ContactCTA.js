"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, CheckCircle, Users, Shield, Zap } from "lucide-react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const services = [
    "Custom Software Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Cybersecurity",
    "Web Development",
    "Mobile Development",
    "Digital Transformation",
    "Other",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Free Consultation",
      description: "No-cost discovery session to understand your needs",
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get a response within 24 hours",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with senior engineers and architects",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", formData);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build{" "}
              <span className="bg-linear-to-r from-dark-accent via-light-accent to-mid-accent bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with our experts today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Benefits */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-400">{benefit.description}</p>
                  </motion.div>
                );
              })}

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Support Response Time</div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                <div className="flex items-center mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
                    <p className="text-gray-400">Fill out the form and we'll contact you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none resize-none"
                      placeholder="Tell us about your project goals, challenges, and requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div className="flex items-center text-gray-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span>No obligation • Free consultation</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center space-x-3">
                      <Calendar className="w-5 h-5" />
                      <span>Schedule Consultation</span>
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
