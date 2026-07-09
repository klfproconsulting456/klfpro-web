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
      ? "h-8 w-8 md:h-10 md:w-10"
      : "h-10 w-10 md:h-12 md:w-12";

  const wordClass =
    size === "compact"
      ? "text-[16px] md:text-[17px] font-medium lowercase leading-none tracking-tight"
      : "text-[18px] font-medium lowercase leading-none tracking-tight md:text-[20px]";

  const inner = (
    <>
      <span className={`relative shrink-0 ${markClass}`}>
        <Image
          src={MARK_SRC}
          alt=""
          fill
          priority
          className="object-contain scale-[1.5] drop-shadow-[0_5px_10px_rgba(0,0,0,0.22)]"
          sizes="48px"
        />
      </span>
      <span className={`select-none ${wordClass} ${wordmarkClassName}`}>
        klfpro{showConsulting ? " consulting" : ""}
      </span>
    </>
  );

  const row = `flex items-center gap-2 ${className ?? ""}`;

  if (asLink) {
    return (
      <Link href="/" className={row} aria-label="KLFPRO home">
        {inner}
      </Link>
    );
  }

  return <span className={row}>{inner}</span>;
}
