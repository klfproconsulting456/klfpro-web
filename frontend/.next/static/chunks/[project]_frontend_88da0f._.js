(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_frontend_88da0f._.js", {

"[project]/frontend/components/emi/EmiCalculator.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EmiCalculator": ()=>EmiCalculator
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function clampNumber(n) {
    return Number.isFinite(n) ? n : 0;
}
function formatINR(value) {
    const v = Math.round(clampNumber(value));
    return `₹ ${v.toLocaleString("en-IN")}`;
}
function computeEmi({ loanAmount, annualRatePct, tenureMonths }) {
    const P = clampNumber(loanAmount);
    const n = Math.max(1, Math.floor(clampNumber(tenureMonths)));
    const r = clampNumber(annualRatePct) / 12 / 100;
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = Math.max(0, totalPayable - P);
    return {
        emi,
        totalPayable,
        totalInterest
    };
}
function Donut({ principal, interest }) {
    const total = Math.max(1, principal + interest);
    const principalPct = principal / total;
    const r = 44;
    const c = 2 * Math.PI * r;
    const principalDash = c * principalPct;
    const interestDash = c - principalDash;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 120 120",
        className: "h-[190px] w-[190px]",
        role: "img",
        "aria-label": "Payment breakup chart",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: r,
                fill: "none",
                stroke: "rgba(255,255,255,0.10)",
                strokeWidth: "14"
            }, void 0, false, {
                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: r,
                fill: "none",
                stroke: "#22c55e",
                strokeWidth: "14",
                strokeLinecap: "round",
                strokeDasharray: `${principalDash} ${c}`,
                transform: "rotate(-90 60 60)"
            }, void 0, false, {
                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: r,
                fill: "none",
                stroke: "#4f46e5",
                strokeWidth: "14",
                strokeLinecap: "round",
                strokeDasharray: `${interestDash} ${c}`,
                strokeDashoffset: -principalDash,
                transform: "rotate(-90 60 60)"
            }, void 0, false, {
                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "60",
                cy: "60",
                r: "22",
                fill: "#1f1f1f"
            }, void 0, false, {
                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = Donut;
function EmiCalculator({ onChange, onViewSchedule }) {
    _s();
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1553884);
    const [annualRatePct, setAnnualRatePct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(9);
    const [tenureYears, setTenureYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const tenureMonths = tenureYears * 12;
    const inputs = {
        loanAmount,
        annualRatePct,
        tenureMonths
    };
    const computed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>computeEmi(inputs), [
        loanAmount,
        annualRatePct,
        tenureMonths
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        onChange?.(inputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        loanAmount,
        annualRatePct,
        tenureMonths
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "emi-calculator",
        className: "scroll-mt-24 px-6 pt-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative grid overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-white shadow-md md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0",
                        animate: {
                            scale: [
                                1,
                                1.04,
                                1
                            ],
                            x: [
                                0,
                                -18,
                                10,
                                0
                            ],
                            y: [
                                0,
                                -8,
                                6,
                                0
                            ]
                        },
                        transition: {
                            duration: 14,
                            ease: "easeInOut",
                            repeat: Infinity
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.55]",
                                style: {
                                    backgroundImage: "radial-gradient(circle at 18% 12%, rgba(34,197,94,0.14), transparent 52%), radial-gradient(circle at 88% 18%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(circle at 18% 88%, rgba(79,70,229,0.10), transparent 58%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.30]",
                                style: {
                                    backgroundImage: "repeating-linear-gradient(120deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 10px)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 opacity-[0.22]",
                        animate: {
                            x: [
                                "-14%",
                                "14%"
                            ]
                        },
                        transition: {
                            duration: 10,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse"
                        },
                        style: {
                            background: "linear-gradient(105deg, transparent 26%, rgba(34,197,94,0.12) 49%, rgba(34,197,94,0.16) 53%, transparent 76%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 opacity-[0.14]",
                        style: {
                            backgroundImage: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,0,0,0.55), transparent 60%), radial-gradient(ellipse 85% 60% at 50% 110%, rgba(0,0,0,0.55), transparent 62%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative overflow-hidden px-6 py-10 md:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 opacity-35",
                                style: {
                                    backgroundImage: "radial-gradient(circle at 10% 10%, rgba(34,197,94,0.14), transparent 55%), radial-gradient(circle at 0% 80%, rgba(255,255,255,0.06), transparent 55%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-[34px] font-semibold leading-tight text-[#0A1128] md:text-[44px]",
                                        children: [
                                            "Smart",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-md bg-green-500 px-2 py-0.5 text-[#0A1128]",
                                                children: "EMI Calculator"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            "for Personal Loan"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 space-y-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[14px] font-semibold text-[#0A1128]/85",
                                                                children: "Loan Amount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80",
                                                                children: formatINR(loanAmount)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: 50000,
                                                        max: 5000000,
                                                        step: 1000,
                                                        value: loanAmount,
                                                        onChange: (e)=>setLoanAmount(Number(e.target.value)),
                                                        className: "w-full accent-green-500",
                                                        "aria-label": "Loan amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[14px] font-semibold text-[#0A1128]/85",
                                                                children: "Interest Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: annualRatePct.toFixed(1)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                        lineNumber: 172,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#0A1128]/60",
                                                                        children: "%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: 6,
                                                        max: 36,
                                                        step: 0.1,
                                                        value: annualRatePct,
                                                        onChange: (e)=>setAnnualRatePct(Number(e.target.value)),
                                                        className: "w-full accent-green-500",
                                                        "aria-label": "Interest rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[14px] font-semibold text-[#0A1128]/85",
                                                                children: "Loan Term"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-lg bg-[#0A1128]/5 px-3 py-1 text-[12px] font-semibold text-[#0A1128]/80",
                                                                children: [
                                                                    tenureYears,
                                                                    " Yr"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: 1,
                                                        max: 7,
                                                        step: 1,
                                                        value: tenureYears,
                                                        onChange: (e)=>setTenureYears(Number(e.target.value)),
                                                        className: "w-full accent-green-500",
                                                        "aria-label": "Loan term in years"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#0A1128]/15 bg-[#242424] px-6 py-10 md:border-l md:border-t-0 md:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[14px] font-semibold text-[#0A1128]/80",
                                    children: "Break-up of Total Payment"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Donut, {
                                        principal: loanAmount,
                                        interest: computed.totalInterest
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 text-[28px] font-semibold text-[#0A1128]",
                                    children: [
                                        formatINR(computed.emi),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] font-medium text-[#0A1128]/70",
                                            children: [
                                                "Per Month EMI for ",
                                                tenureYears,
                                                " Years"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                    lineNumber: 219,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto mt-4 max-w-[420px] rounded-full bg-[#0A1128]/5 px-4 py-2 text-[12px] font-semibold text-[#0A1128]/80",
                                    children: formatINR(computed.emi).replace("₹ ", "").trim()
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-4 border-t border-[#0A1128]/15 pt-6 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green-500",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12px] font-semibold text-[#0A1128]/80",
                                                            children: "Principal Amount (Total Amount for loan)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[16px] font-semibold text-[#0A1128]",
                                                            children: formatINR(loanAmount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#4f46e5]",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12px] font-semibold text-[#0A1128]/80",
                                                            children: "Interest Payable (Total Interest throughout the loan duration)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[16px] font-semibold text-[#0A1128]",
                                                            children: formatINR(computed.totalInterest)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-t border-[#0A1128]/15 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[12px] font-semibold text-[#0A1128]/70",
                                                            children: "Total Amount payable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-[18px] font-semibold text-[#0A1128]",
                                                            children: formatINR(computed.totalPayable)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: onViewSchedule,
                                                    className: "text-[12px] font-semibold text-[#0A1128] underline transition hover:text-green-600",
                                                    children: "View EMI Schedule"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t border-[#0A1128]/15",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    window.location.href = `/eligibility?product=personal-loan`;
                                                },
                                                className: "w-full rounded-full bg-green-500 px-6 py-3 text-[14px] font-bold text-[#0A1128] transition hover:bg-green-600 shadow-sm text-center",
                                                children: "Apply for this Loan"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/emi/EmiCalculator.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(EmiCalculator, "l4xxUFKtT4RR1hneyz4M/wsxGb0=");
_c1 = EmiCalculator;
var _c, _c1;
__turbopack_refresh__.register(_c, "Donut");
__turbopack_refresh__.register(_c1, "EmiCalculator");

})()),
"[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "EmiPaymentScheduleSection": ()=>EmiPaymentScheduleSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function clampNumber(n) {
    return Number.isFinite(n) ? n : 0;
}
function formatINR(value) {
    const v = Math.round(clampNumber(value));
    return `₹${v.toLocaleString("en-IN")}`;
}
function buildSchedule({ loanAmount, annualRatePct, tenureMonths }) {
    const P = clampNumber(loanAmount);
    const n = Math.max(0, Math.floor(clampNumber(tenureMonths)));
    const r = clampNumber(annualRatePct) / 12 / 100;
    if (P <= 0 || n <= 0) return {
        emi: 0,
        monthlyRows: [],
        yearlyRows: []
    };
    const emi = r === 0 ? P / n : P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const monthlyRows = [];
    let balance = P;
    for(let month = 1; month <= n; month++){
        const interest = balance * r;
        const principal = emi - interest;
        balance = Math.max(0, balance - principal);
        monthlyRows.push({
            month,
            emi,
            principal: Math.max(0, principal),
            interest: Math.max(0, interest),
            balance
        });
    }
    const yearlyRows = [];
    const years = Math.ceil(n / 12);
    for(let yearIndex = 0; yearIndex < years; yearIndex++){
        const start = yearIndex * 12;
        const slice = monthlyRows.slice(start, start + 12);
        if (!slice.length) continue;
        yearlyRows.push({
            yearIndex,
            months: slice
        });
    }
    return {
        emi,
        monthlyRows,
        yearlyRows
    };
}
const MONTH_LABELS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
function EmiPaymentScheduleSection(props) {
    _s();
    const { autoOpenSignal = 0, ...inputs } = props;
    const [openMain, setOpenMain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openYearIndex, setOpenYearIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { yearlyRows } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildSchedule(inputs), [
        inputs.loanAmount,
        inputs.annualRatePct,
        inputs.tenureMonths
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!yearlyRows.length) return;
        setOpenMain(true);
        setOpenYearIndex(0);
    }, [
        autoOpenSignal,
        yearlyRows.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "emi-payment-schedule",
        className: "border-t border-[#0A1128]/15 bg-[#FAF6EE] px-6 py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-semibold text-[#0A1128]",
                            children: "EMI Payment Schedule"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/eligibility",
                            className: "rounded-xl bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-yellow-500",
                            children: "Apply for this Loan"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl bg-[#0A1128]/5 ring-1 ring-[#0A1128]/5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setOpenMain((v)=>!v),
                            className: "flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-left text-[14px] font-semibold text-[#0A1128]/90 shadow-sm transition hover:bg-[#FDFBF7]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "View Monthly and Yearly Payments"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    animate: {
                                        rotate: openMain ? 180 : 0
                                    },
                                    transition: {
                                        duration: 0.18
                                    },
                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FDFBF7]/25 text-[12px] text-[#0A1128]",
                                    "aria-hidden": true,
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            children: openMain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.28,
                                    ease: "easeOut"
                                },
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 px-6 pb-6 pt-4",
                                    children: !yearlyRows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl bg-[#FDFBF7]/20 px-4 py-5 text-[13px] text-[#0A1128]/65",
                                        children: "Enter loan details to view the EMI payment schedule."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                        lineNumber: 139,
                                        columnNumber: 21
                                    }, this) : yearlyRows.map((yearRow)=>{
                                        const yearNumber = new Date().getFullYear() + yearRow.yearIndex + 1;
                                        const isOpen = openYearIndex === yearRow.yearIndex;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-xl bg-white border border-[#0A1128]/5 shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setOpenYearIndex((prev)=>prev === yearRow.yearIndex ? null : yearRow.yearIndex),
                                                    className: "flex w-full items-center justify-between px-4 py-3 text-left text-[13px] text-[#0A1128]/90",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[15px] font-semibold text-[#0A1128]",
                                                                    children: yearNumber
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-0.5 text-[11px] text-[#0A1128]/60",
                                                                    children: "Monthly payment"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-[11px] font-semibold text-[#0A1128]/80",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isOpen ? "Hide Monthly Breakup" : "Show Monthly Breakup"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                    animate: {
                                                                        rotate: isOpen ? 180 : 0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.18
                                                                    },
                                                                    className: "inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FDFBF7]/30 text-[10px]",
                                                                    "aria-hidden": true,
                                                                    children: "▾"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    initial: false,
                                                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            height: "auto",
                                                            opacity: 1
                                                        },
                                                        exit: {
                                                            height: 0,
                                                            opacity: 0
                                                        },
                                                        transition: {
                                                            duration: 0.22,
                                                            ease: "easeOut"
                                                        },
                                                        className: "overflow-hidden border-t border-[#0A1128]/15 bg-[#FDFBF7]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "overflow-x-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-[640px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-[1.2fr,1fr,1fr,1.1fr,1fr] border-b border-[#0A1128]/10 bg-[#0A1128]/5 px-4 py-2 text-[12px] font-semibold text-[#0A1128]/60",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: "Months"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 184,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: "Principal"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 185,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: "Interest"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 186,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: "Total Payment"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 39
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-right",
                                                                                children: "Balance"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 188,
                                                                                columnNumber: 39
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[12px] text-[#0A1128]/80",
                                                                        children: yearRow.months.map((m, idx)=>{
                                                                            const label = MONTH_LABELS[idx % 12] ?? `Month ${m.month}`;
                                                                            const totalPayment = m.emi;
                                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-[1.2fr,1fr,1fr,1.1fr,1fr] border-b border-[#0A1128]/5 px-4 py-2.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-[#0A1128]/80",
                                                                                        children: label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                        lineNumber: 199,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right tabular-nums",
                                                                                        children: formatINR(m.principal)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                        lineNumber: 200,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right tabular-nums",
                                                                                        children: formatINR(m.interest)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                        lineNumber: 201,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right tabular-nums",
                                                                                        children: formatINR(totalPayment)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                        lineNumber: 202,
                                                                                        columnNumber: 45
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-right tabular-nums",
                                                                                        children: formatINR(m.balance)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                        lineNumber: 203,
                                                                                        columnNumber: 45
                                                                                    }, this)
                                                                                ]
                                                                            }, m.month, true, {
                                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 43
                                                                            }, this);
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 37
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 35
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, "months", false, {
                                                        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 31
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, yearRow.yearIndex, true, {
                                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            }, "panel", false, {
                                fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(EmiPaymentScheduleSection, "du42escJ4ZKF6X211GAzny8kZks=");
_c = EmiPaymentScheduleSection;
var _c;
__turbopack_refresh__.register(_c, "EmiPaymentScheduleSection");

})()),
"[project]/frontend/app/emi-calculator/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>EmiCalculatorPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$emi$2f$EmiCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/emi/EmiCalculator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$emi$2f$EmiPaymentScheduleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/emi/EmiPaymentScheduleSection.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function EmiCalculatorPage() {
    _s();
    const [inputs, setInputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loanAmount: 1553884,
        annualRatePct: 9,
        tenureMonths: 60
    });
    const [autoOpenSignal, setAutoOpenSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#FAF6EE] pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$emi$2f$EmiCalculator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmiCalculator"], {
                onChange: setInputs,
                onViewSchedule: ()=>{
                    const el = document.getElementById("emi-payment-schedule");
                    el?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                    setAutoOpenSignal((v)=>v + 1);
                }
            }, void 0, false, {
                fileName: "[project]/frontend/app/emi-calculator/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$emi$2f$EmiPaymentScheduleSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmiPaymentScheduleSection"], {
                ...inputs,
                autoOpenSignal: autoOpenSignal
            }, void 0, false, {
                fileName: "[project]/frontend/app/emi-calculator/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/emi-calculator/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(EmiCalculatorPage, "5/7cHOQAY8lHukLx/oyE/1YH0kQ=");
_c = EmiCalculatorPage;
var _c;
__turbopack_refresh__.register(_c, "EmiCalculatorPage");

})()),
"[project]/frontend/app/emi-calculator/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Bproject%5D_frontend_88da0f._.js.map