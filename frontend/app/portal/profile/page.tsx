"use client";

import { useState } from "react";

export default function ProfileSettingsPage() {
  const [formData, setFormData] = useState({
    fullName: "Rahul Mehta",
    email: "rahul@example.com",
    phone: "9876543210",
    pan: "ABCDE1234F",
    city: "New Delhi"
  });

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#0A1128]">Profile & Settings</h1>
        <p className="mt-2 text-sm text-[#1E293B]">
          Manage your personal details and communication preferences.
        </p>
      </div>

      <div className="rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] p-6 shadow-lg sm:p-8">
        <h2 className="text-lg font-semibold text-[#0A1128] mb-6 border-b border-[#0A1128]/15 pb-4">Personal Information</h2>
        
        <form className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">Full Name (As per PAN)</label>
            <input
              type="text"
              value={formData.fullName}
              readOnly
              className="w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 py-3 text-[#0A1128] outline-none cursor-not-allowed opacity-70"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">Mobile Number</label>
            <input
              type="text"
              value={formData.phone}
              readOnly
              className="w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 py-3 text-[#0A1128] outline-none cursor-not-allowed opacity-70"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] outline-none transition focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">PAN Number</label>
            <input
              type="text"
              value={formData.pan}
              readOnly
              className="w-full rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 py-3 text-[#0A1128] outline-none cursor-not-allowed opacity-70"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">City</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({...formData, city: e.target.value})}
              className="w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] outline-none transition focus:border-[#D4AF37]"
            />
          </div>

          <div className="sm:col-span-2 mt-4 flex justify-end">
            <button
              type="button"
              className="rounded-xl bg-[#D4AF37] px-6 py-3 text-sm font-bold text-zinc-900 transition hover:bg-[#eab308]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
