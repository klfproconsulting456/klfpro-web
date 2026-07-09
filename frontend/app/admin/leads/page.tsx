"use client";

import { useEffect, useState, useMemo } from "react";
import { api } from "../../../lib/api";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  status: string;
  loanAmount?: number;
  monthlyIncome?: number;
  employmentType?: string;
  existingEmi?: number;
  createdAt: string;
  loanType: { title: string };
};

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-50 text-blue-700 border-blue-200",
  CONTACTED: "bg-orange-50 text-orange-700 border-orange-200",
  DOCS_PENDING: "bg-yellow-50 text-yellow-700 border-yellow-200",
  APPROVED: "bg-emerald-50 text-emerald-700 border-emerald-200",
  REJECTED: "bg-red-50 text-red-700 border-red-200",
};

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const leadsRes = await api.get("/admin/leads");
      setLeads(leadsRes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await api.patch(`/admin/leads/${id}/status`, { status: newStatus });
      setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const formatCurrency = (val: number | undefined) => {
    if (!val) return "N/A";
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
  };

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm);
      const matchesStatus = filterStatus === "ALL" || lead.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, filterStatus]);

  const exportToCSV = () => {
    if (filteredLeads.length === 0) return alert("No leads to export");
    const headers = ["Name,Email,Phone,Loan Type,Status,Monthly Income,Employment Type,Date"];
    const rows = filteredLeads.map(l => {
      return `"${l.fullName}","${l.email}","${l.phone}","${l.loanType?.title || ''}","${l.status}","${l.monthlyIncome || ''}","${l.employmentType || ''}","${new Date(l.createdAt).toLocaleDateString()}"`;
    });
    const csvContent = headers.concat(rows).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `klfpro_leads_${new Date().getTime()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="flex h-full items-center justify-center text-[#1E293B]">Loading leads...</div>;
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#0A1128]">Lead Management</h1>
          <p className="text-sm text-[#1E293B] mt-1">Manage and update customer applications.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search name, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-[#0A1128] placeholder-slate-400 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-sm"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-[#0A1128] outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] shadow-sm"
          >
            <option value="ALL">All Status</option>
            <option value="NEW">New</option>
            <option value="CONTACTED">Contacted</option>
            <option value="DOCS_PENDING">Docs Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <button
            onClick={exportToCSV}
            className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#0A1128] hover:bg-[#E2C87A] transition shadow-sm"
          >
            Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-[#1E293B]">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase text-[#1E293B]">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Loan Type</th>
                <th className="px-6 py-4 font-medium">Profile (Income)</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-[#0A1128]">
                    {lead.fullName}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[#D4AF37] font-semibold">{lead.phone}</div>
                    <div className="text-xs text-[#1E293B]">{lead.email}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-[#0F1C3F] shadow-sm">
                      {lead.loanType?.title || "Unknown"}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {lead.monthlyIncome ? (
                      <>
                        {lead.loanAmount && <div className="font-bold text-orange-600 mb-1">Req: {formatCurrency(lead.loanAmount)}</div>}
                        <div className="font-medium text-emerald-600">{formatCurrency(lead.monthlyIncome)} /mo</div>
                        <div className="text-xs text-[#1E293B]">
                          {lead.employmentType === "SALARIED" ? "Salaried" : lead.employmentType === "SELF_EMPLOYED" ? "Self Employed" : "N/A"} 
                          {lead.existingEmi ? ` • EMI: ${formatCurrency(lead.existingEmi)}` : ""}
                        </div>
                      </>
                    ) : (
                      <span className="text-xs text-[#1E293B] italic">Basic Form</span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold outline-none appearance-none cursor-pointer ${STATUS_COLORS[lead.status] || STATUS_COLORS.NEW}`}
                    >
                      <option value="NEW">NEW</option>
                      <option value="CONTACTED">CONTACTED</option>
                      <option value="DOCS_PENDING">DOCS PENDING</option>
                      <option value="APPROVED">APPROVED</option>
                      <option value="REJECTED">REJECTED</option>
                    </select>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-xs text-[#1E293B]">
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-[#1E293B]">
                    No leads found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
