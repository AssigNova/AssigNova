// components/landing/TestimonialsGrid.jsx
"use client";
import { useState } from "react";
import Image from "next/image";

export default function TestimonialsGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const testimonials = [
    {
      id: 1,
      name: "Dr. Shruti Priya",
      position: "Doctor, HealthCare",
      image: "/testimonials/shruti.png", // Add your image path
      text: "Excellent service with on-time delivery and well-researched content. Assignova maintains quality and professionalism throughout. Highly recommended.",
      project: "CMS Website",
    },
    {
      id: 2,
      name: "Moasfar Ali",
      position: "Founder, Omni Print",
      image: "/testimonials/omniprint.png",
      text: "AssigNova is hands down the best development team we've worked with. Ahrar Arif leads a group of true professionals who actually care about the client's vision. Highly recommended!",
      project: "printing Solution",
    },
    {
      id: 3,
      name: "Dr Anand Sethi",
      position: "Co-Founder, Starnet Healthcare",
      image: "/testimonials/sethi.jfif",
      text: "AssigNova has been a reliable IT support partner for StarNet. Ahrar and his team are quick to respond, and genuinely care about keeping our systems running smoothly.",
      project: "IT Support & Maintenance",
    },
    {
      id: 4,
      name: "Dr A.K Kriplani",
      position: "Leader and innovator in Laparoscopic Surgery",
      image: "/testimonials/kriplani.png",
      text: "We have used their services they exceed our expectations. In addition to their affordable prices. Their WordPress development services are top-notch.",
      project: "WordPress Site",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-200 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our <span className="second-test">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it — hear from some of our satisfied
            clients
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 h-full">
                    <div className="text-blue-600 mb-4">
                      <svg
                        className="w-8 h-8 opacity-30"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6 line-clamp-4 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author with Image */}
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                      {/* Profile Image Circle */}
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-blue-200 hover:border-blue-400 transition-colors flex-shrink-0">
                        {testimonial.image ? (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Author Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                        </p>
                        <span className="inline-block mt-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {testimonial.project}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          {testimonials.length > itemsPerView && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {Array.from({
                  length: Math.ceil(testimonials.length / itemsPerView),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentIndex(
                    Math.min(
                      testimonials.length - itemsPerView,
                      currentIndex + 1,
                    ),
                  )
                }
                disabled={currentIndex >= testimonials.length - itemsPerView}
                className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
