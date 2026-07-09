import { EligibilityFunnel } from "@/components/eligibility/EligibilityFunnel";

export default function EligibilityPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EE] pt-20 pb-20">
      <div className="container-pro">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A1128] tracking-tight">Check Your Loan Eligibility</h1>
          <p className="mt-4 text-lg text-[#1E293B] max-w-2xl mx-auto">Find out exactly how much loan you can get based on your income, obligations, and credit profile in just 2 minutes.</p>
        </div>
        <EligibilityFunnel />
      </div>
    </div>
  );
}
