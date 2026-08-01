import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Loan | KLFPRO Consulting",
  description: "Fund your studies in India & Abroad with KLFPRO Consulting's Education Loans up to 2 Cr.",
  openGraph: {
    title: "Education Loan | KLFPRO Consulting",
    description: "Fund your studies with KLFPRO Consulting's Education Loans.",
    type: "website"
  }
};

export default function EducationLoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
