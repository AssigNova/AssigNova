"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Facebook,
  Sparkles,
} from "lucide-react";

export default function AssignovaFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", href: "/assignova" },
    { name: "Services", href: "/assignova/services" },
    { name: "Solutions", href: "/assignova/solutions" },
    { name: "Industries", href: "/assignova/industries" },
    { name: "Case Studies", href: "/assignova/case-studies" },
    { name: "Contact", href: "/assignova/contact" },
  ];

  const services = [
    "Custom Software Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Cybersecurity",
    "Web Development",
    "Mobile Development",
  ];

  const technologies = [
    "React & Next.js",
    ".NET Core",
    "Python & Django",
    "AWS & Azure",
    "Node.js",
    "React Native",
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Top Gradient Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Assignova
                </h2>
                <p className="text-gray-400 text-sm">
                  Next-Gen Digital Solutions
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Transforming businesses with cutting-edge technology solutions. We
              deliver innovation, excellence, and measurable results.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <motion.a
                    key={link.label}
                    whileHover={{ y: -5 }}
                    href={link.href}
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">+91 9771409835</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 text-sm">
                  info@assignova.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Assignova. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
    </footer>
  );
}
