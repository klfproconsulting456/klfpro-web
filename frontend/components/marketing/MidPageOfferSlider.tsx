"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    key: "personal-loan",
    title: "Get an instant Personal Loan up to",
    highlight: "INR 5,00,000",
    bullets: ["Instant approval in minutes", "Flexible repayment options", "Minimal documentation"],
    cta: "Apply Now",
    href: "/loans/personal-loan",
    image: "/images/marketing/personal-loan-slide.jpg",
    gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
  },
  {
    key: "education-loan",
    title: "Plan your Education Loan",
    highlight: "with confidence",
    bullets: ["Quick support for study abroad", "Competitive rates from top banks", "Fast online process"],
    cta: "Explore Now",
    href: "/loans/education",
    image: "/images/marketing/education-loan-slide.jpg",
    gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
  },
  {
    key: "credit-score",
    title: "Check your Credit Score",
    highlight: "for FREE",
    bullets: ["No impact on your score", "Detailed report and insights", "Instant online check"],
    cta: "Get Free Credit Score",
    href: "/credit-score",
    image: "/images/marketing/credit-report-slide.jpg",
    gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
  }
] as const;

export function MidPageOfferSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 140, damping: 26, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 140, damping: 26, mass: 0.7 });

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4600);
    return () => clearInterval(timer);
  }, [paused]);

  const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;
  const visibleSlides: Array<{ index: number; position: "left" | "center" | "right" }> = [
    { index: prevIndex, position: "left" },
    { index: activeIndex, position: "center" },
    { index: nextIndex, position: "right" }
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#FAF6EE] pb-12 pt-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
        mouseX.set(x);
        mouseY.set(y);
      }}
    >
      <div className="pointer-events-none absolute inset-0 klf-grid-bg opacity-30" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="h-6 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-5 md:px-6 [perspective:1200px]">
        <div className="relative mt-8 h-[360px] md:h-[330px]">
          <motion.div style={{ x: smoothX, y: smoothY }}>
            <AnimatePresence initial={false} mode="sync">
              {visibleSlides.map(({ index, position }) => {
                const slide = slides[index];
                const isCenter = position === "center";
                const xValue = position === "left" ? "-60%" : position === "right" ? "60%" : "0%";
                const rotateY = position === "left" ? 15 : position === "right" ? -15 : 0;
                return (
                  <motion.article
                  key={`${slide.key}-${position}`}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 56 : -56,
                    scale: 0.88,
                    rotateY: direction > 0 ? 8 : -8
                  }}
                  animate={{
                    left: "50%",
                    x: xValue,
                    opacity: isCenter ? 1 : 0.5,
                    scale: isCenter ? 1 : 0.85,
                    rotateY,
                    filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                    zIndex: isCenter ? 20 : 10
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -62 : 62,
                    scale: 0.86,
                    rotateY: direction > 0 ? -8 : 8
                  }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => {
                    if (isCenter) return;
                    setDirection(position === "left" ? -1 : 1);
                    setActiveIndex(index);
                  }}
                  className={`absolute top-0 w-full max-w-[840px] -translate-x-1/2 overflow-hidden rounded-2xl border bg-gradient-to-r ${slide.gradient} ${
                    isCenter
                      ? "cursor-default border-[#D4AF37]/30 shadow-[0_0_90px_-28px_rgba(212,175,55,0.34)]"
                      : "cursor-pointer border-[#0A1128]/15 shadow-[0_0_50px_-32px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="grid md:grid-cols-2 h-full items-center">
                    <div className="relative z-10 flex flex-col gap-4 px-6 py-7 text-[#0A1128] md:px-9 md:py-8">
                      <h3 className="text-[20px] font-bold leading-[1.2] md:text-[28px] lg:text-[32px]">
                        {slide.title}{" "}
                        {slide.highlight.toUpperCase().includes("FREE") ? (
                          <motion.span
                            className="bg-gradient-to-r from-[#D4AF37] via-[#fde68a] to-[#D4AF37] bg-[length:200%_100%] bg-clip-text text-transparent"
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            {slide.highlight}
                          </motion.span>
                        ) : (
                          <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]">{slide.highlight}</span>
                        )}
                      </h3>

                      <ul className="space-y-2 text-[13px] text-[#0A1128] md:text-[15px]">
                        {slide.bullets.map((bullet, bulletIdx) => (
                          <motion.li
                            key={bullet}
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: isCenter ? 0.18 + bulletIdx * 0.2 : 0.05 }}
                            className="flex items-center gap-2"
                          >
                            <motion.span
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.24, delay: isCenter ? 0.2 + bulletIdx * 0.2 : 0.05 }}
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20"
                            >
                              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                            </motion.span>
                            <motion.span
                              animate={isCenter ? { textShadow: ["0 0 0 rgba(212,175,55,0)", "0 0 10px rgba(212,175,55,0.34)", "0 0 0 rgba(212,175,55,0)"] } : {}}
                              transition={{ duration: 0.65, delay: isCenter ? 0.22 + bulletIdx * 0.2 : 0 }}
                            >
                              {bullet}
                            </motion.span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div whileTap={{ scale: 0.98 }} className="mt-2 w-fit">
                        <Link
                          href={slide.href}
                          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] via-[#f7b801] to-[#fde68a] px-7 py-2.5 text-[14px] font-semibold text-zinc-900 shadow-[0_0_24px_rgba(212,175,55,0.34)] transition hover:scale-105 hover:shadow-[0_0_34px_rgba(212,175,55,0.48)]"
                        >
                          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-500 group-hover:translate-x-full" />
                          {slide.cta} <span aria-hidden>{">"}</span>
                        </Link>
                      </motion.div>
                    </div>

                    <div className="relative hidden h-full min-h-[220px] md:block">
                      <motion.div
                        className="absolute inset-0"
                        animate={isCenter ? { y: [-8, 8, -8], scale: [1, 1.02, 1] } : { y: 0, scale: 1 }}
                        transition={isCenter ? { duration: 4.8, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
                      >
                        <Image src={slide.image} alt="" fill className="object-cover object-center" sizes="400px" />
                      </motion.div>
                    </div>
                  </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {slides.map((slide, idx) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              aria-label={`Open ${slide.key}`}
              className="group relative h-2 w-20 overflow-hidden rounded-full bg-[#0A1128]/15"
            >
              {idx === activeIndex ? (
                <motion.span
                  key={slide.key + activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.6, ease: "linear" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#fde68a]"
                />
              ) : (
                <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-white/40 transition-all duration-300 group-hover:w-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


