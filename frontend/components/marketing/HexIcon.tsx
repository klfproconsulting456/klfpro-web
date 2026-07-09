export function HexIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center text-lg text-zinc-900 ${className ?? ""}`}
      style={{
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: "linear-gradient(145deg, #fde047, #facc15)",
        boxShadow: "0 0 24px -4px rgba(250, 204, 21, 0.45)"
      }}
    >
      {children}
    </div>
  );
}
