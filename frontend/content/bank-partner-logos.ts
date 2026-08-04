

export type BankPartnerLogo = {
  id: string;
  name: string;
  image: string;
};

/** One entry per file in `public/images/marketing/banks/` — no duplicates. */
export const BANK_PARTNER_LOGOS: readonly BankPartnerLogo[] = [
  { id: "axis", name: "Axis Bank", image: "/images/marketing/banks/Axis.png?v=1" },
  { id: "bajaj", name: "Bajaj Finserv", image: "/images/marketing/banks/bajaj.png?v=1" },
  { id: "bom", name: "Bank of Maharashtra", image: "/images/marketing/banks/BOM.png?v=1" },
  { id: "hdfc", name: "HDFC Bank", image: "/images/marketing/banks/HDFC.png?v=1" },
  { id: "icici", name: "ICICI Bank", image: "/images/marketing/banks/ICICI.png?v=1" },
  { id: "idbi", name: "IDBI Bank", image: "/images/marketing/banks/IDBI.png?v=1" },
  { id: "kotak", name: "Kotak Mahindra Bank", image: "/images/marketing/banks/kotak.png?v=1" },
  { id: "pnb", name: "Punjab National Bank", image: "/images/marketing/banks/PNB.png?v=1" },
  { id: "sbi", name: "State Bank of India", image: "/images/marketing/banks/SBI.png?v=1" }
] as const;
