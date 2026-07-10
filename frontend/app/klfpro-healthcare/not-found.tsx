import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function HealthcareNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F8FAFC] px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-[#D4A937]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1C2233] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-[#5F6B7A]">
          Sorry, we couldn't find the page you're looking for on KLFPRO Healthcare.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4A937] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#C89A28] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A937] transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Healthcare Home
          </Link>
        </div>
      </div>
    </main>
  );
}
