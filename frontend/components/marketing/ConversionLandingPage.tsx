"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { HeroSlider } from "./HeroSlider";
import { MidPageOfferSlider } from "./MidPageOfferSlider";
import { LightProductsBlock } from "./LightProductsBlock";
import { ScrollJourneySections } from "./ScrollJourneySections";
import { FinancialCalculatorsSection } from "./FinancialCalculatorsSection";
import { TrustedPartnersSection } from "./TrustedPartnersSection";
import { BANK_PARTNER_LOGOS } from "@/content/bank-partner-logos";
import { FaqSection } from "./FaqSection";
import { BankingPartnersSection } from "./BankingPartnersSection";
import { MostSearchedLinksSection } from "./MostSearchedLinksSection";
import { MarketingFooterSection } from "./MarketingFooterSection";
import { ChatFab } from "./ChatFab";

const productCards = [
  {
    title: "Home Loan",
    description: "Instant approval at competitive rates starting at 8.5% p.a.",
    badge: "8.5% p.a.",
    image: "/assets/products/home-loan.png"
  },
  {
    title: "Personal Loan",
    description: "Paperless journey, fast credit up to INR 50 Lakhs.",
    badge: "10.25% p.a.",
    image: "/assets/products/personal-loan.png"
  },
  {
    title: "Car Loan",
    description: "Drive your dream car with low EMI options.",
    badge: "9.0% p.a.",
    image: "/assets/products/car-loan.png"
  },
  {
    title: "Business Loan",
    description: "Grow your business with collateral-free funding.",
    badge: "11.0% p.a.",
    image: "/assets/products/business-loan.png"
  },
  {
    title: "Credit Card",
    description: "Compare top issuer offers with rewards and cashback.",
    badge: "Top offers",
    image: "/assets/products/credit-card.png"
  },
  {
    title: "Education Loan",
    description: "Fund your dreams with flexible repayment support.",
    badge: "Custom plans",
    image: "/assets/products/education-loan.png"
  }
] as const;

const productCardInitialStates = [
  { opacity: 0, x: -78, y: 80, rotateX: 15, rotateZ: 0, scale: 0.9 },
  { opacity: 0, x: 0, y: 90, rotateX: 15, rotateZ: 0, scale: 0.9 },
  { opacity: 0, x: 78, y: 80, rotateX: 15, rotateZ: 0, scale: 0.9 },
  { opacity: 0, x: -68, y: 78, rotateX: 16, rotateZ: -5, scale: 0.9 },
  { opacity: 0, x: 0, y: 56, rotateX: 15, rotateZ: 0, scale: 0.78 },
  { opacity: 0, x: 0, y: 92, rotateX: 17, rotateZ: 3, scale: 0.9 }
] as const;

const featurePoints = [
  "Instant Approval (5 min)",
  "Lowest Interest Rates",
  "Zero Hidden Charges",
  "Paperless Process",
  "Dedicated Relationship Manager",
  "24x7 Support"
] as const;

const testimonials = [
  ["I applied at night and got a clear update the next morning. The team explained every step without any confusion.", "Rahul Mehta", "Gurgaon", "Personal Loan"],
  ["I compared lenders in one place and my advisor suggested the best option for my salary profile. Very practical support.", "Neha Sharma", "Delhi", "Home Loan"],
  ["From document upload to final disbursal, everything felt organized and fast. I did not have to chase anyone.", "Amit Verma", "Noida", "Business Loan"]
] as const;

const journeySteps = ["Check Eligibility", "Submit Documents", "Get Approval", "Instant Disbursal"] as const;
const journeyStepDescriptions = [
  "Share your requirement and basic profile details.",
  "Upload documents digitally with quick verification.",
  "Compare matched lender offers with clear terms.",
  "Get sanctioned amount and smooth disbursal support."
] as const;
const flowNodePositions = [100, 430, 760, 1100] as const;
const boardStats = [
  { title: "Approvals today", value: "324" },
  { title: "Avg disbursal", value: "18h" },
  { title: "Support CSAT", value: "4.8/5" },
  { title: "Repeat users", value: "62%" }
] as const;

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

const sectionClass =
  "relative py-20 md:py-24";

