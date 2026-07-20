import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { companyDetails } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ["home", "about", "services", "brands", "industries", "why-choose-us", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Brands", id: "brands" },
    { label: "Industries", id: "industries" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Banner Contact bar */}
      <div className="bg-navy text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-white/70">Established 2017</span>
            <span className="h-3 w-[1px] bg-white/20"></span>
            <span className="text-white/70">ISO Certified IT Solutions</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:9820854078" className="flex items-center space-x-1.5 hover:text-accent-orange transition-colors">
              <Phone size={12} className="text-accent-orange" />
              <span>Sanjay Jain: +91 98208 54078</span>
            </a>
            <a href="tel:7506774649" className="flex items-center space-x-1.5 hover:text-accent-orange transition-colors">
              <Phone size={12} className="text-accent-orange" />
              <span>Janish Jain: +91 75067 74649</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md shadow-lg py-3 border-b border-white/5"
            : "bg-navy py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo & Brand Info */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal to-accent-orange flex items-center justify-center text-white font-bold text-xl shadow-md shadow-royal/20 group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="block font-display font-extrabold text-lg tracking-tight text-white leading-tight">
                RAJSHREE
              </span>
              <span className="block font-sans text-[10px] text-white/60 tracking-widest uppercase">
                Systems & Technology
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call-to-action button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/917506774649"
              target="_blank"
              referrerPolicy="no-referrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2 shadow-md transition-all"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-royal hover:bg-royal/90 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition-all border border-royal/30"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:7506774649"
              className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg"
              aria-label="Call Partner"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy/95 backdrop-blur-md border-b border-white/10"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-royal text-white"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/917506774649"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="bg-green-600 text-white py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center space-x-1.5 shadow"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={() => handleNavClick("contact")}
                    className="bg-royal text-white py-2.5 rounded-lg font-semibold text-sm shadow"
                  >
                    Request AMC
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
