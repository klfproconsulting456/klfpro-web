"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Heart, Code, ShieldCheck, DollarSign, BarChart3, Users, ArrowRight } from "lucide-react";

export default function ServicesCoreGrid() {
  const services = [
    {
      id: "medical-billing",
      title: "Medical Billing Services",
      description: "End-to-end billing solutions to accelerate reimbursements and minimize claim rejections.",
      image: "/images/service-billing.png",
      icon: DollarSign,
    },
    {
      id: "revenue-cycle-management",
      title: "Revenue Cycle Management",
      description: "Comprehensive RCM to optimize your financial performance and streamline operations.",
      image: "/images/service-rcm.png",
      icon: BarChart3,
    },
    {
      id: "collections-and-denial-management",
      title: "Collections & Denial Management",
      description: "Expert handling of denials and rigorous follow-ups to recover lost revenue.",
      image: "/images/service-collections.png",
      icon: ShieldCheck,
    },
    {
      id: "patient-access-management",
      title: "Patient Access Management",
      description: "Seamless front-end operations, from scheduling and registration to insurance verification.",
      image: "/images/service-patient-access.png",
      icon: Users,
    },
    {
      id: "accounts-receivable",
      title: "Accounts Receivable",
      description: "Proactive AR management to reduce Days in AR and improve steady cash flow.",
      image: "/images/service-ar.png",
      icon: Heart,
    },
    {
      id: "medical-coding-services",
      title: "Medical Coding Services",
      description: "Accurate and compliant medical coding by certified experts to ensure optimal reimbursement.",
      image: "/images/service-coding.png",
      icon: Code,
    }
  ];

  return (
    <section id="core-services" className="bg-transparent py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#D4A937]"></div>
            <h2 className="text-xl md:text-2xl lg:text-[26px] font-[800] lg:leading-[34px] text-[#1C2233] uppercase tracking-[1.5px]">
              OUR CORE SERVICES
            </h2>
            <div className="h-[2px] w-12 bg-[#D4A937]"></div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Heart className="w-5 h-5 text-[#D4A937] mb-4" fill="currentColor" />
            <p className="text-[#5F6B7A] max-w-[600px] mx-auto text-[16px] lg:text-[18px] leading-[1.6]">
              Comprehensive healthcare solutions designed to optimize your practice&apos;s financial performance and patient care workflows.
            </p>
          </div>
        </div>

        {/* Side-by-Side Split Grid - 3 Columns for smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                href={`/services/${service.id}`} 
                key={service.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-end h-[420px] sm:h-[460px] bg-[#1C2233] rounded-[32px] overflow-hidden shadow-md hover:shadow-[0_20px_40px_rgba(28,34,51,0.25)] border border-white/10 transition-all duration-300 hover:-translate-y-1.5"
                >
                  
                  {/* Full Background Image */}
                  <Image
                    src={service.image}
                    alt={service.title}
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
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-[20px] sm:text-[24px] font-bold text-white mb-2 leading-tight group-hover:text-[#D4A937] transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[13px] sm:text-[14px] text-white/80 leading-[1.6] line-clamp-3">
                        {service.description}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
