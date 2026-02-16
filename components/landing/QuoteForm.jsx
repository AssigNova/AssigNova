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
    services: "",
  });

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
          service: "",
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
      className={`bg-gradient-to-b from-[#9ab0d9] to-[#02205c] backdrop-blur-lg rounded-2xl p-8 shadow-lg ${position === "hero" ? "max-w-2xl mx-auto -mb-16 relative z-10" : "max-w-4xl mx-auto"}`}
    >
      <h3 className="text-2xl font-bold mb-2 text-gray-900">
        {position === "hero" ? "Get a Free Quote Today!" : "Get Started Today!"}
      </h3>
      <p className="text-gray-600 mb-6">
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
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />

          <input
            type="url"
            name="website"
            placeholder="Website URL (if any)"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          />
          <div>
            <div className="flex flex-wrap gap-2">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full p-3  border bg-gray-50 border-gray-300 rounded-lg text-gray-900 focus:border-blue-500 focus:outline-none"
              >
                <option>Service Needed</option>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>E-commerce Solution</option>
                <option>SEO & Marketing</option>
                <option>Other</option>
              </select>
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
            className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500"
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="captcha" className="mr-2" required />
            <label htmlFor="captcha" className="text-sm text-white-900">
              I'm not a robot
            </label>
          </div>
          {submitStatus && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-100 border border-green-400 text-green-800"
                  : "bg-red-100 border border-red-400 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 bg-gradient-to-r from-[#02205c] to-[#9cb1d7] text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </>
      </form>
    </div>
  );
}
