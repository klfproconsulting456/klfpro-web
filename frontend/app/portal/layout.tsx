"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { KlfproLogo } from "../../components/marketing/KlfproLogo";
import { api } from "../../lib/api";

const NAV_LINKS = [
  { href: "/portal/dashboard", label: "My Applications", icon: "📊" },
  { href: "/portal/documents", label: "My Documents", icon: "📄" },
  { href: "/portal/profile", label: "Profile & Settings", icon: "⚙️" },
];

export default function CustomerPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic session validation
    const checkSession = async () => {
      const authHeader = api.getAuthHeaders();
      if (!authHeader.Authorization) {
        try {
          const res = await api.post("/auth/customer/refresh", {});
          if (res.accessToken) {
            api.setCustomerToken(res.accessToken);
          } else {
            throw new Error();
          }
        } catch (e) {
          router.push("/login");
          return;
        }
      }
      setLoading(false);
    };
    checkSession();
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await api.post("/auth/customer/logout", {});
    } catch (e) {}
    api.setCustomerToken(null);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0A1128]">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.05),transparent_50%)]" />
      </div>

      {/* Top Navbar */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent py-2"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-8">
            <KlfproLogo size="compact" className="transition hover:opacity-80" wordmarkClassName="text-[#0A1128]" />
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-[#0A1128]" : "text-[#1E293B] hover:text-[#0A1128]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="portal-nav-pill"
                        className="absolute inset-0 rounded-full bg-slate-100 border border-slate-200"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="opacity-70">{link.icon}</span>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white transition hover:bg-slate-50 shadow-sm text-lg">
              🔔
            </button>
            <div className="h-6 w-px bg-slate-200"></div>
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-[#1E293B] hover:text-[#0A1128] transition"
            >
              Logout
            </button>
          </div>

          <button
            className="md:hidden p-2 text-[#1E293B]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 border-b border-slate-200 bg-white p-4 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    pathname === link.href ? "bg-slate-100 text-[#0A1128]" : "text-[#1E293B] hover:bg-slate-50"
                  }`}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-slate-100" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-slate-50"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6">
        {loading ? (
          <div className="flex h-[50vh] items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-[#D4AF37]"></div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
