"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Bot, BarChart3, Lock, Handshake, ShieldCheck, Clock, Users } from "lucide-react";

const features = [
  {
    title: "AI-Enhanced RCM",
    description: "Intelligent automation and technology-driven workflows designed to improve accuracy, reduce denials, and accelerate reimbursements.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "Revenue Optimization",
    description: "Strategic, end-to-end RCM solutions that strengthen cash flow, minimize revenue leakage, and maximize financial performance.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Secure & HIPAA Compliant",
    description: "Enterprise-grade security and compliant processes to safeguard protected health information with confidence.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Your Growth Partner",
    description: "Committed to building lasting partnerships through transparency, accountability, and customized revenue cycle solutions.",
    icon: <Handshake className="w-6 h-6" />,
  },
];

const stats = [
  {
    value: "99%",
    label: "Claims Accuracy",
    icon: <ShieldCheck className="w-8 h-8 text-[#D4A937]" />,
  },
  {
    value: "HIPAA",
    label: "Secure & Compliant",
    icon: <Lock className="w-8 h-8 text-[#D4A937]" />,
  },
  {
    value: "Faster",
    label: "Reimbursements",
    icon: <Clock className="w-8 h-8 text-[#D4A937]" />,
  },
  {
    value: "250+",
    label: "Healthcare Providers",
    icon: <Users className="w-8 h-8 text-[#D4A937]" />,
  },
];

export function HealthcareWhyChoose() {
  return (
    <section className="relative bg-[#FCF8F2] py-14 lg:py-[76px] overflow-hidden">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Medical Background Image */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "url('/images/medical-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        {/* Soft blush pink gradient blobs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[0%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EAD1A6] opacity-[0.03] blur-[100px]"
        />
        <motion.div
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#F3E0C0] opacity-[0.04] blur-[120px]"
        />

        {/* Subtle Medical Cross Pattern */}
        <motion.div
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[5%] opacity-[0.25]"
        >
          <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
            <path d="M16 0H24V40H16V0Z" fill="#E5BA73" />
            <path d="M40 16V24H0V16H40Z" fill="#E5BA73" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -90, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[25%] right-[8%] opacity-[0.20]"
        >
          <svg width="100" height="100" viewBox="0 0 40 40" fill="none">
            <path d="M16 0H24V40H16V0Z" fill="#E5BA73" />
            <path d="M40 16V24H0V16H40Z" fill="#E5BA73" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-[880px] mx-auto mb-8 lg:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center justify-center bg-[#E5BA73]/20 rounded-full px-5 py-1.5 mb-4"
          >
            <span className="text-[12px] font-bold text-[#D4A937] tracking-widest uppercase">
              WHY CHOOSE KLFPRO HEALTHCARE
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-[32px] sm:text-[38px] lg:text-[42px] font-[900] text-[#1C2233] leading-[1.1] tracking-tight mb-5"
          >
            Why Choose Us
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="relative px-6 sm:px-8 max-w-[800px]"
          >
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] leading-[1.75] font-medium italic relative">
              <span className="absolute -left-3 -top-2 text-4xl text-[#D4A937]/30 font-serif">"</span>
              Healthcare organizations need more than an outsourcing partner—they need a trusted RCM partner committed to transparency, accuracy, and measurable results. At KLF Pro Healthcare Solutions, we combine intelligent technology, streamlined workflows, and customized revenue cycle strategies to optimize financial performance while allowing providers to focus on exceptional patient care.
              <span className="absolute -right-3 -bottom-4 text-4xl text-[#D4A937]/30 font-serif">"</span>
            </p>
          </motion.div>
        </div>

        {/* Main Content Layout: Left Image (58%) + Right Features (42%) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[58%] flex justify-center"
          >
            <div className="relative w-full max-h-[640px] lg:h-[620px] rounded-[24px] overflow-hidden shadow-[0_16px_50px_rgba(229,186,115,0.15)] bg-white border border-[#F3E0C0]">
              {/* Using object-cover to elegantly crop horizontally if needed, keeping subject centered */}
              <Image 
                src="/images/why-choose-us.jpg"
                alt="Why Choose KLFPRO Healthcare"
                width={800}
                height={620}
                className="w-full h-full object-cover object-center rounded-[24px]"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="w-full lg:w-[42%] flex flex-col gap-4 lg:gap-[18px]">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-row items-center h-[140px] lg:h-[155px] p-6 lg:p-[28px] bg-[#FFFFFF] border border-[#F3E0C0] rounded-[20px] transition-all duration-300 hover:bg-[#FCF8F2] hover:shadow-[0_12px_35px_rgba(229,186,115,0.15)] cursor-pointer"
              >
                {/* Left: Soft Pink Circular Icon */}
                <div className="flex-shrink-0 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full bg-[#FDF3DE] flex items-center justify-center text-[#E5BA73] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#F3E0C0] mr-5">
                  {feature.icon}
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 pr-4">
                  <h3 className="text-[17px] sm:text-[19px] font-[800] text-[#1C2233] mb-1.5 tracking-tight group-hover:text-[#D4A937] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#5F6B7A] leading-[1.5]">
                    {feature.description}
                  </p>
                </div>

                </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 lg:mt-16 bg-white/80 backdrop-blur-md border border-[#F3E0C0] rounded-[24px] py-6 px-6 lg:py-8 lg:px-10 shadow-[0_12px_40px_rgba(229,186,115,0.1)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F3E0C0]">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center gap-4 ${index > 0 && index % 2 !== 0 ? "pt-6 lg:pt-0" : index > 1 ? "pt-6 lg:pt-0" : ""}`}
              >
                <div className="flex-shrink-0 w-[44px] h-[44px] rounded-full bg-[#FDF3DE] flex items-center justify-center">
                  {/* Clone icon and override size classes to make it exactly 20px (w-5 h-5) */}
                  {React.cloneElement(stat.icon, { className: "w-5 h-5 text-[#D4A937]" })}
                </div>
                <div className="flex flex-col">
                  <span className="text-[20px] sm:text-[24px] font-[900] text-[#1C2233] leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-medium text-[#5F6B7A]">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
