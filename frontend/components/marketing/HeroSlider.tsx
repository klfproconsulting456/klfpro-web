"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const slides = [
  "/images/marketing/hero-consultant.png",
  "/images/marketing/hero-family.png",
  "/images/marketing/hero-business.png",
  "/images/marketing/hero-property.jpg"
] as const;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const changeSlide = (next: number) => {
    const normalized = (next + slides.length) % slides.length;
    setDirection(normalized > active ? 1 : -1);
    setActive(normalized);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = useMemo(() => slides[active], [active]);

  return (
    <section
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[#FAF6EE] pt-[72px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 top-[72px]"
          >
            <Image
              src={current}
              alt="KLFPRO fintech background slide"
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle overlay to soften the image slightly for text readability, but keeping it natural */}
      <div className="pointer-events-none absolute inset-0 bg-white/20" />
      
      {/* Center glow specifically behind the text to ensure #0A1128 is always readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(250,246,238,0.85),transparent_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.15),transparent_38%),radial-gradient(circle_at_80%_68%,rgba(30,64,175,0.15),transparent_42%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0.5px,transparent_1px)] [background-size:3px_3px] mix-blend-screen opacity-10" />

      {/* Patriotic Independence Day Waving Flag */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[100px] sm:h-[140px] w-full overflow-hidden leading-none opacity-95">
        {/* Saffron Wave */}
        <motion.div
          className="absolute inset-0 top-[0px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23FF9933'/%3E%3C/svg%3E")`,
            backgroundSize: "1000px 100%"
          }}
          animate={{ backgroundPositionX: ["0px", "-1000px"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
        />
        {/* White Wave */}
        <motion.div
          className="absolute inset-0 top-[20px] sm:top-[30px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
            backgroundSize: "1000px 100%"
          }}
          animate={{ backgroundPositionX: ["0px", "-1000px"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        />
        {/* Green Wave */}
        <motion.div
          className="absolute inset-0 top-[40px] sm:top-[60px]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23138808'/%3E%3C/svg%3E")`,
            backgroundSize: "1000px 100%"
          }}
          animate={{ backgroundPositionX: ["0px", "-1000px"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1240px] items-center justify-center px-4 pb-20 pt-24 text-center md:px-6">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl">
          <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#0A1128]/25 bg-[#FAF6EE]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A1128] backdrop-blur-md shadow-sm">
            KLFPRO CONSULTING
          </span>
          <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl text-[#0A1128] drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]">
            Your Financial Journey, Simplified
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#0A1128] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]">
            Smart comparisons, faster approvals, and better financial decisions.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="#eligibility"
              className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-7 py-3 font-semibold text-zinc-900 shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#products"
              className="rounded-full border border-white/30 bg-[#0A1128]/5 px-7 py-3 font-semibold text-[#0A1128] backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/12"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-[#FDFBF7]/30 px-3 py-2 text-[#0A1128] backdrop-blur md:block"
        onClick={() => changeSlide(active - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-[#FDFBF7]/30 px-3 py-2 text-[#0A1128] backdrop-blur md:block"
        onClick={() => changeSlide(active + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s}
            type="button"
            onClick={() => changeSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === active ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/45 hover:bg-white/70"}`}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#0A1128]/70"
        animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-hidden
      >
        ↓
      </motion.div>
    </section>
  );
}
