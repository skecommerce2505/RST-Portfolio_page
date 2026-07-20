import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { stats } from "../data";
import { Calendar, Package, Users, Award, Shield, CheckCircle } from "lucide-react";

// Map key labels to high-quality Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  "Established Since": <Calendar className="text-accent-orange" size={24} />,
  "Products Delivered": <Package className="text-royal" size={24} />,
  "Happy Clients": <Users className="text-royal" size={24} />,
  "Major Brands Offered": <Award className="text-accent-orange" size={24} />,
  "Corporate Specialists": <Shield className="text-royal" size={24} />,
  "Enterprise Solutions": <CheckCircle className="text-accent-orange" size={24} />
};

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="bg-white py-12 sm:py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-light-gray rounded-2xl p-6 sm:p-8 border border-slate-200/50 hover:border-royal/20 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex items-start space-x-5 group"
                id={`stat-card-${idx}`}
              >
                {/* Icon container */}
                <div className="p-3.5 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:bg-navy group-hover:text-white transition-all duration-300 shrink-0">
                  {iconMap[stat.label] || <Award size={24} className="text-royal" />}
                </div>

                <div className="space-y-1">
                  {/* Big dynamic counter / text */}
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-navy tracking-tight group-hover:text-royal transition-colors">
                      {stat.value}
                    </span>
                  </div>

                  {/* Stat label */}
                  <p className="text-sm font-semibold text-slate-800 tracking-wide font-display">
                    {stat.label}
                  </p>

                  {/* Stat description */}
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
