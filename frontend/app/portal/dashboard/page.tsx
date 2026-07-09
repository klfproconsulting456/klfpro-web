"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../lib/api";
import Link from "next/link";
import { motion } from "framer-motion";

type Lead = {
  id: string;
  fullName: string;
  phone: string;
  status: string;
  createdAt: string;
  loanType: { title: string };
  timeline?: { stage: string; description?: string }[];
};

const STATUS_MAP: Record<string, { label: string; color: string; desc: string }> = {
  NEW: { label: "Under Review", color: "text-[#D4AF37] border-[#D4AF37]/30 bg-[#D4AF37]/10", desc: "Your application is being reviewed by our team." },
  CONTACTED: { label: "Contacted", color: "text-blue-600 border-blue-200 bg-blue-50", desc: "Our team has reached out to you." },
  DOCS_PENDING: { label: "Docs Pending", color: "text-orange-600 border-orange-200 bg-orange-50", desc: "We are waiting for your documents to proceed." },
  APPROVED: { label: "Approved", color: "text-emerald-600 border-emerald-200 bg-emerald-50", desc: "Congratulations! Your loan is approved." },
  REJECTED: { label: "Rejected", color: "text-red-600 border-red-200 bg-red-50", desc: "Unfortunately, we cannot proceed at this time." },
};

export default function DashboardPage() {
  const router = useRouter();
  const [applications, setApplications] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeSession = async () => {
      try {
        // Try to refresh token if we don't have one in memory
        const authHeader = api.getAuthHeaders();
        if (!authHeader.Authorization) {
          const res = await api.post("/auth/customer/refresh", {});
          if (res.accessToken) {
            api.setCustomerToken(res.accessToken);
          }
        }
        
        // Fetch applications
        const data = await api.get(`/leads/my-applications`);
        setApplications(data);
      } catch (error) {
        console.error(error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    initializeSession();
  }, [router]);

  const handleLogout = async () => {
    try {
      await api.post("/auth/customer/logout", {});
    } catch(e) {}
    api.setCustomerToken(null);
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-transparent">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-[#D4AF37]"></div>
      </div>
    );
  }

  return (
    <section className="min-h-[calc(100vh-72px)] bg-transparent py-10 text-[#0A1128]">
      <div className="container-pro relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A1128]">My Dashboard</h1>
            <p className="mt-2 text-sm text-[#1E293B]">
              Welcome back! Track your active applications and offers here.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-fit rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#0A1128]"
          >
            Logout
          </button>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-6">Active Applications</h2>
          
          {applications.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((app, idx) => {
                const statusInfo = STATUS_MAP[app.status] || STATUS_MAP.NEW;
                
                return (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="rounded-lg bg-[#D4AF37]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37] border border-[#D4AF37]/20">
                          {app.loanType?.title || "Application"}
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#0A1128] mb-1">{app.fullName}</h3>
                      <p className="text-xs text-[#1E293B] mb-6">
                        Applied on {new Date(app.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      
                      <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 mb-4">
                        <p className="text-sm font-medium text-slate-800 mb-2">Journey Tracker</p>
                        <div className="flex items-center gap-1">
                          {["NEW", "DOCS_PENDING", "VERIFICATION", "APPROVED"].map((step, stepIdx) => {
                            let isCompleted = false;
                            let isCurrent = false;
                            if (app.status === step) isCurrent = true;
                            // A real app would check the `timeline` array.
                            if (app.timeline && app.timeline.some((t: any) => t.stage === step)) isCompleted = true;
                            
                            // Mocking logic for visuals
                            if (app.status === "APPROVED") isCompleted = true;
                            if (step === "NEW") isCompleted = true;

                            return (
                              <div key={step} className="flex-1 flex flex-col gap-2">
                                <div className={`h-1.5 w-full rounded-full ${isCompleted || isCurrent ? "bg-[#D4AF37]" : "bg-slate-200"}`} />
                                <span className="text-[9px] font-bold text-[#1E293B] uppercase tracking-tighter truncate" title={step.replace("_", " ")}>
                                  {step.replace("_", " ")}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {app.timeline && app.timeline.length > 0 && (
                         <div className="mb-4">
                           <p className="text-[10px] text-[#1E293B]">Last Update:</p>
                           <p className="text-xs text-slate-800">{app.timeline[app.timeline.length - 1].description}</p>
                         </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex gap-2">
                      {app.status === "DOCS_PENDING" && (
                        <button onClick={() => router.push("/portal/documents")} className="flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] py-2.5 text-xs font-bold text-[#0A1128] shadow-[0_0_15px_-5px_rgba(212,175,55,0.4)] transition hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.6)]">
                          Upload Docs
                        </button>
                      )}
                      <a href="mailto:support@klfpro.com?subject=Query about Application" className="flex-1 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50 text-center block leading-loose">
                        Contact RM
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white py-16 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50">
                <span className="text-2xl opacity-50">📂</span>
              </div>
              <h3 className="text-lg font-bold text-[#0A1128]">No active applications</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm text-[#1E293B]">
                You haven't applied for any products yet. Explore our premium offerings to get started.
              </p>
              <Link
                href="/loans/personal-loan"
                className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-6 py-3 text-sm font-bold text-[#0A1128] transition hover:shadow-[0_0_24px_-4px_rgba(212,175,55,0.5)]"
              >
                Explore Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
