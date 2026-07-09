"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Medical Billing",
    slug: "medical-billing",
    description: "Accurate and compliant medical billing services to optimize revenue and reduce compliance risks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Patient Access Management",
    slug: "patient-access-management",
    description: "Create a smooth patient journey from the very first interaction and streamline front-end operations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Accounts Receivable",
    slug: "accounts-receivable",
    description: "Aggressive accounts receivable management to resolve outstanding claims and maximize collections.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Revenue Cycle Management",
    slug: "revenue-cycle-management",
    description: "End-to-end Revenue Cycle Management ensuring financial health from patient registration to final payment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Collections & Denial Management",
    slug: "collections-and-denial-management",
    description: "Systematic identification, root cause analysis, and rapid appeal of denied claims to recover lost revenue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Medical Coding Services",
    slug: "medical-coding-services",
    description: "Enhance coding accuracy, maintain regulatory compliance, and maximize reimbursements with our certified experts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  }
];

export function HealthcareServices() {
  const [isMounted, setIsMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animateScroll = useCallback(() => {
    if (scrollRef.current && !isPaused.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      if (scrollLeft >= scrollWidth / 3) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += 1;
      }
    }
    animationRef.current = requestAnimationFrame(animateScroll);
  }, []);

  useEffect(() => {
    if (isMounted) {
      animationRef.current = requestAnimationFrame(animateScroll);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isMounted, animateScroll]);

  const handleManualScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      isPaused.current = true;
      const scrollAmount = 400; // slightly wider cards here
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });

      setTimeout(() => {
        isPaused.current = false;
      }, 2500);
    }
  };

  if (!isMounted) return null;

  // Render 3 identical sets of cards for seamless infinite scrolling
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section className="bg-[#FFFFFF] py-16 sm:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-[1440px] px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <div className="flex items-center w-full max-w-md gap-4">
            <div className="flex-1 h-px bg-[#D4A937]" />
            <h2 className="text-sm sm:text-base font-bold tracking-[0.15em] text-[#1C2233] whitespace-nowrap uppercase">
              Our Services
            </h2>
            <div className="flex-1 h-px bg-[#D4A937]" />
          </div>
          <div className="mt-3">
            <svg
              className="w-4 h-4 text-[#D4A937]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </div>
          <p className="mt-6 max-w-2xl text-center text-sm sm:text-base leading-relaxed text-[#5F6B7A]">
            We provide end-to-end healthcare business solutions designed to optimize your financial performance, ensure compliance, and streamline your entire revenue cycle.
          </p>
        </div>

        {/* Continuous Slider Container with Buttons */}
        <div 
          className="relative w-full max-w-[1280px] mx-auto group"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {/* Edge Fades for smooth entry/exit */}
          <div className="absolute top-0 bottom-0 left-0 w-[40px] lg:w-[100px] bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-[40px] lg:w-[100px] bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
          
          {/* Left Arrow */}
          <button 
            onClick={() => handleManualScroll("left")}
            className="absolute left-[10px] lg:left-[20px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F3E0C0] shadow-[0_4px_20px_rgba(212,169,55,0.15)] text-[#D4A937] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#FDF3DE]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => handleManualScroll("right")}
            className="absolute right-[10px] lg:right-[20px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F3E0C0] shadow-[0_4px_20px_rgba(212,169,55,0.15)] text-[#D4A937] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#FDF3DE]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Area */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden py-6 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedServices.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[380px]"
              >
                <div className="group/card relative h-full flex flex-col justify-between rounded-xl bg-white border border-[#F3E0C0] p-6 sm:p-8 transition-all duration-300 hover:bg-[#FCF8F2] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 overflow-hidden">
                  
                  {/* Decorative top border highlight on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4A937] scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />

                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-white border border-[#F3E0C0] text-[#D4A937] group-hover/card:bg-[#D4A937]/10 group-hover/card:text-[#D4A937] group-hover/card:border-[#D4A937]/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      {/* Title */}
                      <h4 className="text-base sm:text-lg font-bold text-[#1C2233] group-hover/card:text-[#D4A937] transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#5F6B7A]">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow Link */}
                  <div className="mt-6">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[13px] font-bold text-[#D4A937] uppercase tracking-wider group-hover/card:gap-3 transition-all duration-300"
                    >
                      Explore More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
