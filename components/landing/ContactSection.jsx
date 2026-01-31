// components/landing/ContactSection.jsx
"use client";
import { useState } from "react";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "Info@assignova.com",
      action: "mailto:contact@assignova.com",
      desc: "Response within 4 hours",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+91-9771409835",
      action: "tel:+91-9771409835",
      desc: "24/7 Support Available",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+91 9771409835",
      action: "https://wa.me/9771409835",
      desc: "Quick chat support",
    },
    {
      icon: "📍",
      title: "Visit Office",
      details: "New Delhi, India",
      action: "https://maps.google.com",
      desc: "Schedule a meeting",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Have a project in mind? Let's discuss how we can help transform
              your ideas into reality.
            </p>

            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
                >
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{method.title}</h3>
                    <p className="text-blue-300 font-medium mb-1">
                      {method.details}
                    </p>
                    <p className="text-sm text-gray-400">{method.desc}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-medium">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="font-medium">Emergency Support </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-400 mb-6">
                  We've received your message and will contact you within 24
                  hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2">Send us a message</h3>
                <p className="text-gray-400 mb-6">
                  Fill out the form and our team will get back to you ASAP
                </p>

                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none">
                      <option>Select a service</option>
                      <option>Website Design</option>
                      <option>Web Development</option>
                      <option>E-commerce Solution</option>
                      <option>SEO & Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      rows="5"
                      required
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="w-4 h-4 mr-3 bg-gray-800 border-gray-700"
                    />
                    <label htmlFor="consent" className="text-sm">
                      I agree to receive communications from AssigNova
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-2xl p-8 border border-gray-800">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Global Presence</h3>
                <p className="text-gray-400">
                  Serving clients across 5+ countries
                </p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3</div>
                  <div className="text-sm text-gray-400">Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">25+</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Map Visualization */}
            <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <p className="text-gray-400">Global service coverage map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
