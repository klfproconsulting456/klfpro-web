"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { api } from "../../lib/api";
import { useRouter, useSearchParams } from "next/navigation";

function EligibilityFunnelContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    employmentType: "",
    monthlyIncome: "",
    existingEmi: "",
    loanAmount: "",
    loanTypeSlug: "personal-loan",
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const product = searchParams.get("product");
    const phone = searchParams.get("phone");
    setFormData((prev) => ({
      ...prev,
      ...(product ? { loanTypeSlug: product } : {}),
      ...(phone ? { phone: phone } : {}),
    }));
  }, [searchParams]);

  const handleChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/leads", {
        ...formData,
        monthlyIncome: formData.monthlyIncome ? parseInt(formData.monthlyIncome, 10) : undefined,
        existingEmi: formData.existingEmi ? parseInt(formData.existingEmi, 10) : undefined,
        loanAmount: formData.loanAmount ? parseInt(formData.loanAmount, 10) : undefined,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 4000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 shadow-2xl backdrop-blur-xl md:p-10">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-4xl text-emerald-400">
              ✓
            </div>
            <h2 className="text-3xl font-bold text-[#0A1128]">Application Received!</h2>
            <p className="mt-4 text-[#1E293B]">
              Thank you, {formData.fullName}. Based on your profile, you are highly likely to be approved. Our loan expert will contact you within 2 hours.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Employment */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1128]">Let's check your eligibility</h2>
                  <p className="mt-2 text-[#1E293B]">First, tell us about your employment type.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => {
                      handleChange("employmentType", "SALARIED");
                      nextStep();
                    }}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-8 transition-all ${
                      formData.employmentType === "SALARIED"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-[#0A1128]/15 bg-[#0A1128]/5 hover:bg-[#0A1128]/5"
                    }`}
                  >
                    <span className="text-4xl">💼</span>
                    <span className="mt-4 font-semibold text-[#0A1128]">Salaried</span>
                    <span className="mt-1 text-xs text-zinc-500">I receive a fixed salary</span>
                  </button>
                  <button
                    onClick={() => {
                      handleChange("employmentType", "SELF_EMPLOYED");
                      nextStep();
                    }}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-8 transition-all ${
                      formData.employmentType === "SELF_EMPLOYED"
                        ? "border-[#D4AF37] bg-[#D4AF37]/10"
                        : "border-[#0A1128]/15 bg-[#0A1128]/5 hover:bg-[#0A1128]/5"
                    }`}
                  >
                    <span className="text-4xl">🏪</span>
                    <span className="mt-4 font-semibold text-[#0A1128]">Self Employed</span>
                    <span className="mt-1 text-xs text-zinc-500">I run my own business</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Financials */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1128]">Financial Details</h2>
                  <p className="mt-2 text-[#1E293B]">This helps us calculate your maximum eligible loan amount.</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">
                      Required Loan Amount (₹)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 500000"
                      value={formData.loanAmount}
                      onChange={(e) => handleChange("loanAmount", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">
                      Net Monthly Income (₹)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 50000"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleChange("monthlyIncome", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">
                      Total Existing EMIs (₹/month)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 10000 (0 if none)"
                      value={formData.existingEmi}
                      onChange={(e) => handleChange("existingEmi", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 rounded-xl border border-[#0A1128]/15 bg-transparent px-4 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.monthlyIncome}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Final Submit */}
            {step === 3 && (
              <form onSubmit={submitLead} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1128]">Almost there!</h2>
                  <p className="mt-2 text-[#1E293B]">Where should we send your eligibility report?</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F1C3F]">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 rounded-xl border border-[#0A1128]/15 bg-transparent px-4 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] disabled:opacity-50"
                  >
                    {loading ? "Analyzing Profile..." : "Submit Application"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function EligibilityFunnel() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center p-10"><div className="h-8 w-8 animate-spin rounded-full border-b-2 border-[#D4AF37]" /></div>}>
      <EligibilityFunnelContent />
    </Suspense>
  );
}
