"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  const handleMobileLinkClick = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-black/80 border-b border-white/10 py-3" : "bg-transparent py-6"
          }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group relative z-50">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }} className="relative">
                <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center">
                  <Image src="/AssigNova-logo.svg" alt="Assignova Logo" width={64} height={64} className="w-full h-full object-contain drop-shadow-md" priority />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-dark-accent to-light-accent rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  Assignova
                </h1>
                <p className="text-[10px] md:text-xs text-gray-400 hidden sm:block">Next-Gen Digital Solutions</p>
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
                      className={`text-sm font-medium transition-colors relative ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                        }`}>
                      {item.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-dark-accent to-light-accent"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative btn-primary px-6 py-2 rounded-lg overflow-hidden"
                onClick={() => router.push("/contact")}>
                <span className="relative z-10">Start Project</span>
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-gray-950/98 backdrop-blur-xl z-40 md:hidden pt-28 pb-8 flex flex-col overflow-y-auto">
            <div className="container mx-auto px-6 pb-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-800/50 last:border-0 pb-2">
                    <button
                      onClick={() => handleMobileLinkClick(item.href)}
                      className={`flex items-center justify-between w-full text-lg sm:text-xl font-medium py-3 sm:py-4 transition-colors ${pathname === item.href ? "text-light-accent" : "text-gray-300 hover:text-white"
                        }`}>
                      <span>{item.name}</span>
                      <ChevronRight className={`w-5 h-5 ${pathname === item.href ? "text-light-accent" : "text-gray-600"}`} />
                    </button>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 mt-4 border-t border-gray-800"
                >
                  <button
                    className="w-full btn-primary py-4 rounded-xl text-lg font-bold shadow-lg shadow-dark-accent/20"
                    onClick={() => handleMobileLinkClick("/contact")}>
                    Start Your Project
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
