"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type StepItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  desktopPositionClass: string;
  align: "left" | "right";
};

const steps: StepItem[] = [
  {
    id: "01",
    title: "Eligibility",
    description: "Tell us your requirement and complete quick details.",
    icon: "◉",
    desktopPositionClass: "left-[7.5%] top-[96px]",
    align: "left"
  },
  {
    id: "02",
    title: "Compare",
    description: "AI matched offers based on your profile and goals.",
    icon: "◍",
    desktopPositionClass: "right-[4%] top-[114px]",
    align: "right"
  },
  {
    id: "03",
    title: "Apply",
    description: "Digital bank application complete digitally.",
    icon: "◈",
    desktopPositionClass: "left-[9.5%] top-[328px]",
    align: "left"
  },
  {
    id: "04",
    title: "Disbursement",
    description: "Get quick sanction and smooth fund release.",
    icon: "▦",
    desktopPositionClass: "right-[8%] top-[410px]",
    align: "right"
  }
];

const flowPath = "M118 128 H846 C906 128 934 156 934 198 C934 240 906 268 846 268 H278 C232 268 214 297 214 350 C214 404 232 436 278 436 H900";

export function ProcessFlow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 38%"]
  });
  const rawPathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = useSpring(rawPathProgress, { stiffness: 120, damping: 28, mass: 0.4 });
  const pathOpacity = useTransform(pathLength, [0, 0.02, 0.08], [0, 0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f1f2f3] py-16 md:py-20"
      aria-label="Process flow"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[length:18px_18px] opacity-50"
      />
      <div className="pointer-events-none absolute left-1/2 top-[60%] hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <div className="flex flex-col items-center gap-2 opacity-[0.08]">
          <span className="select-none text-[128px] font-bold uppercase leading-none tracking-tight text-[#1E293B]">KLFPRO</span>
          <span className="relative h-36 w-36">
            <Image src="/klfpro-mark.png" alt="" fill className="object-contain grayscale" sizes="144px" />
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1170px] px-5 md:px-6">
        <div className="text-center">
          <h2 className="text-[34px] font-semibold tracking-tight text-zinc-900 md:text-[48px]">
            Easy. Convenient <span className="text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.35)]">Quick.</span>
          </h2>
          <p className="mt-2 text-[15px] text-zinc-700 md:text-[16px]">The simple and quick steps to your loan.</p>
        </div>

        <div className="mt-9 grid gap-4 md:hidden">
          {steps.map((step, idx) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              whileHover={{ scale: 1.02, rotateX: 2, y: -3 }}
              style={{ transformPerspective: 900 }}
              className="rounded-2xl border border-zinc-300/70 bg-white/70 p-4 shadow-lg shadow-zinc-400/10 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-[#D4AF37] shadow-[0_0_0_2px_rgba(212,175,55,0.28)]">
                  {step.icon}
                </span>
                <span className="text-[36px] font-bold leading-none text-zinc-900">{step.id}</span>
              </div>
              <h3 className="mt-2 text-[38px] font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-1.5 max-w-[250px] text-[15px] leading-relaxed text-zinc-700">{step.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="relative mt-10 hidden h-[540px] md:block">
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1170 560" preserveAspectRatio="none">
            <defs>
              <linearGradient id="process-flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="58%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>
            <motion.path
              d={flowPath}
              fill="none"
              stroke="#1e293b"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength, opacity: pathOpacity }}
            />
            <motion.path
              d={flowPath}
              fill="none"
              stroke="url(#process-flow-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength, opacity: pathOpacity }}
            />
          </svg>

          {steps.map((step, idx) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 18, x: step.align === "left" ? -18 : 18 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.42, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, rotateZ: step.align === "left" ? -1.5 : 1.5, y: -4 }}
              style={{ transformPerspective: 1000 }}
              className={`absolute z-10 max-w-[252px] ${step.align === "right" ? "text-right" : "text-left"} ${step.desktopPositionClass}`}
            >
              <div className={`flex items-center gap-3 ${step.align === "right" ? "justify-end" : ""}`}>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-[#D4AF37] shadow-[0_0_0_2px_rgba(212,175,55,0.28)] transition group-hover:shadow-[0_0_0_6px_rgba(212,175,55,0.2)]">
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-full border border-[#D4AF37]/70"
                    animate={{ scale: [1, 1.32], opacity: [0.7, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.24, ease: "easeOut" }}
                  />
                  {step.icon}
                </span>
                <span className="rounded-md bg-[#f1f2f3] px-1.5 text-[52px] font-bold leading-none text-zinc-900">{step.id}</span>
              </div>
              <h3 className="mt-3 text-[42px] font-semibold leading-none text-zinc-900">{step.title}</h3>
              <p
                className={`${step.id === "02" ? "mt-4" : "mt-2"} text-[15px] leading-relaxed text-zinc-700 ${
                  step.align === "right" ? "ml-auto max-w-[220px]" : "max-w-[220px]"
                }`}
              >
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
