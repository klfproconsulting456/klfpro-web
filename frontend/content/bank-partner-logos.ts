import type { StaticImageData } from "next/image";

import axis from "../../assets/BANK-LOGOS/Axis.png";
import bajaj from "../../assets/BANK-LOGOS/bajaj.png";
import bom from "../../assets/BANK-LOGOS/BOM.png";
import hdfc from "../../assets/BANK-LOGOS/HDFC.png";
import icici from "../../assets/BANK-LOGOS/ICICI.png";
import idbi from "../../assets/BANK-LOGOS/IDBI.png";
import kotak from "../../assets/BANK-LOGOS/kotak.png";
import pnb from "../../assets/BANK-LOGOS/PNB.png";
import sbi from "../../assets/BANK-LOGOS/SBI.png";

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
