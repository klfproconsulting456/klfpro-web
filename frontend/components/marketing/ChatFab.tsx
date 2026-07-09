"use client";

import { motion } from "framer-motion";

export function ChatFab() {
  return (
    <motion.button
      type="button"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, rotateZ: -4 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => {
        if ((window as any).CalculatorHub) {
          (window as any).CalculatorHub.openHub();
        } else {
          console.error("CalculatorHub is not loaded yet.");
        }
      }}
      className="interactive-lift fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fef3c7] via-[#D4AF37] to-amber-300 text-zinc-900 shadow-[0_0_40px_-4px_rgba(212,175,55,0.45)] ring-2 ring-[#facc15]/40 transition hover:shadow-[0_0_36px_6px_rgba(212,175,55,0.5)]"
      aria-label="Open Calculator"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="translate-y-px">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="8" y1="6" x2="16" y2="6"></line>
        <line x1="16" y1="14" x2="16" y2="14.01"></line>
        <line x1="12" y1="14" x2="12" y2="14.01"></line>
        <line x1="8" y1="14" x2="8" y2="14.01"></line>
        <line x1="16" y1="10" x2="16" y2="10.01"></line>
        <line x1="12" y1="10" x2="12" y2="10.01"></line>
        <line x1="8" y1="10" x2="8" y2="10.01"></line>
        <line x1="16" y1="18" x2="16" y2="18.01"></line>
        <line x1="12" y1="18" x2="12" y2="18.01"></line>
        <line x1="8" y1="18" x2="8" y2="18.01"></line>
      </svg>
    </motion.button>
  );
}


