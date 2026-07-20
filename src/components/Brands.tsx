import React from "react";
import { brands } from "../data";

export default function Brands() {
  // Double the list to ensure gapless infinite marquee scrolling
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section id="brands" className="bg-navy py-12 relative overflow-hidden border-t border-b border-white/5">
      {/* Background visual accents */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs uppercase tracking-widest font-bold text-white/50">
          AUTHORIZED DEALERS & COMPATIBLE INTEGRATIONS
        </p>
      </div>

      {/* Infinite scrolling marquee container */}
      <div className="flex overflow-x-hidden relative py-4 bg-white/[0.02]">
        <div className="animate-marquee flex whitespace-nowrap items-center space-x-12 sm:space-x-16">
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center space-x-2 grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none group px-4 py-2"
            >
              {/* Icon placeholder (beautifully structured logo text placeholder) */}
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display font-black text-sm text-white group-hover:bg-royal group-hover:scale-105 transition-all">
                {brand.name[0]}
              </div>
              <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-white group-hover:text-royal transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
