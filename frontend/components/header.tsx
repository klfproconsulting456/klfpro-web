import Link from "next/link";
import { KlfproLogo } from "@/components/marketing/KlfproLogo";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="container-pro flex h-16 items-center justify-between">
        <KlfproLogo showConsulting size="compact" wordmarkClassName="text-zinc-900 dark:text-[#0A1128]" />
        <nav className="hidden gap-4 text-sm md:flex">
          <Link href="/loans/home">Loans</Link>
          <Link href="/emi-calculator">EMI</Link>
          <Link href="/eligibility">Eligibility</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
