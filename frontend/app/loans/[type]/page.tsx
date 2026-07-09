import { loanTypes } from "@/content/site-data";

export default function LoanTypePage({ params }: { params: { type: string } }) {
  return (
    <div className="container-pro py-10">
      <h1 className="text-3xl font-semibold capitalize">{params.type.replace("-", " ")} Loan</h1>
      <p className="mt-3 text-sm text-[#1E293B] dark:text-[#0F1C3F]">
        Supported categories: {loanTypes.join(", ")}
      </p>
    </div>
  );
}
