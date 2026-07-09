"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../lib/api";
import { Lock, Eye, EyeOff, KeyRound, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLoginPage() {
  const router = useRouter();
  
  // Login State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Change Password State
  const [isChangeMode, setIsChangeMode] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [changeError, setChangeError] = useState("");
  const [changeSuccess, setChangeSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { email, password });
      if (res.accessToken) {
        localStorage.setItem("klfpro_admin_token", res.accessToken);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (err: any) {
      setError(err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setChangeError("");
    setChangeSuccess(false);

    if (newPw !== confirmPw) {
      setChangeError("New passwords do not match.");
      return;
    }

    if (newPw.length < 6) {
      setChangeError("New password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    
    // Simulate API call for password change
    setTimeout(() => {
      setLoading(false);
      setChangeSuccess(true);
      setCurrentPw("");
      setNewPw("");
      setConfirmPw("");

      setTimeout(() => {
        setIsChangeMode(false);
        setChangeSuccess(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] px-4">
      <div className="w-full max-w-md rounded-2xl border border-amber-900/10 bg-amber-900/5 p-8 backdrop-blur-xl shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#0A1128]">
            {isChangeMode ? "Change Admin Password" : "Admin Login"}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            {isChangeMode 
              ? "Update your administrator access credentials."
              : "Sign in to manage leads and applications"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isChangeMode ? (
            <motion.form 
              key="admin-login-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onSubmit={handleLogin} 
              className="space-y-4"
            >
              {error && (
                <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500 font-medium">
                  {error}
                </div>
              )}
              
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-amber-900/10 bg-[#FDFBF7]/40 px-4 py-3.5 text-sm text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition"
                />
              </div>
              
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-amber-900/10 bg-[#FDFBF7]/40 py-3.5 pl-4 pr-12 text-sm text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-zinc-500 hover:text-zinc-700 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={() => setIsChangeMode(true)}
                  className="text-sm font-semibold text-[#D4AF37] hover:underline"
                >
                  Change password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3.5 text-[15px] font-bold text-[#0A1128] shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)] transition hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.6)] disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </motion.form>
          ) : (
            <motion.form 
              key="admin-change-pw-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onSubmit={handleChangePassword} 
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  Current Password
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-zinc-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    required
                    value={currentPw}
                    onChange={(e) => setCurrentPw(e.target.value)}
                    className="w-full rounded-xl border border-amber-900/10 bg-[#FDFBF7]/40 py-3.5 pl-10 pr-4 text-sm text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition"
                    placeholder="Enter current password"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  New Password
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-zinc-400">
                    <KeyRound size={16} />
                  </div>
                  <input
                    type="password"
                    required
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    className="w-full rounded-xl border border-amber-900/10 bg-[#FDFBF7]/40 py-3.5 pl-10 pr-4 text-sm text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-zinc-600">
                  Confirm New Password
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 text-zinc-400">
                    <KeyRound size={16} />
                  </div>
                  <input
                    type="password"
                    required
                    value={confirmPw}
                    onChange={(e) => setConfirmPw(e.target.value)}
                    className="w-full rounded-xl border border-amber-900/10 bg-[#FDFBF7]/40 py-3.5 pl-10 pr-4 text-sm text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>

              {changeError && (
                <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500 font-medium">
                  {changeError}
                </div>
              )}

              {changeSuccess && (
                <div className="rounded-lg bg-emerald-500/10 p-3 text-sm text-emerald-600 font-medium">
                  Password changed successfully! Returning to login...
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3.5 text-[15px] font-bold text-[#0A1128] shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)] transition hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.6)] disabled:opacity-70"
                >
                  {loading ? "Updating..." : "Update Password"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsChangeMode(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-[15px] font-semibold text-zinc-600 transition hover:bg-zinc-50 shadow-sm border border-amber-900/10"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Login
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
