import React from "react";
import { 
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageSquare, ArrowUpRight, ShieldAlert 
} from "lucide-react";
import { companyDetails, services } from "../data";

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Overview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleScrollTo("home")}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-royal to-accent-orange flex items-center justify-center text-white font-bold text-xl">
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

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Established in 2017, Rajshree Systems and Technology is a premier corporate IT partner. We design, deploy, and maintain robust network structures, server frameworks, and genuine enterprise systems.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-royal flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-royal flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent-orange flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://wa.me/917506774649" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Hotline"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-accent-orange font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li>
                <button 
                  onClick={() => handleScrollTo("home")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Services Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("brands")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Deal Channels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("industries")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("why-choose-us")} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Why Choose Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-royal-300 font-display">
              Enterprise Services
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <button 
                    onClick={() => handleScrollTo("services")} 
                    className="hover:text-white transition-colors text-left flex items-center space-x-1"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight size={10} className="text-white/30" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Coordinate Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-accent-orange font-display">
              Support Center
            </h4>
            <div className="space-y-3.5 text-xs text-white/80 font-light">
              <div className="flex items-start space-x-2">
                <MapPin size={14} className="text-accent-orange shrink-0 mt-0.5" />
                <span>{companyDetails.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-royal shrink-0" />
                <a href="tel:9820854078" className="hover:text-white transition-colors font-semibold">
                  Sanjay: +91 98208 54078
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-royal shrink-0" />
                <a href="tel:7506774649" className="hover:text-white transition-colors font-semibold">
                  Janish: +91 75067 74649
                </a>
              </div>
              <div className="flex items-center space-x-2 pt-2 border-t border-white/5">
                <Mail size={14} className="text-accent-orange shrink-0" />
                <span>{companyDetails.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Fine Print Subfooter */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/50">
          <p>© {currentYear} {companyDetails.name}. All rights reserved.</p>
          
          <div className="flex items-center space-x-4">
            <button className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <button className="hover:text-white transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <div className="flex items-center space-x-1 text-white/40">
              <ShieldAlert size={10} />
              <span>Secure Server Session</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
