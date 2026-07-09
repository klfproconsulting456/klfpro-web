"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PartnerHqVisual } from "@/components/marketing/PartnerHqVisual";

function formatPartnerCount(n: number) {
  if (n >= 100000) return "100K+";
  if (n >= 1000) return `${Math.floor(n / 1000)}K`;
  return String(Math.max(0, Math.floor(n)));
}

export function TrustedPartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(headRef, { once: true, margin: "-12%" });
  const [displayN, setDisplayN] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 4);
      setDisplayN(Math.floor(100000 * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const center = r.top + r.height / 2;
      const n = (center - vh / 2) / (vh * 0.85);
      setTilt({
        rx: Math.max(-4, Math.min(4, (n - 0.2) * 5.5)),
        ry: Math.max(-3.2, Math.min(3.2, (r.left + r.width / 2 - window.innerWidth / 2) / window.innerWidth) * -2.6)
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[#0A1128]/15 bg-[#FAF6EE] py-14 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(212,175,55,0.15),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(153,27,51,0.08),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_80%,rgba(153,27,51,0.06),transparent_45%),linear-gradient(165deg,#FAF6EE_0%,#FFFFFF_42%,#FAF6EE_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:48px_48px]"
        style={{ maskImage: "radial-gradient(ellipse at center, black 22%, transparent 72%)" }}
      />

      <div className="relative z-[1] mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-12 md:px-6">
        <motion.div
          className="order-2 flex flex-col md:order-1"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="relative h-10 w-10 shrink-0">
              <Image src="/klfpro-mark.png" alt="" fill className="object-contain" sizes="40px" />
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.22em] text-[#0A1128]/75">One HQ · Pan-India partners</span>
          </div>

          <h2
            ref={headRef}
            className="mt-6 text-balance text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-[#0A1128] md:text-[2.75rem] lg:text-[3.1rem]"
          >
            Trusted by{" "}
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]"
                aria-live="polite"
              >
                {formatPartnerCount(displayN)}
              </span>
            </span>{" "}
            Partners
          </h2>

          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-[#1E293B] md:text-[16px]">
            One Gurgaon headquarters powers the network—authorized partners still get real-time offers, earnings, and
            case updates with privileged access, coast to coast.
          </p>

          <div className="mt-8 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl md:mt-10 md:p-6">
            <h3 className="text-lg font-semibold text-[#0A1128] md:text-xl">Scan or click to download the app</h3>
            <p className="mt-1 text-sm text-[#1E293B]">Manage cases on the go with partner-only tools.</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="button"
                  className="interactive-lift rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/60 px-4 py-2.5 text-left text-[11px] font-medium text-[#0A1128] shadow-lg backdrop-blur-sm transition hover:border-[#D4AF37]/30 hover:shadow-[#D4AF37]/10"
                >
                  GET IT ON
                  <br />
                  <span className="text-[15px] font-semibold">Google Play</span>
                </button>
                <button
                  type="button"
                  className="interactive-lift rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/60 px-4 py-2.5 text-left text-[11px] font-medium text-[#0A1128] shadow-lg backdrop-blur-sm transition hover:border-[#D4AF37]/30 hover:shadow-[#D4AF37]/10"
                >
                  Download on the
                  <br />
                  <span className="text-[15px] font-semibold">App Store</span>
                </button>
              </div>
              <div className="h-px w-8 bg-[#0A1128]/5 sm:h-8 sm:w-px" />
              <div className="rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-2.5 backdrop-blur-md">
                <div className="grid grid-cols-8 gap-[2px]">
                  {Array.from({ length: 64 }).map((_, idx) => (
                    <span key={idx} className={`h-[5px] w-[5px] rounded-[1px] ${idx % 3 === 0 ? "bg-[#D4AF37]/90" : "bg-[#0A1128]/5"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 hidden h-[220px] md:block">
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [-12, -10, -12] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-4 h-[200px] w-[96px] rounded-[22px] border-[3px] border-[#0A1128]/15 bg-gradient-to-b from-sky-600/40 to-slate-950 shadow-2xl backdrop-blur-sm"
            >
              <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-[#0A1128]/50" />
              <div className="mx-auto mt-3 h-24 w-[72px] rounded-lg bg-[#0A1128]/5" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [10, 12, 10] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-[118px] top-0 h-[210px] w-[100px] rounded-[22px] border-[3px] border-[#0A1128]/15 bg-gradient-to-b from-amber-500/25 to-slate-950 shadow-2xl backdrop-blur-sm"
            >
              <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-[#0A1128]/50" />
              <div className="mx-auto mt-4 grid w-[76px] grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="h-3.5 rounded-md bg-[#0A1128]/5" />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 min-h-[min(72vw,380px)] md:order-2 md:min-h-[520px]"
          style={{
            perspective: 1200,
            transformStyle: "preserve-3d"
          }}
        >
          <div
            className="relative h-[min(72vw,380px)] overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] shadow-[0_0_80px_-28px_rgba(153,27,51,0.18),0_0_60px_-40px_rgba(212,175,55,0.1)] backdrop-blur-sm md:h-[520px]"
            style={{
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: "transform 220ms cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <PartnerHqVisual />

            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(3,7,18,0.5)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
