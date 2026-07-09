"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type HeroTiltCardProps = {
  children: ReactNode;
  className?: string;
  floatDelay?: number;
};

export function HeroTiltCard({ children, className, floatDelay = 0 }: HeroTiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(my, { stiffness: 320, damping: 32, mass: 0.6 });
  const rotateY = useSpring(mx, { stiffness: 320, damping: 32, mass: 0.6 });

  function onPointerMove(e: React.PointerEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px * 18);
    my.set(-py * 14);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: floatDelay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02 }}
      className={`will-change-transform ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 5 + floatDelay * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay + 0.3
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
