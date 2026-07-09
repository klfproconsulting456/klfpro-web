"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ContactModal } from "../ContactModal";

export default function ServicesHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col justify-center bg-[#FAFAFA] overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-hero.jpg"
          alt="Healthcare professionals collaborating"
          fill
          quality={100}
          sizes="100vw"
          className="object-cover object-right-top md:object-[60%_center]"
          priority
        />
        {/* Gradients to blend image with the #FAFAFA background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] from-20% via-[#FAFAFA]/80 via-50% to-transparent md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] from-0% via-[#FAFAFA]/40 via-30% to-transparent md:hidden" />
      </div>

      {/* Container for content */}
      <div className="mx-auto max-w-[1440px] px-6 flex flex-col items-start py-16 lg:py-20 z-10 relative w-full">
        {/* Left Content */}
        <div className="w-full md:w-[65%] lg:w-[55%] flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#D4A937] font-bold text-xs tracking-[0.2em] uppercase">
              Our Services
            </span>
            <div className="w-10 h-[2px] bg-[#D4A937]"></div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[48px] font-[800] leading-[1.2] lg:leading-[56px] tracking-tight mb-6">
            <span className="block text-[#1C2233] mb-1">Comprehensive Solutions</span>
            <span className="block text-[#D4A937]">for Healthcare Businesses</span>
          </h1>
          <div className="mb-8 max-w-[560px] pl-5 border-l-2 border-[#D4A937]">
            <p className="text-[#5F6B7A] text-[15px] lg:text-[16px] lg:leading-[26px] italic mb-3">
              "KLFPRO has completely transformed our revenue cycle. Their premium healthcare solutions and dedicated support have been invaluable to our financial growth."
            </p>
            <p className="text-[#1C2233] text-[14px] font-[700]">
              — Dr. Sarah Jenkins, Chief Medical Officer
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 bg-[#1C2233] text-white px-7 h-[44px] rounded-[40px] text-[14px] font-semibold hover:bg-[#1C2233]/90 transition-all duration-300 group shadow-[0_12px_30px_rgba(28,34,51,0.15)] hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
