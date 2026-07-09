"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareersHero() {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-[1440px] px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-[#D4A937]"></div>
            <span className="text-[#D4A937] font-bold text-xs tracking-[0.2em] uppercase">
              Careers at KLFPRO
            </span>
            <div className="w-8 h-[2px] bg-[#D4A937]"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-[800] leading-[1.1] tracking-tight mb-6">
            <span className="block text-[#1C2233] mb-2">Build the Future of</span>
            <span className="block text-[#D4A937]">Healthcare Solutions</span>
          </h1>
          
          <p className="mt-6 text-[#5F6B7A] text-[16px] lg:text-[18px] lg:leading-[28px] mb-10">
            Join a passionate team dedicated to transforming revenue cycle management. We empower our employees with continuous learning, robust benefits, and a culture of innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#1C2233] text-white px-8 h-[50px] rounded-[40px] text-[15px] font-semibold hover:bg-[#D4A937] transition-all duration-300 shadow-[0_12px_30px_rgba(28,34,51,0.15)] hover:-translate-y-0.5 active:scale-[0.97] w-full sm:w-auto"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
