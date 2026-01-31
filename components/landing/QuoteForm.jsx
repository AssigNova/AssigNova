"use client";

import { useState } from "react";

export default function QuoteForm({ position = "hero" }) {
  const [step, setStep] = useState(1);
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

      <form className="space-y-4">
        {/* Step 1: Basic Info */}

        <>
          <input
            type="text"
            placeholder="Name *"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone Number *"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          />

          <input
            type="url"
            placeholder="Website URL (if any)"
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
            placeholder="Project Details / Message *"
            rows="4"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg"
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="captcha" className="mr-2" />
            <label htmlFor="captcha" className="text-sm">
              I'm not a robot
            </label>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold"
            >
              Submit Request
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
