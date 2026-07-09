"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import bajajLogo from "@/../assets/BANK-LOGOS/bajaj.png";

const BANK_LOGOS = [
  {
    name: "HDFC Bank",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
  },
  {
    name: "ICICI Bank",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg"
  },
  {
    name: "IndusInd Bank",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8f/IndusInd_Bank_logo.svg"
  },
  {
    name: "IDFC FIRST Bank",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6b/IDFC_FIRST_Bank_logo.svg"
  },
  {
    name: "InCred",
    url: "https://www.incred.com/wp-content/uploads/2022/03/logo.svg"
  },
  {
    name: "Piramal Finance",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Piramal_Group_logo.svg"
  },
  {
    name: "Tata Capital",
    url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_Capital_logo.svg"
  },
  {
    name: "Bajaj Finserv",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Bajaj_Finserv_Logo.svg",
    local: bajajLogo
  }
];

function BankLogoCard({ name, url, local }: { name: string; url: string; local?: StaticImageData }) {
  const [failed, setFailed] = useState(false);
  const isBajaj = name === "Bajaj Finserv";

  return (
    <div className="flex h-[90px] items-center justify-center rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 shadow-[0_14px_36px_-24px_rgba(0,0,0,0.7)] backdrop-blur-md transition-colors hover:border-amber-300/30 hover:bg-[#0A1128]/5">
      {failed && !local && <span className="text-sm font-semibold text-[#0F1C3F]">{name}</span>}
      {!failed && local && (
        <Image
          src={local}
          alt={name}
          className={`mx-auto w-auto object-contain ${isBajaj ? "max-h-14 md:max-h-16" : "max-h-10"}`}
        />
      )}
      {!failed && !local && (
        <img
          src={url}
          alt={name}
          className="mx-auto max-h-10 object-contain"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function BankPartnersCompactSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_45%_at_20%_10%,rgba(212,175,55,0.08),transparent_52%)]" />
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[28px] font-semibold text-[#0A1128] md:text-[32px]">
          Partnered With The Best{" "}
          <span className="klf-gold-shimmer-text">Banks &amp; NBFCs</span>
        </h2>
        <p className="mt-3 text-sm text-[#1E293B] md:text-[15px]">
          Choose from 50+ trusted lenders to suit your needs.
        </p>

        <div className="mt-10 mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {BANK_LOGOS.map((bank) => (
              <BankLogoCard key={bank.name} name={bank.name} url={bank.url} local={bank.local} />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mt-10 rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#B8972E] px-8 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-10px_rgba(212,175,55,0.55)] transition hover:scale-[1.02]"
        >
          View All Banks
        </button>
      </div>
    </section>
  );
}

