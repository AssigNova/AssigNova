// components/landing/ContactSection.jsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "info@assignova.com",
      action: "mailto:info@assignova.com",
      desc: "Response within few hours",
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
      details: "New Delhi, India\nBangalore, India",
      action: "https://maps.google.com",
      desc: "Schedule a meeting",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-600 to-black md:px-10" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white bg-clip-text text-transparent">Get in Touch</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Have a project in mind? Let's discuss how we can help transform your ideas into reality.
            </p>

            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group">
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">{method.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{method.title}</h4>
                    <p className="text-blue-300 font-medium mb-1">{method.details}</p>
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
                <p className="text-gray-400 mb-6">We've received your message and will contact you within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="px-6 py-3 button-assignova rounded-lg font-medium">
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-white-900 text-3xl font-bold mb-2">Send us a message</h4>
                <p className="text-gray-200 mb-6">Fill out the form and our team will get back to you ASAP</p>

                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitStatus(null);

                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: formData.name,
                          email: formData.email,
                          phone: formData.phone,
                          website: formData.company, // map company → website field in API
                          message: formData.message,
                          services: formData.service ? [formData.service] : [],
                          source: "Contact Us",
                        }),
                      });

                      const data = await res.json();

                      if (res.ok) {
                        setSubmitStatus({
                          type: "success",
                          message: "Message sent successfully!",
                        });
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          message: "",
                        });
                        // Redirect to thank you page after 1.5 seconds
                        setTimeout(() => {
                          router.push("/thank-you");
                        }, 1000);
                      } else {
                        setSubmitStatus({
                          type: "error",
                          message: data.error || "Failed to send.",
                        });
                      }
                    } catch (err) {
                      setSubmitStatus({
                        type: "error",
                        message: "Network error. Try again.",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none">
                      <option>Select a service</option>
                      <option>Website Design</option>
                      <option>Web Development</option>
                      <option>E-commerce Solution</option>
                      <option>SEO & Marketing</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="consent" required className="w-4 h-4 mr-3 bg-gray-800 border-gray-700" />
                    <label htmlFor="consent" className="text-sm">
                      I agree to receive communications from AssigNova
                    </label>
                  </div>
                  {submitStatus?.type === "error" && (
                    <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/40 text-red-300">{submitStatus.message}</div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#02205c] to-[#9cb1d7] rounded-lg font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Map Section */}
        {/* <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 rounded-2xl p-8 border border-gray-800">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Our Presence</h3>
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
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-sm text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">25+</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            <div className="h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <div className="text-5xl mb-4">🌍</div>
                <p className="text-gray-400">Global service coverage map</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
