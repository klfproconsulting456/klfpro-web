"use client";

import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { Footer } from "@/components/footer";
import { StickyUrbanNav } from "@/components/marketing/StickyUrbanNav";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  
  const isMarketingHome = pathname === "/";
  const isMarketingLoanPage = pathname.startsWith("/loans/");
  const partnerHref = isMarketingHome ? "#eligibility" : "/contact";

  const isAppRoute = pathname.startsWith("/admin") || pathname.startsWith("/portal") || pathname.startsWith("/login");
  
  // Use segments to detect healthcare route even when URL is rewritten by middleware
  const isHealthcareRoute = segments.includes("klfpro-healthcare") || pathname.startsWith("/klfpro-healthcare");

  if (isAppRoute || isHealthcareRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <StickyUrbanNav partnerHref={partnerHref} />
      {isMarketingHome || isMarketingLoanPage ? (
        children
      ) : (
        <>
          <div className="pt-[72px]">{children}</div>
          <Footer />
        </>
      )}
    </>
  );
}
