"use client";

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                AssigNova
              </span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                {" "}
                <span className="font-semibold text-blue-400">
                  Leading Website Designing Company in India
                </span>{" "}
                specializing in diverse web design and development services for
                large enterprises and small startups.
              </p>
              <p>
                Recognized for excellence, we are dedicated to helping
                businesses excel in the digital space with best website
                developers on board.
              </p>
              <p>
                We cater to clients nationwide, whether you need a website
                development company in Delhi, Mumbai, or Bangalore. Hire our
                expert developers to build a strong online presence and achieve
                success through our top-tier website design and development
                services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">90+</div>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-green-400 mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-400">Support Available</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <p className="text-sm text-gray-400">Expert Team</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-tr from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Innovation Driven",
                    desc: "We stay ahead with latest tech trends",
                  },
                  {
                    title: "Client-Centric",
                    desc: "Your success is our priority",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs, clear estimates",
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Rigorous testing for perfection",
                  },
                  { title: "Timely Delivery", desc: "We respect deadlines" },
                ].map((value, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-sm text-gray-400">{value.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
