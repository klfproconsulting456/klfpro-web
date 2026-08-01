import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Against Property | KLFPRO Consulting",
  description: "Unlock the value of your property with KLFPRO Consulting's Loan Against Property (LAP).",
  openGraph: {
    title: "Loan Against Property | KLFPRO Consulting",
    description: "Unlock property value with LAP from KLFPRO Consulting.",
    type: "website"
  }
};

export default function LapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
