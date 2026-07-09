"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { EnquiryModal } from "./EnquiryModal";

type LenderType = "nationalized" | "private" | "nbfc";

type LenderRow = {
  id: string;
  name: string;
  type: LenderType;
  interest: string;
  processingFee: string;
  loanAmount: string;
  tenure: string;
  tags: ("lowFee" | "fast" | "maxLoan" | "lowIncome" | "digital")[];
};

const lenders: LenderRow[] = [
  {
    id: "boi",
    name: "Bank of India Personal Loan",
    type: "nationalized",
    interest: "10.85% – 16.25%",
    processingFee: "Up to 1% of loan amount",
    loanAmount: "₹25K – ₹25L",
    tenure: "1 – 7 Years",
    tags: ["lowFee", "maxLoan", "digital"]
  },
  {
    id: "pnb",
    name: "Punjab National Bank Personal Loan",
    type: "nationalized",
    interest: "10.25% – 16.8%",
    processingFee: "Up to 1.5% of loan amount",
    loanAmount: "₹50K – ₹20L",
    tenure: "1 – 6 Years",
    tags: ["fast", "lowIncome"]
  },
  {
    id: "bob",
    name: "Bank of Baroda Personal Loan",
    type: "nationalized",
    interest: "10.15% – 17.5%",
    processingFee: "Up to 2% of loan amount",
    loanAmount: "₹1L – ₹20L",
    tenure: "1 – 7 Years",
    tags: ["maxLoan", "digital"]
  },
  {
    id: "sbi",
    name: "State Bank of India Personal Loan",
    type: "nationalized",
    interest: "10% – 15%",
    processingFee: "Up to 1.5% of loan amount",
    loanAmount: "₹50K – ₹35L",
    tenure: "1 – 6 Years",
    tags: ["lowFee", "maxLoan", "fast"]
  },
  {
    id: "psb",
    name: "Punjab & Sind Bank Personal Loan",
    type: "nationalized",
    interest: "9.7% – 13.85%",
    processingFee: "Up to 1% of loan amount",
    loanAmount: "₹50K – ₹20L",
    tenure: "1 – 6 Years",
    tags: ["lowFee", "digital"]
  },
  {
    id: "rbl",
    name: "RBL Bank Personal Loan",
    type: "private",
    interest: "18%",
    processingFee: "Up to 2% of loan amount",
    loanAmount: "₹30K – ₹5L",
    tenure: "Tenure(1 - 3 Years)",
    tags: ["fast", "digital"]
  },
  {
    id: "unity",
    name: "Unity Small Finance Bank Personal Loan",
    type: "private",
    interest: "15.5% – 24.75%",
    processingFee: "Upto 3.25% of Loan Amount",
    loanAmount: "₹50K – ₹5L",
    tenure: "Tenure(0 - 3 Years)",
    tags: ["fast", "digital"]
  },
  {
    id: "dcb",
    name: "DCB Bank Personal Loan",
    type: "private",
    interest: "13% – 25%",
    processingFee: "Up to 3% of loan sanctioned",
    loanAmount: "₹1L – ₹5L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["lowFee", "digital"]
  },
  {
    id: "relianceCapital",
    name: "Reliance Capital Personal Loan",
    type: "private",
    interest: "11.99% – 16.25%",
    processingFee: "Up to 2%",
    loanAmount: "-",
    tenure: "Tenure(1 - 4 Years)",
    tags: ["lowFee"]
  },
  {
    id: "federal",
    name: "Federal Bank Personal Loan",
    type: "private",
    interest: "11.99% – 18.99%",
    processingFee: "Up to 3% of loan amount",
    loanAmount: "₹50K – ₹25L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["lowFee", "maxLoan"]
  },
  {
    id: "karnataka",
    name: "Karnataka Bank Personal Loan",
    type: "private",
    interest: "11.27% – 13.77%",
    processingFee: "Up to 2% of loan amount (Min. ₹2,500 & Max. ₹8,500)",
    loanAmount: "₹1L – ₹25L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["lowFee", "maxLoan"]
  },
  {
    id: "idbi",
    name: "IDBI Bank Personal Loan",
    type: "private",
    interest: "11% – 15.5%",
    processingFee: "1% of loan amount (max ₹2,500)",
    loanAmount: "₹25K – ₹5L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["lowFee"]
  },
  {
    id: "kotak",
    name: "Kotak Bank Personal Loan",
    type: "private",
    interest: "10.99%",
    processingFee: "Up to 5% of loan amount",
    loanAmount: "₹50K – ₹35L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["maxLoan", "digital"]
  },
  {
    id: "hdfc",
    name: "HDFC Bank Personal Loan",
    type: "private",
    interest: "10.9% – 24%",
    processingFee: "Up to ₹6,500 + GST",
    loanAmount: "₹50K – ₹40L",
    tenure: "Tenure(1 - 6 Years)",
    tags: ["maxLoan", "fast", "digital"]
  },
  {
    id: "yes",
    name: "YES Bank Personal Loan",
    type: "private",
    interest: "10.85% – 21%",
    processingFee: "Upto 2.5% of processing fee",
    loanAmount: "₹1L – ₹40L",
    tenure: "Tenure(1 - 6 Years)",
    tags: ["fast", "digital"]
  },
  {
    id: "citi",
    name: "CITI Bank Personal Loan",
    type: "private",
    interest: "10.75% – 16.49%",
    processingFee: "Up to 3% of the borrowed loan amount",
    loanAmount: "₹50K – ₹30L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["digital"]
  },
  {
    id: "hdfcSales",
    name: "HDFC Sales Personal Loan",
    type: "private",
    interest: "10.5% – 25%",
    processingFee: "-",
    loanAmount: "₹50K – ₹40L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["maxLoan"]
  },
  {
    id: "indusind",
    name: "IndusInd Bank Personal Loan",
    type: "private",
    interest: "10.49%",
    processingFee: "Up to 3% of the sanctioned loan amount",
    loanAmount: "₹3L – ₹75L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["maxLoan", "fast"]
  },
  {
    id: "icici",
    name: "ICICI Bank Personal Loan",
    type: "private",
    interest: "9.99% – 16.5%",
    processingFee: "Up to 2% of the loan amount + taxes",
    loanAmount: "₹2.5L – ₹50L",
    tenure: "Tenure(1 - 6 Years)",
    tags: ["maxLoan"]
  },
  {
    id: "idfcFirst",
    name: "IDFC FIRST Bank Personal Loan",
    type: "private",
    interest: "9.99%",
    processingFee: "Upto 2% of processing fee",
    loanAmount: "₹20K – ₹1Cr",
    tenure: "Tenure(0 - 5 Years)",
    tags: ["maxLoan", "digital"]
  },
  {
    id: "hsbc",
    name: "HSBC Personal Loan",
    type: "private",
    interest: "9.75% – 12%",
    processingFee: "Up to 2% of disbursed amount (non-refundable)",
    loanAmount: "₹50K – ₹30L",
    tenure: "Tenure(1 - 5 Years)",
    tags: ["lowFee", "digital"]
  },
  {
    id: "axis",
    name: "Axis Bank Personal Loan",
    type: "private",
    interest: "9.5% – 21.55%",
    processingFee: "Up to 2% of loan amount + GST",
    loanAmount: "₹50K – ₹40L",
    tenure: "Tenure(1 - 7 Years)",
    tags: ["maxLoan", "digital"]
  },
  {
    id: "karur",
    name: "Karur Vysya Bank Personal Loan",
    type: "private",
    interest: "9.5% – 13.35%",
    processingFee: "1.50% of requested loan amount",
    loanAmount: "₹50K – ₹10L",
    tenure: "Tenure(1 - 6 Years)",
    tags: ["lowFee"]
  },
  {
    id: "tata",
    name: "Tata Capital Personal Loan",
    type: "nbfc",
    interest: "10.99% – 29.99%",
    processingFee: "Up to 3% of loan amount",
    loanAmount: "₹75K – ₹35L",
    tenure: "1 – 7 Years",
    tags: ["maxLoan", "digital"]
  },
  {
    id: "adityaBirla",
    name: "Aditya Birla Finance Personal Loan",
    type: "nbfc",
    interest: "13.5% – 36%",
    processingFee: "Up to 4% of loan amount",
    loanAmount: "₹1L – ₹40L",
    tenure: "1 – 6 Years",
    tags: ["fast", "maxLoan"]
  },
  {
    id: "ujjivan",
    name: "Ujjivan Small Finance Bank Personal Loan",
    type: "nbfc",
    interest: "23.3% – 24.8%",
    processingFee: "Up to 2% of loan amount",
    loanAmount: "₹30K – ₹30L",
    tenure: "1 – 3 Years",
    tags: ["digital"]
  },
  {
    id: "bhanix",
    name: "Bhanix Finance Personal Loan",
    type: "nbfc",
    interest: "33.5% – 36%",
    processingFee: "Up to 3% of loan amount or INR 1000 whichever is higher",
    loanAmount: "₹45K – ₹3L",
    tenure: "Tenure(0 - 1 Years)",
    tags: []
  },
  {
    id: "prefr",
    name: "Prefr Personal Loan",
    type: "nbfc",
    interest: "15% – 36%",
    processingFee: "3-5% with Minimum Proc. Fee of INR 1500 + GST",
    loanAmount: "₹50K – ₹5L",
    tenure: "Tenure(1 - 4 Years)",
    tags: []
  },
  {
    id: "capitalFirst",
    name: "Capital First Ltd. Personal Loan",
    type: "nbfc",
    interest: "18.96%",
    processingFee: "Up to 2.49% of the loan amount",
    loanAmount: "₹1L – ₹40L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "heroFincorp",
    name: "Hero FinCorp Personal Loan",
    type: "nbfc",
    interest: "18% – 29%",
    processingFee: "2.5% of Loan Amount",
    loanAmount: "₹50K – ₹5L",
    tenure: "Tenure(1 - 3 Years)",
    tags: []
  },
  {
    id: "zype",
    name: "Zype Personal Loan",
    type: "nbfc",
    interest: "18% – 39%",
    processingFee: "From 2% to 6% of the Loan Amount",
    loanAmount: "Up to ₹5L",
    tenure: "Tenure(0 - 2 Years)",
    tags: ["digital"]
  },
  {
    id: "fatakPay",
    name: "FatakPay Personal Loan",
    type: "nbfc",
    interest: "18%",
    processingFee: "From 2% to 10%",
    loanAmount: "₹20K – ₹5L",
    tenure: "Tenure(0 - 2 Years)",
    tags: []
  },
  {
    id: "clix",
    name: "Clix Capital Personal Loan",
    type: "nbfc",
    interest: "16% – 32%",
    processingFee: "Up to 10% of loan sanctioned",
    loanAmount: "₹1L – ₹10L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "paysense",
    name: "PaySense Personal Loan",
    type: "nbfc",
    interest: "16% – 36%",
    processingFee: "Up to 3% of loan amount",
    loanAmount: "₹5K – ₹5L",
    tenure: "Tenure(0 - 5 Years)",
    tags: ["digital"]
  },
  {
    id: "dhfl",
    name: "DHFL Personal Loan",
    type: "nbfc",
    interest: "16% – 36%",
    processingFee: "-",
    loanAmount: "Up to ₹30L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "moneywide",
    name: "MoneyWide Personal Loan",
    type: "nbfc",
    interest: "16% – 32%",
    processingFee: "2.5% of Loan Amount",
    loanAmount: "₹20K – ₹3L",
    tenure: "Tenure(0 - 3 Years)",
    tags: []
  },
  {
    id: "auSmall",
    name: "AU Small Finance Bank Personal Loan",
    type: "nbfc",
    interest: "15% – 36%",
    processingFee: "Up to 4% of Loan amount",
    loanAmount: "₹25K – ₹10L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "ftCash",
    name: "FT Cash Personal Loan",
    type: "nbfc",
    interest: "14.5% – 18.5%",
    processingFee: "-",
    loanAmount: "₹1L – ₹5L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "edelweiss",
    name: "Edelweiss Financial Services Personal Loan",
    type: "nbfc",
    interest: "14.5% – 18.5%",
    processingFee: "Upto 2% of the Loan amount + applicable taxes",
    loanAmount: "₹2L – ₹20L",
    tenure: "Tenure(0 - 4 Years)",
    tags: []
  },
  {
    id: "muthoot",
    name: "Muthoot Finance Ltd Personal Loan",
    type: "nbfc",
    interest: "14% – 22%",
    processingFee: "Up to 2% of the loan amount",
    loanAmount: "₹50K – ₹10L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "incred",
    name: "InCred Financial Services Personal Loan",
    type: "nbfc",
    interest: "13.49% – 36%",
    processingFee: "2.00% – 5.00%",
    loanAmount: "₹50K – ₹10L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "smfg",
    name: "SMFG India Credit Company Ltd Personal Loan",
    type: "nbfc",
    interest: "13%",
    processingFee: "Upto 5% of loan amount.",
    loanAmount: "₹50K – ₹30L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "indiabulls",
    name: "IndiaBulls Personal Loan",
    type: "nbfc",
    interest: "13%",
    processingFee: "3% onwards",
    loanAmount: "₹1K – ₹15L",
    tenure: "Tenure(0 - 2 Years)",
    tags: []
  },
  {
    id: "iifl",
    name: "IIFL Finance Personal Loan",
    type: "nbfc",
    interest: "12.75% – 44%",
    processingFee: "Up to 9% + applicable taxes",
    loanAmount: "₹5K – ₹5L",
    tenure: "Tenure(0 - 3 Years)",
    tags: []
  },
  {
    id: "shriram",
    name: "Shriram Urban Co Operative Bank Limited Personal Loan",
    type: "nbfc",
    interest: "12.5% – 15.5%",
    processingFee: "Upto 1% of the sanctioned loan amount",
    loanAmount: "₹10K – ₹3L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "piramal",
    name: "Piramal Finance Personal Loan",
    type: "nbfc",
    interest: "12.14%",
    processingFee: "Up to 5% of the loan amount + applicable taxes",
    loanAmount: "₹50K – ₹25L",
    tenure: "Tenure(1 - 5 Years)",
    tags: []
  },
  {
    id: "epifi",
    name: "EpiFi Personal Loan",
    type: "nbfc",
    interest: "12%",
    processingFee: "Upto 2.5% of Loan Amount",
    loanAmount: "₹5K – ₹10L",
    tenure: "Tenure(0 - 4 Years)",
    tags: []
  },
  {
    id: "ltFinance",
    name: "L&T Finance Personal Loan",
    type: "nbfc",
    interest: "11%",
    processingFee: "1%-3%",
    loanAmount: "₹1L – ₹30L",
    tenure: "Tenure(1 - 6 Years)",
    tags: []
  }
];

