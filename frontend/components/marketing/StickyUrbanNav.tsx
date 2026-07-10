"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { hrefForMegaMenuItem } from "@/lib/mega-menu-hrefs";
import { KlfproLogo } from "./KlfproLogo";

type MenuKey = "products" | "tools" | "cibil" | "cards";

const navItems: Array<{ key: MenuKey; label: string }> = [
  { key: "products", label: "Products & Offers" },
  { key: "tools", label: "Tools & Calculators" },
  { key: "cibil", label: "CIBIL Score" },
  { key: "cards", label: "Credit Cards" }
];

const ROUTES_TO_PREFETCH = [
  "/loans/personal-loan",
  "/emi-calculator",
  "/credit-score",
  "/dashboard",
  "/contact"
] as const;

type MegaColumn = { title: string; items: string[] };

type MegaConfig = {
  eyebrow: string;
  title: string;
  description: string;
  columns: MegaColumn[];
};

const megaMenuContent: Record<MenuKey, MegaConfig> = {
  products: {
    eyebrow: "Products & Offers",
    title: "Loan products",
    description: "Pick a category — we match you with the right lenders.",
    columns: [
      {
        title: "Personal & business",
        items: ["Personal Loan", "Home Loan", "Business Loan", "Loan Against Property"]
      },
      {
        title: "Vehicle",
        items: ["Car Loan", "Used Car Loan", "Two Wheeler Loan", "Commercial Vehicle Loan"]
      },
      {
        title: "Education",
        items: ["Education Loan"]
      }
    ]
  },
  tools: {
    eyebrow: "Tools & Calculators",
    title: "Smart calculators",
    description: "Plan EMIs, eligibility, and savings before you apply.",
    columns: [
      {
        title: "EMI & eligibility",
        items: [
          "Personal Loan EMI Calculator",
          "Home Loan EMI Calculator",
          "Personal Loan Eligibility Calculator",
          "Home Loan Eligibility Calculator"
        ]
      },
      {
        title: "Prepay & transfer",
        items: [
          "Personal Loan Pre Payment Calculator",
          "Home Loan Pre Payment Calculator",
          "Personal Loan Balance Transfer Calculator",
          "Home Loan Balance Transfer Calculator"
        ]
      },
      {
        title: "More tools",
        items: [
          "Home Loan Tax Benefit Calculator",
          "Bike Loan EMI Calculator",
          "Car Loan EMI Calculator",
          "Used Car Loan EMI Calculator",
          "Education Loan EMI Calculator"
        ]
      }
    ]
  },
  cibil: {
    eyebrow: "CIBIL Score",
    title: "Credit health",
    description: "Check your score and unlock offers tailored to your profile.",
    columns: [{ title: "Get started", items: ["Check Free CIBIL Score"] }]
  },
  cards: {
    eyebrow: "Credit Cards",
    title: "Top issuers",
    description: "Compare rewards, fees, and limits across partner banks.",
    columns: [
      {
        title: "Popular",
        items: ["HDFC Credit Card", "ICICI Credit Card", "Yes Pop-Club Credit Card", "Axis Credit Card"]
      },
      {
        title: "More banks",
        items: ["IDFC Credit Card", "HSBC Credit Card", "SBI Credit Card", "AU Small Finance Credit Card"]
      },
      {
        title: "Others",
        items: ["IndusInd Bank Credit Card", "Bank of Baroda Credit Card", "Kiwi Credit Card"]
      }
    ]
  }
};

export type StickyUrbanNavProps = {
  lightSentinelRef?: RefObject<HTMLDivElement | null> | null;
  /** Primary partner CTA target (home uses in-page anchor). */
  partnerHref?: string;
};

