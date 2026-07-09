"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "../ContactModal";

export default function ServicesOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-transparent py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A937]/30 bg-[#D4A937]/10 px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#D4A937]"></span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#D4A937]">
                End-to-End Solutions
              </span>
            </div>
            
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold text-[#1C2233] leading-[1.1] mb-6">
              Complete Revenue Cycle Management <span className="text-[#D4A937]">Services</span>
            </h2>
            
            <p className="text-[#5F6B7A] text-[16px] sm:text-[18px] leading-[1.7] mb-8 max-w-[600px]">
              Empowering healthcare organizations with intelligent, technology-driven RCM solutions that optimize revenue, ensure compliance, and improve operational performance.
            </p>

            <div className="flex flex-col gap-4">
              {["Optimize Revenue", "Ensure Compliance", "Improve Performance"].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A937]" />
                  <span className="text-[15px] font-semibold text-[#1C2233]">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Banner Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-[#FDF3DE] rounded-full blur-[80px] opacity-60 z-0"></div>

            <div className="relative z-10 bg-white rounded-3xl p-8 sm:p-12 border border-[#F3E0C0] shadow-[0_20px_60px_rgba(28,34,51,0.08)] flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#FCF8F2] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#D4A937]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
              </div>
              
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#1C2233] mb-4">
                Not sure where to begin?
              </h3>
              
              <p className="text-[#5F6B7A] text-[15px] sm:text-[16px] leading-[1.6] mb-8 max-w-[400px]">
                Our RCM team will review your procedures and uncover the top areas that can deliver the greatest impact.
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 bg-[#1C2233] text-white px-8 h-[54px] rounded-full text-[15px] font-bold hover:bg-[#D4A937] transition-all duration-300 w-full sm:w-auto hover:shadow-[0_10px_20px_rgba(212,169,55,0.2)]"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
