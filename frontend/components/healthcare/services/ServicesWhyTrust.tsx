"use client";

import { Check } from "lucide-react";

export default function ServicesWhyTrust() {
  const features = [
    "Proven track record of improving financial performance",
    "Scalable solutions tailored to your practice size",
    "Advanced technology and real-time reporting",
    "Dedicated account managers and expert support"
  ];

  return (
    <section className="bg-slate-50 py-12 lg:py-[56px]">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[40px] items-center">
          
          {/* Left: Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-inner overflow-hidden flex items-center justify-center">
              {/* Placeholder text/graphics to represent wooden blocks with medical icons */}
              <div className="text-slate-400 text-center p-6">
                <div className="grid grid-cols-2 gap-4 opacity-60">
                  <div className="w-24 h-24 bg-slate-100 shadow-sm rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🏥</span>
                  </div>
                  <div className="w-24 h-24 bg-slate-100 shadow-sm rounded-lg flex items-center justify-center">
                    <span className="text-4xl">⚕️</span>
                  </div>
                  <div className="w-24 h-24 bg-slate-100 shadow-sm rounded-lg flex items-center justify-center">
                    <span className="text-4xl">💊</span>
                  </div>
                  <div className="w-24 h-24 bg-slate-100 shadow-sm rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📋</span>
                  </div>
                </div>
                <p className="mt-6 font-medium tracking-wide uppercase text-sm text-slate-500">Medical Blocks Placeholder</p>
              </div>
            </div>
            
            {/* Decorative elements behind the image */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4A937]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[28px] font-[800] text-slate-900 mb-6 lg:mb-[36px] leading-tight lg:leading-[36px] tracking-[0.5px]">
              Why Healthcare Providers Trust <span className="text-[#D4A937]">KLFPRO</span>
            </h2>
            
            <p className="text-slate-500 mb-8 text-base lg:text-[15px] leading-relaxed lg:leading-[24px] lg:max-w-[560px]">
              We understand the unique challenges of healthcare administration. Our comprehensive services are designed to streamline your operations, allowing you to focus on what matters most—patient care.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#D4A937] flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="ml-3 text-slate-700 font-medium text-base lg:text-[15px]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
