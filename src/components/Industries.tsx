import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { 
  Building2, TrendingUp, Rocket, GraduationCap, HeartPulse, ShoppingBag, Factory, Coins, Scale, ShieldCheck 
} from "lucide-react";
import { industriesServed } from "../data";

const getIndustryIcon = (iconName: string) => {
  const css = "text-royal group-hover:text-white transition-colors duration-300";
  switch (iconName) {
    case "Building2": return <Building2 className={css} size={26} />;
    case "TrendingUp": return <TrendingUp className={css} size={26} />;
    case "Rocket": return <Rocket className={css} size={26} />;
    case "GraduationCap": return <GraduationCap className={css} size={26} />;
    case "HeartPulse": return <HeartPulse className={css} size={26} />;
    case "ShoppingBag": return <ShoppingBag className={css} size={26} />;
    case "Factory": return <Factory className={css} size={26} />;
    case "Coins": return <Coins className={css} size={26} />;
    case "Scale": return <Scale className={css} size={26} />;
    default: return <Building2 className={css} size={26} />;
  }
};

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="industries" className="bg-light-gray py-20 sm:py-28 relative z-20 border-t border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-royal bg-royal/10 px-4 py-1.5 rounded-full inline-block">
            Sectors We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
            Tailored Solutions Across Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            Every vertical has unique operational standards, safety codes, and compliance protocols. We construct specific environments matching your professional workflows.
          </p>
        </div>

        {/* Industries Card Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industriesServed.map((industry, idx) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200/70 p-7 hover:border-royal/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex items-center space-x-5 group relative overflow-hidden"
              id={`industry-card-${idx}`}
            >
              {/* Inner ambient background decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-royal/[0.02] rounded-bl-full group-hover:bg-royal/[0.04] transition-colors" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center group-hover:bg-royal transition-all duration-300 shrink-0">
                {getIndustryIcon(industry.iconName)}
              </div>

              {/* Info */}
              <div className="space-y-1">
                <h3 className="text-base font-display font-bold text-navy group-hover:text-royal transition-colors">
                  {industry.name}
                </h3>
                <div className="flex items-center space-x-1.5 text-[10px] text-slate-400 font-mono font-medium tracking-wide">
                  <ShieldCheck size={11} className="text-accent-orange" />
                  <span>COMPLIANT DEPLOYMENT</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
