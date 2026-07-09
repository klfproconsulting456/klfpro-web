"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function AboutWhoWeAre() {
  return (
    <section className="bg-transparent py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Who We Are text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col pr-0 lg:pr-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-8 bg-[#D4A937]"></div>
              <h2 className="text-sm lg:text-base font-bold tracking-[0.15em] text-[#D4A937] uppercase">
                Who We Are
              </h2>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-[800] text-[#1C2233] leading-[1.2] mb-6">
              Empowering Healthcare Through Smarter Revenue Cycle Solutions
            </h3>
            
            <div className="space-y-5 text-[#5F6B7A] text-[15px] lg:text-[16px] leading-[1.7]">
              <p>
                At KLF Pro Healthcare Solutions, we help healthcare providers strengthen their financial performance with reliable, technology-driven Revenue Cycle Management (RCM) services. By combining industry expertise, innovative solutions, and a client-first approach, we simplify complex billing processes, improve operational efficiency, and maximize reimbursements.
              </p>
              <p>
                We believe in building long-term partnerships based on trust, transparency, and measurable results. Our team works closely with every client to understand their unique challenges, develop customized strategies, and deliver solutions that support sustainable financial growth—allowing providers to focus on delivering exceptional patient care.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Mission and Vision Cards */}
          <div className="flex flex-col gap-5 lg:gap-6 mt-10 lg:mt-0">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#FCF8F2] rounded-2xl p-6 sm:p-7 border border-[#F3E0C0] shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A937]/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-[#F3E0C0] text-[#D4A937]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-[800] text-[#1C2233]">Our Mission</h4>
              </div>
              <p className="text-[#5F6B7A] text-[14px] leading-[1.6] relative z-10">
                To empower healthcare organizations with accurate, efficient, and innovative Revenue Cycle Management solutions that optimize revenue, ensure compliance, and enhance operational excellence.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#F3E0C0] shadow-[0_8px_30px_rgba(28,34,51,0.04)] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(28,34,51,0.08)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A937]/5 rounded-bl-full -mr-6 -mt-6 transition-transform group-hover:scale-110"></div>
              <div className="flex items-center gap-4 mb-3 relative z-10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FCF8F2] border border-[#F3E0C0] text-[#D4A937]">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-[800] text-[#1C2233]">Our Vision</h4>
              </div>
              <p className="text-[#5F6B7A] text-[14px] leading-[1.6] relative z-10">
                To become a trusted global partner in healthcare revenue cycle management by delivering exceptional service, advanced technology, and measurable financial success—enabling healthcare providers to focus on improving patient outcomes.
              </p>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
