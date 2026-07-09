"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ContactModal } from "./ContactModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export function HealthcareNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#FFF6F8]/90 to-[#FFFBFC]/95 border-b border-[#F2E8EC] shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1440px] px-6">
          <div className="flex h-[56px] lg:h-[64px] items-center justify-between">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2.5 group"
              >
                <div className="flex h-8 w-8 lg:h-[36px] lg:w-[36px] items-center justify-center rounded-lg bg-[#D4A937] shadow-sm transition-transform group-hover:scale-105">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 10.5h-5.5V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5.5V19a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5.5H19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
                <span className="text-[14px] lg:text-[15px] font-bold tracking-tight text-[#1C2233]">
                  KLFPRO{" "}
                  <span className="font-semibold text-[#D4A937]">
                    Healthcare
                  </span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center lg:gap-[28px]">
              {navLinks.map((link) => {
                const isActive =
                  link.href.startsWith("/")
                    ? pathname === link.href
                    : false;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative py-2 text-[13px] lg:text-[14px] font-medium transition-all duration-300 group/link ${
                      isActive
                        ? "text-[#D4A937]"
                        : "text-[#1C2233]/60 hover:text-[#1C2233]"
                    }`}
                  >
                    {link.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D4A937] rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {/* Hover indicator (only for non-active) */}
                    {!isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-white/0 group-hover/link:bg-[#D4A937]/60 transition-all duration-300 scale-x-0 group-hover/link:scale-x-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden lg:flex shrink-0">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full lg:rounded-[40px] bg-[#D4A937] px-5 py-2 lg:w-[160px] lg:h-[40px] text-[13px] lg:text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,169,55,0.25)] hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Get in Touch
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-2 text-[#1C2233]/60 hover:text-[#1C2233] hover:bg-[#1C2233]/10 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gradient-to-b from-[#FFF6F8] to-[#FFFBFC] border-l border-[#1C2233]/10 shadow-2xl px-6 py-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D4A937]">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 10.5h-5.5V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v5.5H5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5.5V19a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5.5H19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
                    </svg>
                  </div>
                  <span className="text-base font-bold text-[#1C2233]">
                    KLFPRO{" "}
                    <span className="text-[#D4A937]">Healthcare</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-lg p-2 text-[#1C2233]/50 hover:bg-[#1C2233]/10 hover:text-[#1C2233] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-8 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === link.href
                      : false;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[15px] font-medium transition ${
                        isActive
                          ? "text-[#D4A937] bg-[#1C2233]/5"
                          : "text-[#1C2233]/60 hover:bg-[#1C2233]/5 hover:text-[#1C2233]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              {/* Mobile CTA */}
              <div className="mt-8 px-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#D4A937] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,169,55,0.25)] hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  Get in Touch
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