export function ConversionLandingPage() {
  const [expandedFeature, setExpandedFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [pauseTestimonials, setPauseTestimonials] = useState(false);
  const [cursorGlow, setCursorGlow] = useState({ x: 50, y: 50 });
  const [activeFlowStep, setActiveFlowStep] = useState(0);
  const [hoveredFlowStep, setHoveredFlowStep] = useState<number | null>(null);
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [tenureYears, setTenureYears] = useState(10);
  const [interestRate, setInterestRate] = useState(10.5);
  const flowSectionRef = useRef<HTMLDivElement | null>(null);
  const flowInView = useInView(flowSectionRef, { amount: 0.35, once: true });

  useEffect(() => {
    if (pauseTestimonials) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [pauseTestimonials]);

  useEffect(() => {
    if (!flowInView) {
      setActiveFlowStep(0);
      return;
    }
    setActiveFlowStep(0);
    let current = 0;
    const timer = setInterval(() => {
      current += 1;
      setActiveFlowStep(current);
      if (current >= journeySteps.length - 1) clearInterval(timer);
    }, 780);
    return () => clearInterval(timer);
  }, [flowInView]);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emiValue =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emiValue * totalMonths;
  const totalInterest = totalPayment - loanAmount;
  const loanProgress = ((loanAmount - 10000) / (10000000 - 10000)) * 100;
  const tenureProgress = ((tenureYears - 1) / (30 - 1)) * 100;
  const interestProgress = ((interestRate - 5) / (24 - 5)) * 100;

  return (
    <main className="min-h-screen text-[#0A1128]">
      {/* Global Background Image */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[#FAF6EE]">
        <Image
          src="/images/marketing/consulting-bg.png"
          alt="KLFPRO Consulting Background"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
          quality={90}
          priority
        />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_8%,rgba(212,175,55,0.16),transparent_42%),radial-gradient(circle_at_80%_34%,rgba(212,175,55,0.09),transparent_45%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"
        animate={{ x: [0, 26, 0], y: [0, 18, 0], opacity: [0.38, 0.62, 0.38] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, 20, 0], opacity: [0.22, 0.5, 0.22] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 220 220%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 /%3E%3C/filter%3E%3Crect width=%22220%22 height=%22220%22 filter=%22url(%23n)%22 opacity=%220.035%22 /%3E%3C/svg%3E')]" />

      <HeroSlider />

      <motion.section
        id="products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={sectionClass + " bg-transparent"}
      >
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Financial Products</h2>
          <p className="mt-3 max-w-2xl text-[#1E293B]">Exact products data with modern UI layout and long-page flow.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
            {productCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={productCardInitialStates[idx]}
                viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateZ: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-[#0A1128]/20 bg-[#FAF6EE] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#D4AF37]/45 hover:shadow-[0_0_40px_rgba(212,175,55,0.24)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${card.image}')`
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.88) 100%)"
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.24),transparent_46%),linear-gradient(140deg,rgba(255,255,255,0.08),transparent_48%)] opacity-75" />
                <div className="pointer-events-none absolute inset-x-6 bottom-6 top-auto h-16 rounded-full bg-[#D4AF37]/18 blur-2xl" />

                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="rounded-2xl border border-[#0A1128]/20 bg-[#FDFBF7]/25 p-4 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-[#0A1128]">{card.title}</h3>
                    </div>
                    <p className="mt-3 text-[#0A1128]">{card.description}</p>
                    <motion.a
                      href={`/eligibility?product=${(card.title || "personal-loan").toLowerCase().replace(/ /g, "-")}`}
                      whileTap={{ scale: 0.97 }}
                      className="inline-block mt-5 text-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-5 py-2 text-sm font-semibold text-zinc-900 shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(212,175,55,0.5)]"
                    >
                      Apply now
                    </motion.a>
                  </div>
                </div>

                <span className="relative z-10 mt-4 inline-flex rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold text-[#B8972E]">
                  {card.badge}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="how"
        initial={{ opacity: 0 }}
        viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        className={sectionClass + " relative overflow-hidden bg-transparent"}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_35%,rgba(212,175,55,0.14),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.1),transparent_36%)]"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div ref={flowSectionRef} className="relative mx-auto max-w-[1240px] px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get Your Loan in 4 Simple Steps</h2>
          <p className="mt-3 max-w-2xl text-[#0F1C3F]">A guided flow from eligibility check to final disbursal, designed for speed and clarity.</p>
          <div className="relative mt-10 min-h-[540px] md:min-h-[620px]">
            <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
              <svg viewBox="0 0 1200 620" className="h-full w-full">
              <defs>
                <linearGradient id="flow-path" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#facc15" stopOpacity="0.98" />
                  <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.9" />
                </linearGradient>
                <filter id="flow-glow" x="-20%" y="-50%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <motion.path
                d="M500 120 Q620 170 700 250 T500 390 T700 520"
                fill="none"
                stroke="url(#flow-path)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={flowInView ? { pathLength: (activeFlowStep + 1) / journeySteps.length, opacity: 1 } : { pathLength: 0, opacity: 0.2 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                style={{ filter: "url(#flow-glow)" }}
              />
              <motion.path
                d="M500 120 Q620 170 700 250 T500 390 T700 520"
                fill="none"
                stroke="url(#flow-path)"
                strokeWidth="2"
                strokeDasharray="8 14"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={flowInView ? { opacity: [0.35, 0.95, 0.35], strokeDashoffset: [0, -140] } : { opacity: 0.1 }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "linear" }}
              />
              {[{ x: 500, y: 120 }, { x: 700, y: 250 }, { x: 500, y: 390 }, { x: 700, y: 520 }].map(({ x, y }, idx) => {
                const nodeActive = idx <= activeFlowStep || hoveredFlowStep === idx;
                return (
                  <motion.circle
                    key={`flow-node-${x}`}
                    cx={x}
                    cy={y}
                    r={nodeActive ? 7 : 4}
                    fill={nodeActive ? "#facc15" : "#fde68a"}
                    animate={
                      nodeActive
                        ? {
                            opacity: [0.65, 1, 0.65],
                            filter: [
                              "drop-shadow(0 0 0 rgba(245,158,11,0.2))",
                              "drop-shadow(0 0 10px rgba(245,158,11,0.75))",
                              "drop-shadow(0 0 0 rgba(245,158,11,0.2))"
                            ]
                          }
                        : { opacity: 0.75 }
                    }
                    transition={{ duration: 1.2, repeat: nodeActive ? Infinity : 0 }}
                  />
                );
              })}
              <motion.circle r="4" fill="#fde68a" className="drop-shadow-[0_0_8px_rgba(212,175,55,0.85)]">
                <animateMotion dur="5.8s" repeatCount="indefinite" path="M500 120 Q620 170 700 250 T500 390 T700 520" />
              </motion.circle>
              <motion.circle r="3.3" fill="#60a5fa" className="drop-shadow-[0_0_8px_rgba(96,165,250,0.85)]">
                <animateMotion begin="1s" dur="5.8s" repeatCount="indefinite" path="M500 120 Q620 170 700 250 T500 390 T700 520" />
              </motion.circle>
              <motion.circle r="3.5" fill="#facc15" className="drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]">
                <animateMotion begin="2.1s" dur="5.8s" repeatCount="indefinite" path="M500 120 Q620 170 700 250 T500 390 T700 520" />
              </motion.circle>
            </svg>
            </div>
            <motion.p
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-y-1/2 text-[150px] font-black tracking-[0.12em] text-[#0A1128]/[0.05] blur-[1px] md:block"
              animate={{ x: ["-52%", "-48%", "-52%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              KLFPRO
            </motion.p>
            <div className="relative z-10 flex flex-col gap-5" style={{ perspective: "1000px" }}>
            {journeySteps.map((step, i) => {
              const isActive = i <= activeFlowStep;
              const isHovered = hoveredFlowStep === i;
              const alignRight = i % 2 === 1;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 32, scale: 0.95, rotateX: 8 }}
                  viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.14 }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 0,
                    borderColor: "rgba(212,175,55,0.55)",
                    boxShadow: "0 0 36px rgba(212,175,55,0.22)"
                  }}
                  onMouseEnter={() => setHoveredFlowStep(i)}
                  onMouseLeave={() => setHoveredFlowStep(null)}
                  style={{ transformStyle: "preserve-3d", willChange: "transform, box-shadow" }}
                  className={`group relative w-full max-w-[560px] rounded-2xl border bg-[#0A1128]/5 p-5 backdrop-blur-xl transition-all duration-300 ${
                    isActive ? "border-[#D4AF37]/55" : "border-[#0A1128]/15"
                  } ${alignRight ? "md:ml-auto md:mt-8" : "md:mr-auto"}`}
                >
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    animate={isHovered ? { boxShadow: "0 0 45px rgba(212,175,55,0.28)" } : { boxShadow: "0 0 0 rgba(212,175,55,0)" }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  />
                  <motion.div
                    className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                      isActive ? "bg-[#D4AF37]/25 text-[#B8972E]" : "bg-[#0A1128]/5 text-[#0F1C3F]"
                    }`}
                    animate={isActive ? { scale: [0.9, 1.05, 1], boxShadow: ["0 0 0 rgba(212,175,55,0.0)", "0 0 22px rgba(212,175,55,0.48)", "0 0 0 rgba(212,175,55,0.0)"] } : { scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    whileHover={{ rotate: 10 }}
                  >
                    0{i + 1}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.12, duration: 0.35 }}
                    className="text-xl font-semibold"
                  >
                    {step}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.24, duration: 0.35 }}
                    className="mt-2 text-sm text-[#0F1C3F]"
                  >
                    {journeyStepDescriptions[i]}
                  </motion.p>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="why"
        initial={{ opacity: 0 }}
        viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        className={sectionClass + " relative overflow-hidden bg-transparent"}
        onMouseMove={(event) => {
          const target = event.currentTarget.getBoundingClientRect();
          const x = ((event.clientX - target.left) / target.width) * 100;
          const y = ((event.clientY - target.top) / target.height) * 100;
          setCursorGlow({ x, y });
        }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -z-0 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl"
          animate={{ x: `${cursorGlow.x - 32}%`, y: `${cursorGlow.y - 32}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        />
        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 md:px-6" style={{ perspective: "1200px" }}>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-[#0A1128]/15 bg-gradient-to-br from-[#FAF6EE] to-[#FAF6EE] p-8 backdrop-blur-lg"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#1E293B]">Why Thousands Trust KLFPRO</p>
            <h3 className="mt-3 text-3xl font-bold">Service Quality Highlights</h3>
            <div className="mt-6 grid gap-3 text-[#0F1C3F]">
              {featurePoints.map((item, idx) => {
                const isOpen = expandedFeature === idx;
                return (
                  <motion.button
                    key={item}
                    type="button"
                    initial={{ opacity: 0, x: -40 }}
                    viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.08 }}
                    onClick={() => setExpandedFeature(isOpen ? -1 : idx)}
                    whileHover={{ x: 10, rotateX: 3 }}
                    className="w-full rounded-xl border border-[#0A1128]/15 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-4 py-3 text-left transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.15)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{item}</span>
                      <span className="text-yellow-400">{isOpen ? "-" : "+"}</span>
                    </div>
                    <AnimatePresence>
                      {isOpen ? (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden text-sm text-[#1E293B]"
                        >
                          {item}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-[#0A1128]/15 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.28),transparent_52%),linear-gradient(160deg,#151515,#090909)] p-8"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_10%,rgba(255,255,255,0.12)_44%,transparent_80%)]"
              animate={{ x: ["-130%", "130%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative">
              <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8972E]">
                <motion.span
                  className="inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
                LIVE
              </div>
              <h4 className="text-2xl font-semibold">Live conversion board</h4>
              <p className="mt-2 text-[#0F1C3F]">Recent approvals, response times, and advisor support visibility.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {boardStats.map((stat, idx) => (
                  <LiveStatCard key={stat.title} title={stat.title} value={stat.value} delay={idx * 0.08} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="reviews"
        initial={{ opacity: 0 }}
        viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className={sectionClass + " relative overflow-hidden bg-transparent"}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.11),transparent_46%)]"
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-[1240px] px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
          <div
            className="relative mt-10 flex h-[320px] items-center justify-center md:h-[340px]"
            style={{ perspective: "1200px" }}
            onMouseEnter={() => setPauseTestimonials(true)}
            onMouseLeave={() => setPauseTestimonials(false)}
          >
            <motion.div
              aria-hidden
              key={`ghost-left-${activeTestimonial}`}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none absolute left-[5%] top-1/2 hidden w-[30%] max-w-sm -translate-y-1/2 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 blur-[0.6px] md:block"
            >
              <p className="text-sm leading-relaxed text-[#1E293B]">
                "
                {
                  testimonials[
                    (activeTestimonial - 1 + testimonials.length) %
                      testimonials.length
                  ][0]
                }
                "
              </p>
            </motion.div>
            <motion.div
              aria-hidden
              key={`ghost-right-${activeTestimonial}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-none absolute right-[5%] top-1/2 hidden w-[30%] max-w-sm -translate-y-1/2 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 blur-[0.6px] md:block"
            >
              <p className="text-sm leading-relaxed text-[#1E293B]">
                "
                {
                  testimonials[
                    (activeTestimonial + 1) % testimonials.length
                  ][0]
                }
                "
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial][1]}
                initial={{ opacity: 0, y: 32, rotateY: 12, scale: 0.94, filter: "blur(3px)" }}
                animate={{ opacity: 1, y: 0, rotateY: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -28, rotateY: -12, scale: 0.95, filter: "blur(3px)" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, boxShadow: "0 0 40px rgba(212,175,55,0.22)" }}
                className="w-full max-w-2xl rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/45"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <motion.span
                      key={star}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.24, delay: 0.16 + star * 0.1 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-[#0A1128]">"{testimonials[activeTestimonial][0]}"</p>
                <p className="mt-4 text-sm text-[#1E293B]">
                  {testimonials[activeTestimonial][1]} - {testimonials[activeTestimonial][2]} - {testimonials[activeTestimonial][3]}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item[1]}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Show testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeTestimonial ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/35 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="eligibility"
        initial={{ opacity: 0, y: 60 }}
        viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={sectionClass + " relative overflow-hidden bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(212,175,55,0.16),transparent_44%),radial-gradient(circle_at_80%_72%,rgba(212,175,55,0.08),transparent_46%)]"
          animate={{ opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Quick EMI Planner</h2>
            <p className="mt-4 max-w-md text-[#0F1C3F]">Estimate your EMI instantly and apply with the same profile settings.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <ResultTile title="Monthly EMI" value={emiValue} />
              <ResultTile title="Total Interest" value={totalInterest} />
              <ResultTile title="Total Payment" value={totalPayment} />
            </div>
          </div>
          <motion.div
            whileHover={{ rotateX: 2.5, y: -4 }}
            transition={{ duration: 0.35 }}
            style={{ transformPerspective: 1000 }}
            className="rounded-2xl border border-[#D4AF37]/25 bg-[#0A1128]/5 p-5 backdrop-blur-lg shadow-[0_14px_50px_-20px_rgba(212,175,55,0.3)]"
          >
            <label className="mb-2 block text-sm font-semibold text-[#0A1128]">Loan amount</label>
            <input
              type="range"
              min={10000}
              max={10000000}
              value={loanAmount}
              onChange={(event) => setLoanAmount(Number(event.target.value))}
              className="h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]"
              style={{ background: `linear-gradient(to right, #facc15 ${loanProgress}%, #3f3f46 ${loanProgress}%)` }}
            />
            <p className="mt-1 text-xs text-[#1E293B]">INR {loanAmount.toLocaleString("en-IN")}</p>

            <label className="mb-2 mt-4 block text-sm font-semibold text-[#0A1128]">Tenure (years)</label>
            <input
              type="range"
              min={1}
              max={30}
              value={tenureYears}
              onChange={(event) => setTenureYears(Number(event.target.value))}
              className="h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]"
              style={{ background: `linear-gradient(to right, #facc15 ${tenureProgress}%, #3f3f46 ${tenureProgress}%)` }}
            />
            <p className="mt-1 text-xs text-[#1E293B]">{tenureYears} years</p>

            <label className="mb-2 mt-4 block text-sm font-semibold text-[#0A1128]">Interest rate</label>
            <input
              type="range"
              min={5}
              max={24}
              step={0.1}
              value={interestRate}
              onChange={(event) => setInterestRate(Number(event.target.value))}
              className="h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]"
              style={{ background: `linear-gradient(to right, #facc15 ${interestProgress}%, #3f3f46 ${interestProgress}%)` }}
            />
            <p className="mt-1 text-xs text-[#1E293B]">{interestRate.toFixed(1)}% p.a.</p>

            <motion.a
              href={`/eligibility?product=personal-loan`}
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212,175,55,0.35)" }}
              className="mt-5 block w-full text-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#f7b801] to-[#fde68a] px-5 py-2.5 font-semibold text-zinc-900 transition"
            >
              Apply for this plan
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={sectionClass + " relative overflow-hidden bg-transparent"}
      >
        <div className="mx-auto max-w-[1240px] px-4 md:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-[#0A1128] md:text-3xl">
            Trusted by leading banks &amp; NBFCs
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#1E293B]">
            Each mark is a real partner—no duplicates in the strip—aligned with the lender panel we work with every day.
          </p>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF6EE] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF6EE] to-transparent" />
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 32, ease: "linear", repeat: Infinity }}
            >
              {[...BANK_PARTNER_LOGOS, ...BANK_PARTNER_LOGOS].map((bank, index) => (
                <motion.div
                  key={`${bank.id}-${index}`}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex h-16 w-36 items-center justify-center rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]"
                >
                  <div className="relative h-10 w-full transition duration-300">
                    <Image src={bank.image} alt={bank.name} fill className="object-contain" sizes="140px" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <ThemedBand>
        <MidPageOfferSlider />
      </ThemedBand>
      <ThemedBand>
        <LightProductsBlock />
      </ThemedBand>
      <ThemedBand>
        <ScrollJourneySections />
      </ThemedBand>
      <ThemedBand>
        <FinancialCalculatorsSection />
      </ThemedBand>
      <ThemedBand>
        <TrustedPartnersSection />
      </ThemedBand>
      <ThemedBand>
        <FaqSection />
      </ThemedBand>
      <ThemedBand>
        <BankingPartnersSection />
      </ThemedBand>
      <ThemedBand>
        <MostSearchedLinksSection />
      </ThemedBand>
      <ThemedBand>
        <MarketingFooterSection />
      </ThemedBand>
      <ChatFab />

      <a href="#eligibility" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-5 py-3 text-center font-semibold text-zinc-900 shadow-[0_0_30px_-10px_rgba(212,175,55,0.75)] md:hidden">
        Check Eligibility - Free
      </a>
    </main>
  );
}

function ResultTile({ title, value }: { title: string; value: number }) {
  return (
    <motion.div
      animate={{ boxShadow: ["0 0 0 rgba(212,175,55,0.05)", "0 0 24px rgba(212,175,55,0.16)", "0 0 0 rgba(212,175,55,0.05)"] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-3"
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{title}</p>
      <AnimatedNumber value={value} />
    </motion.div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const start = displayValue;
    const end = value;
    const duration = 550;
    const startTime = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(start + (end - start) * eased);
      if (progress < 1) frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <p className="mt-1 text-lg font-semibold text-yellow-400">INR {Math.round(displayValue).toLocaleString("en-IN")}</p>;
}

function LiveStatCard({ title, value, delay }: { title: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-50px" }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      animate={{ y: [-5, 5, -5] }}
      className="rounded-xl border border-[#0A1128]/20 bg-[#0A1128]/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/45 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
    >
      <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">{title}</p>
      <div className="mt-1">
        <CounterValue value={value} />
      </div>
    </motion.div>
  );
}

function CounterValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const hasSuffix = /[a-zA-Z%/]/.test(value);
    const numeric = parseFloat(value);
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const decimals = value.includes(".") ? value.split(".")[1]?.replace(/[^0-9].*$/, "").length ?? 1 : 0;
    const suffix = hasSuffix ? value.replace(/[0-9.]/g, "") : "";
    const total = 900;
    const started = performance.now();
    let frameId = 0;

    const update = (now: number) => {
      const progress = Math.min((now - started) / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(`${current.toFixed(decimals)}${suffix}`);
      if (progress < 1) frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <motion.p
      ref={ref}
      className="text-lg font-semibold text-yellow-400"
      animate={{ opacity: [0.75, 1, 0.75] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {display}
    </motion.p>
  );
}

function ThemedBand({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute -left-20 top-14 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-36 w-36 rounded-full bg-[#fef3c7]/10 blur-3xl" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.08),transparent_40%)]"
        animate={{ opacity: [0.35, 0.62, 0.35] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">{children}</div>
    </section>
  );
}


