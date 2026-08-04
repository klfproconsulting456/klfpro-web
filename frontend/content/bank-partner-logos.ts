

export type BankPartnerLogo = {
  id: string;
  name: string;
  image: string;
};

/** One entry per file in `public/images/marketing/banks/` — no duplicates. */
export const BANK_PARTNER_LOGOS: readonly BankPartnerLogo[] = [
  { id: "axis", name: "Axis Bank", image: "/images/partners/Axis.png" },
  { id: "bajaj", name: "Bajaj Finserv", image: "/images/partners/bajaj.png" },
  { id: "bom", name: "Bank of Maharashtra", image: "/images/partners/BOM.png" },
  { id: "hdfc", name: "HDFC Bank", image: "/images/partners/HDFC.png" },
  { id: "icici", name: "ICICI Bank", image: "/images/partners/ICICI.png" },
  { id: "idbi", name: "IDBI Bank", image: "/images/partners/IDBI.png" },
  { id: "kotak", name: "Kotak Mahindra Bank", image: "/images/partners/kotak.png" },
  { id: "pnb", name: "Punjab National Bank", image: "/images/partners/PNB.png" },
  { id: "sbi", name: "State Bank of India", image: "/images/partners/SBI.png" }
] as const;
