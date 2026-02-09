"use client";

import { useState } from "react";

export default function QuoteForm({ position = "hero" }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    services: [],
  });

  const servicesList = [
    "Business Website Design",
    "WordPress Development",
    "E-commerce Solutions",
    "Web Application",
    "Website Redesign",
    "SEO Optimization",
  ];
  const toggleService = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "Your quote request has been submitted successfully!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
          services: [],
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.error || "Failed to submit your request. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 ${position === "hero" ? "max-w-2xl mx-auto -mb-16 relative z-10 shadow-2xl" : "max-w-4xl mx-auto"}`}
    >
      <h3 className="text-2xl font-bold mb-2">
        {position === "hero" ? "Get a Free Quote Today!" : "Get Started Today!"}
      </h3>
      <p className="text-gray-400 mb-6">
        Fill the form and our experts will contact you within 24 hours
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Step 1: Basic Info */}

        <>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />

          <input
            type="url"
            name="website"
            placeholder="Website URL (if any)"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />
          <div>
            <p className="mb-2">Services Needed:</p>

            <div className="flex flex-wrap gap-2">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center px-3 py-2 rounded cursor-pointer bg-gray-900 border border-gray-700 hover:bg-gray-800"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="mr-2"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>
        </>

        <>
          <textarea
            name="message"
            placeholder="Project Details / Message *"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="captcha" className="mr-2" required />
            <label htmlFor="captcha" className="text-sm">
              I'm not a robot
            </label>
          </div>
          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-900/20 border border-green-500/50 text-green-300"
                  : "bg-red-900/20 border border-red-500/50 text-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
