"use client";

export default function AdminSettingsPage() {
  return (
    <div className="p-6 md:p-10 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-[#0A1128]">Team & Settings</h1>
        <p className="text-sm text-[#1E293B] mt-1">Manage admin access, roles, and global configurations.</p>
      </div>

      <div className="space-y-8">
        {/* Team Members Section */}
        <div className="rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] overflow-hidden shadow-lg">
          <div className="p-6 border-b border-[#0A1128]/15 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0A1128]">Team Members</h2>
              <p className="text-sm text-[#1E293B] mt-1">Users with access to the KLFPRO Admin Portal.</p>
            </div>
            <button className="rounded-xl bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#4A0E1B] hover:bg-[#E2C87A] transition">
              Invite User
            </button>
          </div>
          <div className="p-0">
            <table className="w-full text-left text-sm text-[#0F1C3F]">
              <thead className="bg-[#0A1128]/5 text-xs uppercase text-[#1E293B] border-b border-[#0A1128]/15">
                <tr>
                  <th className="px-6 py-4 font-medium">Name</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-[#0A1128]/5">
                  <td className="px-6 py-4">
                    <div className="font-medium text-[#0A1128]">Super Admin</div>
                    <div className="text-xs text-[#1E293B]">admin@klfpro.com</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-400">
                      Owner
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-emerald-400 text-xs font-semibold">Active</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-zinc-500 cursor-not-allowed text-xs">Cannot Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Configurations */}
        <div className="rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-[#0A1128] mb-4">Global Configurations</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4">
              <div>
                <p className="font-medium text-[#0A1128]">Maintenance Mode</p>
                <p className="text-xs text-[#1E293B]">Temporarily disable customer logins and application submissions.</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-zinc-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#D4AF37] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4">
              <div>
                <p className="font-medium text-[#0A1128]">Strict OTP Rate Limiting</p>
                <p className="text-xs text-[#1E293B]">Enforce aggressive 24-hour lockouts after 5 failed OTP attempts.</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" defaultChecked className="peer sr-only" />
                <div className="peer h-6 w-11 rounded-full bg-zinc-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#D4AF37] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
