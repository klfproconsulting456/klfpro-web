import { generateSeoMetadata, generateFinancialProductSchema } from "@/lib/seo";

export const metadata = generateSeoMetadata({
  title: "Personal Loan | Instant Approval & Low EMI | KLFPRO",
  description: "Get an instant Personal Loan with KLFPRO. No collateral required, flexible repayment terms up to 60 months, and interest rates starting from 10.5%.",
  path: "/loans/personal-loan",
});

export default function PersonalLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateFinancialProductSchema({
    name: "KLFPRO Personal Loan",
    description: "Instant personal loan with no collateral. Flexible repayment and rates starting from 10.5%.",
    interestRate: "10.5",
    url: "/loans/personal-loan",
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
