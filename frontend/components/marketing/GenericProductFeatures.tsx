"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export type FeatureItem = {
  title: string;
  description: string;
  iconSvg: React.ReactNode;
};

interface GenericProductFeaturesProps {
  title: string;
  subtitle: string;
  features: FeatureItem[];
  theme?: "gold" | "blue" | "emerald";
}

export function GenericProductFeatures({ title, subtitle, features, theme = "gold" }: GenericProductFeaturesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yVisual = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rotateVisual = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const glowColor = theme === "gold" ? "rgba(212,175,55,0.15)" : theme === "blue" ? "rgba(153,27,51,0.15)" : "rgba(212,175,55,0.15)";
  const iconBg = theme === "gold" ? "from-[#D4AF37]/20 to-[#B8972E]/5" : theme === "blue" ? "from-sky-400/20 to-sky-500/5" : "from-[#D4AF37]/20 to-emerald-500/5";
  const iconBorder = theme === "gold" ? "border-[#D4AF37]/30" : theme === "blue" ? "border-sky-400/30" : "border-[#D4AF37]/30";
  const iconColor = theme === "gold" ? "text-[#D4AF37]" : theme === "blue" ? "text-sky-400" : "text-[#D4AF37]";
  const accentText = theme === "gold" ? "klf-gold-shimmer-text" : theme === "blue" ? "text-sky-400" : "text-[#D4AF37]";

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#FAF6EE] py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.02),transparent_60%)]" />
        <div className={`absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]`} style={{ backgroundColor: glowColor }} />
        <div className={`absolute bottom-0 right-1/4 h-[400px] w-[400px] translate-x-1/2 rounded-full blur-[100px]`} style={{ backgroundColor: glowColor }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#0A1128] md:text-5xl">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === title.split(' ').length - 1 ? accentText : ""}>{word} </span>
              ))}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] text-[#1E293B] md:text-[19px]">
              {subtitle}
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1000px" }}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl border border-[#0A1128]/15 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-[0_0_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:border-[#0A1128]/25 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 40px ${glowColor}` }} />
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br ${iconBg} ${iconBorder} ${iconColor} shadow-inner`}>
                {feature.iconSvg}
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A1128] group-hover:text-[#0A1128] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#1E293B] group-hover:text-[#0F1C3F] transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Floating Element */}
        <motion.div
          style={{ y: yVisual, rotate: rotateVisual }}
          className="absolute -right-20 top-40 hidden h-64 w-64 rounded-full border border-[#0A1128]/15 bg-gradient-to-tr from-white/[0.02] to-transparent backdrop-blur-3xl lg:block"
        />
      </div>
    </section>
  );
}
