"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Mail, LayoutDashboard, LogOut, Menu } from "lucide-react";

const HEALTHCARE_ADMIN_NAV = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { href: "/admin/jobs", label: "Job Postings", icon: <Briefcase className="w-5 h-5" /> },
  { href: "/admin/submissions", label: "Forms & Applications", icon: <Mail className="w-5 h-5" /> },
];

export default function HealthcareAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Auth check
  useEffect(() => {
    if (pathname !== "/admin/login") {
      const token = localStorage.getItem("klfpro_hc_admin_token");
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
    localStorage.removeItem("klfpro_hc_admin_token");
    router.push("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-600">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="fixed inset-y-0 left-0 z-40 flex flex-col border-r border-slate-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="flex h-20 shrink-0 items-center px-6 border-b border-slate-100 bg-[#0A1128]">
              <span className="text-xl font-bold tracking-tight text-white flex flex-col">
                <span>KLF<span className="text-[#D4A937]">PRO</span></span>
                <span className="text-[11px] font-medium text-slate-300 uppercase tracking-widest mt-0.5">Healthcare Admin</span>
              </span>
            </div>

            <div className="flex-1 px-4 py-8">
              <p className="mb-4 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Menu
              </p>
              <nav className="flex flex-col gap-2">
                {HEALTHCARE_ADMIN_NAV.map((link) => {
                  const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        isActive ? "text-[#0A1128] bg-blue-50/50" : "text-slate-500 hover:bg-slate-50 hover:text-[#0A1128]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="hc-admin-active-nav"
                          className="absolute left-0 h-full w-1 rounded-r-full bg-[#D4A937]"
                        />
                      )}
                      <span className={`${isActive ? "text-[#D4A937]" : "text-slate-400"}`}>
                        {link.icon}
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-slate-100 p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600 hover:border-red-100"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div className={`flex flex-1 flex-col transition-all duration-300 ${sidebarOpen ? "ml-[280px]" : "ml-0"}`}>
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 px-8 backdrop-blur-md shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-[#0A1128] transition-all shadow-sm"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-3">
              <span className="text-sm font-bold text-[#0A1128]">Healthcare Admin</span>
              <span className="text-xs text-slate-500">Administrator</span>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A937] text-sm font-bold text-white shadow-md">
              HA
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden p-6 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
