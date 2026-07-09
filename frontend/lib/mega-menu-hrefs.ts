/**
 * Maps mega-menu labels to app routes. Used by StickyUrbanNav mega menus.
 */
export function hrefForMegaMenuItem(label: string): string | undefined {
  const loanSlugs: Record<string, string> = {
    "Personal Loan": "/loans/personal-loan",
    "Home Loan": "/loans/home",
    "Business Loan": "/loans/business",
    "Loan Against Property": "/loans/loan-against-property",
    "Car Loan": "/loans/car",
    "Used Car Loan": "/loans/used-car",
    "Two Wheeler Loan": "/loans/two-wheeler",
    "Commercial Vehicle Loan": "/loans/commercial-vehicle",
    "Education Loan": "/loans/education"
  };
  if (loanSlugs[label]) return loanSlugs[label];

  if (label.includes("Calculator") || label.includes("Tax Benefit")) {
    return "/emi-calculator";
  }
  if (label === "Check Free CIBIL Score") return "/credit-score";

  const cardBanks: Record<string, string> = {
    "HDFC Credit Card": "/credit-score",
    "ICICI Credit Card": "/credit-score",
    "Axis Credit Card": "/credit-score",
    "SBI Credit Card": "/credit-score"
  };
  if (cardBanks[label]) return cardBanks[label];

  if (label.includes("Credit Card")) return "/credit-score";

  return undefined;
}
