const services = [
  {
    title: "Business Website Design",
    desc: "Professional websites that build credibility and attract customers.",
    icon: "🏢",
  },
  {
    title: "WordPress Development",
    desc: "Flexible WordPress solutions from blogs to enterprise sites.",
    icon: "⚙️",
  },
  {
    title: "E-commerce Solutions",
    desc: "Secure online stores optimized for conversions and sales.",
    icon: "🛒",
  },
  {
    title: "Web Applications",
    desc: "Custom web apps with modern frameworks and scalability.",
    icon: "🚀",
  },
  {
    title: "Automation",
    desc: "Automate workflows and processes to save time and scale operations.",
    icon: "🧠",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Comprehensive{" "}
          <span className="second-text">Website Design Services</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gradient-to-br from-white to-gray-300 p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
