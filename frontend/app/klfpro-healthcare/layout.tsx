import type { Metadata } from "next";
import { HealthcareNavbar } from "@/components/healthcare/HealthcareNavbar";
import { HealthcareFooter } from "@/components/healthcare/HealthcareFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://klfprohealthcare.com"),
  title: "KLFPRO Healthcare | Premium Revenue Cycle & Solutions",
  description: "End-to-end healthcare solutions, revenue cycle management, medical billing, and BPO services to optimize your financial performance.",
  openGraph: {
    title: "KLFPRO Healthcare | Premium Revenue Cycle & Solutions",
    description: "End-to-end healthcare solutions, revenue cycle management, medical billing, and BPO services to optimize your financial performance.",
    url: "https://klfprohealthcare.com",
    siteName: "KLFPRO Healthcare",
    type: "website"
  },
};

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans antialiased text-[#0F172A]">
      <HealthcareNavbar />
      <main className="flex-1 w-full">{children}</main>
      <HealthcareFooter />
    </div>
  );
}
