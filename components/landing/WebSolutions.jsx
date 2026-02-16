// components/landing/WebSolutions.jsx
export default function WebSolutions() {
  const solutions = [
    {
      category: "Custom Design",
      services: [
        {
          name: "Corporate Websites",
          icon: "🏢",
          desc: "Professional business websites",
        },
        {
          name: "E-commerce Stores",
          icon: "🛒",
          desc: "Online shopping platforms",
        },
        { name: "WordPress Sites", icon: "⚙️", desc: "CMS-based solutions" },
        {
          name: "Responsive Design",
          icon: "🎯",
          desc: "Optimized for all devices ",
        },
      ],
    },
    {
      category: "Web Development",
      services: [
        { name: "Custom Web Apps", icon: "🚀", desc: "Tailored applications" },
        { name: "API Integration", icon: "🔗", desc: "Third-party services" },
        {
          name: "Database Design",
          icon: "🗃️",
          desc: "Data management systems",
        },
        {
          name: "Progressive Web Apps",
          icon: "📱",
          desc: "Crafting robust, scalable server-side solutions",
        },
      ],
    },
    {
      category: "Additional Services",
      services: [
        {
          name: "Automation",
          icon: "🤖",
          desc: "Automated workflows and processes",
        },
        { name: "SEO Optimization", icon: "📈", desc: "Search engine ranking" },
        { name: "Website Maintenance", icon: "🔧", desc: "Ongoing support" },
        { name: "Hosting Solutions", icon: "☁️", desc: "Reliable hosting" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#9ab0d9] to-[#02205c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient bg-clip-text text-transparent">
              Website Design and Web Development Services
            </span>
            <span className="second-text"> You Can Trust </span>
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h4 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-700">
                {solution.category}
              </h4>
              <div className="space-y-4">
                {solution.services.map((service, sIndex) => (
                  <div
                    key={sIndex}
                    className="flex items-start p-3 bg-gray-900/30 rounded-lg hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="text-2xl mr-4">{service.icon}</div>
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our <span className="text-blue-400">Tech Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Next.js", color: "from-gray-800 to-gray-900" },
              { name: "React", color: "from-blue-900/30 to-blue-800/30" },
              { name: "Node.js", color: "from-green-900/30 to-green-800/30" },
              { name: "TypeScript", color: "from-blue-700/30 to-blue-600/30" },
              {
                name: "Tailwind CSS",
                color: "from-teal-900/30 to-teal-800/30",
              },
              { name: "MongoDB", color: "from-green-800/30 to-green-700/30" },
              {
                name: "Firebase",
                color: "from-yellow-900/30 to-yellow-800/30",
              },
              { name: "AWS", color: "from-orange-900/30 to-orange-800/30" },
            ].map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} border border-gray-700`}
              >
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
