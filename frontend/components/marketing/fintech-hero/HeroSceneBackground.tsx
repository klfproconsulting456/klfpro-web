"use client";

import { motion } from "framer-motion";

export function HeroSceneBackground() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
        aria-hidden
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 klf-hero-grid-motion opacity-[0.26]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[540px] w-[540px] rounded-full bg-[#D4AF37]/18 blur-[130px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.24, 0.42, 0.24] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-1/3 h-[420px] w-[420px] rounded-full bg-[#fef3c7]/20 blur-[110px]"
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-8%] left-1/3 h-[420px] w-[520px] rounded-full bg-amber-500/14 blur-[105px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_48%_at_50%_-20%,rgba(212,175,55,0.12),transparent_60%)]"
        aria-hidden
      />
      <HeroParticleMotes />
    </>
  );
}

function HeroParticleMotes() {
  const seeds = [12, 5, 19, 8, 22, 3, 17, 11, 7, 14, 21, 9];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {seeds.map((n, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-amber-200/45"
          style={{ top: `${(n * 7) % 88}%`, left: `${(n * 11) % 92}%` }}
          animate={{ opacity: [0.14, 0.55, 0.14], y: [0, -12, 0] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

