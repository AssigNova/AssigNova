// components/landing/FAQ.jsx
"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const faqCategories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "wordpress", name: "WordPress" },
    { id: "ecommerce", name: "E-commerce" },
  ];

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "What website design and development services do you offer?",
      answer:
        "We offer comprehensive web design and development services including: corporate website design, ecommerce website development, custom web applications, WordPress website development services, website redesign, and ongoing maintenance. Whether you need a simple business website or a complex web platform, our best website developers deliver tailored solutions that meet your specific requirements.",
    },
    {
      id: 3,
      category: "wordpress",
      question:
        "How are your WordPress web design services different from others?",
      answer:
        "Our WordPress web design services stand out because we don't just install themes—we create custom solutions. Our best website developers build bespoke WordPress sites with: 1) Custom post types and taxonomies, 2) Advanced custom fields, 3) Optimized database queries, 4) SEO-optimized code structure, 5) Mobile-first responsive design, and 6) Security-first approach.",
    },
    {
      id: 4,
      category: "ecommerce",
      question: "What ecommerce website development services do you offer?",
      answer:
        "Our ecommerce website developer team specializes in building robust online stores using platforms like WooCommerce, Shopify, OpenCart, and custom solutions. Our ecommerce website development services include secure payment gateway integration, inventory management systems, invoice generation, shipping integration, and mobile-optimized shopping experiences.",
    },
    {
      id: 8,
      category: "general",
      question:
        "Do you offer SEO-friendly website design and development services?",
      answer:
        "Yes, every project we deliver includes SEO-friendly architecture as standard. Our web design and development services incorporate clean semantic HTML, optimized page speed, mobile responsiveness, schema markup, meta tag optimization, XML sitemaps, and SEO-friendly URLs.",
    },
    {
      id: 9,
      category: "wordpress",
      question: "Do you provide custom WordPress plugin development?",
      answer:
        "Yes, our WordPress web development services include custom plugin development. When off-the-shelf plugins don't meet your requirements, our team creates custom plugins tailored to your specific functionality needs.",
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
            <span className="gradient bg-clip-text text-transparent">
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
              className={`px-5 py-2 rounded-full transition-all border ${
                activeCategory === category.id
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
                className={`rounded-xl border transition-all ${
                  openIndex === index
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
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-l from-[#9ab0d9] to-[#02205c] flex items-center justify-center text-white font-bold ${
                          openIndex === index ? "opacity-100" : "opacity-80"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`transform transition-transform ${
                        openIndex === index ? "rotate-45" : ""
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
                          Web Development
                        </span>
                        {faq.category === "wordpress" && (
                          <span className="px-3 py-1 bg-purple-100 rounded-full text-xs border border-purple-200 text-purple-700">
                            WordPress
                          </span>
                        )}
                        {faq.category === "ecommerce" && (
                          <span className="px-3 py-1 bg-green-100 rounded-full text-xs border border-green-200 text-green-700">
                            E-commerce
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
                className="inline-flex items-center px-6 py-3 button-assignova text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                📞 Contact Us
              </a>
              <a
                href="#home"
                className="inline-flex items-center px-6 py-3 button-assignova  bg-white rounded-lg font-semibold border border-gray-300 hover:bg-gray-100 transition"
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
