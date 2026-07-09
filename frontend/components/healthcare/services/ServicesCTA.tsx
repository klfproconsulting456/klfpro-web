"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ServicesCTA() {
  return (
    <section className="bg-[#FFFFFF] py-10 px-6 lg:py-[48px]">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl bg-[#1C2233] px-6 py-8 md:px-10 md:py-8 lg:flex lg:items-center lg:justify-between shadow-xl"
        >
          {/* Subtle background abstract shape */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#D4A937]/10 blur-[80px] pointer-events-none" />

          <div className="lg:flex lg:items-center lg:gap-8 relative z-10">
            {/* Dashed Circle with Headset Icon */}
            <div className="hidden sm:flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-dashed border-[#D4A937]/50 mb-6 lg:mb-0">
              <svg className="w-6 h-6 text-[#D4A937]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="max-w-xl lg:max-w-[560px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-[800] lg:leading-[36px] text-white tracking-[0.5px]">
                Ready to <span className="text-[#D4A937]">Optimize</span> Your Revenue Cycle?
              </h2>
              <p className="mt-2 text-sm lg:text-[15px] lg:leading-[24px] text-white/70">
                Let's connect and discuss how our solutions can help your healthcare business grow.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8 lg:mt-0 lg:ml-6 shrink-0 relative z-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full lg:rounded-[40px] bg-[#D4A937] px-6 h-[40px] lg:w-[160px] text-sm lg:text-[14px] font-[700] text-white shadow-sm transition-all duration-300 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,169,55,0.25)] hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
