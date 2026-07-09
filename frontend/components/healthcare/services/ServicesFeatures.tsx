"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Users, Clock } from "lucide-react";

export default function ServicesFeatures() {
  const features = [
    {
      title: "HIPAA Compliant",
      description: "We ensure the highest standards of data security and patient privacy.",
      icon: ShieldCheck,
    },
    {
      title: "Maximize Revenue",
      description: "Our solutions are designed to optimize your financial performance.",
      icon: TrendingUp,
    },
    {
      title: "Expert Team",
      description: "Experienced professionals committed to your practice's success.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to address your needs anytime.",
      icon: Clock,
    },
  ];

  return (
    <section className="w-full bg-[#FFF1F4] py-8 lg:py-10">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-row items-start gap-4">
                {/* Icon Container: Solid white circle with small gold icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-5 h-5 text-[#D4A937]" strokeWidth={2.5} />
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col pt-1">
                  <h3 className="text-[#3B1C32] font-bold text-[14px] mb-0.5">
                    {feature.title}
                  </h3>
                  <p className="text-[#3B1C32]/60 text-[13px] leading-[1.5]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
