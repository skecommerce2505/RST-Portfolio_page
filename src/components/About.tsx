import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { companyDetails } from "../data";
import { Award, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-white py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Column Left: Visual layout collage */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Decorative block behind image */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-slate-100 rounded-3xl -z-10" />
              
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Modern corporate building and IT solutions hub"
                referrerPolicy="no-referrer"
                className="rounded-3xl shadow-xl w-full object-cover h-[350px] sm:h-[450px]"
              />

              {/* Floating service highlight box */}
              <div className="absolute -bottom-6 -right-6 bg-navy text-white rounded-2xl p-6 shadow-2xl max-w-xs space-y-3 border border-white/10 hidden sm:block">
                <div className="flex items-center space-x-2 text-accent-orange">
                  <ShieldCheck size={20} />
                  <span className="text-xs uppercase font-extrabold tracking-widest font-display">Client First Creed</span>
                </div>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  "We strongly believe that excellent after-sales service is the absolute foundation of long-term customer relationships."
                </p>
                <div className="h-[1px] bg-white/10" />
                <p className="text-[10px] font-mono font-bold tracking-wider text-royal-300 uppercase">
                  RAJSHREE ESCROW GUARANTEE
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column Right: About copy content */}
          <div className="lg:col-span-7 space-y-6">
            
            <span className="text-xs uppercase tracking-widest font-extrabold text-royal bg-royal/10 px-4.5 py-1.5 rounded-full inline-block">
              Established 2017
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
              A Complete Partner for Hardware & Support
            </h2>

            <div className="space-y-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              <p className="text-navy font-semibold text-base sm:text-lg">
                {companyDetails.shortAbout}
              </p>
              <p>
                {companyDetails.longAbout}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-royal/10 text-royal shrink-0 mt-0.5">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-navy">Authentic Dealership Sourcing</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">Genuine hardware certifications directly covered by vendor warranties.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-accent-orange/10 text-accent-orange shrink-0 mt-0.5">
                  <Heart size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-navy">Dedicated Post-Sales Integrity</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">Nearly 10 years of relationships founded on active maintenance support.</p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={scrollToContact}
                className="bg-royal hover:bg-royal/90 text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide shadow-md flex items-center space-x-2 transition-all cursor-pointer group"
              >
                <span>Partner with Us</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
