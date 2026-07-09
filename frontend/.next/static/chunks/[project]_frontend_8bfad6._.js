(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_frontend_8bfad6._.js", {

"[project]/frontend/lib/api.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "api": ()=>api
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000/api") || "http://localhost:4000/api";
let _customerAccessToken = null;
const api = {
    setCustomerToken (token) {
        _customerAccessToken = token;
    },
    getAuthHeaders () {
        if (typeof window === "undefined") return {};
        const adminToken = localStorage.getItem("klfpro_admin_token");
        // If we are on an admin page, always use the admin token
        if (window.location.pathname.startsWith("/admin")) {
            return adminToken ? {
                Authorization: `Bearer ${adminToken}`
            } : {};
        }
        // Otherwise use the customer token
        return _customerAccessToken ? {
            Authorization: `Bearer ${_customerAccessToken}`
        } : {};
    },
    handleUnauthorized (endpoint) {
        if (typeof window !== "undefined") {
            // Do not redirect on auth endpoints to allow them to show error messages (like Invalid OTP)
            if (endpoint.includes("/auth/")) return;
            if (endpoint.includes("/admin")) {
                localStorage.removeItem("klfpro_admin_token");
                window.location.href = "/admin/login";
            } else {
                _customerAccessToken = null;
                window.location.href = "/login";
            }
        }
    },
    async get (endpoint) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthHeaders()
            },
            credentials: "include"
        });
        if (!response.ok) {
            if (response.status === 401) this.handleUnauthorized(endpoint);
            const errorData = await response.json().catch(()=>null);
            throw new Error(errorData?.message || `API Error: ${response.status}`);
        }
        return response.json();
    },
    async post (endpoint, data) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthHeaders()
            },
            credentials: "include",
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            if (response.status === 401) this.handleUnauthorized(endpoint);
            const errorData = await response.json().catch(()=>null);
            throw new Error(errorData?.message || `API Error: ${response.status}`);
        }
        return response.json();
    },
    async patch (endpoint, data) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...this.getAuthHeaders()
            },
            credentials: "include",
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            if (response.status === 401) this.handleUnauthorized(endpoint);
            const errorData = await response.json().catch(()=>null);
            throw new Error(errorData?.message || `API Error: ${response.status}`);
        }
        return response.json();
    },
    async uploadFile (endpoint, formData) {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                ...this.getAuthHeaders()
            },
            credentials: "include",
            body: formData
        });
        if (!response.ok) {
            if (response.status === 401) this.handleUnauthorized(endpoint);
            const errorData = await response.json().catch(()=>null);
            throw new Error(errorData?.message || `API Error: ${response.status}`);
        }
        return response.json();
    }
};

})()),
"[project]/frontend/components/eligibility/EligibilityFunnel.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EligibilityFunnel": ()=>EligibilityFunnel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function EligibilityFunnelContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        employmentType: "",
        monthlyIncome: "",
        existingEmi: "",
        loanAmount: "",
        loanTypeSlug: "personal-loan",
        fullName: "",
        email: "",
        phone: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const product = searchParams.get("product");
        const phone = searchParams.get("phone");
        setFormData((prev)=>({
                ...prev,
                ...product ? {
                    loanTypeSlug: product
                } : {},
                ...phone ? {
                    phone: phone
                } : {}
            }));
    }, [
        searchParams
    ]);
    const handleChange = (field, val)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: val
            }));
    };
    const nextStep = ()=>setStep((s)=>s + 1);
    const prevStep = ()=>setStep((s)=>s - 1);
    const submitLead = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/leads", {
                ...formData,
                monthlyIncome: formData.monthlyIncome ? parseInt(formData.monthlyIncome, 10) : undefined,
                existingEmi: formData.existingEmi ? parseInt(formData.existingEmi, 10) : undefined,
                loanAmount: formData.loanAmount ? parseInt(formData.loanAmount, 10) : undefined
            });
            setSuccess(true);
            setTimeout(()=>{
                router.push("/");
            }, 4000);
        } catch (err) {
            alert("Something went wrong. Please try again.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 shadow-2xl backdrop-blur-xl md:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                className: "flex flex-col items-center justify-center py-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-4xl text-emerald-400",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 74,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-[#0A1128]",
                        children: "Application Received!"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[#1E293B]",
                        children: [
                            "Thank you, ",
                            formData.fullName,
                            ". Based on your profile, you are highly likely to be approved. Our loan expert will contact you within 2 hours."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                ]
            }, "success", true, {
                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                lineNumber: 68,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: 20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                exit: {
                    opacity: 0,
                    x: -20
                },
                transition: {
                    duration: 0.3
                },
                children: [
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#0A1128]",
                                        children: "Let's check your eligibility"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 94,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[#1E293B]",
                                        children: "First, tell us about your employment type."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 93,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleChange("employmentType", "SALARIED");
                                            nextStep();
                                        },
                                        className: `flex flex-col items-center justify-center rounded-2xl border p-8 transition-all ${formData.employmentType === "SALARIED" ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-[#0A1128]/15 bg-[#0A1128]/5 hover:bg-[#0A1128]/5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl",
                                                children: "💼"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-4 font-semibold text-[#0A1128]",
                                                children: "Salaried"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-xs text-zinc-500",
                                                children: "I receive a fixed salary"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            handleChange("employmentType", "SELF_EMPLOYED");
                                            nextStep();
                                        },
                                        className: `flex flex-col items-center justify-center rounded-2xl border p-8 transition-all ${formData.employmentType === "SELF_EMPLOYED" ? "border-[#D4AF37] bg-[#D4AF37]/10" : "border-[#0A1128]/15 bg-[#0A1128]/5 hover:bg-[#0A1128]/5"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-4xl",
                                                children: "🏪"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-4 font-semibold text-[#0A1128]",
                                                children: "Self Employed"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 text-xs text-zinc-500",
                                                children: "I run my own business"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 97,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 92,
                        columnNumber: 15
                    }, this),
                    step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#0A1128]",
                                        children: "Financial Details"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[#1E293B]",
                                        children: "This helps us calculate your maximum eligible loan amount."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 137,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Required Loan Amount (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                placeholder: "e.g. 500000",
                                                value: formData.loanAmount,
                                                onChange: (e)=>handleChange("loanAmount", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Net Monthly Income (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                placeholder: "e.g. 50000",
                                                value: formData.monthlyIncome,
                                                onChange: (e)=>handleChange("monthlyIncome", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Total Existing EMIs (₹/month)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                placeholder: "e.g. 10000 (0 if none)",
                                                value: formData.existingEmi,
                                                onChange: (e)=>handleChange("existingEmi", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: prevStep,
                                        className: "flex-1 rounded-xl border border-[#0A1128]/15 bg-transparent px-4 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: nextStep,
                                        disabled: !formData.monthlyIncome,
                                        className: "flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] disabled:opacity-50",
                                        children: "Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 184,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 177,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 134,
                        columnNumber: 15
                    }, this),
                    step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: submitLead,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-[#0A1128]",
                                        children: "Almost there!"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[#1E293B]",
                                        children: "Where should we send your eligibility report?"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 198,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 204,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: formData.fullName,
                                                onChange: (e)=>handleChange("fullName", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 203,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                required: true,
                                                value: formData.phone,
                                                onChange: (e)=>handleChange("phone", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-sm font-medium text-[#0F1C3F]",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 224,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: (e)=>handleChange("email", e.target.value),
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/20 px-4 py-3 text-[#0A1128] placeholder-zinc-500 outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 223,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 202,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: prevStep,
                                        className: "flex-1 rounded-xl border border-[#0A1128]/15 bg-transparent px-4 py-3 text-sm font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 235,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "flex-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.5)] disabled:opacity-50",
                                        children: loading ? "Analyzing Profile..." : "Submit Application"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                        lineNumber: 242,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                                lineNumber: 234,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                        lineNumber: 197,
                        columnNumber: 15
                    }, this)
                ]
            }, step, true, {
                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                lineNumber: 83,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(EligibilityFunnelContent, "82VjDkKTdOinI7+oOzICaU8Z+Fc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EligibilityFunnelContent;
function EligibilityFunnel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center p-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-8 animate-spin rounded-full border-b-2 border-[#D4AF37]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
                lineNumber: 261,
                columnNumber: 80
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
            lineNumber: 261,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EligibilityFunnelContent, {}, void 0, false, {
            fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
            lineNumber: 262,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/eligibility/EligibilityFunnel.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_c1 = EligibilityFunnel;
var _c, _c1;
__turbopack_refresh__.register(_c, "EligibilityFunnelContent");
__turbopack_refresh__.register(_c1, "EligibilityFunnel");

})()),
"[project]/frontend/app/eligibility/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Bproject%5D_frontend_8bfad6._.js.map