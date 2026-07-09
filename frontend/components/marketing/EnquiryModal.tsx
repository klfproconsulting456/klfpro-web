"use client";

import { useEffect, useState, FormEvent } from "react";
import Select from "react-select";
import { api } from "../../lib/api";

type EnquiryModalProps = {
  open: boolean;
  onClose: () => void;
  initialLoanType?: string;
};

const cityOptions = [
  { value: "delhi-delhi", label: "Delhi, Delhi" },
  { value: "mumbai-maharashtra", label: "Mumbai, Maharashtra" },
  { value: "bangalore-karnataka", label: "Bangalore, Karnataka" },
  { value: "hyderabad-telangana", label: "Hyderabad, Telangana" },
  { value: "chennai-tamilnadu", label: "Chennai, Tamil Nadu" },
  { value: "kolkata-westbengal", label: "Kolkata, West Bengal" },
  { value: "pune-maharashtra", label: "Pune, Maharashtra" },
  { value: "ahmedabad-gujarat", label: "Ahmedabad, Gujarat" },
  { value: "jaipur-rajasthan", label: "Jaipur, Rajasthan" },
  { value: "lucknow-up", label: "Lucknow, Uttar Pradesh" }
];

const loanTypes = [
  "Personal Loan",
  "Home Loan",
  "Loan Against Property",
  "Business Loan",
  "Credit Card",
  "Vehicle Loan",
  "Education Loan"
];

export function EnquiryModal({ open, onClose, initialLoanType = "Personal Loan" }: EnquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState<{ value: string; label: string } | null>(null);
  const [loanType, setLoanType] = useState(initialLoanType);
  const [consent, setConsent] = useState(true);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  if (!open) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const loanTypeSlug = loanType.toLowerCase().replace(/ /g, "-");
      
      await api.post("/leads", {
        fullName,
        phone: mobile,
        email,
        loanTypeSlug,
        message: `City: ${city?.label || "Not specified"}`
      });

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#FDFBF7]/50 px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold leading-snug text-zinc-900">Need Cash Fast? Enquire Now!</h2>
            <div className="mt-2 h-1 w-10 rounded-full bg-yellow-500" />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-sm text-gray-500 hover:bg-gray-100"
            aria-label="Close enquiry form"
          >
            ✕
          </button>
        </div>

        {isSuccess ? (
          <div className="mt-8 text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Application Submitted!</h3>
            <p className="mt-2 text-gray-600">Our financial expert will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {errorMsg && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                {errorMsg}
              </div>
            )}
            <div>
              <input
                type="text"
                required
                placeholder="Full Name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-zinc-800 placeholder:text-[#0F1C3F] outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-11 items-center rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-[#1E293B]">
                +91
              </span>
              <input
                type="tel"
                required
                placeholder="Mobile No. *"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="h-11 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-zinc-800 placeholder:text-[#0F1C3F] outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />
            </div>

            <div>
              <input
                type="email"
                required
                placeholder="Email Address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-zinc-800 placeholder:text-[#0F1C3F] outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
              />
            </div>

            <div>
              <Select
                options={cityOptions}
                value={city}
                onChange={(option) => setCity(option as any)}
                placeholder="Search City *"
                className="text-sm"
                menuPlacement="auto"
                menuPosition="fixed"
                menuPortalTarget={portalTarget ?? undefined}
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: "44px",
                    borderRadius: 8,
                    borderColor: "#e5e7eb",
                    boxShadow: "none"
                  }),
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                  menu: (base) => ({ ...base, zIndex: 9999 })
                }}
              />
            </div>

            <div>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm text-zinc-800 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                required
              >
                <option value="" disabled>
                  Choose Loan Type *
                </option>
                {loanTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="h-4 w-4 accent-zinc-900"
              />
              <span>I agree to receive promotional message from WhatsApp/RCS/SMS.</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#FDFBF7] text-sm font-semibold text-[#0A1128] hover:bg-zinc-900 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

