"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { StickyUrbanNav } from "@/components/marketing/StickyUrbanNav";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMarketingHome = pathname === "/";
  const isMarketingLoanPage = pathname.startsWith("/loans/");
  const partnerHref = isMarketingHome ? "#eligibility" : "/contact";

  const isAppRoute = pathname.startsWith("/admin") || pathname.startsWith("/portal") || pathname.startsWith("/login");
  const isHealthcareRoute = pathname.startsWith("/klfpro-healthcare");

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
