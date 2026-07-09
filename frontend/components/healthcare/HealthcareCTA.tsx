"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "./ContactModal";

export function HealthcareCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#F8F9FA] py-8 lg:py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-[1240px]">
        {/* Main CTA Container with Image Background */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-[24px] overflow-hidden bg-white border border-gray-100"
        >
          {/* Medical Background Image */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            style={{
              backgroundImage: "url('/images/medical-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          />

          {/* Very soft white gradient overlay to ensure perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-white/60 pointer-events-none" />

          {/* Content Area */}
          <div className="relative z-10 py-10 lg:py-12 px-6 sm:px-12 flex flex-col items-center text-center">
            
            <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] font-[900] text-[#1C2233] leading-[1.1] tracking-tight mb-4">
              Ready to Optimize Your <br className="hidden sm:block" />
              <span className="text-[#D4A937]">Revenue Cycle?</span>
            </h2>

            <p className="text-[15px] lg:text-[17px] text-[#5F6B7A] font-semibold tracking-wide mb-8 max-w-[600px]">
              AI-Driven RCM. Better Revenue. Better Care.
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center gap-2 bg-[#D4A937] text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-full font-[800] text-[14px] lg:text-[15px] tracking-[0.05em] uppercase overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(212,169,55,0.3)]"
            >
              {/* Button Hover Glow */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              
              <span className="relative z-10">Let's Talk</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </motion.div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
