"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

const PIE_COLORS = ["#D4AF37", "#60A5FA", "#34D399", "#F472B6", "#A78BFA", "#FBBF24"];

type ChartData = { name: string; value: number }[];

export default function AdminAnalyticsDashboard() {
  const [stats, setStats] = useState({ totalLeads: 0, applicationsInProgress: 0, approved: 0 });
  const [analytics, setAnalytics] = useState<{ byStatus: ChartData; byProduct: ChartData }>({ byStatus: [], byProduct: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, analyticsRes] = await Promise.all([
        api.get("/admin/dashboard"),
        api.get("/admin/analytics").catch(() => ({ byStatus: [], byProduct: [] })),
      ]);
      setStats(statsRes);
      setAnalytics(analyticsRes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex h-full items-center justify-center text-zinc-500">Loading analytics...</div>;
  }

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl font-bold tracking-tight text-[#0A1128] mb-6">Analytics Overview</h1>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-[#1E293B]">Total Leads</p>
          <p className="mt-2 text-3xl font-bold text-[#0A1128]">{stats.totalLeads}</p>
        </div>
        <div className="rounded-2xl border border-[#D4AF37]/30 bg-white p-6 shadow-sm shadow-[#D4AF37]/5">
          <p className="text-sm font-medium text-[#D4AF37]">New / Uncontacted</p>
          <p className="mt-2 text-3xl font-bold text-[#0A1128]">
            {analytics.byStatus.find((s: any) => s.name === "NEW")?.value || 0}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-[#1E293B]">Docs Pending</p>
          <p className="mt-2 text-3xl font-bold text-orange-500">
            {analytics.byStatus.find((s: any) => s.name === "DOCS_PENDING")?.value || 0}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-[#1E293B]">Approved</p>
          <p className="mt-2 text-3xl font-bold text-emerald-500">{stats.approved}</p>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Pie Chart: Product Distribution */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 text-[#0A1128]">Leads by Product</h2>
          <div className="h-[300px] w-full">
            {analytics.byProduct.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.byProduct}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  >
                    {analytics.byProduct.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-[#1E293B]">No data available</div>
            )}
          </div>
        </div>

        {/* Bar Chart: Pipeline Status */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-6 text-[#0A1128]">Pipeline Status</h2>
          <div className="h-[300px] w-full">
            {analytics.byStatus.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.byStatus}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <RechartsTooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#0f172a' }} />
                  <Bar dataKey="value" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex h-full items-center justify-center text-[#1E293B]">No data available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
