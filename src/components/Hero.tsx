import React from "react";
import { motion } from "motion/react";
import { ArrowRight, PhoneCall, ShieldCheck, Award, ThumbsUp } from "lucide-react";
import { companyDetails } from "../data";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-navy text-white overflow-hidden py-16 sm:py-24">
      {/* Background image with multi-layered overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-referrer"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')`,
          referrerPolicy: "no-referrer"
        } as React.CSSProperties}
      />
      {/* Tech Grid overlay effect */}
      <div className="absolute inset-0 bg-navy/85 sm:bg-navy/80 mix-blend-multiply z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-[2]" />
      
      {/* Decorative colored glow spheres */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-royal/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-accent-orange/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-royal/20 border border-royal/40 rounded-full px-4.5 py-1.5"
            >
              <ShieldCheck size={14} className="text-accent-orange" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-royal-200">
                {companyDetails.tagline}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight sm:leading-none"
            >
              Empowering Businesses with <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-300 via-white to-accent-orange bg-300% animate-pulse">
                Complete IT Infrastructure
              </span>{" "}
              Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-2xl font-light leading-relaxed"
            >
              From custom hardware procurement to complete office IT deployment, structured cabling, enterprise networking, robust security, AMC maintenance, and ongoing helpdesk support—we help businesses build reliable, high-performance technology infrastructure.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={scrollToContact}
                className="bg-accent-orange hover:bg-accent-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-accent-orange/20 flex items-center justify-center space-x-2.5 transition-all group cursor-pointer"
              >
                <span>Request a Free Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <a
                href="tel:7506774649"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center space-x-2.5 transition-all cursor-pointer"
              >
                <PhoneCall size={18} className="text-accent-orange" />
                <span>Call Now</span>
              </a>
            </motion.div>

            {/* Proof features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg"
            >
              <div className="flex items-center space-x-2">
                <Award size={18} className="text-accent-orange" />
                <span className="text-xs sm:text-sm text-white/75 font-medium">Est. 2017</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck size={18} className="text-accent-orange" />
                <span className="text-xs sm:text-sm text-white/75 font-medium">Genuine Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp size={18} className="text-accent-orange" />
                <span className="text-xs sm:text-sm text-white/75 font-medium">5-Star SLA</span>
              </div>
            </motion.div>

          </div>

          {/* Graphical/Illustrative right column */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Outer frame glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-royal to-accent-orange rounded-2xl blur-lg opacity-40 animate-pulse" />
              
              <div className="relative bg-[#0d1e33] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">NETWORK NODE MONITOR</span>
                </div>

                {/* Simulated Server/IT Dashboard Graphic */}
                <div className="space-y-4 pt-4 font-mono text-xs text-white/80">
                  <div className="bg-[#081525] p-3 rounded-lg border border-white/5">
                    <p className="text-[11px] text-accent-orange uppercase font-semibold tracking-wider">ACTIVE OFFICE IT BLUEPRINT</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-[10px] text-white/60">
                      <div>• LAN Cabling: Cat6 structured</div>
                      <div>• WiFi Access: Enterprise High Density</div>
                      <div>• Firewall: Active Security Policy</div>
                      <div>• Server: Proactive Local Rack</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white/60">Server Backplane Status</span>
                      <span className="text-green-400">OPTIMAL (100% UPTIME)</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-royal h-full w-full rounded-full" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-white/60">Hardware AMC Health Monitoring</span>
                      <span className="text-green-400">SECURE & CALIBRATED</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-accent-orange h-full w-[95%] rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="bg-[#081525] p-3 rounded-lg border border-white/5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/40">CUSTOMER SATISFACTION</p>
                      <p className="text-lg font-display font-bold text-white mt-0.5">99.4%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40">RESPONSE SLA</p>
                      <p className="text-lg font-display font-bold text-accent-orange mt-0.5">&lt; 1 HOUR</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
