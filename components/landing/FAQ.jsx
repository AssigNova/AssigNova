// components/landing/FAQ.jsx
"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "dev", name: "Development" },
    { id: "automation", name: "Automation & ERP" },
    { id: "scale", name: "Scaling & Support" },
  ];

  const faqs = [
    {
      id: 1,
      category: "dev",
      question: "What web and application development services do you offer?",
      answer:
        "We offer comprehensive digital engineering services including: custom web applications, mobile app development (iOS/Android), enterprise SaaS platforms, and high-performance business websites. Our architecture strictly relies on modern stacks tailored to high scalability.",
    },
    {
      id: 3,
      category: "automation",
      question: "How do your Process Automation services work?",
      answer:
        "We map out your business bottlenecks and deploy intelligent workflows to eliminate manual data entry. This involves integrating your existing software stack (CRMs, databases, communication tools) via APIs or deploying custom RPA bots to accelerate your daily business operations.",
    },
    {
      id: 4,
      category: "automation",
      question: "Can you build or integrate custom ERP & CMS systems?",
      answer:
        "Yes, our engineering team specializes in deploying centralized platforms representing your entire business ecosystem. Whether you need a Headless CMS for rapid content scaling or a custom ERP integration to bridge fragmented data silos, we architect the core engine for your business.",
    },
    {
      id: 8,
      category: "scale",
      question: "Do you offer post-launch support and infrastructure scaling?",
      answer:
        "Yes, every project we deliver includes optional IT Support Services and global infrastructure scaling. We handle server monitoring, database optimizations, emergency patching, and systematic feature rollouts to ensure your application remains stable as user traffic grows.",
    },
    {
      id: 9,
      category: "dev",
      question: "What is your typical project delivery timeline?",
      answer:
        "Project timelines vary heavily based on scope. A standard high-performance marketing website might take 4-6 weeks, while a deeply integrated ERP system or custom SaaS application can range from 3-6 months. We operate on strict agile sprints to deliver functional milestones consistently.",
    },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-4">
            <span className="text-blue-600 mr-2">❓</span>
            <span className="text-sm font-medium text-blue-700">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Frequently Asked{" "}
            <span className="text-light-accent">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our web design and development
            services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all border ${activeCategory === category.id
                ? "button-assignova shadow"
                : "bg-white text-gray-600 hover:bg-gray-100 border-gray-300"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all ${openIndex === index
                  ? "border-blue-500 bg-blue-50/50"
                  : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start md:items-center gap-4">
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-l from-[#9ab0d9] to-[#02205c] flex items-center justify-center text-white font-bold ${openIndex === index ? "opacity-100" : "opacity-80"
                          }`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`transform transition-transform ${openIndex === index ? "rotate-45" : ""
                        }`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-blue-600"
                      >
                        <path
                          d="M12 4V20M4 12H20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {openIndex === index && (
                    <div className="mt-4 ml-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        <span className="px-3 py-1 bg-blue-100 rounded-full text-xs border border-blue-200 text-blue-700">
                          Assignova Core
                        </span>
                        {faq.category === "dev" && (
                          <span className="px-3 py-1 bg-purple-100 rounded-full text-xs border border-purple-200 text-purple-700">
                            Development
                          </span>
                        )}
                        {faq.category === "automation" && (
                          <span className="px-3 py-1 bg-green-100 rounded-full text-xs border border-green-200 text-green-700">
                            Automation & ERP
                          </span>
                        )}
                        {faq.category === "scale" && (
                          <span className="px-3 py-1 bg-orange-100 rounded-full text-xs border border-orange-200 text-orange-700">
                            Support & Scaling
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-tr from-[#747474] to-[#eceef0] rounded-2xl p-8 border border-blue-200">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Still have questions?
            </h3>
            <p className="text-gray-900 mb-6">
              Can't find the answer you're looking for? Our team is here to
              help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 btn-primary rounded-lg transition"
              >
                📞 Contact Us
              </a>
              <a
                href="#home"
                className="inline-flex items-center px-6 py-3 btn-secondary rounded-lg transition"
              >
                💰 Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
