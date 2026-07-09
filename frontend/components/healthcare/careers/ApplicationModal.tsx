"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud } from "lucide-react";
import { useState } from "react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C2233]/60 backdrop-blur-sm pointer-events-auto"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative max-h-[85vh] flex flex-col"
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#D4A937] to-[#C89A28] z-20"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="flex flex-col min-h-0 flex-1">
                {/* Header */}
                <div className="shrink-0 p-6 sm:p-8 pb-6 border-b border-gray-100">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2233] mb-2 pr-8 capitalize">
                    Apply for {jobTitle}
                  </h2>
                  <p className="text-[#5F6B7A]">
                    Please fill out the form below to submit your application.
                  </p>
                </div>

                {/* Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1 min-h-0 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-[#1C2233]">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-[#1C2233]">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#1C2233]">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-[#1C2233]">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-medium text-[#1C2233]">Resume / CV (PDF, Max 10MB) *</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        accept=".pdf"
                        required
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file && file.size > 10 * 1024 * 1024) {
                            alert("File size must be less than 10MB");
                            e.target.value = "";
                          }
                        }}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FCF8F2] file:text-[#D4A937] hover:file:bg-[#F3E0C0] cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="coverLetter" className="text-sm font-medium text-[#1C2233]">Cover Letter (Optional)</label>
                    <textarea
                      id="coverLetter"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A937]/50 focus:border-[#D4A937] transition-all resize-none"
                      placeholder="Tell us why you're a great fit..."
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="shrink-0 p-6 sm:px-8 sm:py-6 border-t border-gray-100 bg-gray-50">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#D4A937] text-white px-8 py-4 rounded-xl text-[15px] font-semibold hover:bg-[#C89A28] transition-all duration-300 shadow-[0_8px_20px_rgba(212,169,55,0.25)] hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 sm:p-12 text-center min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1C2233] mb-3">Application Received!</h3>
                <p className="text-[#5F6B7A] mb-8">
                  Thank you for applying to <span className="capitalize font-semibold">{jobTitle}</span>. Our hiring team will review your application and get back to you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#1C2233] text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
