import type { StaticImageData } from "next/image";

import axis from "../public/images/marketing/banks/Axis.png";
import bajaj from "../public/images/marketing/banks/bajaj.png";
import bom from "../public/images/marketing/banks/BOM.png";
import hdfc from "../public/images/marketing/banks/HDFC.png";
import icici from "../public/images/marketing/banks/ICICI.png";
import idbi from "../public/images/marketing/banks/IDBI.png";
import kotak from "../public/images/marketing/banks/kotak.png";
import pnb from "../public/images/marketing/banks/PNB.png";
import sbi from "../public/images/marketing/banks/SBI.png";

export type BankPartnerLogo = {
  id: string;
  name: string;
  image: StaticImageData;
};

/** One entry per file in `assets/BANK-LOGOS/` — no duplicates. */
export const BANK_PARTNER_LOGOS: readonly BankPartnerLogo[] = [
  { id: "axis", name: "Axis Bank", image: axis },
  { id: "bajaj", name: "Bajaj Finserv", image: bajaj },
  { id: "bom", name: "Bank of Maharashtra", image: bom },
  { id: "hdfc", name: "HDFC Bank", image: hdfc },
  { id: "icici", name: "ICICI Bank", image: icici },
  { id: "idbi", name: "IDBI Bank", image: idbi },
  { id: "kotak", name: "Kotak Mahindra Bank", image: kotak },
  { id: "pnb", name: "Punjab National Bank", image: pnb },
  { id: "sbi", name: "State Bank of India", image: sbi }
] as const;
