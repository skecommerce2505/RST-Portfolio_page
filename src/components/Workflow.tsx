import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { workflowSteps } from "../data";

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section id="workflow" className="bg-white py-20 sm:py-28 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent-orange bg-accent-orange/10 px-4.5 py-1.5 rounded-full inline-block">
            Our Deployment Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-navy tracking-tight">
            How We Partner for Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
            Our proven, highly systematic process ensures no stone is left unturned—delivering flawless, certified setups with zero friction to active operational routines.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* Vertical central spine line on desktop, offset left on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-[1px]" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {workflowSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.stepNumber} 
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  id={`workflow-step-${idx}`}
                >
                  {/* Outer circle hub node on line */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-royal flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    <div className="w-3.5 h-3.5 rounded-full bg-accent-orange" />
                  </div>

                  {/* Half column content side */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? "md:pl-12" : "md:pr-12 md:text-right"
                  }`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      className="bg-light-gray rounded-2xl border border-slate-200/50 p-6 sm:p-8 hover:border-royal/20 hover:bg-white hover:shadow-xl transition-all duration-300 relative group"
                    >
                      {/* Step Number Badge */}
                      <span className="text-sm font-mono font-bold text-accent-orange tracking-widest block mb-2">
                        PHASE {step.stepNumber}
                      </span>
                      
                      <h3 className="text-lg sm:text-xl font-display font-bold text-navy group-hover:text-royal transition-colors mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty other half column placeholder to balance grid */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
