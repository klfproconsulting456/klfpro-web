import React from 'react';

const caseStudies = [
  {
    id: "1",
    title: "Helping a Family Medicine Practice Find Time for Patients Again.",
    quote: "When Dr. Carter's clinic grew, billing issues started eating up staff time. Instead of just stepping in, we met with the office team, listened to what was slowing them down, and tightened eligibility checks, claim quality, and AR follow-up. A few months later, the front desk had fewer billing interruptions, providers understood their numbers better, and the office felt they had a billing partner, not just a vendor.",
    challenge: [
      "Staff spending too much time on billing",
      "Eligibility errors and claim denials",
      "AR follow-up delays",
      "Providers lacked financial visibility"
    ],
    solution: [
      "Met with the office team",
      "Tightened eligibility checks",
      "Improved claim quality",
      "Strengthened AR follow-up"
    ],
    outcome: [
      "Fewer billing interruptions",
      "Providers understood their numbers better",
      "The office felt they had a billing partner, not just a vendor"
    ],
    highlight: "A trusted billing partner for a growing practice."
  },
  {
    id: "2",
    title: "Building Clarity, Restoring Control.",
    quote: "\"I don't think we're losing money, I just don't know where things are getting stuck.\" That's what the practice manager told us. We asked her to walk us through a normal Monday. One step at a time, we smoothed eligibility checks and claim follow-ups. Months later, she said, \"For the first time in a long time, I don't feel like billing is chasing us anymore.\"",
    challenge: [
      "Unclear visibility into revenue cycle",
      "Eligibility issues causing claim denials",
      "Inconsistent follow-ups on aging claims",
      "Lack of time for detailed reporting"
    ],
    solution: [
      "Walked through a normal Monday",
      "Smoothed eligibility checks",
      "Improved claim follow-ups",
      "One step at a time"
    ],
    outcome: [
      "Doesn't feel like billing is chasing them anymore"
    ],
    highlight: "For the first time in a long time, I don't feel like billing is chasing us anymore."
  }
];

export default function ServicesCaseStudies() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#D4A937]"></div>
            <h2 className="text-xl md:text-2xl lg:text-[26px] font-[800] lg:leading-[34px] text-[#1C2233] uppercase tracking-[1.5px]">
              OUR CASE STUDIES
            </h2>
            <div className="h-[2px] w-12 bg-[#D4A937]"></div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="bg-white rounded-[20px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8 flex flex-col"
            >
              {/* Top Label */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100/50">
                  <svg className="w-3.5 h-3.5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-[11px] font-bold text-[#1C2233] tracking-wider uppercase">
                    CASE <span className="text-[#D4A937]">{study.id}</span>
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[20px] lg:text-[24px] font-extrabold text-[#1C2233] leading-tight mb-5">
                {study.title}
              </h3>

              {/* Quote Section */}
              <div className="flex gap-3 mb-6">
                <span className="text-5xl text-[#D4A937] font-serif leading-none mt-1 select-none opacity-80">
                  "
                </span>
                <div className="border-l-2 border-[#D4A937]/30 pl-4">
                  <p className="text-[14px] lg:text-[15px] text-gray-700 leading-relaxed font-medium">
                    {study.quote}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Footer Banner */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[14px] font-bold text-[#1C2233]">More Time for Patient Care</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[14px] font-bold text-[#1C2233]">Cleaner Claims & Fewer Denials</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="text-[14px] font-bold text-[#1C2233]">Stronger Revenue Cycle</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#D4A937]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[14px] font-bold text-[#1C2233]">Happier Providers & Healthier Practices</span>
          </div>
        </div>

      </div>
    </section>
  );
}
