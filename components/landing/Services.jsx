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
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Website Design Services
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
