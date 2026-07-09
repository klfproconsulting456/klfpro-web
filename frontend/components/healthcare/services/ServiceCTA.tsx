"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "../ContactModal";

export function ServiceCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-transparent py-20 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-[800] text-[#1C2233] leading-tight mb-6"
          >
            Ready to Optimize Your <span className="text-[#D4A937]">Revenue Cycle?</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5F6B7A] text-[16px] lg:text-[18px] leading-[1.7] mb-10 max-w-3xl mx-auto"
          >
            Partner with KLF Pro Healthcare Solutions to streamline your billing process, improve cash flow, and maximize reimbursements. Contact our team today for a free consultation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 bg-[#D4A937] text-white px-8 h-[54px] rounded-[40px] text-[16px] font-bold hover:bg-[#c49a2a] transition-all duration-300 shadow-[0_12px_30px_rgba(212,169,55,0.25)] hover:-translate-y-1 active:scale-[0.98]"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[#D4A937]/5 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[#FCF8F2] blur-3xl"></div>
      </div>
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
