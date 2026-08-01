"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimationFrame, useScroll, useTransform } from "framer-motion";
import { KlfReveal } from "@/components/marketing/KlfMotion";
import { useRef, useState } from "react";

type JourneySection = {
  key: string;
  title: string;
  points: string[];
  image: string;
  imageAlt: string;
  applyHref: string;
  exploreHref: string;
  reverse?: boolean;
  dark?: boolean;
};

const orbitCards = [
  { bank: "HDFC Bank", logo: "/images/marketing/banks/HDFC.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "SBI Card", logo: "/images/marketing/banks/SBI.png", variant: "from-[#FAF6EE] via-[#2563eb] to-[#FAF6EE]" },
  { bank: "ICICI Bank", logo: "/images/marketing/banks/ICICI.png", variant: "from-[#FAF6EE] via-[#b45309] to-[#FAF6EE]" },
  { bank: "Axis Bank", logo: "/images/marketing/banks/Axis.png", variant: "from-[#FAF6EE] via-[#6d28d9] to-[#FAF6EE]" },
  { bank: "PNB Card", logo: "/images/marketing/banks/PNB.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "HDFC Bank", logo: "/images/marketing/banks/HDFC.png", variant: "from-[#FAF6EE] via-[#334155] to-[#FAF6EE]" },
  { bank: "SBI Card", logo: "/images/marketing/banks/SBI.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "ICICI Bank", logo: "/images/marketing/banks/ICICI.png", variant: "from-[#FAF6EE] via-[#7c2d12] to-[#FAF6EE]" },
  { bank: "Axis Bank", logo: "/images/marketing/banks/Axis.png", variant: "from-[#FAF6EE] via-[#4338ca] to-[#FAF6EE]" },
  { bank: "PNB Card", logo: "/images/marketing/banks/PNB.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "HDFC Bank", logo: "/images/marketing/banks/HDFC.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "SBI Card", logo: "/images/marketing/banks/SBI.png", variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]" },
  { bank: "Axis Bank", logo: "/images/marketing/banks/Axis.png", variant: "from-[#FAF6EE] via-[#6d28d9] to-[#FAF6EE]" },
  { bank: "ICICI Bank", logo: "/images/marketing/banks/ICICI.png", variant: "from-[#FAF6EE] via-[#7c2d12] to-[#FAF6EE]" }
] as const;

const sections: JourneySection[] = [
  {
    key: "credit-cards",
    title: "Credit Cards",
    points: [
      "Global Acceptance - Use your card anywhere in the world.",
      "24/7 Concierge Service - Personal travel assistance anytime.",
      "Accelerated Rewards - Extra benefits on daily spending."
    ],
    image: "/images/marketing/credit-card.webp",
    imageAlt: "KLFPRO credit cards visual",
    applyHref: "/credit-score",
    exploreHref: "/credit-score",
    dark: true
  },
  {
    key: "education-loan",
    title: "Education Loans",
    points: [
      "Loan amounts up to 2 Cr for India & Abroad studies.",
      "Competitive interest rates with easy comparison.",
      "Moratorium options available during course duration."
    ],
    image: "/images/marketing/education-loan.jpg",
    imageAlt: "KLFPRO education loan visual",
    applyHref: "/loans/education",
    exploreHref: "/emi-calculator",
    reverse: true
  },
  {
    key: "personal-loan",
    title: "Personal Loan",
    points: [
      "Loan amounts up to 40 Lakhs with flexible repayment options.",
      "Competitive rates designed for faster approvals.",
      "Fast disbursal after quick document checks."
    ],
    image: "/images/marketing/personal-loan.jpg",
    imageAlt: "KLFPRO personal loan visual",
    applyHref: "/loans/personal-loan",
    exploreHref: "/loans/personal-loan",
    reverse: true
  },
  {
    key: "home-loan",
    title: "Home Loan",
    points: [
      "Up to 5 Crore* loan amount with attractive terms.",
      "Low interest rates and transparent repayment support.",
      "Quick approvals with guided documentation."
    ],
    image: "/images/marketing/home-loan.jpg",
    imageAlt: "KLFPRO home loan visual",
    applyHref: "/loans/home",
    exploreHref: "/loans/home",
    reverse: true
  }
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 80,
    rotateX: 8,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
} as const;

const contentStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1
    }
  }
} as const;

const contentItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" }
  }
} as const;

export function ScrollJourneySections() {
  return (
    <section>
      <div className="relative overflow-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE] pb-16 pt-16 text-[#0A1128]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] klf-grid-bg" aria-hidden />
        <KlfReveal className="relative mx-auto max-w-[1170px] px-5 text-center md:px-6">
          <h2 className="text-[30px] font-semibold leading-tight md:text-[44px]">
            Smart{" "}
            <span className="bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent">
              Credit Cards
            </span>{" "}
            Designed For You
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[16px] text-[#0A1128] md:text-[17px]">
            Explore options suited to your goals with smooth digital comparison and assisted application flow.
          </p>
        </KlfReveal>
      </div>

      {sections.map((section, idx) => {
        const isDark = section.dark ?? false;
        const reverse = section.reverse ?? false;
        const bgClass = isDark
          ? "bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] text-[#0A1128]"
          : "bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] text-[#0A1128]";
        const mutedClass = "text-[#0A1128]";
        const borderClass = "border-white/30 text-[#0A1128] hover:bg-[#0A1128]/5";

        return (
          <div key={section.key} className={`${bgClass} relative overflow-hidden pb-14 pt-4 md:pt-7`}>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              initial={{ y: 36, opacity: isDark ? 0.24 : 0.12 }}
              whileInView={{ y: -22, opacity: isDark ? 0.32 : 0.14 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              style={{
                background: isDark
                  ? "radial-gradient(65% 48% at 20% 45%, rgba(212,175,55,0.10), transparent 70%), radial-gradient(60% 48% at 85% 60%, rgba(255,255,255,0.06), transparent 72%)"
                  : "radial-gradient(65% 48% at 20% 45%, rgba(212,175,55,0.10), transparent 70%), radial-gradient(60% 48% at 85% 60%, rgba(17,24,39,0.05), transparent 72%)"
              }}
            />
            <div className="relative mx-auto grid max-w-[1110px] items-center gap-6 px-5 [perspective:1400px] md:grid-cols-[1fr_420px] md:gap-8 md:px-6">
              <motion.div
                initial={sectionReveal.hidden}
                whileInView={{ ...sectionReveal.visible, y: [-10, 10, -10] }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  duration: 0.8,
                  ease: "easeOut"
                }}
                style={{ transformPerspective: 1200, transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
                className={`${reverse ? "md:order-2 md:justify-self-start" : section.key === "credit-cards" ? "md:justify-self-start md:-ml-16 md:-mt-6" : "md:justify-self-end"} relative transform-gpu`}
              >
                <div className={`absolute ${reverse ? "-left-8 bottom-8" : "-right-8 top-8"} h-24 w-24 opacity-70`}>
                  <div className="grid h-full w-full grid-cols-6 gap-1">
                    {Array.from({ length: 36 }).map((_, dotIdx) => (
                      <span key={dotIdx} className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/60" />
                    ))}
                  </div>
                </div>
                {section.key === "credit-cards" ? (
                  <CreditCardOrbit />
                ) : (
                  <div className="relative h-[310px] w-[235px] overflow-hidden rounded-[26px] border border-black/15 shadow-[0_22px_40px_-24px_rgba(0,0,0,0.65)]">
                    <Image src={section.image} alt={section.imageAlt} fill className="object-cover" sizes="250px" unoptimized={true} />
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF6EE]/35 to-transparent" />
                  </div>
                )}
              </motion.div>

              <motion.div
                initial={sectionReveal.hidden}
                whileInView={sectionReveal.visible}
                viewport={{ once: true, amount: 0.35 }}
                variants={contentStagger}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformPerspective: 1200, transformStyle: "preserve-3d", willChange: "transform, opacity, filter" }}
                className={`${reverse ? "md:order-1" : ""} transform-gpu rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 backdrop-blur-xl md:p-6`}
              >
                <motion.h3
                  variants={contentItem}
                  className="bg-gradient-to-r from-[#D4AF37] via-[#fde68a] to-white bg-clip-text text-[34px] font-semibold leading-none text-transparent md:text-[40px]"
                >
                  {section.title}
                </motion.h3>
                <ul className={`mt-5 space-y-3 text-[14px] ${mutedClass} md:text-[16px]`}>
                  {section.points.map((point, pointIdx) => (
                    <motion.li
                      key={point}
                      variants={contentItem}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + pointIdx * 0.12 }}
                      className="flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div variants={contentItem} className="mt-5 flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.25)" }} transition={{ duration: 0.25 }}>
                    <Link
                      href="/eligibility"
                      className="interactive-lift rounded-full bg-[#D4AF37] px-6 py-2 text-[14px] font-semibold text-zinc-900 md:px-7 md:text-[15px]"
                    >
                      Apply Now <span aria-hidden>{">"}</span>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.18)" }} transition={{ duration: 0.25 }}>
                    <Link
                      href={section.exploreHref}
                      className={`interactive-lift rounded-full border px-6 py-2 text-[14px] font-medium md:px-7 md:text-[15px] ${borderClass}`}
                    >
                      Explore More <span aria-hidden>{">"}</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            {idx !== sections.length - 1 ? <div className="mx-auto mt-12 h-px max-w-[1110px] bg-[#0A1128]/5" /> : null}
          </div>
        );
      })}
    </section>
  );
}

function CreditCardOrbit() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [phase, setPhase] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const durationSec = 16;
  const radiusX = 165;
  const radiusY = 70;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.85, 0.45]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 0.96]);

  useAnimationFrame((_time, delta) => {
    const step = ((delta / 1000) * (Math.PI * 2)) / durationSec;
    setPhase((prev) => (prev + step) % (Math.PI * 2));
  });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[360px] w-[430px]"
      onMouseLeave={() => {
        setHovered(null);
        setTilt({ x: 0, y: 0 });
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = -((event.clientY - rect.top) / rect.height - 0.5) * 8;
        setTilt({ x, y });
      }}
      style={{ perspective: "1100px" }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_62%)] blur-2xl"
        style={{ opacity: glowOpacity, scale: glowScale }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/20 bg-[#FAF6EE]/95 shadow-[0_0_40px_rgba(212,175,55,0.24)]"
        animate={{ scale: [0.98, 1.05, 0.98], opacity: [0.88, 1, 0.88] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_35%_70%,rgba(212,175,55,0.12),transparent_42%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/15" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{ borderStyle: "dashed" }}
      />
      {orbitCards.map((card, index) => {
        const step = (Math.PI * 2) / orbitCards.length;
        const angle = phase + index * step;
        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;
        const depth = (Math.sin(angle) + 1) / 2;
        const isHovered = hovered === index;
        const scale = isHovered ? 1.14 : 0.75 + depth * 0.35;
        const opacity = 0.3 + depth * 0.7;
        const angleTilt = (Math.cos(angle) * 18).toFixed(2);

        return (
          <motion.div
            key={`${card.bank}-${index}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
            className={`absolute left-1/2 top-1/2 h-[132px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-[#0A1128]/25 bg-gradient-to-br ${card.variant} p-4 text-[#0A1128] shadow-[0_16px_32px_-18px_rgba(0,0,0,0.85)]`}
            style={{
              transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateY(${angleTilt}deg) rotateX(${tilt.y}deg) rotateZ(${tilt.x}deg)`,
              opacity,
              zIndex: Math.round(20 + depth * 80),
              filter: isHovered ? "brightness(1.15)" : `brightness(${0.75 + depth * 0.35})`,
              transformStyle: "preserve-3d",
              willChange: "transform, opacity, filter"
            }}
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              animate={{ boxShadow: isHovered ? "0 0 28px rgba(212,175,55,0.42)" : "0 0 0 rgba(212,175,55,0)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.24)_42%,transparent_64%)] opacity-55" />
            <motion.div
              className="pointer-events-none absolute inset-0"
              animate={{ x: ["-120%", "120%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }}
            />
            <div className="relative flex items-center justify-between">
              <div className="relative h-4 w-14 overflow-hidden">
                <Image src={card.logo} alt={`${card.bank} logo`} fill className="scale-110 object-contain" sizes="56px" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#0A1128]/75">Platinum</span>
            </div>
            <p className="relative mt-4 text-[18px] font-semibold">{card.bank}</p>
            <div className="relative mt-3 flex items-center justify-between text-[10px] text-[#0A1128]/70">
              <span className="blur-[1.4px]">VALID 12/29</span>
              <span>VISA</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}


