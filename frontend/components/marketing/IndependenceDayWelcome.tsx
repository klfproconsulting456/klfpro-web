"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { KlfproLogo } from "./KlfproLogo";

export function IndependenceDayWelcome() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Independence Day Colors: Saffron, White, Green
    const colors = ["#FF9933", "#FFFFFF", "#138808"];

    // Party Popper Blast from both corners
    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 9999
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 9999
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Start corner blasts
    frame();

    // Big center blast for maximum impact
    setTimeout(() => {
      confetti({
        particleCount: 180,
        spread: 120,
        origin: { y: 0.6 },
        colors: colors,
        zIndex: 9999,
        disableForReducedMotion: true
      });
    }, 400);

    // Hide overlay after 4 seconds to show the website smoothly
    const hideTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF6EE]/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200, delay: 0.15 }}
            className="flex flex-col items-center text-center px-5 max-w-3xl"
          >
            <div className="mb-8 scale-125 md:scale-150">
              <KlfproLogo showConsulting size="compact" wordmarkClassName="text-[#0A1128]" />
            </div>
            
            <p className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.35em] text-[#FF9933] mb-4">
              Celebrating Freedom
            </p>
            
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-zinc-800 to-[#138808] drop-shadow-sm pb-2">
              Happy Independence Day
            </h2>
            
            <p className="mt-5 text-[#0A1128]/80 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Wishing you and your family a prosperous and financially free future.
            </p>

            <div className="mt-10 flex gap-4 text-4xl md:text-5xl">
              <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="drop-shadow-lg">🇮🇳</motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="drop-shadow-lg">🎉</motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
