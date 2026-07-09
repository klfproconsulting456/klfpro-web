"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    title: "Business Loan",
    desc: "Instant Funds for Instant Growth",
    image: "/images/marketing/business-loan.jpg",
    btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    href: "/loans/business",
    badge: null as string | null
  },
  {
    title: "Loan Against Property",
    desc: "Lowest Interest Rate",
    image: "/images/marketing/lap.jpg",
    btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    href: "/loans/loan-against-property",
    badge: null
  },
  {
    title: "Home Loan",
    desc: "Build your dream home with ease",
    image: "/images/marketing/home-loan.jpg",
    btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    href: "/loans/home",
    badge: "Lowest EMI"
  },
  {
    title: "Education Loan",
    desc: "Fund your studies abroad",
    image: "/images/marketing/education-loan.jpg",
    btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    href: "/loans/education",
    badge: "New"
  }
];

const cornerEntry = [
  { x: -150, y: -150 },
  { x: 150, y: -150 },
  { x: -150, y: 150 },
  { x: 150, y: 150 }
] as const;

export function LightProductsBlock() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, idx: -1 });

  return (
    <section id="products" className="relative scroll-mt-24 overflow-hidden bg-[#FAF6EE] pb-24 pt-16">
      <div className="pointer-events-none absolute inset-0 klf-grid-bg opacity-25" aria-hidden />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-14 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-4 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-[#0A1128] md:text-5xl"
        >
          Find the Right Financial{" "}
          <span className="bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]">
            Product
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base text-[#1E293B] md:text-lg"
        >
          Get started in minutes with our simple, fast, and convenient application process.
        </motion.p>

        <div
          className="relative z-10 mx-auto mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: "1400px" }}
        >
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group/card relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#F3E0C0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FCF8F2] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:p-8"
            >
              {/* Decorative top border highlight on hover */}
              <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 group-hover/card:scale-x-100" />

              {c.badge ? (
                <span className="absolute right-4 top-4 z-10 whitespace-nowrap rounded-full bg-[#D4AF37] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-900 shadow-sm">
                  {c.badge}
                </span>
              ) : null}

              <div>
                <div className="mb-5 flex flex-col items-center sm:items-start">
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#F3E0C0] bg-white p-2 shadow-sm transition-all duration-300 group-hover/card:border-[#D4AF37]/50 group-hover/card:shadow-md sm:h-20 sm:w-20">
                    <Image src={c.image} alt={c.title} fill className="object-cover" sizes="80px" />
                  </div>
                  <h3 className="text-center text-lg font-bold text-[#1C2233] transition-colors duration-300 group-hover/card:text-[#D4AF37] sm:text-left sm:text-xl">
                    {c.title}
                  </h3>
                </div>
                <p className="text-center text-[13px] leading-relaxed text-[#5F6B7A] sm:text-left sm:text-[14px]">
                  {c.desc}
                </p>
              </div>

              <div className="mt-8 flex justify-center sm:justify-start">
                <Link
                  href={c.href}
                  className={`group/btn relative inline-flex items-center gap-1 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold transition ${c.btnClass}`}
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-500 group-hover/btn:translate-x-full" />
                  {c.title === "Home Loan" ? "Explore" : c.title === "Education Loan" ? "Explore" : "Apply Now"}{" "}
                  <span aria-hidden>{">"}</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


