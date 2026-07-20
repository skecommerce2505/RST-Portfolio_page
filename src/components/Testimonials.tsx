import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-navy py-20 sm:py-28 relative overflow-hidden z-20 text-white">
      {/* Decorative gradient glow accents */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-royal/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent-orange/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent-orange bg-accent-orange/10 px-4.5 py-1.5 rounded-full inline-block">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by Leaders & Procurement Officers
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Don't just take our word for it—read reviews and endorsements directly from VP of Operations, Managing Directors, and tech founders we support daily.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
            
            {/* Quote Icon Background ornament */}
            <div className="absolute -top-6 -left-6 text-white/5 pointer-events-none">
              <Quote size={150} strokeWidth={1} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 sm:space-y-8 relative z-10"
              >
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="text-accent-orange fill-accent-orange" />
                  ))}
                </div>

                {/* Big Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed text-white/95">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Client Profile Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal to-accent-orange flex items-center justify-center font-display font-bold text-lg text-white">
                    {testimonials[activeIndex].author[0]}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {testimonials[activeIndex].author}
                    </h4>
                    <p className="text-xs text-white/60 font-light">
                      {testimonials[activeIndex].designation}, <span className="text-accent-orange font-medium">{testimonials[activeIndex].company}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Slider controls outside card */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? "bg-accent-orange w-6" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
