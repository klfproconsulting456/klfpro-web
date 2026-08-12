"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "700" });

const PartyPopperSVG = ({ className, flipped }: { className?: string; flipped?: boolean }) => (
  <svg viewBox="0 0 100 160" className={className} style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}>
    <defs>
      <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(0,0,0,0.5)" />
        <stop offset="20%" stopColor="rgba(255,255,255,0.4)" />
        <stop offset="70%" stopColor="rgba(0,0,0,0)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
      </linearGradient>
    </defs>

    {/* Back rim */}
    <ellipse cx="50" cy="20" rx="40" ry="12" fill="#CC7A29" />

    {/* Saffron Top */}
    <path d="M10,20 C10,35 90,35 90,20 L75,70 C75,85 25,85 25,70 Z" fill="#FF9933" />
    {/* White Middle */}
    <path d="M25,70 C25,80 75,80 75,70 L60,115 C60,125 40,125 40,115 Z" fill="#FFFFFF" />
    {/* Green Bottom */}
    <path d="M40,115 C40,120 60,120 60,115 L53,155 C53,158 47,158 47,155 Z" fill="#138808" />
    
    {/* 3D Shading Overlay */}
    <path d="M10,20 C10,35 90,35 90,20 L47,155 C47,158 53,158 53,155 Z" fill="url(#coneGrad)" style={{ mixBlendMode: 'overlay' }} />
    <path d="M10,20 C10,35 90,35 90,20 L47,155 C47,158 53,158 53,155 Z" fill="url(#coneGrad)" opacity="0.3" />

    {/* Ashoka Chakra */}
    <g transform="translate(50, 92) scale(0.85) scale(1, 0.7)">
      <circle cx="0" cy="0" r="14" stroke="#000088" strokeWidth="2.5" fill="none" />
      <circle cx="0" cy="0" r="2" fill="#000088" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="-14" y1="0" x2="14" y2="0" stroke="#000088" strokeWidth="0.8" transform={`rotate(${i * 15})`} />
      ))}
    </g>
    
    {/* Front rim overlay for depth */}
    <path d="M10,20 C10,35 90,35 90,20 C90,5 10,5 10,20 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
    <ellipse cx="50" cy="20" rx="34" ry="8" fill="#111" opacity="0.4" />
  </svg>
);

export function IndependenceDayWelcome() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    if (!showOverlay) return;
    const colors = ["#FF9933", "#FFFFFF", "#138808"];
    const duration = 6000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 50,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: colors,
        zIndex: 9999,
        startVelocity: 45
      });
      confetti({
        particleCount: 4,
        angle: 130,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: colors,
        zIndex: 9999,
        startVelocity: 45
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.5 },
        colors: colors,
        zIndex: 9999,
        disableForReducedMotion: true
      });
    }, 800);

    // Keep it open longer since it has a close button, but auto-close eventually
    const hideTimer = setTimeout(() => {
      setShowOverlay(false);
    }, 8000);

    return () => clearTimeout(hideTimer);
  }, [showOverlay]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#FAF6EE]/70 backdrop-blur-sm overflow-hidden"
        >
          {/* Sunburst Background */}
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-30 flex items-center justify-center">
            <div 
              className="w-[150vw] h-[150vw] sm:w-[100vw] sm:h-[100vw] animate-[spin_60s_linear_infinite]"
              style={{
                background: 'repeating-conic-gradient(from 0deg, transparent 0deg 8deg, #FF9933 8deg 12deg, transparent 12deg 20deg, #138808 20deg 24deg)',
                maskImage: 'radial-gradient(circle, black 10%, transparent 60%)',
                WebkitMaskImage: 'radial-gradient(circle, black 10%, transparent 60%)'
              }}
            />
          </div>

          <button 
            onClick={() => setShowOverlay(false)}
            className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform z-50 text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center text-center px-4"
          >
            {/* Top Chakra */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="mb-4 text-[#000088]"
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="none" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                {Array.from({ length: 24 }).map((_, i) => (
                  <line key={i} x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="2.5" transform={`rotate(${i * 15} 50 50)`} />
                ))}
              </svg>
            </motion.div>

            <h2 className={`${dancingScript.className} text-6xl md:text-8xl lg:text-[110px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-orange-500 to-[#138808] drop-shadow-md pb-4`}>
              Happy<br/>Independence Day!
            </h2>
            
            <p className="mt-2 text-[#0A1128] text-lg md:text-2xl font-semibold tracking-wide max-w-xl">
              Proud to be Indian. Proud to serve you.
            </p>

            <div className="mt-6 px-6 py-2 bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-white/40">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-500">
                KLFPRO CONSULTING
              </p>
            </div>
          </motion.div>

          {/* Party Poppers sticking out of bottom corners */}
          <motion.div 
            initial={{ y: 200, x: -50, rotate: 20 }}
            animate={{ y: 0, x: 0, rotate: 45 }}
            transition={{ type: "spring", damping: 15, delay: 0.3 }}
            className="absolute -bottom-10 -left-10 md:bottom-[-20px] md:left-10 w-40 md:w-64 z-20 pointer-events-none drop-shadow-2xl"
          >
            <PartyPopperSVG />
          </motion.div>
          
          <motion.div 
            initial={{ y: 200, x: 50, rotate: -20 }}
            animate={{ y: 0, x: 0, rotate: -45 }}
            transition={{ type: "spring", damping: 15, delay: 0.3 }}
            className="absolute -bottom-10 -right-10 md:bottom-[-20px] md:right-10 w-40 md:w-64 z-20 pointer-events-none drop-shadow-2xl"
          >
            <PartyPopperSVG flipped />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
