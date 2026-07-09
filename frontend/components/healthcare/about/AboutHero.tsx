"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-[88vh] flex flex-col justify-center bg-transparent overflow-hidden">
      
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0 opacity-90"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 30%, black 60%, black 100%)"
        }}
      >
        <Image
          src="/images/about-hero.jpg"
          alt="Healthcare team meeting"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-[70%_center]"
          priority
        />
      </div>

      {/* Mobile-only gradient fallback (since mask-image might hide too much on small screens) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent lg:hidden z-0" />

      {/* Container for content */}
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 flex flex-col items-start py-16 lg:py-20 z-10 relative w-full">
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-[720px]"
          >
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-[800] leading-[1.2] lg:leading-[56px] tracking-tight mb-6">
              <span className="block text-[#1C2233] mb-1">Empowering Healthcare</span>
              <span className="block text-[#1C2233]">Through Smarter <span className="text-[#D4A937]">RCM</span></span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-[#5F6B7A] text-[15px] lg:text-[17px] lg:leading-[28px] max-w-[540px]">
              At KLF Pro Healthcare Solutions, we specialize in comprehensive Revenue Cycle Management (RCM) designed to strengthen your financial performance. We simplify complex billing processes, ensure strict compliance, and accelerate reimbursements, allowing you to focus entirely on delivering exceptional patient care.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-[#1C2233] text-white px-8 h-[48px] rounded-[40px] text-[15px] font-semibold hover:bg-[#D4A937] hover:text-white transition-all duration-300 shadow-[0_12px_30px_rgba(28,34,51,0.15)] hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
