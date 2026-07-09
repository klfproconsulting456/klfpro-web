"use client";

import Link from "next/link";

export function KlfproStickyApply() {
  return (
    <Link
      href="/eligibility"
      className="interactive-lift fixed bottom-6 left-1/2 z-[85] -translate-x-1/2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-[#0A1128] shadow-lg transition hover:bg-green-600 md:left-auto md:right-24 md:translate-x-0"
    >
      Apply Now
    </Link>
  );
}
