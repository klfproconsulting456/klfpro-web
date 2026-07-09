import { generateSeoMetadata, generateFinancialProductSchema } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Home Loan | Low Interest Rates & Fast Approval | KLFPRO",
  description: "Apply for a Home Loan with KLFPRO. Enjoy lowest interest rates starting from 8.5% p.a., flexible repayment options, and zero pre-payment penalties.",
  path: "/loans/home",
});

export default function HomeLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateFinancialProductSchema({
    name: "KLFPRO Home Loan",
    description: "Home Loan with lowest interest rates starting from 8.5% p.a. Zero pre-payment penalties and fast digital sanction.",
    interestRate: "8.5",
    url: "/loans/home",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
