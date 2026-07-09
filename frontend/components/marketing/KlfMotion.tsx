"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type KlfRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

/** Scroll-triggered slide + fade + subtle 3D (GPU-friendly transforms). */
export function KlfReveal({ children, className, delay = 0, ...rest }: KlfRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease }}
      style={{ transformPerspective: 1200, transformOrigin: "center top" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type KlfStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

/** Wrap a list; children should be motion elements or use data-index — use with map. */
export function KlfStaggerContainer({ children, className, stagger = 0.06 }: KlfStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.04 }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const klfItemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease }
  }
} as const;
