"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HealthcareHero() {
  return (
    <section 
      className="relative w-full overflow-hidden bg-cover bg-[position:65%_30%] bg-no-repeat min-h-[92vh] flex items-center" 
      style={{ 
        backgroundImage: "url('/images/home-hero.jpg')"
      }}
    >
      
      {/* Absolute Gradient Overlay: Bottom-to-Top on mobile, Left-to-Right on Desktop */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#FCF8F2]/95 sm:via-[#FCF8F2]/75 to-transparent sm:to-transparent sm:from-10% sm:via-40% sm:to-60%"
      />

      {/* Main flex container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        
        {/* Left Content Area (Single Column now) */}
        <div className="w-full flex flex-col justify-center px-6 sm:px-10 lg:pl-[100px] xl:pl-[120px] py-12 lg:pb-[120px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[620px]"
          >

            <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px] font-[900] leading-[0.95] tracking-tight text-[#1C2233]">
              Empowering<br />
              Healthcare Providers
            </h1>
            
            <div className="flex items-center gap-4 my-2 max-w-[380px]">
              <div className="h-[1px] flex-1 bg-[#D4A937]"></div>
              <span className="text-[#4A5568] font-normal text-[20px]">with</span>
              <div className="h-[1px] flex-1 bg-[#D4A937]"></div>
            </div>

            <h1 className="text-[32px] sm:text-[38px] lg:text-[42px] xl:text-[46px] font-[900] leading-[0.95] tracking-tight text-[#D4A937]">
              Next-Gen Revenue<br />
              Solutions
            </h1>
            
            <div className="mt-3">
              <p className="text-[#4A5568] text-[14px] lg:text-[15px] leading-[1.65] font-medium">
                At KLF Pro Healthcare Solutions, we provide comprehensive RCM services that empower healthcare providers to reduce revenue leakage and optimize patient care. Leveraging AI-driven insights and end-to-end revenue cycle management, we help you streamline operations, minimize bottlenecks, and keep your focus on what matters most—your patients.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 bg-[#D4A937] text-white px-7 h-[46px] rounded-[40px] text-[14px] font-bold hover:bg-[#C89A28] transition-all shadow-[0_8px_20px_rgba(212,169,55,0.25)] hover:shadow-[0_12px_25px_rgba(212,169,55,0.35)]"
              >
                Our Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom waves - positioned at actual bottom of section */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1440 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[60px] sm:h-[70px] lg:h-[80px]"
        >
          {/* Faint outer wave with reduced opacity for premium blend */}
          <path opacity="0.15" d="M0 200V120C180 80 320 180 720 160C1120 140 1300 40 1440 0V200H0Z" fill="#D4A937" />
          {/* Middle wave */}
          <path opacity="0.20" d="M0 200V150C200 120 400 190 720 180C1040 170 1250 80 1440 40V200H0Z" fill="#D4A937" />
          {/* Bottom solid wave to blend with next section (which has bg-[#FCF8F2]) */}
          <path d="M0 200V180C250 160 500 220 800 190C1100 160 1300 100 1440 70V200H0Z" fill="#FCF8F2" />
        </svg>
      </div>
    </section>
  );
}
