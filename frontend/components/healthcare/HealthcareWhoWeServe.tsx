"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Activity, HeartPulse, Stethoscope, Baby, Syringe, Users, Brain, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const serveCards = [
  {
    id: 1,
    title: "Orthopedics",
    icon: <Activity className="w-5 h-5" />,
    image: "/images/specialties/orthopedics.jpg"
  },
  {
    id: 2,
    title: "Cardiology",
    icon: <HeartPulse className="w-5 h-5" />,
    image: "/images/specialties/cardiology.jpg"
  },
  {
    id: 3,
    title: "Primary Care",
    icon: <Stethoscope className="w-5 h-5" />,
    image: "/images/specialties/primary-care.jpg"
  },
  {
    id: 4,
    title: "Pediatrics",
    icon: <Baby className="w-5 h-5" />,
    image: "/images/specialties/pediatrics.jpg"
  },
  {
    id: 5,
    title: "Anesthesiology",
    icon: <Syringe className="w-5 h-5" />,
    image: "/images/specialties/anesthesiology.jpg"
  },
  {
    id: 6,
    title: "OB/GYN",
    icon: <Users className="w-5 h-5" />,
    image: "/images/specialties/ob-gyn.jpg"
  },
  {
    id: 7,
    title: "Neurology",
    icon: <Brain className="w-5 h-5" />,
    image: "/images/specialties/neurology.jpg"
  },
  {
    id: 8,
    title: "Ophthalmology",
    icon: <Eye className="w-5 h-5" />,
    image: "/images/specialties/ophthalmology.jpg"
  },
];

export function HealthcareWhoWeServe() {
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
      // We have 3 identical sets. When we've scrolled exactly 1 set width (scrollWidth / 3),
      // we reset back to 0. This creates a perfectly seamless infinite loop.
      if (scrollLeft >= scrollWidth / 3) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += 1; // Adjust this value for speed (1 is approx 60px/s)
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
      isPaused.current = true; // Pause auto-scroll during manual scroll
      const scrollAmount = 300;
      
      // Calculate new position
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });

      // Resume auto-scroll after the smooth scroll animation completes (approx 500ms)
      // + extra 2 seconds of pause so the user can see what they scrolled to.
      setTimeout(() => {
        isPaused.current = false;
      }, 2500);
    }
  };

  if (!isMounted) return null;

  // Render 3 identical sets of cards for seamless infinite scrolling
  const duplicatedCards = [...serveCards, ...serveCards, ...serveCards];

  return (
    <section className="relative bg-[#FCF8F2] py-16 lg:py-24 overflow-hidden">
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
      
      <div className="relative z-10 mx-auto max-w-[1440px] px-6">
        
        {/* Heading Area */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center justify-center bg-[#E5BA73]/20 rounded-full px-5 py-1.5 mb-4"
          >
            <span className="text-[12px] font-bold text-[#D4A937] tracking-widest uppercase">
              WHO WE SERVE
            </span>
          </motion.div>

          <div className="flex items-center w-full max-w-2xl gap-4 mb-5">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#D4A937]/50" />
            <h2 className="text-[20px] sm:text-[24px] lg:text-[32px] font-[900] lg:leading-[1.2] tracking-tight text-[#1C2233] whitespace-nowrap">
              Healthcare Specialties We Support
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#D4A937]/50" />
          </div>
          
          <div className="relative px-6 max-w-[700px] mt-2">
            <p className="text-[16px] lg:text-[18px] text-[#4A5568] leading-[1.75] font-medium italic">
              Customized AI-driven Revenue Cycle Management solutions for providers across diverse medical specialties.
            </p>
          </div>
        </div>

        {/* Continuous Slider Container with Buttons */}
        <div 
          className="relative w-full max-w-[1240px] mx-auto group"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {/* Edge Fades for smooth entry/exit */}
          <div className="absolute top-0 bottom-0 left-0 w-[40px] lg:w-[100px] bg-gradient-to-r from-[#FCF8F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-[40px] lg:w-[100px] bg-gradient-to-l from-[#FCF8F2] to-transparent z-10 pointer-events-none" />
          
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
            className="flex gap-5 lg:gap-[24px] overflow-x-hidden py-6 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-[260px] lg:w-[280px] lg:h-[300px] flex flex-col items-center rounded-xl bg-[#FFFFFF] border border-[#F3E0C0] p-3 transition-all duration-300 hover:bg-[#FCF8F2] hover:shadow-[0_12px_35px_rgba(229,186,115,0.25)] hover:-translate-y-1"
              >
                {/* Image Area with premium overlay */}
                <div className="relative w-full h-[160px] sm:h-[180px] lg:h-[190px] rounded-xl bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                  />
                  {/* Fade from bottom to blend image into the card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FCF8F2]/90 via-transparent to-transparent" />

                  {/* Icon badge overlay at bottom center */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-[#D4A937] transition-colors duration-300 z-10">
                    {card.icon}
                  </div>
                </div>

                {/* Content below image */}
                <div className="mt-6 flex flex-col items-center justify-center gap-1 w-full px-2 text-center">
                  <h3 className="text-[17px] lg:text-[19px] font-[800] text-[#1C2233] tracking-tight transition-colors">
                    {card.title}
                  </h3>
                  <div className="h-1 w-10 bg-[#D4A937]/30 rounded-full mt-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
