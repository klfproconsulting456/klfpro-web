"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Using basic SVG icons that match the premium look instead of lucide if needed, 
// but lucide-react is already in the project, so we'll use bespoke SVGs for a highly premium feel 
// exactly as requested.

const solutions = [
  {
    title: "Medical Billing Services",
    description: "End-to-end billing solutions to accelerate reimbursements and minimize claim rejections.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    href: "/services/medical-billing",
    image: "/images/service-billing.png"
  },
  {
    title: "Revenue Cycle Management",
    description: "Comprehensive RCM to optimize your financial performance and streamline operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    href: "/services/revenue-cycle-management",
    image: "/images/service-rcm.png"
  },
  {
    title: "Collections & Denial Management",
    description: "Expert handling of denials and rigorous follow-ups to recover lost revenue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    href: "/services/collections-and-denial-management",
    image: "/images/service-collections.png"
  },
  {
    title: "Patient Access Management",
    description: "Seamless front-end operations, from scheduling and registration to insurance verification.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    href: "/services/patient-access-management",
    image: "/images/service-patient-access.png"
  },
  {
    title: "Accounts Receivable",
    description: "Proactive AR management to reduce Days in AR and improve steady cash flow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    href: "/services/accounts-receivable",
    image: "/images/service-ar.png"
  },
  {
    title: "Medical Coding Services",
    description: "Accurate and compliant medical coding by certified experts to ensure optimal reimbursement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    href: "/services/medical-coding-services",
    image: "/images/service-coding.png"
  },
];

export function HealthcareSolutions() {
  return (
    <section className="relative bg-gradient-to-b from-[#FCF8F2] to-[#F9F3E8] py-12 sm:py-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Soft Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Extremely subtle floating circles (<5% opacity) */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#EAD1A6] opacity-[0.05] blur-[80px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#D4A937] opacity-[0.02] blur-[100px]"
        />

        {/* Abstract medical cross */}
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[10%] opacity-[0.02]"
        >
          <svg width="60" height="60" viewBox="0 0 40 40" fill="none">
            <path d="M18 0H22V40H18V0Z" fill="#1C2233" />
            <path d="M40 18V22H0V18H40Z" fill="#1C2233" />
          </svg>
        </motion.div>
      </div>
      {/* Medical Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "url('/images/medical-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[28px] sm:text-[36px] lg:text-[42px] font-[800] text-[#1C2233] leading-[1.15] tracking-tight mb-6"
          >
            Revenue Cycle Solutions Built for Growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#5F6B7A] text-[16px] lg:text-[18px] leading-[1.6]"
          >
            Helping healthcare organizations optimize revenue, reduce claim denials, improve cash flow, and streamline operations through end-to-end Revenue Cycle Management solutions.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <Link href={solution.href} key={solution.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-end h-[420px] sm:h-[460px] bg-[#1C2233] rounded-[32px] overflow-hidden shadow-md hover:shadow-[0_20px_40px_rgba(28,34,51,0.25)] border border-white/10 transition-all duration-300 hover:-translate-y-1.5"
              >
                
                {/* Full Background Image */}
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Bottom Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent z-0"></div>

                {/* Content Area (Over the dark gradient) */}
                <div className="relative p-6 sm:p-8 flex flex-col justify-end z-10 h-full mt-auto">
                  
                  <div className="mb-6">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4">
                      {solution.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[24px] font-bold text-white mb-2 leading-tight group-hover:text-[#D4A937] transition-colors">
                      {solution.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[13px] sm:text-[14px] text-white/80 leading-[1.6] line-clamp-3">
                      {solution.description}
                    </p>
                  </div>

                  {/* White Full-Width Button */}
                  <div className="w-full">
                    <div className="flex w-full items-center justify-center bg-white text-[#1C2233] border border-transparent px-5 py-3.5 rounded-full text-[14px] sm:text-[15px] font-bold transition-all duration-300 group-hover:bg-[#D4A937] group-hover:text-white group-hover:border-[#D4A937] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                      Explore More
                    </div>
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
