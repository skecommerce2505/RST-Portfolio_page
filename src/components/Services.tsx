import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Laptop, Briefcase, Network, Shield, Tv, Printer, Cpu, FolderCode, Wrench, 
  Check, ArrowRight, ShieldAlert, Zap, PhoneCall, HelpCircle, Server, Globe
} from "lucide-react";
import { services, amcPackages } from "../data";

// Mapping service icon name to components
const getServiceIcon = (iconName: string, className = "text-royal") => {
  switch (iconName) {
    case "Laptop": return <Laptop className={className} size={28} />;
    case "Briefcase": return <Briefcase className={className} size={28} />;
    case "Network": return <Network className={className} size={28} />;
    case "Shield": return <Shield className={className} size={28} />;
    case "Tv": return <Tv className={className} size={28} />;
    case "Printer": return <Printer className={className} size={28} />;
    case "Cpu": return <Cpu className={className} size={28} />;
    case "FolderCode": return <FolderCode className={className} size={28} />;
    case "Wrench": return <Wrench className={className} size={28} />;
    default: return <Server className={className} size={28} />;
  }
};

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", name: "All Solutions" },
    { id: "setup", name: "Office Setups & Sourcing" },
    { id: "network", name: "Networking & Security" },
    { id: "support", name: "AMC, Repairs & Upgrades" }
  ];

  // Simple categorization helper
  const isItemInCategory = (serviceId: string, category: string) => {
    if (category === "all") return true;
    if (category === "setup") return ["procurement", "office-setup", "audio-conference"].includes(serviceId);
    if (category === "network") return ["networking", "cctv-security", "printers"].includes(serviceId);
    if (category === "support") return ["upgrades", "software", "repairs"].includes(serviceId);
    return true;
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = isItemInCategory(service.id, selectedCategory);
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-light-gray py-20 sm:py-28 relative z-20 border-t border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-royal bg-royal/10 px-4 py-1.5 rounded-full inline-block">
            Our Enterprise Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
            Comprehensive Corporate IT Services
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            From deploying physical networks to high-grade workstation installations and prompt technical maintenance support, we align technology infrastructure with your long-term success.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10 pb-4 border-b border-slate-200">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-navy text-white shadow-md shadow-navy/10"
                    : "bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px]">
            <input
              type="text"
              placeholder="Search services or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4.5 py-2.5 pl-10 rounded-xl bg-white text-sm text-navy border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal/30 focus:border-royal shadow-sm"
            />
            <svg 
              className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Services Grid with Framer Motion Animate Presence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/70 p-7 hover:border-royal/30 hover:shadow-2xl hover:shadow-slate-200/70 transition-all duration-300 flex flex-col justify-between group h-full relative"
                id={`service-card-${service.id}`}
              >
                {/* Visual Top Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-royal to-accent-orange rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center group-hover:bg-royal group-hover:text-white transition-all duration-300">
                    {getServiceIcon(service.iconName, "text-royal group-hover:text-white transition-colors")}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-navy group-hover:text-royal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* List items with checkmarks */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-700 space-x-2">
                        <Check size={14} className="text-accent-orange shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono font-bold">
                    Professional Grade
                  </span>
                  <button 
                    onClick={scrollToContact}
                    className="text-xs font-semibold text-royal flex items-center space-x-1 hover:text-accent-orange transition-colors cursor-pointer group"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300"
          >
            <HelpCircle className="mx-auto text-slate-400 mb-3" size={36} />
            <p className="text-slate-600 font-semibold text-base">No matching services found</p>
            <p className="text-slate-400 text-xs mt-1">Try resetting the active filter tabs or modifying your search query.</p>
          </motion.div>
        )}

        {/* ----------------- AMC & IT SUPPORT SPECIAL SECTION ----------------- */}
        <div id="amc-packages" className="mt-28 space-y-12">
          
          {/* Sub Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent-orange bg-accent-orange/10 px-4 py-1 rounded-full inline-block">
              IT Support Contracts
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-navy">
              Worry-Free IT Support & AMC Plans
            </h3>
            <p className="text-sm sm:text-base text-slate-500 font-light leading-relaxed">
              Ensure flawless business operations and mitigate catastrophic downtime with our customized Annual Maintenance Contracts (AMC).
            </p>
          </div>

          {/* Pricing/Contract Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {amcPackages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl border p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  pkg.isPopular
                    ? "border-royal ring-2 ring-royal/20 shadow-2xl scale-105 md:translate-y-[-8px] z-10"
                    : "border-slate-200/80 shadow-md"
                }`}
                id={`amc-card-${idx}`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-orange text-white text-[10px] tracking-wider uppercase font-extrabold px-4.5 py-1 rounded-full shadow-md">
                    RECOMMENDED FOR ENTERPRISES
                  </span>
                )}

                <div className="space-y-6">
                  {/* Name and Price */}
                  <div>
                    <h4 className="text-xl font-display font-extrabold text-navy">{pkg.name}</h4>
                    <p className="text-xs text-slate-400 font-light mt-1">{pkg.description}</p>
                    
                    <div className="mt-4 flex items-baseline">
                      <span className="text-3xl font-display font-extrabold text-navy">{pkg.price}</span>
                      <span className="text-xs text-slate-400 font-light ml-1">{pkg.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-5 border-t border-slate-100">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                        <Check size={14} className="text-royal mt-0.5 shrink-0" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call Action button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full mt-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all cursor-pointer ${
                    pkg.isPopular
                      ? "bg-royal hover:bg-royal/90 text-white shadow-lg shadow-royal/20"
                      : "bg-navy hover:bg-navy/90 text-white"
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            ))}
          </div>

          {/* AMC SLA Highlight Banner */}
          <div className="bg-navy rounded-2xl p-6 md:p-8 border border-white/5 shadow-2xl flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-6 mt-12">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] text-accent-orange font-mono font-bold tracking-widest uppercase">PROACTIVE SLA GUARANTEE</span>
              <p className="text-lg font-display font-bold text-white">Need a custom contract based on specialized servers or branch quantities?</p>
              <p className="text-xs text-white/60 font-light max-w-2xl">We offer highly versatile AMC solutions: including spare hardware placement, dedicated resident network engineers, and custom hardware warranty extensions.</p>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-white hover:bg-slate-100 text-navy font-bold text-xs tracking-wider px-6 py-3 rounded-lg uppercase shrink-0 transition-all cursor-pointer border border-slate-200"
            >
              Get Customized Estimate
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
