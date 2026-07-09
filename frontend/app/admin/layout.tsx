"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const ADMIN_NAV = [
  { href: "/admin/dashboard", label: "Analytics Dashboard", icon: "📊" },
  { href: "/admin/leads", label: "Lead Management", icon: "👥" },
  { href: "/admin/seo-health", label: "SEO Health", icon: "📈" },
  { href: "/admin/settings", label: "Team Settings", icon: "⚙️" },
];

export default function AdminPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Basic auth check
  useEffect(() => {
    if (pathname !== "/admin/login") {
      const token = localStorage.getItem("klfpro_admin_token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [pathname, router]);

  // Skip layout on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    localStorage.removeItem("klfpro_admin_token");
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-600">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 260, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="flex h-16 shrink-0 items-center px-6 border-b border-slate-100">
              <span className="text-xl font-bold tracking-tight text-[#0A1128]">KLF<span className="text-[#D4AF37]">PRO</span> Admin</span>
            </div>

            <div className="flex-1 px-4 py-6">
              <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                Menu
              </p>
              <nav className="flex flex-col gap-1">
                {ADMIN_NAV.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                        isActive ? "text-[#0A1128] bg-slate-100" : "text-[#1E293B] hover:bg-slate-50 hover:text-[#0A1128]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="admin-active-nav"
                          className="absolute left-0 h-5 w-1 rounded-r-full bg-[#D4AF37]"
                        />
                      )}
                      <span>{link.icon}</span>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-slate-100 p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600 hover:border-red-100"
              >
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div className={`flex flex-1 flex-col transition-all duration-300 ${sidebarOpen ? "ml-[260px]" : "ml-0"}`}>
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition shadow-sm"
          >
            ☰
          </button>
          
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#0A1128] shadow-sm">
              A
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
