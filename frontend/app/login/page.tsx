"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { KlfproLogo } from "../../components/marketing/KlfproLogo";
import { api } from "../../lib/api";
import { Lock, Eye, EyeOff, KeyRound, ArrowLeft } from "lucide-react";

export default function CustomerLogin() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
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

  useEffect(() => {
    // Initialize default password if not set
    if (!localStorage.getItem("klfpro_customer_pwd")) {
      localStorage.setItem("klfpro_customer_pwd", "user123");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (phone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    const storedPw = localStorage.getItem("klfpro_customer_pwd") || "user123";
    
    setTimeout(() => {
      if (password === storedPw) {
        api.setCustomerToken("mock_customer_token_xyz");
        router.push("/portal/dashboard");
      } else {
        setError("Invalid mobile number or password.");
      }
      setLoading(false);
    }, 800);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setChangeError("");
    setChangeSuccess(false);

    const storedPw = localStorage.getItem("klfpro_customer_pwd") || "user123";

    if (currentPw !== storedPw) {
      setChangeError("Current password is incorrect.");
      return;
    }

    if (newPw !== confirmPw) {
      setChangeError("New passwords do not match.");
      return;
    }

    if (newPw.length < 6) {
      setChangeError("New password must be at least 6 characters long.");
      return;
    }

    // Success
    localStorage.setItem("klfpro_customer_pwd", newPw);
    setChangeSuccess(true);
    setCurrentPw("");
    setNewPw("");
    setConfirmPw("");

    setTimeout(() => {
      setIsChangeMode(false);
      setChangeSuccess(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.05),transparent_50%)]" />
      </div>

      <div className="relative w-full max-w-[420px]">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <KlfproLogo size="default" wordmarkClassName="text-[#0A1128]" />
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h1 className="text-center text-2xl font-bold tracking-tight text-[#0A1128]">
            {isChangeMode ? "Change Password" : "Track Your Application"}
          </h1>
          <p className="mt-2 text-center text-sm text-[#1E293B]">
            {isChangeMode 
              ? "Update your portal access password." 
              : "Login with your mobile number and password."}
          </p>

          <AnimatePresence mode="wait">
            {!isChangeMode ? (
              <motion.form
                key="login-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleLogin}
                className="mt-8 flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">
                    Mobile Number
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-slate-600">+91</span>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-[#0A1128] placeholder-slate-400 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="9876543210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-4 text-slate-400">
                      <Lock size={18} />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-[#0A1128] placeholder-slate-400 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="Enter password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-slate-400 hover:text-slate-600 transition"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && <p className="text-sm text-red-500">{error}</p>}

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="rounded border-slate-300 text-[#D4AF37] focus:ring-[#D4AF37]" />
                    <label htmlFor="remember" className="text-slate-600">Remember me</label>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsChangeMode(true)}
                    className="font-semibold text-[#D4AF37] hover:underline"
                  >
                    Change password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] py-3.5 text-[15px] font-bold text-[#0A1128] shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)] transition hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.6)] disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
                <div className="text-center text-xs text-slate-500 mt-2">
                  Demo Default Password: <span className="font-semibold text-slate-700">user123</span>
                </div>
              </motion.form>
            ) : (
              <motion.form
                key="change-pw-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleChangePassword}
                className="mt-8 flex flex-col gap-5"
              >
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">
                    Current Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      value={currentPw}
                      onChange={(e) => setCurrentPw(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-[#0A1128] placeholder-slate-400 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="Enter current password"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">
                    New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      value={newPw}
                      onChange={(e) => setNewPw(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-[#0A1128] placeholder-slate-400 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="Enter new password"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#1E293B]">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <KeyRound className="h-5 w-5" />
                    </div>
                    <input
                      type="password"
                      value={confirmPw}
                      onChange={(e) => setConfirmPw(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-[#0A1128] placeholder-slate-400 outline-none transition focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                {changeError && (
                  <p className="text-sm text-red-500 font-medium">{changeError}</p>
                )}

                {changeSuccess && (
                  <p className="text-sm text-emerald-600 font-medium">
                    Password changed successfully! Returning to login...
                  </p>
                )}

                <div className="flex flex-col gap-3 mt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] py-3.5 text-[15px] font-bold text-[#0A1128] shadow-[0_0_24px_-4px_rgba(212,175,55,0.4)] transition hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.6)]"
                  >
                    Update Password
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsChangeMode(false)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-3.5 text-[15px] font-semibold text-slate-600 transition hover:bg-slate-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Login
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center text-xs text-[#1E293B]">
          Admin or Staff? <Link href="/admin/login" className="font-semibold text-[#D4AF37] hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