const tabConfig: { key: LenderType | "all"; label: string }[] = [
  { key: "nationalized", label: "Nationalized Bank" },
  { key: "private", label: "Private Bank" },
  { key: "nbfc", label: "NBFC" }
];

const filterConfig = [
  { key: "lowFee", label: "Low Processing Fee" },
  { key: "fast", label: "Quick Disbursal" },
  { key: "maxLoan", label: "Max Loan Amount" },
  { key: "lowIncome", label: "Lowest Income Requirement" },
  { key: "digital", label: "100% Digital Process" }
] as const;

type SortKey = "name" | "interest" | "processingFee" | "loanAmount" | "tenure";

export function ComparePersonalLoansSection({ loanType = "Personal Loan" }: { loanType?: string }) {
  const [activeTab, setActiveTab] = useState<LenderType>("nationalized");
  const [activeFilters, setActiveFilters] = useState<Set<string>>(() => new Set());
  const [sortKey, setSortKey] = useState<SortKey>("interest");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
  const [expandedTabs, setExpandedTabs] = useState<Set<LenderType>>(() => new Set());
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryLoanType, setEnquiryLoanType] = useState(loanType);

  const lenderNameForLoanType = (name: string) => {
    if (loanType === "Personal Loan") return name;
    return name.replace(/Personal Loan/g, loanType);
  };

  const toggleFilter = (key: string) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const resetFilters = () => {
    setActiveFilters(new Set());
  };

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const { visibleRows, totalCount } = useMemo(() => {
    let rows = lenders.filter((l) => (activeTab ? l.type === activeTab : true));

    if (activeFilters.size > 0) {
      rows = rows.filter((l) => {
        for (const f of activeFilters) {
          if (!l.tags.includes(f as any)) return false;
        }
        return true;
      });
    }

    const parseMinPercent = (value: string) => {
      const match = value.match(/([\d.]+)%/);
      return match ? parseFloat(match[1]) : Number.POSITIVE_INFINITY;
    };

    const parseMaxAmount = (value: string) => {
      const match = value.match(/–\s*₹?([\d.]+)([KL])?/i);
      if (!match) return 0;
      const num = parseFloat(match[1]);
      const unit = match[2]?.toUpperCase();
      if (unit === "K") return num * 1_000;
      if (unit === "L") return num * 100_000;
      return num;
    };

    rows = [...rows].sort((a, b) => {
      let av = 0;
      let bv = 0;
      switch (sortKey) {
        case "name":
          av = a.name.localeCompare(b.name);
          bv = 0;
          break;
        case "interest":
          av = parseMinPercent(a.interest);
          bv = parseMinPercent(b.interest);
          break;
        case "processingFee":
          av = parseMinPercent(a.processingFee);
          bv = parseMinPercent(b.processingFee);
          break;
        case "loanAmount":
          av = parseMaxAmount(a.loanAmount);
          bv = parseMaxAmount(b.loanAmount);
          break;
        case "tenure":
          av = parseMinPercent(a.tenure.replace("Years", "%"));
          bv = parseMinPercent(b.tenure.replace("Years", "%"));
          break;
      }
      const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : av;
      return sortDir === "asc" ? cmp : -cmp;
    });

    const isExpanded = expandedTabs.has(activeTab);
    const visible = isExpanded ? rows : rows.slice(0, 4);

    return { visibleRows: visible, totalCount: rows.length };
  }, [activeTab, activeFilters, sortKey, sortDir, expandedTabs]);

  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_10%,rgba(212,175,55,0.09),transparent_52%),radial-gradient(ellipse_60%_45%_at_85%_90%,rgba(153,27,51,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-semibold leading-tight text-[#0A1128]">
          Compare Best <span className="klf-gold-shimmer-text">{loanType}</span> in India
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#1E293B]">
          Compare loan offers from leading banks and NBFCs in India to find the most affordable option for
          your needs.
        </p>

        <div className="mt-8 border-b border-[#0A1128]/15">
          <div className="flex gap-3 text-sm">
            {tabConfig.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as LenderType)}
                  className={`rounded-t-xl border-b-2 px-3 pb-3 pt-2 transition ${
                    isActive
                      ? "border-amber-300 text-[#0A1128]"
                      : "border-transparent text-[#1E293B] hover:text-[#0A1128]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          {filterConfig.map((f) => {
            const isActive = activeFilters.has(f.key);
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => toggleFilter(f.key)}
                className={`rounded-full border px-4 py-2 transition ${
                  isActive
                    ? "border-amber-300/40 bg-amber-300/15 text-[#B8972E] shadow-[0_0_24px_-14px_rgba(212,175,55,0.8)]"
                    : "border-[#0A1128]/15 bg-[#0A1128]/5 text-[#0F1C3F] hover:bg-[#0A1128]/5"
                }`}
              >
                {f.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={resetFilters}
            className="ml-auto rounded-full border border-[#0A1128]/20 bg-[#0A1128]/5 px-5 py-2 text-sm font-medium text-[#0A1128] transition hover:bg-[#0A1128]/5"
          >
            Reset
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          <div className="overflow-x-auto">
            <div className="min-w-[980px]">
              <div className="grid grid-cols-6 gap-4 border-b border-[#0A1128]/15 px-4 py-4 text-xs font-medium uppercase tracking-wide text-[#1E293B]">
                <button
                  type="button"
                  onClick={() => handleSort("name")}
                  className="flex items-center gap-1 text-left transition hover:text-[#0A1128]"
                >
                  Bank/NBFC
                </button>
                <button type="button" onClick={() => handleSort("interest")} className="text-left transition hover:text-[#0A1128]">
                  Interest Rate
                </button>
                <button type="button" onClick={() => handleSort("processingFee")} className="text-left transition hover:text-[#0A1128]">
                  Processing Fee
                </button>
                <button type="button" onClick={() => handleSort("loanAmount")} className="text-left transition hover:text-[#0A1128]">
                  Loan Amount
                </button>
                <button type="button" onClick={() => handleSort("tenure")} className="text-left transition hover:text-[#0A1128]">
                  Tenure
                </button>
                <div className="text-right">Action</div>
              </div>

              <div className="divide-y divide-white/10">
                {visibleRows.map((row) => (
                  <motion.div
                    key={row.id}
                    whileHover={{ y: -1.5, backgroundColor: "rgba(255,255,255,0.04)" }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-6 items-center gap-4 px-4 py-4 text-sm text-[#0A1128] sm:text-xs md:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="h-4 w-4 accent-amber-400" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0A1128]/20 bg-[#0A1128]/5 text-[#B8972E]">
                        ₹
                      </div>
                      <span className="font-medium text-[#0A1128]">{lenderNameForLoanType(row.name)}</span>
                    </div>
                    <div className="text-[#0F1C3F]">{row.interest}</div>
                    <div className="text-[#0F1C3F]">{row.processingFee}</div>
                    <div className="text-[#0F1C3F]">{row.loanAmount}</div>
                    <div className="text-[#0F1C3F]">{row.tenure}</div>
                    <div className="text-right">
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: "0 0 28px -6px rgba(212,175,55,0.55)" }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-5 py-2 text-xs font-semibold text-zinc-950"
                        type="button"
                        onClick={() => {
                          setEnquiryLoanType(loanType);
                          setIsEnquiryOpen(true);
                        }}
                      >
                        Enquire Now
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {totalCount > 4 ? (
          <div className="mt-10 flex justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03, boxShadow: "0 0 28px -8px rgba(212,175,55,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                setExpandedTabs((prev) => {
                  const next = new Set(prev);
                  if (next.has(activeTab)) next.delete(activeTab);
                  else next.add(activeTab);
                  return next;
                })
              }
              className="rounded-full border border-amber-300/30 bg-gradient-to-r from-[#D4AF37]/20 to-amber-300/10 px-8 py-3 text-sm font-semibold text-[#B8972E]"
            >
              {expandedTabs.has(activeTab) ? "View Less" : "View More Lenders"}
            </motion.button>
          </div>
        ) : null}

        <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} initialLoanType={enquiryLoanType} />
      </div>
    </section>
  );
}

