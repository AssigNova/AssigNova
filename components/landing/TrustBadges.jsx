"use client";

export default function TrustBadges() {
  const badges = [
    { text: "Best in Segment", icon: "🏅" },
    { text: "90+ Happy Clients", icon: "😊" },
    { text: "3+ Years Experience", icon: "📅" },
    { text: "24/7 Support", icon: "🛡️" },
    { text: "Money-Back Guarantee", icon: "💯" },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#9ab0d9] to-[#02205c]">
      <div className="container mx-auto px-4">
        <h3 className="text-white-900 text-2xl font-bold text-center mb-8 ">
          Trusted by Industry Leaders Worldwide
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-xl border border-gray-50 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-2">{badge.icon}</div>
              <p className="text-center text-sm font-medium text-gray-900">
                {badge.text}
              </p>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        {/* <div className="mt-12">
          <p className="text-center text-gray-400 mb-6">
            Our Esteemed Partners and Clients
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="text-gray-400 text-sm font-medium">
                  Brand {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
