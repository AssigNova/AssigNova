"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Users, CheckCircle, Shield, Zap, ArrowRight } from "lucide-react";

export default function ServiceConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    budget: "",
    message: "",
  });

  const services = [
    "Custom Software Development",
    "Cloud & DevOps",
    "AI & Machine Learning",
    "Cybersecurity",
    "Web Development",
    "Mobile Development",
    "Digital Transformation",
    "Not Sure",
  ];

  const timelines = ["Immediate (1-2 weeks)", "Soon (1 month)", "Planning phase (2-3 months)", "Future (3+ months)"];

  const budgets = ["Less than $10k", "$10k - $50k", "$50k - $100k", "$100k - $250k", "$250k - $500k", "$500k+"];

  const consultationBenefits = [
    {
      icon: Shield,
      title: "Free Assessment",
      description: "Comprehensive analysis of your current setup and needs",
    },
    {
      icon: Zap,
      title: "Expert Recommendations",
      description: "Tailored solutions from our senior architects",
    },
    {
      icon: Users,
      title: "Team Matching",
      description: "Match with the right engineers for your project",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Service consultation submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-64 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss{" "}
              <span className="bg-linear-to-r from-dark-accent via-light-accent to-mid-accent bg-clip-text text-transparent">
                Your Project
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Schedule a free consultation with our experts to discuss your project and explore how we can help you achieve your business
              goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Benefits */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Consultation Benefits</h3>
                <div className="space-y-6">
                  {consultationBenefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    return (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                          <p className="text-gray-400">{benefit.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">Initial Discussion</div>
                      <div className="text-sm text-gray-400">Understanding your requirements</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">Solution Design</div>
                      <div className="text-sm text-gray-400">Architecture and technology recommendations</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <div className="font-bold text-white">Proposal</div>
                      <div className="text-sm text-gray-400">Detailed project plan and pricing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Schedule Consultation</h3>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeline *</label>
                    <select
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range *</label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none">
                      <option value="">Select budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    <span>No commitment • 30-minute consultation</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5" />
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
