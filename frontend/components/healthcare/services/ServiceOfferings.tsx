"use client";

import { motion } from "framer-motion";

interface Offering {
  text: string;
  icon: string;
}

interface ServiceOfferingsProps {
  offerings: Offering[];
}

export function ServiceOfferings({ offerings }: ServiceOfferingsProps) {
  return (
    <section className="bg-transparent py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(8,20,40,0.5) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      
      <div className="mx-auto max-w-[1440px] px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C2233] leading-tight"
          >
            Service <span className="text-[#D4A937]">Offerings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[16px] lg:text-[18px] text-[#5F6B7A] max-w-2xl mx-auto"
          >
            Explore our comprehensive suite of tailored solutions designed to optimize your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-2xl p-6 sm:p-8 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] hover:shadow-[0_15px_35px_rgba(212,169,55,0.15)] hover:-translate-y-1 transition-all duration-300 bg-white/20 backdrop-blur-xl flex flex-col h-full overflow-hidden"
            >
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A937]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#D4A937]/20 transition-colors duration-500"></div>

              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D4A937] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl z-10" />
              
              <div className="flex flex-col items-center text-center gap-4 flex-1 relative z-10">
                <div className="flex items-center justify-center text-5xl sm:text-6xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 drop-shadow-sm text-[#1C2233]">
                  {offering.icon}
                </div>
                
                <div className="mt-auto w-full pt-4">
                  <div className="inline-flex w-full items-center justify-center bg-[#D4A937] text-white border border-[#D4A937] px-4 py-3.5 rounded-full text-[14px] sm:text-[15px] font-bold group-hover:bg-white group-hover:text-[#D4A937] transition-all duration-300 shadow-sm">
                    {offering.text}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
