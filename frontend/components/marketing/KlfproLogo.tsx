import Image from "next/image";
import Link from "next/link";

/** Synced from `assets/LOGO ORIGINAL.png` → `public/klfpro-mark.png` (transparent mark). */
const MARK_SRC = "/klfpro-mark.png";

export type KlfproLogoProps = {
  className?: string;
  /** Extra classes on the “klfpro” wordmark (colour adapts to light/dark header). */
  wordmarkClassName?: string;
  /** Use inside cards / non-nav areas where wrapping in `<a>` is wrong. */
  asLink?: boolean;
  /** Tighter mark + type for promo strips. */
  size?: "default" | "compact";
  showConsulting?: boolean;
};

export function KlfproLogo({
  className,
  wordmarkClassName = "text-zinc-900",
  asLink = true,
  size = "default",
  showConsulting = false
}: KlfproLogoProps) {
  const markClass =
    size === "compact"
      ? "h-8 md:h-10 w-auto"
      : "h-10 md:h-12 w-auto";

  const wordClass =
    size === "compact"
      ? "text-[16px] md:text-[17px] font-medium lowercase leading-none tracking-tight"
      : "text-[18px] font-medium lowercase leading-none tracking-tight md:text-[20px]";

  const inner = (
    <>
      <span className={`relative shrink-0 flex items-center ${markClass}`}>
        <img
          src="/healthcare-logo.png"
          alt="KLFPRO Logo"
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      <span className={`select-none ${wordClass} ${wordmarkClassName}`}>
        KLFPRO{" "}
        {showConsulting && (
          <span className="font-semibold text-[#D4A937]">
            Consulting
          </span>
        )}
      </span>
    </>
  );

  const row = `flex items-center gap-2 group ${className ?? ""}`;

  if (asLink) {
    return (
      <Link href="/" className={row} aria-label="KLFPRO home">
        {inner}
      </Link>
    );
  }

  return <span className={row}>{inner}</span>;
}
