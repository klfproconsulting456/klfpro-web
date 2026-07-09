"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HealthcareAbout() {
  return (
    <section className="relative overflow-hidden bg-[#FFFCFD] py-32 sm:py-40 border-t border-[#1C2233]/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#D4A937]/5 blur-[100px]" />
        <div className="absolute -right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-[#1C2233]/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text & Skeleton */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] text-[#1C2233] leading-[1.1] mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A937] to-amber-600">KLFPRO</span> Healthcare
            </h2>

            {/* Skeleton Placeholders for Content */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <div className="h-3 bg-slate-200 rounded-full w-full" />
              <div className="h-3 bg-slate-200 rounded-full w-[95%]" />
              <div className="h-3 bg-slate-200 rounded-full w-[85%]" />
              <div className="h-3 bg-slate-200 rounded-full w-[90%]" />
              <div className="h-3 bg-slate-200 rounded-full w-[60%]" />
            </div>

            <div className="mt-12">
              <a href="#about-more" className="group inline-flex items-center gap-2 rounded-full bg-[#D4A937] px-6 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,169,55,0.25)] hover:-translate-y-0.5 active:scale-[0.97]">
                Discover Our Operations
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: SaaS Bento Box Layout */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Main Bento Item (Image Placeholder) */}
              <div className="col-span-2 rounded-3xl bg-[#FFFFFF] p-2 shadow-2xl shadow-[#1C2233]/5 border border-[#F3E7EB] hover:-translate-y-1 transition-transform">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/9]">
                  <Image
                    src="/images/about-bpo.png"
                    alt="Healthcare Operations"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2233]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 h-8 bg-white/40 backdrop-blur-md rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Smaller Bento Item 1 */}
              <div className="rounded-3xl bg-[#FFFFFF] p-6 shadow-xl shadow-[#1C2233]/5 border border-[#F3E7EB] flex flex-col justify-between transition-all duration-300 hover:bg-[#FFF8FA] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-full bg-[#FAF6EE] text-[#D4A937] flex items-center justify-center mb-4 ring-1 ring-[#D4A937]/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#5F6B7A]/10 rounded-full w-full" />
                  <div className="h-2 bg-[#5F6B7A]/5 rounded-full w-2/3" />
                </div>
              </div>

              {/* Smaller Bento Item 2 */}
              <div className="rounded-3xl bg-[#FFFFFF] border border-[#F3E7EB] p-6 shadow-xl shadow-[#1C2233]/5 text-[#1C2233] flex flex-col justify-between transition-all duration-300 hover:bg-[#FFF8FA] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                <div className="w-10 h-10 rounded-full bg-[#1C2233]/5 flex items-center justify-center mb-4 ring-1 ring-[#D4A937]/30">
                  <svg className="w-5 h-5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-[#5F6B7A]/10 rounded-full w-[90%]" />
                  <div className="h-2 bg-[#5F6B7A]/5 rounded-full w-[70%]" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