export function StickyUrbanNav({ lightSentinelRef, partnerHref = "/contact" }: StickyUrbanNavProps) {
  const router = useRouter();
  const fallbackSentinelRef = useRef<HTMLDivElement>(null);
  const sentinelRef = lightSentinelRef ?? fallbackSentinelRef;
  useInView(sentinelRef, { margin: "-72px 0px 0px 0px", amount: 0.05 });
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hoverOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeConfig = activeMenu ? megaMenuContent[activeMenu] : null;
  const barElevated = scrolled || activeMenu !== null;

  const clearHoverTimers = () => {
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
  };

  const queueOpenMenu = (key: MenuKey) => {
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
      hoverCloseTimerRef.current = null;
    }
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
    }
    hoverOpenTimerRef.current = setTimeout(() => {
      setMobileOpen(false);
      setActiveMenu(key);
      hoverOpenTimerRef.current = null;
    }, 45);
  };

  const queueCloseMenu = () => {
    if (hoverOpenTimerRef.current) {
      clearTimeout(hoverOpenTimerRef.current);
      hoverOpenTimerRef.current = null;
    }
    if (hoverCloseTimerRef.current) {
      clearTimeout(hoverCloseTimerRef.current);
    }
    hoverCloseTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
      hoverCloseTimerRef.current = null;
    }, 220);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      ROUTES_TO_PREFETCH.forEach((route) => {
        router.prefetch(route);
      });
    }, 140);
    return () => window.clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        clearHoverTimers();
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearHoverTimers();
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onEscape);
      clearHoverTimers();
    };
  }, []);

  const closePanel = () => {
    clearHoverTimers();
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const renderLink = (item: string) => {
    const href = hrefForMegaMenuItem(item);
    const className =
      "group flex w-full items-center justify-between gap-3 rounded-xl border border-[#0A1128]/15 bg-gradient-to-r from-white/[0.03] to-[#D4AF37]/[0.04] px-3.5 py-2.5 text-left text-[13px] font-medium text-[#0A1128] transition hover:border-[#D4AF37]/35 hover:from-[#D4AF37]/10 hover:to-[#fef3c7]/12 hover:text-[#0A1128] hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.28)]";

    if (href) {
      return (
        <Link
          href={href}
          onMouseEnter={() => router.prefetch(href)}
          onFocus={() => router.prefetch(href)}
          onClick={closePanel}
          className={className}
        >
          <span className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fde68a] opacity-80 transition group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.75)]" />
            {item}
          </span>
          <span className="text-[#B8972E] opacity-0 transition group-hover:opacity-100" aria-hidden>
            →
          </span>
        </Link>
      );
    }
    return (
      <button type="button" className={className}>
        <span className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
          {item}
        </span>
        <span className="text-[10px] uppercase tracking-wide text-[#1E293B]">Soon</span>
      </button>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className="fixed left-0 right-0 top-0 z-[100]"
      onMouseEnter={() => {
        if (hoverCloseTimerRef.current) {
          clearTimeout(hoverCloseTimerRef.current);
          hoverCloseTimerRef.current = null;
        }
      }}
      onMouseLeave={queueCloseMenu}
    >
      <div className="relative">
      <motion.header
        className={`relative overflow-hidden border-b text-[#0A1128] backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
          barElevated
            ? "border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.55)]"
            : "border-[#0A1128]/15 bg-[#FAF6EE]/80 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.35)]"
        }`}
        initial={false}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.04)_0%,transparent_22%,transparent_78%,rgba(153,27,51,0.04)_100%)] opacity-90" aria-hidden />
        <div className="relative mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-5 md:gap-4 md:px-6">
          <KlfproLogo showConsulting size="compact" wordmarkClassName="text-[#0A1128]" />

          <nav className="hidden items-center gap-2 text-[14px] font-medium md:flex">
            {navItems.map((item) => {
              const isActive = activeMenu === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onMouseEnter={() => queueOpenMenu(item.key)}
                  onFocus={() => {
                    setMobileOpen(false);
                    setActiveMenu(item.key);
                  }}
                  onClick={() => {
                    setMobileOpen(false);
                    setActiveMenu((prev) => (prev === item.key ? null : item.key));
                  }}
                  className={`group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-[#0A1128]/15 text-[#0A1128] shadow-[0_0_0_1px_rgba(212,175,55,0.45)]"
                      : "text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"
                  }`}
                  aria-expanded={isActive}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#fef3c7] via-[#D4AF37] to-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                        isActive ? "scale-x-100" : ""
                      }`}
                      aria-hidden
                    />
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] opacity-75"
                    aria-hidden
                  >
                    ▾
                  </motion.span>
                </button>
              );
            })}
            <div className="hidden items-center lg:flex">
              <Link
                href="https://www.klfprohealthcare.com"
                className="group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"
              >
                <span className="relative font-bold text-[#0A66C2]">
                  KLFPRO Healthcare
                </span>
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#0A1128]/25 bg-[#0A1128]/5 px-3 text-xs font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="klf-mobile-nav"
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
            <Link
              href="/login"
              className="interactive-lift hidden rounded-full border border-white/35 px-4 py-2 text-[14px] font-semibold text-[#0A1128] transition-colors hover:bg-[#0A1128]/5 md:inline-flex"
            >
              Login
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {mobileOpen ? (
          <motion.div
            id="klf-mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
          >
            <div className="max-h-[min(72vh,calc(100dvh-72px))] overflow-y-auto px-5 pb-5 pt-2">
              {navItems.map((nav) => {
                const cfg = megaMenuContent[nav.key];
                return (
                  <div key={nav.key} className="border-b border-[#0A1128]/15 py-4 last:border-b-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8972E]/85">{cfg.eyebrow}</p>
                    <p className="mt-1 text-base font-semibold text-[#0A1128]">{cfg.title}</p>
                    <div className="mt-3 space-y-4">
                      {cfg.columns.map((col) => (
                        <div key={col.title}>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#1E293B]">{col.title}</p>
                          <ul className="mt-2 space-y-1">
                            {col.items.map((label) => {
                              const href = hrefForMegaMenuItem(label);
                              return (
                                <li key={label}>
                                  {href ? (
                                    <Link
                                      href={href}
                                      className="block rounded-lg px-2 py-2 text-[13px] text-[#0A1128] transition hover:bg-[#0A1128]/5 hover:text-[#0A1128]"
                                      onClick={closePanel}
                                    >
                                      {label}
                                    </Link>
                                  ) : (
                                    <span className="block rounded-lg px-2 py-2 text-[13px] text-[#1E293B]">{label}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="mt-4 flex flex-col gap-2 border-t border-[#0A1128]/15 pt-4">
                <Link
                  href="https://www.klfprohealthcare.com"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[14px] font-bold text-[#0A66C2] transition hover:bg-blue-100"
                  onClick={closePanel}
                >
                  KLFPRO Healthcare
                </Link>
                <Link
                  href="/login"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/35 text-[14px] font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5"
                  onClick={closePanel}
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {activeConfig && activeMenu ? (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -16, rotateX: -12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -10, rotateX: -8 }}
            transition={{ type: "spring", damping: 32, stiffness: 380, mass: 0.72 }}
            style={{ transformPerspective: 1400, transformOrigin: "top center" }}
            className="absolute left-0 right-0 top-[72px] z-[110] max-h-[min(78vh,calc(100dvh-72px))] overflow-y-auto overflow-x-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.72)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.28] klf-hero-grid-motion" aria-hidden />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-[#fde68a]/35"
              aria-hidden
            />

            <div className="relative mx-auto max-w-[1200px] px-5 pb-8 pt-9 md:px-6">
              <div className="mb-8 flex flex-col gap-2 border-b border-[#0A1128]/15 pb-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#D4AF37]">
                    {activeConfig.eyebrow}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#0A1128] md:text-3xl">{activeConfig.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-[#1E293B]">{activeConfig.description}</p>
                </div>
                <Link
                  href={activeMenu === "tools" ? "/emi-calculator" : activeMenu === "cibil" ? "/credit-score" : "/loans/personal-loan"}
                  onClick={closePanel}
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/15 to-[#fde68a]/15 px-5 py-2 text-sm font-semibold text-[#B8972E] transition hover:border-[#D4AF37]/55 hover:from-[#D4AF37]/25 hover:to-[#fde68a]/22 md:mt-0"
                >
                  <span className="text-[#B8972E]">✦</span> Quick view
                  <span aria-hidden>→</span>
                </Link>
              </div>

              <div
                className={`grid gap-6 md:gap-8 ${
                  activeConfig.columns.length >= 3
                    ? "md:grid-cols-3"
                    : activeConfig.columns.length === 2
                      ? "md:grid-cols-2"
                      : "md:max-w-md"
                }`}
              >
                {activeConfig.columns.map((col, colIdx) => (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 14, rotateX: 6 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ type: "spring", damping: 28, stiffness: 320, delay: colIdx * 0.04 }}
                    style={{ transformPerspective: 1000 }}
                    className="rounded-2xl border border-[#0A1128]/15 bg-gradient-to-b from-white/[0.07] from-10% via-[#D4AF37]/[0.04] to-transparent p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
                  >
                    <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#B8972E]">
                      <span className="h-px w-6 bg-gradient-to-r from-[#D4AF37] to-[#fde68a]" aria-hidden />
                      {col.title}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {col.items.map((item, itemIdx) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ type: "spring", damping: 34, stiffness: 400, delay: 0.04 + colIdx * 0.04 + itemIdx * 0.018 }}
                        >
                          {renderLink(item)}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      </div>
    </div>
  );
}



