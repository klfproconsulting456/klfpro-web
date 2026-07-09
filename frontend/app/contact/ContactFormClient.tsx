"use client";

import { useState } from "react";

export function ContactFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        // Reset form or redirect if needed, currently we just let it stay on success or reset
        // For now, reset after 4 seconds
      }, 4000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="flex w-full flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1C2233]">Thank You!</h3>
        <p className="mt-2 text-[15px] text-[#5F6B7A]">Our expert will contact you shortly.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-sm font-semibold text-[#D4AF37] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-8">
        <h3 className="text-2xl font-extrabold text-[#1C2233]">
          Send Us a Message
        </h3>
        <p className="mt-2 text-[15px] text-[#5F6B7A]">
          Fill out the form below and we will get back to you promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[13.5px] font-semibold text-[#1C2233]">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[13.5px] font-semibold text-[#1C2233]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-[13.5px] font-semibold text-[#1C2233]">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]"
              placeholder="+91 90000 00000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-1.5 block text-[13.5px] font-semibold text-[#1C2233]">
            Inquiry Subject (Optional)
          </label>
          <input
            type="text"
            id="subject"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]"
            placeholder="e.g. Home Loan Query, Partnership"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 text-[15px] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,175,55,0.25)] active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
