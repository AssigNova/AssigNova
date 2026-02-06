// components/landing/Portfolio.jsx
"use client";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "HealthCare",
      category: "healthcare",
      tech: ["Drupal", "WordPress", "PHP"],
      image: "bg-gradient-to-br from-pink-700/30 to-purple-700/30",
      desc: "Secure, compliant digital solutions for healthcare",
    },
    {
      id: 2,
      title: "Reatails & E-commerce",
      category: "ecommerce",
      tech: ["OpenCart", "Razorpay", "WooCommerce"],
      image: "bg-gradient-to-br from-yellow-700/30 to-amber-700/30",
      desc: "Scalable online stores that drive sales",
    },
    {
      id: 3,
      title: "Education & eLearning",
      category: "education",
      tech: ["React", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-blue-700/30 to-cyan-700/30",
      desc: "Interactive learning platforms built for growth",
    },
    {
      id: 4,
      title: "Travel & Tourism",
      category: "travel",
      tech: ["WordPress", "Node.js", "Next.js,"],
      image: "bg-gradient-to-br from-green-700/30 to-emerald-700/30",
      desc: "Service booking and community platform",
    },
    {
      id: 5,
      title: "Logistics",
      category: "logistics",
      tech: ["POS", "POS APIs", "MySQL,"],
      image: "bg-gradient-to-br from-red-700/30 to-orange-700/30",
      desc: "Smart logistics systems for real-time control",
    },
    {
      id: 6,
      title: "Technology & Consultancy",
      category: "technology",
      tech: ["React", "Next.js", "Node.js"],
      image: "bg-gradient-to-br from-purple-700/30 to-indigo-700/30",
      desc: "Innovative digital solutions for modern businesses",
    },
  ];

  const filters = ["all", "web-design", "ecommerce", "web-app"];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            We Create{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Websites for Various Industries
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Expert web development services in India across diverse business
            verticals
          </p>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {filter === "all"
                  ? "All Projects"
                  : filter === "web-design"
                    ? "Web Design"
                    : filter === "ecommerce"
                      ? "E-commerce"
                      : "Web Apps"}
              </button>
            ))}
          </div> */}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900/30 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all hover:scale-[1.02]"
            >
              <div
                className={`h-48 ${item.image} flex items-center justify-center`}
              >
                <div className="text-5xl">
                  {item.category === "web-design"
                    ? "💻"
                    : item.category === "ecommerce"
                      ? "🛒"
                      : item.category === "education"
                        ? "🚀"
                        : item.category === "healthcare"
                          ? "🏥"
                          : item.category === "travel"
                            ? "✈️"
                            : item.category === "logistics"
                              ? "🚚"
                              : item.category === "technology"
                                ? "💡"
                                : ""}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center">
                  View Case Study
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Carousel */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Trusted by <span className="text-blue-400">Industry Leaders</span>
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="w-40 h-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="text-center">
                      <div className="text-xl mb-1">🏢</div>
                      <span className="text-gray-300 text-sm font-medium">
                        Client {index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
              display: flex;
              width: max-content;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
