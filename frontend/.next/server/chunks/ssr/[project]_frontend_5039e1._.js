module.exports = {

"[project]/frontend/content/site-data.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "loanTypes": ()=>loanTypes,
    "reconciliationFlags": ()=>reconciliationFlags,
    "siteConfig": ()=>siteConfig,
    "testimonials": ()=>testimonials
});
const siteConfig = {
    brandName: "KLFPRO Consulting",
    domain: "https://klfpro.in",
    phonePrimary: "0124-4068700",
    phoneSecondary: "+91 9711000680",
    emailPrimary: "info@klfpro.com",
    emailSecondary: "klfproconsulting@gmail.com",
    address: "OFFICE NO.1142, TOWER B3, SPAZE I-TECH PARK, GURUGAON",
    hours: "Mon-Sat: 9AM - 6PM"
};
const loanTypes = [
    "Home Loans",
    "Business Loans",
    "Personal Loans",
    "Loan Against Property",
    "Car Loans",
    "MSME Loan",
    "Loan Against Virtual Unit",
    "Commercial property loan"
];
const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Home Loan Customer",
        quote: "KLFPRO helped me secure a home loan with an interest rate 0.5% lower than what I was offered directly."
    },
    {
        name: "Priya Sharma",
        role: "Business Loan Customer",
        quote: "My loan was approved in just 3 days. Highly recommended."
    },
    {
        name: "Anil Patel",
        role: "Personal Loan Customer",
        quote: "The team handled paperwork and bank negotiation end-to-end."
    }
];
const reconciliationFlags = [
    "Multiple phone numbers appear across pages",
    "Multiple emails appear across pages",
    "Address has formatting differences",
    "Timeline mentions both 2015 and 2024"
];

})()),
"[project]/frontend/components/footer.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Footer": ()=>Footer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MarketingFooterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/MarketingFooterSection.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MarketingFooterSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MarketingFooterSection"], {}, void 0, false, {
        fileName: "[project]/frontend/components/footer.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}

})()),
"[project]/frontend/lib/mega-menu-hrefs.ts [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Maps mega-menu labels to app routes. Used by StickyUrbanNav mega menus.
 */ __turbopack_esm__({
    "hrefForMegaMenuItem": ()=>hrefForMegaMenuItem
});
function hrefForMegaMenuItem(label) {
    const loanSlugs = {
        "Personal Loan": "/loans/personal-loan",
        "Home Loan": "/loans/home",
        "Business Loan": "/loans/business",
        "Loan Against Property": "/loans/loan-against-property",
        "Car Loan": "/loans/car",
        "Used Car Loan": "/loans/used-car",
        "Two Wheeler Loan": "/loans/two-wheeler",
        "Commercial Vehicle Loan": "/loans/commercial-vehicle",
        "Education Loan": "/loans/education"
    };
    if (loanSlugs[label]) return loanSlugs[label];
    if (label.includes("Calculator") || label.includes("Tax Benefit")) {
        return "/emi-calculator";
    }
    if (label === "Check Free CIBIL Score") return "/credit-score";
    const cardBanks = {
        "HDFC Credit Card": "/credit-score",
        "ICICI Credit Card": "/credit-score",
        "Axis Credit Card": "/credit-score",
        "SBI Credit Card": "/credit-score"
    };
    if (cardBanks[label]) return cardBanks[label];
    if (label.includes("Credit Card")) return "/credit-score";
    return undefined;
}

})()),
"[project]/frontend/components/marketing/KlfproLogo.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "KlfproLogo": ()=>KlfproLogo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/** Synced from `assets/LOGO ORIGINAL.png` → `public/klfpro-mark.png` (transparent mark). */ const MARK_SRC = "/klfpro-mark.png";
function KlfproLogo({ className, wordmarkClassName = "text-zinc-900", asLink = true, size = "default", showConsulting = false }) {
    const markClass = size === "compact" ? "h-7 w-7 md:h-8 md:w-8" : "h-8 w-8 md:h-9 md:w-9";
    const wordClass = size === "compact" ? "text-[16px] md:text-[17px] font-medium lowercase leading-none tracking-tight" : "text-[18px] font-medium lowercase leading-none tracking-tight md:text-[20px]";
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative shrink-0 overflow-hidden ${markClass}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: MARK_SRC,
                    alt: "",
                    fill: true,
                    priority: true,
                    className: "object-contain scale-[2.2] drop-shadow-[0_5px_10px_rgba(0,0,0,0.22)]",
                    sizes: "36px"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/KlfproLogo.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/KlfproLogo.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `select-none ${wordClass} ${wordmarkClassName}`,
                children: [
                    "klfpro",
                    showConsulting ? " consulting" : ""
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/KlfproLogo.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    const row = `flex items-center gap-2 ${className ?? ""}`;
    if (asLink) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: row,
            "aria-label": "KLFPRO home",
            children: inner
        }, void 0, false, {
            fileName: "[project]/frontend/components/marketing/KlfproLogo.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: row,
        children: inner
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/KlfproLogo.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}

})()),
"[project]/frontend/components/marketing/StickyUrbanNav.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "StickyUrbanNav": ()=>StickyUrbanNav
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$mega$2d$menu$2d$hrefs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/lib/mega-menu-hrefs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfproLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/KlfproLogo.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
const navItems = [
    {
        key: "products",
        label: "Products & Offers"
    },
    {
        key: "tools",
        label: "Tools & Calculators"
    },
    {
        key: "cibil",
        label: "CIBIL Score"
    },
    {
        key: "cards",
        label: "Credit Cards"
    }
];
const ROUTES_TO_PREFETCH = [
    "/loans/personal-loan",
    "/emi-calculator",
    "/credit-score",
    "/dashboard",
    "/contact"
];
const megaMenuContent = {
    products: {
        eyebrow: "Products & Offers",
        title: "Loan products",
        description: "Pick a category — we match you with the right lenders.",
        columns: [
            {
                title: "Personal & business",
                items: [
                    "Personal Loan",
                    "Home Loan",
                    "Business Loan",
                    "Loan Against Property"
                ]
            },
            {
                title: "Vehicle",
                items: [
                    "Car Loan",
                    "Used Car Loan",
                    "Two Wheeler Loan",
                    "Commercial Vehicle Loan"
                ]
            },
            {
                title: "Education",
                items: [
                    "Education Loan"
                ]
            }
        ]
    },
    tools: {
        eyebrow: "Tools & Calculators",
        title: "Smart calculators",
        description: "Plan EMIs, eligibility, and savings before you apply.",
        columns: [
            {
                title: "EMI & eligibility",
                items: [
                    "Personal Loan EMI Calculator",
                    "Home Loan EMI Calculator",
                    "Personal Loan Eligibility Calculator",
                    "Home Loan Eligibility Calculator"
                ]
            },
            {
                title: "Prepay & transfer",
                items: [
                    "Personal Loan Pre Payment Calculator",
                    "Home Loan Pre Payment Calculator",
                    "Personal Loan Balance Transfer Calculator",
                    "Home Loan Balance Transfer Calculator"
                ]
            },
            {
                title: "More tools",
                items: [
                    "Home Loan Tax Benefit Calculator",
                    "Bike Loan EMI Calculator",
                    "Car Loan EMI Calculator",
                    "Used Car Loan EMI Calculator",
                    "Education Loan EMI Calculator"
                ]
            }
        ]
    },
    cibil: {
        eyebrow: "CIBIL Score",
        title: "Credit health",
        description: "Check your score and unlock offers tailored to your profile.",
        columns: [
            {
                title: "Get started",
                items: [
                    "Check Free CIBIL Score"
                ]
            }
        ]
    },
    cards: {
        eyebrow: "Credit Cards",
        title: "Top issuers",
        description: "Compare rewards, fees, and limits across partner banks.",
        columns: [
            {
                title: "Popular",
                items: [
                    "HDFC Credit Card",
                    "ICICI Credit Card",
                    "Yes Pop-Club Credit Card",
                    "Axis Credit Card"
                ]
            },
            {
                title: "More banks",
                items: [
                    "IDFC Credit Card",
                    "HSBC Credit Card",
                    "SBI Credit Card",
                    "AU Small Finance Credit Card"
                ]
            },
            {
                title: "Others",
                items: [
                    "IndusInd Bank Credit Card",
                    "Bank of Baroda Credit Card",
                    "Kiwi Credit Card"
                ]
            }
        ]
    }
};
function StickyUrbanNav({ lightSentinelRef, partnerHref = "/contact" }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const fallbackSentinelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sentinelRef = lightSentinelRef ?? fallbackSentinelRef;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(sentinelRef, {
        margin: "-72px 0px 0px 0px",
        amount: 0.05
    });
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverOpenTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hoverCloseTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeConfig = activeMenu ? megaMenuContent[activeMenu] : null;
    const barElevated = scrolled || activeMenu !== null;
    const clearHoverTimers = ()=>{
        if (hoverOpenTimerRef.current) {
            clearTimeout(hoverOpenTimerRef.current);
            hoverOpenTimerRef.current = null;
        }
        if (hoverCloseTimerRef.current) {
            clearTimeout(hoverCloseTimerRef.current);
            hoverCloseTimerRef.current = null;
        }
    };
    const queueOpenMenu = (key)=>{
        if (hoverCloseTimerRef.current) {
            clearTimeout(hoverCloseTimerRef.current);
            hoverCloseTimerRef.current = null;
        }
        if (hoverOpenTimerRef.current) {
            clearTimeout(hoverOpenTimerRef.current);
        }
        hoverOpenTimerRef.current = setTimeout(()=>{
            setMobileOpen(false);
            setActiveMenu(key);
            hoverOpenTimerRef.current = null;
        }, 45);
    };
    const queueCloseMenu = ()=>{
        if (hoverOpenTimerRef.current) {
            clearTimeout(hoverOpenTimerRef.current);
            hoverOpenTimerRef.current = null;
        }
        if (hoverCloseTimerRef.current) {
            clearTimeout(hoverCloseTimerRef.current);
        }
        hoverCloseTimerRef.current = setTimeout(()=>{
            setActiveMenu(null);
            hoverCloseTimerRef.current = null;
        }, 220);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            setScrolled(window.scrollY > 36);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = window.setTimeout(()=>{
            ROUTES_TO_PREFETCH.forEach((route)=>{
                router.prefetch(route);
            });
        }, 140);
        return ()=>window.clearTimeout(timer);
    }, [
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onPointerDown = (event)=>{
            if (!wrapperRef.current) return;
            if (!wrapperRef.current.contains(event.target)) {
                clearHoverTimers();
                setActiveMenu(null);
                setMobileOpen(false);
            }
        };
        const onEscape = (event)=>{
            if (event.key === "Escape") {
                clearHoverTimers();
                setActiveMenu(null);
                setMobileOpen(false);
            }
        };
        document.addEventListener("mousedown", onPointerDown);
        window.addEventListener("keydown", onEscape);
        return ()=>{
            document.removeEventListener("mousedown", onPointerDown);
            window.removeEventListener("keydown", onEscape);
            clearHoverTimers();
        };
    }, []);
    const closePanel = ()=>{
        clearHoverTimers();
        setActiveMenu(null);
        setMobileOpen(false);
    };
    const renderLink = (item)=>{
        const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$mega$2d$menu$2d$hrefs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrefForMegaMenuItem"])(item);
        const className = "group flex w-full items-center justify-between gap-3 rounded-xl border border-[#0A1128]/15 bg-gradient-to-r from-white/[0.03] to-[#D4AF37]/[0.04] px-3.5 py-2.5 text-left text-[13px] font-medium text-[#0A1128] transition hover:border-[#D4AF37]/35 hover:from-[#D4AF37]/10 hover:to-[#fef3c7]/12 hover:text-[#0A1128] hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.28)]";
        if (href) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                onMouseEnter: ()=>router.prefetch(href),
                onFocus: ()=>router.prefetch(href),
                onClick: closePanel,
                className: className,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#fde68a] opacity-80 transition group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.75)]"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            item
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#B8972E] opacity-0 transition group-hover:opacity-100",
                        "aria-hidden": true,
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex items-center gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        item
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] uppercase tracking-wide text-[#1E293B]",
                    children: "Soon"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
            lineNumber: 255,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: "fixed left-0 right-0 top-0 z-[100]",
        onMouseEnter: ()=>{
            if (hoverCloseTimerRef.current) {
                clearTimeout(hoverCloseTimerRef.current);
                hoverCloseTimerRef.current = null;
            }
        },
        onMouseLeave: queueCloseMenu,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                    className: `relative overflow-hidden border-b text-[#0A1128] backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${barElevated ? "border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.55)]" : "border-[#0A1128]/15 bg-[#FAF6EE]/80 shadow-[0_8px_32px_-18px_rgba(0,0,0,0.35)]"}`,
                    initial: false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.04)_0%,transparent_22%,transparent_78%,rgba(153,27,51,0.04)_100%)] opacity-90",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                            lineNumber: 286,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto flex h-[72px] max-w-[1170px] items-center justify-between gap-3 px-5 md:gap-4 md:px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfproLogo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KlfproLogo"], {
                                    showConsulting: true,
                                    size: "compact",
                                    wordmarkClassName: "text-[#0A1128]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                    lineNumber: 288,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden items-center gap-2 text-[14px] font-medium md:flex",
                                    children: [
                                        navItems.map((item)=>{
                                            const isActive = activeMenu === item.key;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onMouseEnter: ()=>queueOpenMenu(item.key),
                                                onFocus: ()=>{
                                                    setMobileOpen(false);
                                                    setActiveMenu(item.key);
                                                },
                                                onClick: ()=>{
                                                    setMobileOpen(false);
                                                    setActiveMenu((prev)=>prev === item.key ? null : item.key);
                                                },
                                                className: `group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors ${isActive ? "bg-[#0A1128]/15 text-[#0A1128] shadow-[0_0_0_1px_rgba(212,175,55,0.45)]" : "text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"}`,
                                                "aria-expanded": isActive,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative",
                                                        children: [
                                                            item.label,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#fef3c7] via-[#D4AF37] to-amber-300 transition-transform duration-300 ease-out group-hover:scale-x-100 ${isActive ? "scale-x-100" : ""}`,
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            rotate: isActive ? 180 : 0
                                                        },
                                                        transition: {
                                                            duration: 0.2
                                                        },
                                                        className: "text-[10px] opacity-75",
                                                        "aria-hidden": true,
                                                        children: "▾"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this);
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/klfpro-healthcare",
                                            className: "group relative flex items-center gap-1.5 rounded-full px-3 py-2 transition-colors text-[#0A1128]/88 hover:bg-[#0A1128]/5 hover:text-[#0A1128]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative font-bold text-[#0A66C2]",
                                                children: "KLFPRO Healthcare"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 337,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                            lineNumber: 333,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                    lineNumber: 290,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 md:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "inline-flex h-10 items-center justify-center rounded-lg border border-[#0A1128]/25 bg-[#0A1128]/5 px-3 text-xs font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5 md:hidden",
                                            "aria-expanded": mobileOpen,
                                            "aria-controls": "klf-mobile-nav",
                                            onClick: ()=>setMobileOpen((o)=>!o),
                                            children: mobileOpen ? "Close" : "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                            lineNumber: 344,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "interactive-lift hidden rounded-full border border-white/35 px-4 py-2 text-[14px] font-semibold text-[#0A1128] transition-colors hover:bg-[#0A1128]/5 md:inline-flex",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                            lineNumber: 353,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                    lineNumber: 343,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                            lineNumber: 287,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                    lineNumber: 278,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "klf-mobile-nav",
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: "auto"
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            duration: 0.28,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[min(72vh,calc(100dvh-72px))] overflow-y-auto px-5 pb-5 pt-2",
                            children: [
                                navItems.map((nav)=>{
                                    const cfg = megaMenuContent[nav.key];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-[#0A1128]/15 py-4 last:border-b-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B8972E]/85",
                                                children: cfg.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-base font-semibold text-[#0A1128]",
                                                children: cfg.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 379,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-4",
                                                children: cfg.columns.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-bold uppercase tracking-wider text-[#1E293B]",
                                                                children: col.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 space-y-1",
                                                                children: col.items.map((label)=>{
                                                                    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$mega$2d$menu$2d$hrefs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hrefForMegaMenuItem"])(label);
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: href,
                                                                            className: "block rounded-lg px-2 py-2 text-[13px] text-[#0A1128] transition hover:bg-[#0A1128]/5 hover:text-[#0A1128]",
                                                                            onClick: closePanel,
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                            lineNumber: 390,
                                                                            columnNumber: 37
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "block rounded-lg px-2 py-2 text-[13px] text-[#1E293B]",
                                                                            children: label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                            lineNumber: 398,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    }, label, false, {
                                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 33
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                lineNumber: 384,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, col.title, true, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 380,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, nav.key, true, {
                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                        lineNumber: 377,
                                        columnNumber: 19
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col gap-2 border-t border-[#0A1128]/15 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/klfpro-healthcare",
                                            className: "inline-flex h-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[14px] font-bold text-[#0A66C2] transition hover:bg-blue-100",
                                            onClick: closePanel,
                                            children: "KLFPRO Healthcare"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "inline-flex h-11 items-center justify-center rounded-full border border-white/35 text-[14px] font-semibold text-[#0A1128] transition hover:bg-[#0A1128]/5",
                                            onClick: closePanel,
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                    lineNumber: 363,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    children: activeConfig && activeMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -16,
                            rotateX: -12
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10,
                            rotateX: -8
                        },
                        transition: {
                            type: "spring",
                            damping: 32,
                            stiffness: 380,
                            mass: 0.72
                        },
                        style: {
                            transformPerspective: 1400,
                            transformOrigin: "top center"
                        },
                        className: "absolute left-0 right-0 top-[72px] z-[110] max-h-[min(78vh,calc(100dvh-72px))] overflow-y-auto overflow-x-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.72)] backdrop-blur-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 opacity-[0.28] klf-hero-grid-motion",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/55 to-[#fde68a]/35",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mx-auto max-w-[1200px] px-5 pb-8 pt-9 md:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 flex flex-col gap-2 border-b border-[#0A1128]/15 pb-6 md:flex-row md:items-end md:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#fde68a] to-[#D4AF37]",
                                                        children: activeConfig.eyebrow
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-1 text-2xl font-bold tracking-tight text-[#0A1128] md:text-3xl",
                                                        children: activeConfig.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 max-w-xl text-sm text-[#1E293B]",
                                                        children: activeConfig.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: activeMenu === "tools" ? "/emi-calculator" : activeMenu === "cibil" ? "/credit-score" : "/loans/personal-loan",
                                                onClick: closePanel,
                                                className: "mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/15 to-[#fde68a]/15 px-5 py-2 text-sm font-semibold text-[#B8972E] transition hover:border-[#D4AF37]/55 hover:from-[#D4AF37]/25 hover:to-[#fde68a]/22 md:mt-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#B8972E]",
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Quick view",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                        lineNumber: 449,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `grid gap-6 md:gap-8 ${activeConfig.columns.length >= 3 ? "md:grid-cols-3" : activeConfig.columns.length === 2 ? "md:grid-cols-2" : "md:max-w-md"}`,
                                        children: activeConfig.columns.map((col, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 14,
                                                    rotateX: 6
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    rotateX: 0
                                                },
                                                transition: {
                                                    type: "spring",
                                                    damping: 28,
                                                    stiffness: 320,
                                                    delay: colIdx * 0.04
                                                },
                                                style: {
                                                    transformPerspective: 1000
                                                },
                                                className: "rounded-2xl border border-[#0A1128]/15 bg-gradient-to-b from-white/[0.07] from-10% via-[#D4AF37]/[0.04] to-transparent p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#B8972E]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-px w-6 bg-gradient-to-r from-[#D4AF37] to-[#fde68a]",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 23
                                                            }, this),
                                                            col.title
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 485,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "flex flex-col gap-2",
                                                        children: col.items.map((item, itemIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    x: -8
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    x: 0
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    damping: 34,
                                                                    stiffness: 400,
                                                                    delay: 0.04 + colIdx * 0.04 + itemIdx * 0.018
                                                                },
                                                                children: renderLink(item)
                                                            }, item, false, {
                                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                                lineNumber: 491,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, col.title, true, {
                                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                        lineNumber: 467,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, activeMenu, true, {
                        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this) : null
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
                    lineNumber: 431,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
            lineNumber: 277,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/StickyUrbanNav.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}

})()),
"[project]/frontend/components/layout/AppChrome.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AppChrome": ()=>AppChrome
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$StickyUrbanNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/StickyUrbanNav.tsx [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function AppChrome({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isMarketingHome = pathname === "/";
    const isMarketingLoanPage = pathname.startsWith("/loans/");
    const partnerHref = isMarketingHome ? "#eligibility" : "/contact";
    const isAppRoute = pathname.startsWith("/admin") || pathname.startsWith("/portal") || pathname.startsWith("/login");
    const isHealthcareRoute = pathname.startsWith("/klfpro-healthcare");
    if (isAppRoute || isHealthcareRoute) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$StickyUrbanNav$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyUrbanNav"], {
                partnerHref: partnerHref
            }, void 0, false, {
                fileName: "[project]/frontend/components/layout/AppChrome.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            isMarketingHome || isMarketingLoanPage ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-[72px]",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/layout/AppChrome.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                        fileName: "[project]/frontend/components/layout/AppChrome.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}

})()),
"[project]/frontend/components/calculators/CalculatorWrapper.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CalculatorWrapper": ()=>CalculatorWrapper
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function CalculatorWrapper() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "/css/calculators.css"
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: `    <div class="calc-overlay" id="calcOverlay">
        <div class="calc-container">
            
            <!-- MAIN HUB VIEW -->
            <div id="calcDashboard" class="calc-view calc-dashboard active">
                <div class="calc-header">
                    <h2 class="calc-title" style="text-align:center;">Dashboard</h2>
                    <button class="calc-close-btn" id="calcCloseBtn">&times;</button>
                </div>
                <div class="calc-content">
                    
                    <div class="calc-section">
                        <h3 class="calc-section-title">EMI Calculators</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcBasicEMI')">
                                <div class="calc-icon blue">🖩</div>
                                <span class="calc-item-name">EMI Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcQuick')">
                                <div class="calc-icon yellow">⚡</div>
                                <span class="calc-item-name">Quick Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcAdvanceEMI')">
                                <div class="calc-icon green">✨</div>
                                <span class="calc-item-name">Advance EMI</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcCompare')">
                                <div class="calc-icon blue" style="background:#60a5fa;">⚖️</div>
                                <span class="calc-item-name">Compare Loans</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">Loan</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcLoanProfile')">
                                <div class="calc-icon teal">💰</div>
                                <span class="calc-item-name">Loan Profile</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcPrePayment')">
                                <div class="calc-icon purple">⏱️</div>
                                <span class="calc-item-name">PrePayment/ROI Change</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcEligibility')">
                                <div class="calc-icon" style="background:#e879f9;">🏠</div>
                                <span class="calc-item-name">Check Eligibility</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcMoratorium')">
                                <div class="calc-icon indigo">📉</div>
                                <span class="calc-item-name">Moratorium Calculator</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">Banking Calculators</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcFD')">
                                <div class="calc-icon green">🏦</div>
                                <span class="calc-item-name">FD Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcRD')">
                                <div class="calc-icon blue">📅</div>
                                <span class="calc-item-name">RD Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcPPF')">
                                <div class="calc-icon yellow">📈</div>
                                <span class="calc-item-name">PPF Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcInterest')">
                                <div class="calc-icon blue" style="background:#3b82f6;">💵</div>
                                <span class="calc-item-name">Simple & Compound</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-section">
                        <h3 class="calc-section-title">GST & VAT</h3>
                        <div class="calc-grid">
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcGST')">
                                <div class="calc-icon purple" style="background:#8b5cf6;">🧾</div>
                                <span class="calc-item-name">GST Calculator</span>
                            </div>
                            <div class="calc-item" onclick="CalculatorHub.openCalculator('calcVAT')">
                                <div class="calc-icon teal">📉</div>
                                <span class="calc-item-name">VAT Calculator</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- MORATORIUM CALCULATOR VIEW -->
            <div id="calcMoratorium" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">Moratorium Calculator</h2>
                </div>
                <div class="calc-content">
                    <div class="calc-form-group">
                        <label>Loan Amount</label>
                        <input type="text" inputmode="numeric" class="calc-input format-currency" id="morLoanAmount" placeholder="2,00,000">
                    </div>
                    <div class="calc-form-group">
                        <label>Interest %</label>
                        <input type="number" step="0.1" class="calc-input" id="morInterest" placeholder="8">
                    </div>
                    <div class="calc-form-group">
                        <label>Period</label>
                        <div class="calc-input-wrapper">
                            <input type="number" class="calc-input" id="morPeriod" placeholder="24">
                            <div class="calc-toggle" id="morPeriodToggle">
                                <span>Years</span> | <span class="active">Months</span>
                            </div>
                        </div>
                    </div>
                    <div class="calc-form-group" id="morInstallmentsGroup" style="display: none;">
                        <label>Installments Paid</label>
                        <input type="number" class="calc-input" id="morInstallments" placeholder="Month">
                    </div>
                    <div class="calc-form-group">
                        <label>Moratorium Period</label>
                        <input type="number" class="calc-input" id="morMoratorium" placeholder="Month">
                    </div>
                    <div class="calc-form-group">
                        <label>Select your option</label>
                        <select class="calc-input" id="morOption" onchange="CalculatorHub.toggleMoratoriumOption()">
                            <option value="emi">No change in monthly EMI</option>
                            <option value="tenure">No change in loan tenure</option>
                        </select>
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateMoratorium()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetMoratorium()">Reset</button>
                    </div>

                    <table class="calc-result-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>No Moratorium</th>
                                <th>Moratorium Revise EMI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Principal</td>
                                <td id="morResNoPrincipal">-</td>
                                <td id="morResRevPrincipal">-</td>
                            </tr>
                            <tr>
                                <td>Monthly EMI</td>
                                <td id="morResNoEMI">-</td>
                                <td id="morResRevEMI">-</td>
                            </tr>
                            <tr>
                                <td>Tenure (In Month)</td>
                                <td id="morResNoTenure">-</td>
                                <td id="morResRevTenure" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Interest</td>
                                <td id="morResNoInterest">-</td>
                                <td id="morResRevInterest" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Payment</td>
                                <td id="morResNoPayment">-</td>
                                <td id="morResRevPayment">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 4. Quick Calculator -->
        <div id="calcQuick" class="calc-view">
            <div class="calc-header">
                <button class="calc-back-btn">&larr;</button>
                <h2 class="calc-title">Quick Calculator</h2>
            </div>
            <div class="calc-content">
                <!-- Tabs -->
                <div class="quick-tabs">
                    <button class="quick-tab active" onclick="CalculatorHub.switchQuickTab('emi')">EMI</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('amount')">Amount</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('period')">Period</button>
                    <button class="quick-tab" onclick="CalculatorHub.switchQuickTab('interest')">Interest</button>
                </div>

                <!-- Visualization Area -->
            <div class="quick-visual-area">
                <div class="quick-visual-stats">
                    <div class="stat-group">
                        <label>Total Interest</label>
                        <div id="quickTotalInterest" class="stat-val">0</div>
                    </div>
                    <div class="stat-group">
                        <label>Total Payment</label>
                        <div id="quickTotalPayment" class="stat-val">0</div>
                    </div>
                </div>
                <div class="quick-pie-wrapper">
                    <div id="quickPie" class="quick-pie"></div>
                    <div class="quick-pie-labels">
                        <span class="label-dot loan"></span> Loan Amount
                        <span class="label-dot interest"></span> Total Interest
                    </div>
                </div>
            </div>

            <!-- Result Highlight -->
            <div class="quick-result-highlight">
                <div id="quickResultTitle" class="res-title">Monthly EMI</div>
                <div id="quickResultValue" class="res-value">0</div>
                <div id="quickResultWords" class="res-words">Zero</div>
                <button class="calc-btn secondary outline" style="margin: 10px auto; display: block; width: fit-content; padding: 5px 15px;" onclick="CalculatorHub.showEMIDetails()">VIEW FULL DETAILS</button>
            </div>

            <!-- Dynamic Inputs -->
            <div class="quick-inputs-section">
                <!-- Amount Input -->
                <div class="quick-input-group" id="quickGroupAmount">
                    <div class="quick-input-header">
                        <label>Amount</label>
                        <div class="quick-input-box">
                            <span>₹</span>
                            <input type="number" id="quickAmount" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                        </div>
                    </div>
                    <div class="quick-words" id="quickAmountWords">Zero</div>
                    <input type="range" id="quickAmountSlider" class="quick-slider" min="10000" max="10000000" step="10000" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- Interest Input -->
                <div class="quick-input-group" id="quickGroupInterest">
                    <div class="quick-input-header">
                        <label>Interest %</label>
                        <div class="quick-input-box">
                            <input type="number" id="quickInterest" class="quick-num-input" step="0.1" oninput="CalculatorHub.syncQuickInputs(false)">
                            <span>%</span>
                        </div>
                    </div>
                    <input type="range" id="quickInterestSlider" class="quick-slider" min="1" max="50" step="0.1" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- Period Input -->
                <div class="quick-input-group" id="quickGroupPeriod">
                    <div class="quick-input-header">
                        <label>Period</label>
                        <div class="quick-input-box">
                            <input type="number" id="quickPeriod" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                            <span>Yr</span>
                        </div>
                    </div>
                    <div class="quick-words" id="quickPeriodMonths">0 months</div>
                    <input type="range" id="quickPeriodSlider" class="quick-slider" min="1" max="30" step="1" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>

                <!-- EMI Input -->
                <div class="quick-input-group" id="quickGroupEMI" style="display: none;">
                    <div class="quick-input-header">
                        <label>Monthly EMI</label>
                        <div class="quick-input-box">
                            <span>₹</span>
                            <input type="number" id="quickEMI" class="quick-num-input" oninput="CalculatorHub.syncQuickInputs(false)">
                        </div>
                    </div>
                    <div class="quick-words" id="quickEMIWords">Zero</div>
                    <input type="range" id="quickEMISlider" class="quick-slider" min="1000" max="500000" step="100" oninput="CalculatorHub.syncQuickInputs(true)">
                </div>
            </div>
            </div> <!-- end calc-content -->
        </div>

            <!-- EMI DETAILS VIEW -->
            <div id="calcEMIDetails" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn" onclick="CalculatorHub.showView('calcQuick')">&larr;</button>
                    <h2 class="calc-title" style="flex-grow:1; text-align:center;">EMI Details</h2>
                    <button class="calc-btn secondary" style="padding: 5px 15px; font-size: 14px; margin-left: 10px;" onclick="CalculatorHub.downloadEMIPDF(this)"><i class="fas fa-download"></i> Download PDF</button>
                </div>
                <div class="calc-content" style="padding: 0; background: #fff;">
                    <div class="details-tab-container">
                        <div class="details-tab-wrapper">
                            <button class="details-tab active" onclick="CalculatorHub.switchDetailsTab('details')">Details</button>
                            <button class="details-tab" onclick="CalculatorHub.switchDetailsTab('chart')">Chart</button>
                        </div>
                    </div>

                    <div id="emiDetailsTab" class="details-tab-content active">
                        <!-- Summary Table -->
                        <table class="emi-summary-table">
                            <tbody>
                                <tr><td>Amount</td><td id="detAmount" class="bold-val">0</td></tr>
                                <tr><td>Interest %</td><td id="detInterest" class="bold-val">0</td></tr>
                                <tr><td>Period (Months)</td><td id="detPeriod" class="bold-val">0</td></tr>
                                <tr><td>Monthly EMI</td><td id="detEMI" class="bold-val">0</td></tr>
                                <tr><td>Total Interest</td><td id="detTotalInterest" class="bold-val">0</td></tr>
                                <tr><td>Processing Fees</td><td id="detProcFees" class="bold-val">0</td></tr>
                                <tr><td>Total Payment</td><td id="detTotalPayment" class="bold-val">0</td></tr>
                            </tbody>
                        </table>

                        <!-- Amortization Table -->
                        <div class="table-responsive" style="overflow-x: auto;">
                            <table class="amortization-table">
                                <thead>
                                    <tr>
                                        <th>Month</th>
                                        <th>Principal</th>
                                        <th>Interest</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody id="amortizationBody">
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="emiChartTab" class="details-tab-content" style="display: none; padding: 20px;">
                        <div class="chart-wrapper" style="position: relative; height:400px; width:100%">
                            <canvas id="emiDetailsChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            <!-- COMPARE LOANS VIEW -->
            <div id="calcCompare" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">Compare Loans</h2>
                </div>
                <div class="calc-content">
                    <div class="compare-header">
                        <div>LOAN 1</div>
                        <div>LOAN 2</div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper">
                            <input type="text" inputmode="numeric" class="format-currency" id="compLoan1" placeholder="1,00,000">
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper">
                            <input type="text" inputmode="numeric" class="format-currency" id="compLoan2" placeholder="2,00,000">
                        </div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper">
                            <input type="number" step="0.1" id="compInt1" placeholder="8">
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper">
                            <input type="number" step="0.1" id="compInt2" placeholder="7">
                        </div>
                    </div>

                    <div class="compare-row">
                        <div class="compare-input-wrapper" style="position:relative; padding-right:60px;">
                            <input type="number" id="compPer1" placeholder="2">
                            <div class="calc-toggle" id="compPerToggle1" style="position:absolute; right:5px; font-size:0.7rem;">
                                <span class="active">Years</span> | <span>Months</span>
                            </div>
                        </div>
                        <div class="compare-arrow">&raquo;</div>
                        <div class="compare-input-wrapper" style="position:relative; padding-right:60px;">
                            <input type="number" id="compPer2" placeholder="2">
                            <div class="calc-toggle" id="compPerToggle2" style="position:absolute; right:5px; font-size:0.7rem;">
                                <span>Years</span> | <span class="active">Months</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateCompare()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetCompare()">Reset</button>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Monthly EMI</div>
                        <div class="compare-result-values">
                            <div id="compEmi1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compEmi2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffEmi">0</span></div>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Total Interest</div>
                        <div class="compare-result-values">
                            <div id="compIntOut1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compIntOut2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffInt">0</span></div>
                    </div>

                    <div class="compare-result-card">
                        <div class="compare-result-title">Total Payment</div>
                        <div class="compare-result-values">
                            <div id="compPay1" class="compare-result-val">-</div>
                            <div class="compare-result-divider"></div>
                            <div id="compPay2" class="compare-result-val">-</div>
                        </div>
                        <div class="compare-result-diff">Difference: <span id="compDiffPay">0</span></div>
                    </div>

                </div>
            </div>

            <!-- BASIC EMI CALCULATOR VIEW -->
            <div id="calcBasicEMI" class="calc-view">
                <div class="calc-header">
                    <button class="calc-back-btn">&larr;</button>
                    <h2 class="calc-title">EMI Calculator</h2>
                </div>
                <div class="calc-content">
                    <div class="calc-form-group">
                        <label>Loan Amount</label>
                        <input type="text" inputmode="numeric" class="calc-input format-currency" id="basicLoan" placeholder="1,00,000">
                    </div>
                    <div class="calc-form-group">
                        <label>Interest %</label>
                        <input type="number" step="0.1" class="calc-input" id="basicInt" placeholder="8.5">
                    </div>
                    <div class="calc-form-group">
                        <label>Period</label>
                        <div class="calc-input-wrapper">
                            <input type="number" class="calc-input" id="basicPer" placeholder="10">
                            <div class="calc-toggle" id="basicPerToggle">
                                <span class="active">Years</span> | <span>Months</span>
                            </div>
                        </div>
                    </div>

                    <div class="calc-form-group">
                        <label>Processing Fee %</label>
                        <input type="number" step="0.1" class="calc-input" id="basicProcFee" placeholder="Ex: 3">
                    </div>

                    <div class="calc-buttons">
                        <button class="calc-btn primary" onclick="CalculatorHub.calculateBasicEMI()">Calculate</button>
                        <button class="calc-btn secondary" onclick="CalculatorHub.resetBasicEMI()">Reset</button>
                    </div>

                    <table class="calc-result-table">
                        <tbody>
                            <tr>
                                <td>Monthly EMI</td>
                                <td id="basicResEmi" class="bold">-</td>
                            </tr>
                            <tr>
                                <td>Total Interest</td>
                                <td id="basicResInt">-</td>
                            </tr>
                            <tr>
                                <td>Processing Fees</td>
                                <td id="basicResProcFee">-</td>
                            </tr>
                            <tr>
                                <td>Total Payment</td>
                                <td id="basicResPay" class="bold">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
`
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.jsdelivr.net/npm/chart.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 489,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/js/calculators.js",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/frontend/components/calculators/CalculatorWrapper.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}

})()),
"[project]/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=%5Bproject%5D_frontend_5039e1._.js.map