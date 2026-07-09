"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
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
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#1C2233]/40 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-4xl pointer-events-auto"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#1C2233]/20 border border-[#F3E0C0] flex flex-col lg:flex-row">
                
                {/* Left Side - Contact Info */}
                <div className="w-full lg:w-[45%] bg-[#FCF8F2] p-8 sm:p-10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(8,20,40,0.5) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-[#1C2233] mb-4">
                      Let&apos;s <span className="text-[#D4A937]">Connect</span>
                    </h2>
                    <p className="text-[14px] leading-[1.6] text-[#5F6B7A] mb-8">
                      Whether you&apos;re looking to streamline your revenue cycle, improve billing performance, or simply have questions about our services, our team is here to help. Reach out to us today—we&apos;re ready to support your healthcare practice with reliable, customized RCM solutions.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                          <span>📧</span> Email Us
                        </h4>
                        <a href="mailto:info@klfpro.in" className="text-[15px] font-medium text-[#D4A937] hover:underline">info@klfpro.in</a>
                      </div>
                      
                      <div>
                        <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                          <span>📞</span> Call Us
                        </h4>
                        <a href="tel:+919711000680" className="text-[15px] font-medium text-[#5F6B7A] hover:text-[#1C2233]">+91 9711000680</a>
                      </div>

                      <div>
                        <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                          <span>💼</span> Careers
                        </h4>
                        <a href="mailto:careers@klfpro.com" className="text-[15px] font-medium text-[#5F6B7A] hover:text-[#1C2233]">careers@klfpro.com</a>
                      </div>

                      <div>
                        <h4 className="text-[13px] font-bold text-[#1C2233] uppercase tracking-wider mb-1 flex items-center gap-2">
                          <span>🕒</span> Business Hours
                        </h4>
                        <div className="text-[14px] text-[#5F6B7A] space-y-1">
                          <p>Monday – Friday: <span className="font-medium text-[#1C2233]">9:00 AM – 6:00 PM (IST)</span></p>
                          <p>Saturday: <span className="font-medium text-[#1C2233]">9:00 AM – 1:00 PM (IST)</span></p>
                          <p>Sunday: <span className="font-medium text-[#1C2233]">Closed</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-[55%] p-8 sm:p-10 relative">
                  <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-full p-2 text-[#5F6B7A] transition-colors hover:bg-[#FCF8F2] hover:text-[#1C2233]"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  {isSuccess ? (
                    <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1C2233]">Thank You!</h3>
                      <p className="mt-2 text-[15px] text-[#5F6B7A]">Our expert will contact you shortly.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h3 className="text-xl font-extrabold text-[#1C2233]">
                          Send Us a Message
                        </h3>
                        <p className="mt-1 text-[14px] text-[#5F6B7A]">
                          Fill out the form below and we will get back to you promptly.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-[#1C2233]">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4A937] focus:bg-white focus:ring-1 focus:ring-[#D4A937]"
                            placeholder="John Doe"
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="email" className="mb-1.5 block text-[13px] font-semibold text-[#1C2233]">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4A937] focus:bg-white focus:ring-1 focus:ring-[#D4A937]"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="mb-1.5 block text-[13px] font-semibold text-[#1C2233]">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              required
                              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4A937] focus:bg-white focus:ring-1 focus:ring-[#D4A937]"
                              placeholder="+91 90000 00000"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="mb-1.5 block text-[13px] font-semibold text-[#1C2233]">
                            Company / Practice Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-[14px] text-[#1C2233] outline-none transition-colors focus:border-[#D4A937] focus:bg-white focus:ring-1 focus:ring-[#D4A937]"
                            placeholder="Healthcare Inc."
                          />
                        </div>

                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A937] px-6 py-3.5 text-[15px] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#C89A28] hover:shadow-[0_12px_30px_rgba(212,169,55,0.25)] active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
