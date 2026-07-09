"use client";

import { useEffect, useState } from "react";
import { api } from "../../../lib/api";

type Failure = {
  id: string;
  slug: string;
  score: number;
  reasons: string[];
  createdAt: string;
  updatedAt: string;
};

export default function SeoHealthPage() {
  const [failures, setFailures] = useState<Failure[]>([]);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({ lowQualityCount: 0, queueCount: 0, regeneratedCount: 0 });

  useEffect(() => {
    fetchSeoHealth();
  }, []);

  const fetchSeoHealth = async () => {
    try {
      const data = await api.get("/admin/seo-health");
      setFailures(data.failures);
      setStats(data.stats);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#0A1128]">SEO Health & Generation Queue</h1>
          <p className="text-sm text-[#1E293B] mt-1">Monitor the Self-Healing SEO Ecosystem</p>
        </div>
        <button className="rounded-xl bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0A1128] hover:bg-[#E2C87A] transition shadow-sm">
          Trigger Global Scan
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-red-600">Low Quality Pages (Score &lt; 85)</p>
          <p className="mt-2 text-3xl font-bold text-[#0A1128]">{stats.lowQualityCount}</p>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-blue-600">Currently in BullMQ Queue</p>
          <p className="mt-2 text-3xl font-bold text-[#0A1128]">{stats.queueCount}</p>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-emerald-600">Successfully Regenerated</p>
          <p className="mt-2 text-3xl font-bold text-[#0A1128]">{stats.regeneratedCount}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-semibold text-[#0A1128]">Active Quality Failures (Fallback Mode)</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#1E293B]">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-[#1E293B]">
              <tr>
                <th className="px-6 py-4 font-medium">Slug / Path</th>
                <th className="px-6 py-4 font-medium">Quality Score</th>
                <th className="px-6 py-4 font-medium">Reasons</th>
                <th className="px-6 py-4 font-medium">Last Scan</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-[#1E293B]">Loading data...</td>
                </tr>
              ) : (
                failures.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50 transition">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-[#0A1128]">/{f.slug}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-red-600 border border-red-200 shadow-sm">
                        {f.score} / 100
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <ul className="list-disc list-inside">
                        {f.reasons.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-xs text-[#1E293B]">
                      {new Date(f.updatedAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-sm font-semibold text-[#D4AF37] hover:underline">
                        Force Regenerate
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
