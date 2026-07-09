"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, KeyRound, ArrowLeft } from "lucide-react";

export default function HealthcareAdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  // Change Password State
  const [isChangeMode, setIsChangeMode] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [changeError, setChangeError] = useState("");
  const [changeSuccess, setChangeSuccess] = useState(false);

  useEffect(() => {
    // Initialize default password if not set
    if (!localStorage.getItem("klfpro_hc_admin_pwd")) {
      localStorage.setItem("klfpro_hc_admin_pwd", "admin123");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPw = localStorage.getItem("klfpro_hc_admin_pwd") || "admin123";
    
    if (password === storedPw) {
      localStorage.setItem("klfpro_hc_admin_token", "healthcare_mock_token_xyz");
      router.push("/admin");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setChangeError("");
    setChangeSuccess(false);

    const storedPw = localStorage.getItem("klfpro_hc_admin_pwd") || "admin123";

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
    localStorage.setItem("klfpro_hc_admin_pwd", newPw);
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
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <span className="text-3xl font-bold tracking-tight text-[#0A1128] flex flex-col items-center">
            <span>KLF<span className="text-[#D4A937]">PRO</span></span>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mt-1">Healthcare Admin</span>
          </span>
        </div>
        <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-slate-900">
          {isChangeMode ? "Change Password" : "Sign in to your account"}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100 relative overflow-hidden">
          
          {/* LOGIN FORM */}
          {!isChangeMode ? (
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Admin Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-[#D4A937] focus:border-[#D4A937] sm:text-sm transition-all"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">Incorrect password. Please try again.</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#0A1128] hover:bg-[#D4A937] hover:text-[#0A1128] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A937]"
                >
                  Sign in
                </button>
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsChangeMode(true);
                    setError(false);
                    setPassword("");
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4A937] hover:text-[#0A1128] transition-colors"
                >
                  <KeyRound className="w-4 h-4" />
                  Change Password
                </button>
              </div>
            </form>
          ) : (
            /* CHANGE PASSWORD FORM */
            <form className="space-y-4" onSubmit={handleChangePassword}>
              <div>
                <label className="block text-sm font-medium text-slate-700">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPw}
                  onChange={(e) => setCurrentPw(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-[#D4A937] focus:border-[#D4A937] sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700">New Password</label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={newPw}
                    onChange={(e) => setNewPw(e.target.value)}
                    className="block w-full px-4 pr-10 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-[#D4A937] focus:border-[#D4A937] sm:text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Confirm New Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={confirmPw}
                  onChange={(e) => setConfirmPw(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-[#D4A937] focus:border-[#D4A937] sm:text-sm"
                />
              </div>

              {changeError && (
                <p className="text-sm text-red-600">{changeError}</p>
              )}
              {changeSuccess && (
                <p className="text-sm text-green-600 font-medium">Password changed successfully! Redirecting...</p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#0A1128] hover:bg-[#D4A937] hover:text-[#0A1128] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4A937]"
                >
                  Update Password
                </button>
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsChangeMode(false);
                    setChangeError("");
                    setChangeSuccess(false);
                    setCurrentPw("");
                    setNewPw("");
                    setConfirmPw("");
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-[#0A1128] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Login
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 text-center border-t border-slate-100 pt-6">
             <p className="text-xs text-slate-400">Secure access for KLFPRO Healthcare administrators only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
