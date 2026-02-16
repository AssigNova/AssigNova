// components/FloatingContactButtons.jsx
"use client";
import { useState, useEffect } from "react";

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState("");

  // Hide buttons when scrolling down, show when scrolling up
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Phone number and WhatsApp number
  const phoneNumber = "+919771409835";
  const whatsappNumber = "+919771409835";
  const whatsappMessage =
    "Hello! I'm interested in your web development services.";

  return (
    <>
      {/* Floating Buttons Container */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        {/* WhatsApp Button */}
        <div className="relative group">
          {/* Tooltip */}
          {showTooltip === "whatsapp" && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap shadow-lg">
              Chat on WhatsApp
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          )}

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip("whatsapp")}
            onMouseLeave={() => setShowTooltip("")}
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            </svg>
          </a>
        </div>

        {/* Phone Call Button */}
        <div className="relative group">
          {/* Tooltip */}
          {showTooltip === "phone" && (
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap shadow-lg">
              Call us now
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
            </div>
          )}

          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip("phone")}
            onMouseLeave={() => setShowTooltip("")}
            aria-label="Call us"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Small screen adjustment for bottom spacing */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6 {
            bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}
