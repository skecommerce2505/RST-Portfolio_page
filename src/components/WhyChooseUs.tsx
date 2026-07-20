import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  CalendarDays, Building, Layers, CheckCircle, Boxes, Users, Clock, UserCheck, Settings, Handshake 
} from "lucide-react";
import { whyChooseUs } from "../data";

const getFeatureIcon = (iconName: string) => {
  const css = "text-accent-orange group-hover:text-white transition-colors duration-300";
  switch (iconName) {
    case "CalendarDays": return <CalendarDays className={css} size={24} />;
    case "Building": return <Building className={css} size={24} />;
    case "Layers": return <Layers className={css} size={24} />;
    case "CheckCircle": return <CheckCircle className={css} size={24} />;
    case "Boxes": return <Boxes className={css} size={24} />;
    case "Users": return <Users className={css} size={24} />;
    case "Clock": return <Clock className={css} size={24} />;
    case "UserCheck": return <UserCheck className={css} size={24} />;
    case "Settings": return <Settings className={css} size={24} />;
    case "Handshake": return <Handshake className={css} size={24} />;
    default: return <CheckCircle className={css} size={24} />;
  }
};

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="why-choose-us" className="bg-white py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent-orange bg-accent-orange/10 px-4.5 py-1.5 rounded-full inline-block">
              Why Corporate Leaders Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
              Setting the Gold Standard in Corporate IT Support
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-500 font-light text-base sm:text-lg leading-relaxed">
              For over nearly a decade, Rajshree Systems and Technology has been a reliable anchor for corporate IT frameworks. We deliver absolute authenticity, lightning-quick service SLAs, and dedicated engineering that empowers operations.
            </p>
          </div>
        </div>

        {/* Features Bento Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {whyChooseUs.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-light-gray rounded-2xl border border-slate-200/50 p-6 flex flex-col justify-between hover:border-accent-orange/20 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 group relative overflow-hidden"
              id={`why-card-${idx}`}
            >
              {/* Corner decor light glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-orange/5 rounded-full blur-xl group-hover:bg-accent-orange/15 transition-all duration-300" />

              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-11 h-11 rounded-xl bg-accent-orange/10 flex items-center justify-center group-hover:bg-accent-orange transition-all duration-300 shrink-0">
                  {getFeatureIcon(feature.iconName)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-display font-bold text-navy group-hover:text-royal transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Card index accent */}
              <div className="text-[10px] font-mono text-slate-300 font-extrabold tracking-widest pt-6 mt-6 border-t border-slate-100 group-hover:text-accent-orange transition-colors">
                RAJS_0{(idx + 1).toString().slice(-2)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
