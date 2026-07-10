"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ContactModal } from "../ContactModal";

interface ServiceDetailHeroProps {
  title: string;
  heading: string;
  description: string;
  heroImage?: string;
}

  export function ServiceDetailHero({ title, heading, description, heroImage = "/images/service-billing-hero.jpg" }: ServiceDetailHeroProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <>
      <section className="relative w-full min-h-[450px] lg:min-h-[550px] flex flex-col justify-center overflow-hidden bg-[#FAFAFA]">
        
        {/* Background Image - Centered to show more of the subject */}
        <Image
          src={heroImage}
          alt={title}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover object-center z-0"
          priority
        />

      {/* Very tight Light Gradient Overlay: Only covers the left side for text readability, 
          leaving the main image on the right completely clear and in normal color */}
      <div className="absolute inset-0 bg-gradient-to-r from-white from-10% via-white/75 via-35% to-transparent to-55% z-0"></div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-12 lg:py-20 flex flex-col justify-center">
        
        <div className="max-w-[650px] -mt-4 lg:-mt-8">
          {/* Small Yellow Accent Header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="text-[#D4A937] font-bold text-[13px] tracking-[0.15em] uppercase">
              {title}
            </span>
            <div className="w-12 h-[2px] bg-[#D4A937]"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[48px] font-extrabold text-[#1C2233] leading-[1.15] mb-6"
          >
            {heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg lg:text-[18px] text-[#5F6B7A] leading-relaxed max-w-[550px] mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#1C2233] text-white px-8 h-[48px] rounded-full text-[15px] font-medium hover:bg-[#D4A937] transition-all duration-300 group shadow-[0_12px_30px_rgba(8,20,40,0.15)] hover:-translate-y-0.5">
              Talk to an Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
    
    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
