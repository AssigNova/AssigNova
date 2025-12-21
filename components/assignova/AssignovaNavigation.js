"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function AssignovaNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/assignova" },
    { name: "Services", href: "/assignova/services" },
    { name: "Solutions", href: "/assignova/solutions" },
    { name: "About", href: "/assignova/about" },
    { name: "Case Studies", href: "/assignova/case-studies" },
    { name: "Contact", href: "/assignova/contact" },
  ];

  const handleMobileLinkClick = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-xl bg-black/80 border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/assignova" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="relative">
                {/* <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden"> */}
                {/* Using a placeholder - replace with your actual logo */}
                <div className="w-20 h-20 relative flex items-center justify-center">
                  {/* <div className="text-xl font-bold text-white">AN</div> */}

                  <img src="/AssigNova-final-Logo.png" alt="Test" className="w-20 h-20 object-contain drop-shadow-md" />
                </div>
                {/* </div> */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Assignova
                </h1>
                <p className="text-xs text-gray-400">Next-Gen Digital Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors relative ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}>
                      {item.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                );
              })}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold overflow-hidden"
                onClick={() => router.push("/assignova/contact")}>
                <span className="relative z-10">Start Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors z-50">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 md:hidden pt-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-800">
                    <button
                      onClick={() => handleMobileLinkClick(item.href)}
                      className={`flex items-center justify-between w-full text-lg font-medium py-4 ${
                        pathname === item.href ? "text-white" : "text-gray-400 hover:text-white"
                      }`}>
                      <span>{item.name}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                  onClick={() => handleMobileLinkClick("/assignova/contact")}>
                  Start Your Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
