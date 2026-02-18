"use client";

import { useState } from "react";

export default function LandingNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#Industries" },
    { label: "Web Solutions", href: "#solutions" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScroll = (href) => {
    setIsOpen(false);

    const id = href.replace("/#", "#");

    if (window.location.pathname !== "/") {
      window.location.href = `/${id}`;
      return;
    }

    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id); // updates URL without reload
    }
  };

  // const handleScroll = (href) => {
  //   setIsOpen(false); // close mobile menu

  //   if (href.startsWith("#")) {
  //     const element = document.querySelector(href);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   } else {
  //     window.location.href = href;
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white to-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="w-24 h-auto flex items-center">
            <img src="/AssigNova-logo.svg" alt="AssigNova" className="h-10 md:h-14 lg:h-16 w-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="px-4 py-2 text-gray-900 hover:text-blue-600 transition-colors font-medium">
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="w-full text-left px-4 py-3 text-gray-900 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors font-medium">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
