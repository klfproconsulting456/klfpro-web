(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]__f73d95._.js", {

"[project]/frontend/components/marketing/HeroSlider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HeroSlider": ()=>HeroSlider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const slides = [
    "/images/marketing/hero-consultant.png",
    "/images/marketing/hero-family.png",
    "/images/marketing/hero-business.png",
    "/images/marketing/hero-property.jpg"
];
function HeroSlider() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const changeSlide = (next)=>{
        const normalized = (next + slides.length) % slides.length;
        setDirection(normalized > active ? 1 : -1);
        setActive(normalized);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (paused) return;
        const timer = setInterval(()=>{
            setDirection(1);
            setActive((prev)=>(prev + 1) % slides.length);
        }, 4500);
        return ()=>clearInterval(timer);
    }, [
        paused
    ]);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>slides[active], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen overflow-hidden",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#FAF6EE]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 1.05
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 1.2
                        },
                        className: "absolute inset-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: current,
                            alt: "KLFPRO fintech background slide",
                            fill: true,
                            priority: active === 0,
                            sizes: "100vw",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, current, false, {
                        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-white/20"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(250,246,238,0.85),transparent_100%)]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.15),transparent_38%),radial-gradient(circle_at_80%_68%,rgba(30,64,175,0.15),transparent_42%)] opacity-60"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0.5px,transparent_1px)] [background-size:3px_3px] mix-blend-screen opacity-10"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto flex h-full max-w-[1240px] items-center justify-center px-4 pb-20 pt-24 text-center md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 26
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7
                    },
                    className: "mx-auto max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mb-4 inline-flex w-fit items-center rounded-full border border-[#0A1128]/25 bg-[#FAF6EE]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A1128] backdrop-blur-md shadow-sm",
                            children: "KLFPRO CONSULTING"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl text-[#0A1128] drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]",
                            children: "Your Financial Journey, Simplified"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#0A1128] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]",
                            children: "Smart comparisons, faster approvals, and better financial decisions."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-7 flex flex-wrap justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#eligibility",
                                    className: "rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-7 py-3 font-semibold text-zinc-900 shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-105",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#products",
                                    className: "rounded-full border border-white/30 bg-[#0A1128]/5 px-7 py-3 font-semibold text-[#0A1128] backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/12",
                                    children: "Explore Services"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-[#FDFBF7]/30 px-3 py-2 text-[#0A1128] backdrop-blur md:block",
                onClick: ()=>changeSlide(active - 1),
                "aria-label": "Previous slide",
                children: "‹"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-[#FDFBF7]/30 px-3 py-2 text-[#0A1128] backdrop-blur md:block",
                onClick: ()=>changeSlide(active + 1),
                "aria-label": "Next slide",
                children: "›"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2",
                children: slides.map((s, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>changeSlide(idx),
                        "aria-label": `Go to slide ${idx + 1}`,
                        className: `h-2 rounded-full transition-all ${idx === active ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/45 hover:bg-white/70"}`
                    }, s, false, {
                        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-3 left-1/2 -translate-x-1/2 text-[#0A1128]/70",
                animate: {
                    y: [
                        0,
                        6,
                        0
                    ],
                    opacity: [
                        0.5,
                        1,
                        0.5
                    ]
                },
                transition: {
                    duration: 1.8,
                    repeat: Infinity
                },
                "aria-hidden": true,
                children: "↓"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(HeroSlider, "1nNek91ylhekWHV219/+zZZZs0c=");
_c = HeroSlider;
var _c;
__turbopack_refresh__.register(_c, "HeroSlider");

})()),
"[project]/frontend/components/marketing/MidPageOfferSlider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MidPageOfferSlider": ()=>MidPageOfferSlider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const slides = [
    {
        key: "personal-loan",
        title: "Get an instant Personal Loan up to",
        highlight: "INR 5,00,000",
        bullets: [
            "Instant approval in minutes",
            "Flexible repayment options",
            "Minimal documentation"
        ],
        cta: "Apply Now",
        href: "/loans/personal-loan",
        image: "/images/marketing/personal-loan-slide.jpg",
        gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        key: "education-loan",
        title: "Plan your Education Loan",
        highlight: "with confidence",
        bullets: [
            "Quick support for study abroad",
            "Competitive rates from top banks",
            "Fast online process"
        ],
        cta: "Explore Now",
        href: "/loans/education",
        image: "/images/marketing/education-loan-slide.jpg",
        gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        key: "credit-score",
        title: "Check your Credit Score",
        highlight: "for FREE",
        bullets: [
            "No impact on your score",
            "Detailed report and insights",
            "Instant online check"
        ],
        cta: "Get Free Credit Score",
        href: "/credit-score",
        image: "/images/marketing/credit-report-slide.jpg",
        gradient: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    }
];
function MidPageOfferSlider() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 140,
        damping: 26,
        mass: 0.7
    });
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 140,
        damping: 26,
        mass: 0.7
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (paused) return;
        const timer = setInterval(()=>{
            setDirection(1);
            setActiveIndex((prev)=>(prev + 1) % slides.length);
        }, 4600);
        return ()=>clearInterval(timer);
    }, [
        paused
    ]);
    const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;
    const visibleSlides = [
        {
            index: prevIndex,
            position: "left"
        },
        {
            index: activeIndex,
            position: "center"
        },
        {
            index: nextIndex,
            position: "right"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-[#FAF6EE] pb-12 pt-0",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>{
            setPaused(false);
            mouseX.set(0);
            mouseY.set(0);
        },
        onMouseMove: (event)=>{
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
            mouseX.set(x);
            mouseY.set(y);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 klf-grid-bg opacity-30",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-3xl",
                animate: {
                    opacity: [
                        0.4,
                        0.7,
                        0.4
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1200px] px-5 md:px-6 [perspective:1200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-8 h-[360px] md:h-[330px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            style: {
                                x: smoothX,
                                y: smoothY
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                initial: false,
                                mode: "sync",
                                children: visibleSlides.map(({ index, position })=>{
                                    const slide = slides[index];
                                    const isCenter = position === "center";
                                    const xValue = position === "left" ? "-60%" : position === "right" ? "60%" : "0%";
                                    const rotateY = position === "left" ? 15 : position === "right" ? -15 : 0;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                        initial: {
                                            opacity: 0,
                                            x: direction > 0 ? 56 : -56,
                                            scale: 0.88,
                                            rotateY: direction > 0 ? 8 : -8
                                        },
                                        animate: {
                                            left: "50%",
                                            x: xValue,
                                            opacity: isCenter ? 1 : 0.5,
                                            scale: isCenter ? 1 : 0.85,
                                            rotateY,
                                            filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                                            zIndex: isCenter ? 20 : 10
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: direction > 0 ? -62 : 62,
                                            scale: 0.86,
                                            rotateY: direction > 0 ? -8 : 8
                                        },
                                        transition: {
                                            duration: 0.95,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1
                                            ]
                                        },
                                        style: {
                                            transformStyle: "preserve-3d"
                                        },
                                        onClick: ()=>{
                                            if (isCenter) return;
                                            setDirection(position === "left" ? -1 : 1);
                                            setActiveIndex(index);
                                        },
                                        className: `absolute top-0 w-full max-w-[840px] -translate-x-1/2 overflow-hidden rounded-2xl border bg-gradient-to-r ${slide.gradient} ${isCenter ? "cursor-default border-[#D4AF37]/30 shadow-[0_0_90px_-28px_rgba(212,175,55,0.34)]" : "cursor-pointer border-[#0A1128]/15 shadow-[0_0_50px_-32px_rgba(0,0,0,0.6)]"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                "aria-hidden": true,
                                                className: "pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl",
                                                animate: {
                                                    rotate: [
                                                        0,
                                                        180,
                                                        360
                                                    ]
                                                },
                                                transition: {
                                                    duration: 24,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                lineNumber: 139,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid md:grid-cols-2 h-full items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative z-10 flex flex-col gap-4 px-6 py-7 text-[#0A1128] md:px-9 md:py-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[20px] font-bold leading-[1.2] md:text-[28px] lg:text-[32px]",
                                                                children: [
                                                                    slide.title,
                                                                    " ",
                                                                    slide.highlight.toUpperCase().includes("FREE") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                        className: "bg-gradient-to-r from-[#D4AF37] via-[#fde68a] to-[#D4AF37] bg-[length:200%_100%] bg-clip-text text-transparent",
                                                                        animate: {
                                                                            backgroundPosition: [
                                                                                "0% 50%",
                                                                                "100% 50%",
                                                                                "0% 50%"
                                                                            ]
                                                                        },
                                                                        transition: {
                                                                            duration: 2.2,
                                                                            repeat: Infinity,
                                                                            ease: "easeInOut"
                                                                        },
                                                                        children: slide.highlight
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]",
                                                                        children: slide.highlight
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-2 text-[13px] text-[#0A1128] md:text-[15px]",
                                                                children: slide.bullets.map((bullet, bulletIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                        initial: {
                                                                            opacity: 0,
                                                                            x: -40
                                                                        },
                                                                        animate: {
                                                                            opacity: 1,
                                                                            x: 0
                                                                        },
                                                                        transition: {
                                                                            duration: 0.35,
                                                                            delay: isCenter ? 0.18 + bulletIdx * 0.2 : 0.05
                                                                        },
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                                initial: {
                                                                                    scale: 0.8,
                                                                                    opacity: 0
                                                                                },
                                                                                animate: {
                                                                                    scale: 1,
                                                                                    opacity: 1
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.24,
                                                                                    delay: isCenter ? 0.2 + bulletIdx * 0.2 : 0.05
                                                                                },
                                                                                className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "h-2 w-2 rounded-full bg-[#D4AF37]"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                                    lineNumber: 177,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                                lineNumber: 171,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                                                animate: isCenter ? {
                                                                                    textShadow: [
                                                                                        "0 0 0 rgba(212,175,55,0)",
                                                                                        "0 0 10px rgba(212,175,55,0.34)",
                                                                                        "0 0 0 rgba(212,175,55,0)"
                                                                                    ]
                                                                                } : {},
                                                                                transition: {
                                                                                    duration: 0.65,
                                                                                    delay: isCenter ? 0.22 + bulletIdx * 0.2 : 0
                                                                                },
                                                                                children: bullet
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, bullet, true, {
                                                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                whileTap: {
                                                                    scale: 0.98
                                                                },
                                                                className: "mt-2 w-fit",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: slide.href,
                                                                    className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#D4AF37] via-[#f7b801] to-[#fde68a] px-7 py-2.5 text-[14px] font-semibold text-zinc-900 shadow-[0_0_24px_rgba(212,175,55,0.34)] transition hover:scale-105 hover:shadow-[0_0_34px_rgba(212,175,55,0.48)]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-500 group-hover:translate-x-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        slide.cta,
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            "aria-hidden": true,
                                                                            children: ">"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                            lineNumber: 195,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative hidden h-full min-h-[220px] md:block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "absolute inset-0",
                                                            animate: isCenter ? {
                                                                y: [
                                                                    -8,
                                                                    8,
                                                                    -8
                                                                ],
                                                                scale: [
                                                                    1,
                                                                    1.02,
                                                                    1
                                                                ]
                                                            } : {
                                                                y: 0,
                                                                scale: 1
                                                            },
                                                            transition: isCenter ? {
                                                                duration: 4.8,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            } : {
                                                                duration: 0.3
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: slide.image,
                                                                alt: "",
                                                                fill: true,
                                                                className: "object-cover object-center",
                                                                sizes: "400px"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${slide.key}-${position}`, true, {
                                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex justify-center gap-3",
                        children: slides.map((slide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setDirection(idx > activeIndex ? 1 : -1);
                                    setActiveIndex(idx);
                                },
                                "aria-label": `Open ${slide.key}`,
                                className: "group relative h-2 w-20 overflow-hidden rounded-full bg-[#0A1128]/15",
                                children: idx === activeIndex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        width: "0%"
                                    },
                                    animate: {
                                        width: "100%"
                                    },
                                    transition: {
                                        duration: 4.6,
                                        ease: "linear"
                                    },
                                    className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#fde68a]"
                                }, slide.key + activeIndex, false, {
                                    fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-y-0 left-0 w-0 rounded-full bg-white/40 transition-all duration-300 group-hover:w-full"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                    lineNumber: 238,
                                    columnNumber: 17
                                }, this)
                            }, slide.key, false, {
                                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/MidPageOfferSlider.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(MidPageOfferSlider, "XZv53Q+yLmAwZO4/39qHhSlsaPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = MidPageOfferSlider;
var _c;
__turbopack_refresh__.register(_c, "MidPageOfferSlider");

})()),
"[project]/frontend/components/marketing/LightProductsBlock.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "LightProductsBlock": ()=>LightProductsBlock
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const cards = [
    {
        title: "Business Loan",
        desc: "Instant Funds for Instant Growth",
        image: "/images/marketing/business-loan.jpg",
        btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        href: "/loans/business",
        badge: null
    },
    {
        title: "Loan Against Property",
        desc: "Lowest Interest Rate",
        image: "/images/marketing/lap.jpg",
        btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        href: "/loans/loan-against-property",
        badge: null
    },
    {
        title: "Home Loan",
        desc: "Build your dream home with ease",
        image: "/images/marketing/home-loan.jpg",
        btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        href: "/loans/home",
        badge: "Lowest EMI"
    },
    {
        title: "Education Loan",
        desc: "Fund your studies abroad",
        image: "/images/marketing/education-loan.jpg",
        btnClass: "bg-[#D4AF37] text-[#0A1128] hover:bg-[#cda22d] shadow-[0_0_15px_rgba(212,175,55,0.3)]",
        href: "/loans/education",
        badge: "New"
    }
];
const cornerEntry = [
    {
        x: -150,
        y: -150
    },
    {
        x: 150,
        y: -150
    },
    {
        x: -150,
        y: 150
    },
    {
        x: 150,
        y: 150
    }
];
function LightProductsBlock() {
    _s();
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        idx: -1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "products",
        className: "relative scroll-mt-24 overflow-hidden bg-[#FAF6EE] pb-24 pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 klf-grid-bg opacity-25",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[100px]",
                animate: {
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute left-10 top-14 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl",
                animate: {
                    x: [
                        0,
                        20,
                        0
                    ],
                    y: [
                        0,
                        15,
                        0
                    ],
                    opacity: [
                        0.25,
                        0.5,
                        0.25
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1280px] px-4 text-center md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: -28
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.7,
                            ease: "easeOut"
                        },
                        className: "text-4xl font-bold tracking-tight text-[#0A1128] md:text-5xl",
                        children: [
                            "Find the Right Financial",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]",
                                children: "Product"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.12,
                            duration: 0.55,
                            ease: "easeOut"
                        },
                        className: "mx-auto mt-4 max-w-2xl text-base text-[#1E293B] md:text-lg",
                        children: "Get started in minutes with our simple, fast, and convenient application process."
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                        style: {
                            perspective: "1400px"
                        },
                        children: cards.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.1
                                },
                                className: "group/card relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#F3E0C0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FCF8F2] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-500 group-hover/card:scale-x-100"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    c.badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-4 top-4 z-10 whitespace-nowrap rounded-full bg-[#D4AF37] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-900 shadow-sm",
                                        children: c.badge
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5 flex flex-col items-center sm:items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative mb-5 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#F3E0C0] bg-white p-2 shadow-sm transition-all duration-300 group-hover/card:border-[#D4AF37]/50 group-hover/card:shadow-md sm:h-20 sm:w-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: c.image,
                                                            alt: c.title,
                                                            fill: true,
                                                            className: "object-cover",
                                                            sizes: "80px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-center text-lg font-bold text-[#1C2233] transition-colors duration-300 group-hover/card:text-[#D4AF37] sm:text-left sm:text-xl",
                                                        children: c.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-center text-[13px] leading-relaxed text-[#5F6B7A] sm:text-left sm:text-[14px]",
                                                children: c.desc
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex justify-center sm:justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: c.href,
                                            className: `group/btn relative inline-flex items-center gap-1 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold transition ${c.btnClass}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition duration-500 group-hover/btn:translate-x-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                c.title === "Home Loan" ? "Explore" : c.title === "Education Loan" ? "Explore" : "Apply Now",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": true,
                                                    children: ">"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.title, true, {
                                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(LightProductsBlock, "Vy52HP4auOGOmPEAyQIC3H460YM=");
_c = LightProductsBlock;
var _c;
__turbopack_refresh__.register(_c, "LightProductsBlock");

})()),
"[project]/frontend/components/marketing/KlfMotion.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "KlfReveal": ()=>KlfReveal,
    "KlfStaggerContainer": ()=>KlfStaggerContainer,
    "klfItemVariants": ()=>klfItemVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
const ease = [
    0.22,
    1,
    0.36,
    1
];
function KlfReveal({ children, className, delay = 0, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 40,
            scale: 0.97
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        viewport: {
            once: true,
            amount: 0.15,
            margin: "0px 0px -8% 0px"
        },
        transition: {
            duration: 0.65,
            delay,
            ease
        },
        style: {
            transformPerspective: 1200,
            transformOrigin: "center top"
        },
        className: className,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/KlfMotion.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = KlfReveal;
function KlfStaggerContainer({ children, className, stagger = 0.06 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.12
        },
        variants: {
            hidden: {},
            show: {
                transition: {
                    staggerChildren: stagger,
                    delayChildren: 0.04
                }
            }
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/KlfMotion.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = KlfStaggerContainer;
const klfItemVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.98
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease
        }
    }
};
var _c, _c1;
__turbopack_refresh__.register(_c, "KlfReveal");
__turbopack_refresh__.register(_c1, "KlfStaggerContainer");

})()),
"[project]/frontend/components/marketing/ScrollJourneySections.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ScrollJourneySections": ()=>ScrollJourneySections
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/KlfMotion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
const orbitCards = [
    {
        bank: "HDFC Bank",
        logo: "/images/marketing/banks/HDFC.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "SBI Card",
        logo: "/images/marketing/banks/SBI.png",
        variant: "from-[#FAF6EE] via-[#2563eb] to-[#FAF6EE]"
    },
    {
        bank: "ICICI Bank",
        logo: "/images/marketing/banks/ICICI.png",
        variant: "from-[#FAF6EE] via-[#b45309] to-[#FAF6EE]"
    },
    {
        bank: "Axis Bank",
        logo: "/images/marketing/banks/Axis.png",
        variant: "from-[#FAF6EE] via-[#6d28d9] to-[#FAF6EE]"
    },
    {
        bank: "PNB Card",
        logo: "/images/marketing/banks/PNB.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "HDFC Bank",
        logo: "/images/marketing/banks/HDFC.png",
        variant: "from-[#FAF6EE] via-[#334155] to-[#FAF6EE]"
    },
    {
        bank: "SBI Card",
        logo: "/images/marketing/banks/SBI.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "ICICI Bank",
        logo: "/images/marketing/banks/ICICI.png",
        variant: "from-[#FAF6EE] via-[#7c2d12] to-[#FAF6EE]"
    },
    {
        bank: "Axis Bank",
        logo: "/images/marketing/banks/Axis.png",
        variant: "from-[#FAF6EE] via-[#4338ca] to-[#FAF6EE]"
    },
    {
        bank: "PNB Card",
        logo: "/images/marketing/banks/PNB.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "HDFC Bank",
        logo: "/images/marketing/banks/HDFC.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "SBI Card",
        logo: "/images/marketing/banks/SBI.png",
        variant: "from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]"
    },
    {
        bank: "Axis Bank",
        logo: "/images/marketing/banks/Axis.png",
        variant: "from-[#FAF6EE] via-[#6d28d9] to-[#FAF6EE]"
    },
    {
        bank: "ICICI Bank",
        logo: "/images/marketing/banks/ICICI.png",
        variant: "from-[#FAF6EE] via-[#7c2d12] to-[#FAF6EE]"
    }
];
const sections = [
    {
        key: "credit-cards",
        title: "Credit Cards",
        points: [
            "Global Acceptance - Use your card anywhere in the world.",
            "24/7 Concierge Service - Personal travel assistance anytime.",
            "Accelerated Rewards - Extra benefits on daily spending."
        ],
        image: "/images/marketing/credit-card.webp",
        imageAlt: "KLFPRO credit cards visual",
        applyHref: "/credit-score",
        exploreHref: "/credit-score",
        dark: true
    },
    {
        key: "education-loan",
        title: "Education Loans",
        points: [
            "Loan amounts up to 2 Cr for India & Abroad studies.",
            "Competitive interest rates with easy comparison.",
            "Moratorium options available during course duration."
        ],
        image: "/images/marketing/education-loan.jpg",
        imageAlt: "KLFPRO education loan visual",
        applyHref: "/loans/education",
        exploreHref: "/emi-calculator",
        reverse: true
    },
    {
        key: "personal-loan",
        title: "Personal Loan",
        points: [
            "Loan amounts up to 40 Lakhs with flexible repayment options.",
            "Competitive rates designed for faster approvals.",
            "Fast disbursal after quick document checks."
        ],
        image: "/images/marketing/personal-loan.jpg",
        imageAlt: "KLFPRO personal loan visual",
        applyHref: "/loans/personal-loan",
        exploreHref: "/loans/personal-loan",
        reverse: true
    },
    {
        key: "home-loan",
        title: "Home Loan",
        points: [
            "Up to 5 Crore* loan amount with attractive terms.",
            "Low interest rates and transparent repayment support.",
            "Quick approvals with guided documentation."
        ],
        image: "/images/marketing/home-loan.jpg",
        imageAlt: "KLFPRO home loan visual",
        applyHref: "/loans/home",
        exploreHref: "/loans/home"
    }
];
const sectionReveal = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        y: 80,
        rotateX: 8,
        filter: "blur(6px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};
const contentStagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.1
        }
    }
};
const contentItem = {
    hidden: {
        opacity: 0,
        y: 18,
        filter: "blur(3px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.55,
            ease: "easeOut"
        }
    }
};
function ScrollJourneySections() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden border-b border-[#0A1128]/15 bg-[#FAF6EE] pb-16 pt-16 text-[#0A1128]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 opacity-[0.35] klf-grid-bg",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KlfReveal"], {
                        className: "relative mx-auto max-w-[1170px] px-5 text-center md:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[30px] font-semibold leading-tight md:text-[44px]",
                                children: [
                                    "Smart",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent",
                                        children: "Credit Cards"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Designed For You"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-[760px] text-[16px] text-[#0A1128] md:text-[17px]",
                                children: "Explore options suited to your goals with smooth digital comparison and assisted application flow."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            sections.map((section, idx)=>{
                const isDark = section.dark ?? false;
                const reverse = section.reverse ?? false;
                const bgClass = isDark ? "bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] text-[#0A1128]" : "bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] text-[#0A1128]";
                const mutedClass = "text-[#0A1128]";
                const borderClass = "border-white/30 text-[#0A1128] hover:bg-[#0A1128]/5";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${bgClass} relative overflow-hidden pb-14 pt-4 md:pt-7`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0",
                            initial: {
                                y: 36,
                                opacity: isDark ? 0.24 : 0.12
                            },
                            whileInView: {
                                y: -22,
                                opacity: isDark ? 0.32 : 0.14
                            },
                            viewport: {
                                once: true,
                                amount: 0.2
                            },
                            transition: {
                                duration: 1.1,
                                ease: "easeOut"
                            },
                            style: {
                                background: isDark ? "radial-gradient(65% 48% at 20% 45%, rgba(212,175,55,0.10), transparent 70%), radial-gradient(60% 48% at 85% 60%, rgba(255,255,255,0.06), transparent 72%)" : "radial-gradient(65% 48% at 20% 45%, rgba(212,175,55,0.10), transparent 70%), radial-gradient(60% 48% at 85% 60%, rgba(17,24,39,0.05), transparent 72%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mx-auto grid max-w-[1110px] items-center gap-6 px-5 [perspective:1400px] md:grid-cols-[1fr_420px] md:gap-8 md:px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: sectionReveal.hidden,
                                    whileInView: {
                                        ...sectionReveal.visible,
                                        y: [
                                            -10,
                                            10,
                                            -10
                                        ]
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.35
                                    },
                                    transition: {
                                        y: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        duration: 0.8,
                                        ease: "easeOut"
                                    },
                                    style: {
                                        transformPerspective: 1200,
                                        transformStyle: "preserve-3d",
                                        willChange: "transform, opacity, filter"
                                    },
                                    className: `${reverse ? "md:order-2 md:justify-self-start" : section.key === "credit-cards" ? "md:justify-self-start md:-ml-16 md:-mt-6" : "md:justify-self-end"} relative transform-gpu`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute ${reverse ? "-left-8 bottom-8" : "-right-8 top-8"} h-24 w-24 opacity-70`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid h-full w-full grid-cols-6 gap-1",
                                                children: Array.from({
                                                    length: 36
                                                }).map((_, dotIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-1.5 w-1.5 rounded-full bg-[#D4AF37]/60"
                                                    }, dotIdx, false, {
                                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this),
                                        section.key === "credit-cards" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreditCardOrbit, {}, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 201,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[310px] w-[235px] overflow-hidden rounded-[26px] border border-black/15 shadow-[0_22px_40px_-24px_rgba(0,0,0,0.65)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: section.image,
                                                    alt: section.imageAlt,
                                                    fill: true,
                                                    className: "object-cover",
                                                    sizes: "250px"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF6EE]/35 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 203,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: sectionReveal.hidden,
                                    whileInView: sectionReveal.visible,
                                    viewport: {
                                        once: true,
                                        amount: 0.35
                                    },
                                    variants: contentStagger,
                                    transition: {
                                        duration: 0.8,
                                        ease: "easeOut"
                                    },
                                    style: {
                                        transformPerspective: 1200,
                                        transformStyle: "preserve-3d",
                                        willChange: "transform, opacity, filter"
                                    },
                                    className: `${reverse ? "md:order-1" : ""} transform-gpu rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 backdrop-blur-xl md:p-6`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                                            variants: contentItem,
                                            className: "bg-gradient-to-r from-[#D4AF37] via-[#fde68a] to-white bg-clip-text text-[34px] font-semibold leading-none text-transparent md:text-[40px]",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: `mt-5 space-y-3 text-[14px] ${mutedClass} md:text-[16px]`,
                                            children: section.points.map((point, pointIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                                    variants: contentItem,
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: "easeOut",
                                                        delay: 0.1 + pointIdx * 0.12
                                                    },
                                                    className: "flex items-start gap-2.5 leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mt-1 inline-flex h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, point, true, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: contentItem,
                                            className: "mt-5 flex flex-wrap gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        scale: 1.05,
                                                        boxShadow: "0 0 30px rgba(212,175,55,0.25)"
                                                    },
                                                    transition: {
                                                        duration: 0.25
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/eligibility",
                                                        className: "interactive-lift rounded-full bg-[#D4AF37] px-6 py-2 text-[14px] font-semibold text-zinc-900 md:px-7 md:text-[15px]",
                                                        children: [
                                                            "Apply Now ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": true,
                                                                children: ">"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        scale: 1.05,
                                                        boxShadow: "0 0 20px rgba(212,175,55,0.18)"
                                                    },
                                                    transition: {
                                                        duration: 0.25
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: section.exploreHref,
                                                        className: `interactive-lift rounded-full border px-6 py-2 text-[14px] font-medium md:px-7 md:text-[15px] ${borderClass}`,
                                                        children: [
                                                            "Explore More ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": true,
                                                                children: ">"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this),
                        idx !== sections.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-12 h-px max-w-[1110px] bg-[#0A1128]/5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 258,
                            columnNumber: 44
                        }, this) : null
                    ]
                }, section.key, true, {
                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                    lineNumber: 166,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c = ScrollJourneySections;
function CreditCardOrbit() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const durationSec = 16;
    const radiusX = 165;
    const radiusY = 70;
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const glowOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.35,
        0.85,
        0.45
    ]);
    const glowScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5,
        1
    ], [
        0.92,
        1.08,
        0.96
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"])((_time, delta)=>{
        const step = delta / 1000 * (Math.PI * 2) / durationSec;
        setPhase((prev)=>(prev + step) % (Math.PI * 2));
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative mx-auto h-[360px] w-[430px]",
        onMouseLeave: ()=>{
            setHovered(null);
            setTilt({
                x: 0,
                y: 0
            });
        },
        onMouseMove: (event)=>{
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = -((event.clientY - rect.top) / rect.height - 0.5) * 8;
            setTilt({
                x,
                y
            });
        },
        style: {
            perspective: "1100px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_62%)] blur-2xl",
                style: {
                    opacity: glowOpacity,
                    scale: glowScale
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-1/2 top-1/2 h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/20 bg-[#FAF6EE]/95 shadow-[0_0_40px_rgba(212,175,55,0.24)]",
                animate: {
                    scale: [
                        0.98,
                        1.05,
                        0.98
                    ],
                    opacity: [
                        0.88,
                        1,
                        0.88
                    ]
                },
                transition: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_35%_70%,rgba(212,175,55,0.12),transparent_42%)]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/15"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/30",
                animate: {
                    rotate: [
                        0,
                        360
                    ]
                },
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity
                },
                style: {
                    borderStyle: "dashed"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            orbitCards.map((card, index)=>{
                const step = Math.PI * 2 / orbitCards.length;
                const angle = phase + index * step;
                const x = Math.cos(angle) * radiusX;
                const y = Math.sin(angle) * radiusY;
                const depth = (Math.sin(angle) + 1) / 2;
                const isHovered = hovered === index;
                const scale = isHovered ? 1.14 : 0.75 + depth * 0.35;
                const opacity = 0.3 + depth * 0.7;
                const angleTilt = (Math.cos(angle) * 18).toFixed(2);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    onMouseEnter: ()=>setHovered(index),
                    onMouseLeave: ()=>setHovered(null),
                    whileHover: {
                        y: -6,
                        transition: {
                            duration: 0.2,
                            ease: "easeOut"
                        }
                    },
                    className: `absolute left-1/2 top-1/2 h-[132px] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[22px] border border-[#0A1128]/25 bg-gradient-to-br ${card.variant} p-4 text-[#0A1128] shadow-[0_16px_32px_-18px_rgba(0,0,0,0.85)]`,
                    style: {
                        transform: `translate3d(${x}px, ${y}px, 0) scale(${scale}) rotateY(${angleTilt}deg) rotateX(${tilt.y}deg) rotateZ(${tilt.x}deg)`,
                        opacity,
                        zIndex: Math.round(20 + depth * 80),
                        filter: isHovered ? "brightness(1.15)" : `brightness(${0.75 + depth * 0.35})`,
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity, filter"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0 rounded-2xl",
                            animate: {
                                boxShadow: isHovered ? "0 0 28px rgba(212,175,55,0.42)" : "0 0 0 rgba(212,175,55,0)"
                            },
                            transition: {
                                duration: 0.25,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 347,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.24)_42%,transparent_64%)] opacity-55"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "pointer-events-none absolute inset-0",
                            animate: {
                                x: [
                                    "-120%",
                                    "120%"
                                ]
                            },
                            transition: {
                                duration: 2.6,
                                repeat: Infinity,
                                ease: "linear",
                                delay: index * 0.2
                            },
                            style: {
                                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-4 w-14 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: card.logo,
                                        alt: `${card.bank} logo`,
                                        fill: true,
                                        className: "scale-110 object-contain",
                                        sizes: "56px"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase tracking-[0.2em] text-[#0A1128]/75",
                                    children: "Platinum"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative mt-4 text-[18px] font-semibold",
                            children: card.bank
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 366,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mt-3 flex items-center justify-between text-[10px] text-[#0A1128]/70",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "blur-[1.4px]",
                                    children: "VALID 12/29"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "VISA"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this)
                    ]
                }, `${card.bank}-${index}`, true, {
                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_s(CreditCardOrbit, "YfXa/e/LEiBtKN5BsVd9SRiqlB0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$animation$2d$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimationFrame"]
    ];
});
_c1 = CreditCardOrbit;
var _c, _c1;
__turbopack_refresh__.register(_c, "ScrollJourneySections");
__turbopack_refresh__.register(_c1, "CreditCardOrbit");

})()),
"[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FinancialCalculatorsSection": ()=>FinancialCalculatorsSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/KlfMotion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const calculatorRows = [
    [
        {
            title: "Personal Loan EMI Calculator",
            desc: "Calculate your EMIs and plan repayments in advance",
            iconId: "emi"
        },
        {
            title: "Personal Loan Eligibility Calculator",
            desc: "Check how much personal loan you can borrow quickly",
            iconId: "eligibility"
        },
        {
            title: "Personal Loan Prepayment Calculator",
            desc: "Estimate savings and optimize prepayments easily",
            iconId: "prepay"
        }
    ],
    [
        {
            title: "Home Loan EMI Calculator",
            desc: "Work out your monthly home loan EMI accurately",
            iconId: "home"
        },
        {
            title: "Home Loan Eligibility Calculator",
            desc: "Discover your home loan eligibility and plan better",
            iconId: "homeElig"
        },
        {
            title: "Study Loan EMI Calculator",
            desc: "Discover study loan eligibility and payment options",
            iconId: "study"
        }
    ]
];
function CalculatorIcon({ id }) {
    const common = "h-6 w-6 text-amber-500";
    switch(id){
        case "emi":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "4",
                        y: "3",
                        width: "16",
                        height: "18",
                        rx: "2"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 7h8M8 11h2M12 11h4M8 15h2M12 15h4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this);
        case "eligibility":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 19V5a1 1 0 011-1h14a1 1 0 011 1v14"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 9h8M8 13h5"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 17l2 2 4-4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this);
        case "prepay":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "8"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 8v8M9 11l3-3 3 3"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this);
        case "home":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this);
        case "homeElig":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9.5z"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17 17l2 2 4-4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this);
        case "study":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: common,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                "aria-hidden": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 10l8-4 8 4-8 4-8-4z"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 10v6l8 4 8-4v-6"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 14v7"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
_c = CalculatorIcon;
function FinancialCalculatorsSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        once: true,
        amount: 0.25
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden border-y border-[#0A1128]/15 bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE] pb-18 pt-18 text-[#0A1128]",
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
                        -14,
                        12,
                        0
                    ],
                    y: [
                        0,
                        -8,
                        7,
                        0
                    ]
                },
                transition: {
                    duration: 15,
                    ease: "easeInOut",
                    repeat: Infinity
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-55",
                    style: {
                        background: "radial-gradient(42% 50% at 14% 22%, rgba(212,175,55,0.18), transparent 72%), radial-gradient(38% 44% at 84% 34%, rgba(96,165,250,0.22), transparent 68%), radial-gradient(30% 30% at 64% 78%, rgba(212,175,55,0.12), transparent 75%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 opacity-35",
                animate: {
                    x: [
                        "-7%",
                        "8%",
                        "-5%"
                    ],
                    y: [
                        0,
                        6,
                        0
                    ]
                },
                transition: {
                    duration: 11,
                    ease: "linear",
                    repeat: Infinity
                },
                style: {
                    background: "linear-gradient(140deg, rgba(255,255,255,0.08) 0 12%, transparent 12% 100%), linear-gradient(35deg, rgba(96,165,250,0.1) 0 18%, transparent 18% 100%), linear-gradient(215deg, rgba(212,175,55,0.1) 0 18%, transparent 18% 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute -left-12 bottom-10 h-44 w-44 rounded-full bg-[#D4AF37]/15 blur-3xl",
                animate: {
                    x: [
                        0,
                        18,
                        0
                    ],
                    y: [
                        0,
                        -10,
                        0
                    ],
                    opacity: [
                        0.2,
                        0.45,
                        0.2
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute right-[-3%] top-16 h-52 w-52 rounded-full bg-sky-300/20 blur-3xl",
                animate: {
                    x: [
                        0,
                        -18,
                        0
                    ],
                    y: [
                        0,
                        12,
                        0
                    ],
                    opacity: [
                        0.2,
                        0.42,
                        0.2
                    ]
                },
                transition: {
                    duration: 9.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 klf-grid-bg opacity-20",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KlfReveal"], {
                className: "relative mx-auto max-w-[1170px] px-5 text-center md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[36px] font-bold md:text-[52px]",
                        children: [
                            "Financial",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-[#fde68a] via-[#D4AF37] to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]",
                                children: "Calculators"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-3 max-w-[760px] text-[16px] text-[#0A1128]",
                        children: "Plan EMIs, estimate eligibility, and make better financial decisions faster."
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto mt-10 max-w-[1170px] space-y-10 px-5 md:px-6",
                children: [
                    calculatorRows.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6 [perspective:1200px]",
                            children: row.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    initial: {
                                        opacity: 0,
                                        y: 24,
                                        rotateX: 10,
                                        scale: 0.95,
                                        filter: "blur(5px)"
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0,
                                        rotateX: 0,
                                        scale: 1,
                                        filter: "blur(0px)"
                                    },
                                    viewport: {
                                        once: true,
                                        amount: 0.25
                                    },
                                    transition: {
                                        type: "spring",
                                        damping: 26,
                                        stiffness: 280,
                                        delay: idx * 0.07 + rowIdx * 0.05
                                    },
                                    whileHover: {
                                        rotateX: -5,
                                        rotateY: rowIdx % 2 === 0 ? 3 : -3,
                                        y: -8,
                                        scale: 1.03,
                                        boxShadow: "0 0 56px -20px rgba(212,175,55,0.4)"
                                    },
                                    animate: inView ? {
                                        y: [
                                            0,
                                            -5,
                                            0
                                        ]
                                    } : {
                                        y: 0
                                    },
                                    style: {
                                        transformStyle: "preserve-3d",
                                        willChange: "transform, box-shadow, filter"
                                    },
                                    className: "group relative h-[196px] w-full max-w-[300px] rounded-[24px] border border-[#D4AF37]/28 bg-gradient-to-b from-white/[0.09] to-white/[0.03] px-5 pb-5 pt-11 text-center shadow-[0_0_48px_-22px_rgba(212,175,55,0.24)] backdrop-blur-lg transition hover:border-[#fde68a]/48 md:w-[292px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.12),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(96,165,250,0.12),transparent_52%)] opacity-60"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "absolute -top-7 left-1/2 flex h-[54px] w-[54px] -translate-x-1/2 items-center justify-center rounded-full border border-white/35 bg-white shadow-lg",
                                            animate: {
                                                y: [
                                                    0,
                                                    -5,
                                                    0
                                                ],
                                                scale: [
                                                    1,
                                                    1.03,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 2.4,
                                                repeat: Infinity,
                                                delay: idx * 0.22 + rowIdx * 0.15,
                                                ease: "easeInOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CalculatorIcon, {
                                                id: card.iconId
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[18px] font-semibold leading-tight",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-3 max-w-[250px] text-[14px] leading-relaxed text-[#0F1C3F]",
                                            children: card.desc
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-x-0 bottom-[-18px] flex justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "button",
                                                whileHover: {
                                                    y: -2,
                                                    scale: 1.04
                                                },
                                                whileTap: {
                                                    scale: 0.97
                                                },
                                                className: "interactive-lift pointer-events-auto rounded-full bg-white px-6 py-1.5 text-[14px] font-semibold text-zinc-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 md:translate-y-2",
                                                children: [
                                                    "Try It ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: ">"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, card.title, true, {
                                    fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this))
                        }, rowIdx, false, {
                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/emi-calculator",
                            className: "interactive-lift rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-300 to-[#fef3c7] px-10 py-3 text-[16px] font-semibold text-zinc-950 shadow-[0_0_36px_-8px_rgba(212,175,55,0.45)] hover:brightness-110",
                            children: [
                                "Explore More Calculators ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: ">"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                                    lineNumber: 205,
                                    columnNumber: 38
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(FinancialCalculatorsSection, "QrvfWyvLcE+G7HhncVkFpiFncqg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = FinancialCalculatorsSection;
var _c, _c1;
__turbopack_refresh__.register(_c, "CalculatorIcon");
__turbopack_refresh__.register(_c1, "FinancialCalculatorsSection");

})()),
"[project]/frontend/content/site-data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
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
"[project]/frontend/components/marketing/PartnerHqVisual.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "PartnerHqVisual": ()=>PartnerHqVisual
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/content/site-data.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function PartnerHqVisual() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-full min-h-[320px] w-full flex-col items-center justify-center overflow-hidden px-6 py-12 md:min-h-[520px] md:px-10 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-90",
                style: {
                    background: "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(250, 204, 21, 0.09) 0%, transparent 55%), radial-gradient(ellipse 55% 45% at 50% 100%, rgba(56, 189, 248, 0.06) 0%, transparent 50%)"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute left-1/2 top-[40%] h-[min(72vw,320px)] w-[min(72vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full",
                style: {
                    background: "radial-gradient(circle, rgba(250, 204, 21, 0.11) 0%, transparent 62%)"
                },
                animate: {
                    opacity: [
                        0.55,
                        0.9,
                        0.55
                    ],
                    scale: [
                        0.94,
                        1.03,
                        0.94
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "pointer-events-none absolute inset-0 h-full w-full text-[#D4AF37]/10",
                "aria-hidden": true,
                viewBox: "0 0 400 520",
                preserveAspectRatio: "xMidYMid slice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M200 48 Q 200 140 200 200",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.35
                        },
                        transition: {
                            duration: 1.4,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M200 200 L 120 320 M200 200 L 280 320",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "0.35",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.22
                        },
                        transition: {
                            duration: 1.2,
                            delay: 0.35,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[1] flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative mb-7 flex h-[76px] w-[76px] items-center justify-center md:mb-8 md:h-[88px] md:w-[88px]",
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.75,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            [
                                0,
                                1,
                                2
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "pointer-events-none absolute inset-[-4px] rounded-full border border-[#D4AF37]/[0.18]",
                                    animate: {
                                        scale: [
                                            1,
                                            1.55 + i * 0.06
                                        ],
                                        opacity: [
                                            0.35,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 3.4,
                                        repeat: Infinity,
                                        delay: i * 0.85,
                                        ease: "easeOut"
                                    }
                                }, i, false, {
                                    fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-full w-full items-center justify-center rounded-full border border-[#0A1128]/15 bg-[#FAF6EE]/95 shadow-[0_0_48px_rgba(212,175,55,0.12),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative block h-11 w-11 md:h-12 md:w-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/klfpro-mark.png",
                                        alt: "",
                                        fill: true,
                                        className: "object-contain",
                                        sizes: "48px"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0A1128]/55 md:text-[11px]",
                        children: "Head office"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-2.5 font-semibold tracking-tight text-[#0A1128] text-[2rem] md:text-[2.35rem]",
                        children: "Gurgaon"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-[#1E293B]",
                        children: "Haryana · India"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mx-auto mt-9 max-w-[300px] border-t border-[#0A1128]/15 pt-7",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.45,
                            duration: 0.7
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-[12px] leading-relaxed text-[#1E293B] md:text-[13px]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].address
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-center text-[11px] tabular-nums text-[#1E293B]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phonePrimary
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-center text-[11px] text-[#1E293B]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].hours
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-10 left-10 hidden h-px w-20 bg-gradient-to-r from-[#D4AF37]/25 to-transparent md:block"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-10 right-10 hidden h-px w-20 bg-gradient-to-l from-sky-400/20 to-transparent md:block"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/PartnerHqVisual.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = PartnerHqVisual;
var _c;
__turbopack_refresh__.register(_c, "PartnerHqVisual");

})()),
"[project]/frontend/components/marketing/TrustedPartnersSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TrustedPartnersSection": ()=>TrustedPartnersSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$PartnerHqVisual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/PartnerHqVisual.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function formatPartnerCount(n) {
    if (n >= 100000) return "100K+";
    if (n >= 1000) return `${Math.floor(n / 1000)}K`;
    return String(Math.max(0, Math.floor(n)));
}
function TrustedPartnersSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headRef, {
        once: true,
        margin: "-12%"
    });
    const [displayN, setDisplayN] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [tilt, setTilt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        rx: 0,
        ry: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView) return;
        const start = performance.now();
        const dur = 2600;
        let raf = 0;
        const tick = (now)=>{
            const p = Math.min(1, (now - start) / dur);
            const e = 1 - Math.pow(1 - p, 4);
            setDisplayN(Math.floor(100000 * e));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, [
        inView
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = sectionRef.current;
        if (!el) return;
        const onScroll = ()=>{
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight || 1;
            const center = r.top + r.height / 2;
            const n = (center - vh / 2) / (vh * 0.85);
            setTilt({
                rx: Math.max(-4, Math.min(4, (n - 0.2) * 5.5)),
                ry: Math.max(-3.2, Math.min(3.2, (r.left + r.width / 2 - window.innerWidth / 2) / window.innerWidth) * -2.6)
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden border-y border-[#0A1128]/15 bg-[#FAF6EE] py-14 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(212,175,55,0.15),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_50%,rgba(153,27,51,0.08),transparent_50%),radial-gradient(ellipse_60%_45%_at_0%_80%,rgba(153,27,51,0.06),transparent_45%),linear-gradient(165deg,#FAF6EE_0%,#FFFFFF_42%,#FAF6EE_100%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:48px_48px]",
                style: {
                    maskImage: "radial-gradient(ellipse at center, black 22%, transparent 72%)"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[1] mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] md:items-center md:gap-12 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "order-2 flex flex-col md:order-1",
                        initial: {
                            opacity: 0,
                            y: 22
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.75,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative h-10 w-10 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/klfpro-mark.png",
                                            alt: "",
                                            fill: true,
                                            className: "object-contain",
                                            sizes: "40px"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium uppercase tracking-[0.22em] text-[#0A1128]/75",
                                        children: "One HQ · Pan-India partners"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                ref: headRef,
                                className: "mt-6 text-balance text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-[#0A1128] md:text-[2.75rem] lg:text-[3.1rem]",
                                children: [
                                    "Trusted by",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(212,175,55,0.35)]",
                                            "aria-live": "polite",
                                            children: formatPartnerCount(displayN)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Partners"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 max-w-[520px] text-[15px] leading-relaxed text-[#1E293B] md:text-[16px]",
                                children: "One Gurgaon headquarters powers the network—authorized partners still get real-time offers, earnings, and case updates with privileged access, coast to coast."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl md:mt-10 md:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[#0A1128] md:text-xl",
                                        children: "Scan or click to download the app"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-[#1E293B]",
                                        children: "Manage cases on the go with partner-only tools."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-wrap items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2.5 sm:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "interactive-lift rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/60 px-4 py-2.5 text-left text-[11px] font-medium text-[#0A1128] shadow-lg backdrop-blur-sm transition hover:border-[#D4AF37]/30 hover:shadow-[#D4AF37]/10",
                                                        children: [
                                                            "GET IT ON",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                                lineNumber: 117,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[15px] font-semibold",
                                                                children: "Google Play"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                                lineNumber: 118,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "interactive-lift rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/60 px-4 py-2.5 text-left text-[11px] font-medium text-[#0A1128] shadow-lg backdrop-blur-sm transition hover:border-[#D4AF37]/30 hover:shadow-[#D4AF37]/10",
                                                        children: [
                                                            "Download on the",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[15px] font-semibold",
                                                                children: "App Store"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                                lineNumber: 126,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px w-8 bg-[#0A1128]/5 sm:h-8 sm:w-px"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-2.5 backdrop-blur-md",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-8 gap-[2px]",
                                                    children: Array.from({
                                                        length: 64
                                                    }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `h-[5px] w-[5px] rounded-[1px] ${idx % 3 === 0 ? "bg-[#D4AF37]/90" : "bg-[#0A1128]/5"}`
                                                        }, idx, false, {
                                                            fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-10 hidden h-[220px] md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                -8,
                                                0
                                            ],
                                            rotate: [
                                                -12,
                                                -10,
                                                -12
                                            ]
                                        },
                                        transition: {
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        className: "absolute left-0 top-4 h-[200px] w-[96px] rounded-[22px] border-[3px] border-[#0A1128]/15 bg-gradient-to-b from-sky-600/40 to-slate-950 shadow-2xl backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-2 h-1 w-9 rounded-full bg-[#0A1128]/50"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 146,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-3 h-24 w-[72px] rounded-lg bg-[#0A1128]/5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            y: [
                                                0,
                                                -10,
                                                0
                                            ],
                                            rotate: [
                                                10,
                                                12,
                                                10
                                            ]
                                        },
                                        transition: {
                                            duration: 4.4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 0.2
                                        },
                                        className: "absolute left-[118px] top-0 h-[210px] w-[100px] rounded-[22px] border-[3px] border-[#0A1128]/15 bg-gradient-to-b from-amber-500/25 to-slate-950 shadow-2xl backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-2 h-1 w-9 rounded-full bg-[#0A1128]/50"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-4 grid w-[76px] grid-cols-3 gap-1.5",
                                                children: Array.from({
                                                    length: 9
                                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "h-3.5 rounded-md bg-[#0A1128]/5"
                                                    }, i, false, {
                                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "order-1 min-h-[min(72vw,380px)] md:order-2 md:min-h-[520px]",
                        style: {
                            perspective: 1200,
                            transformStyle: "preserve-3d"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[min(72vw,380px)] overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE] shadow-[0_0_80px_-28px_rgba(153,27,51,0.18),0_0_60px_-40px_rgba(212,175,55,0.1)] backdrop-blur-sm md:h-[520px]",
                            style: {
                                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                                transition: "transform 220ms cubic-bezier(0.4, 0, 0.2, 1)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$PartnerHqVisual$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PartnerHqVisual"], {}, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_100px_rgba(3,7,18,0.5)]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/TrustedPartnersSection.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(TrustedPartnersSection, "PHFHANUosZswWvRnqu3GJEPK8wE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = TrustedPartnersSection;
var _c;
__turbopack_refresh__.register(_c, "TrustedPartnersSection");

})()),
"[project]/assets/BANK-LOGOS/Axis.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/Axis.582de469.png");
})()),
"[project]/assets/BANK-LOGOS/Axis.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/Axis.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/Axis.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 272,
    height: 185,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAa0lEQVR42lWJ3QpAMACF9+gew6U75dK9vIAoLvwvZU1smbFQGCs/5XTqnK8PnG82sayUfwjukYcsTQdartyPnxCI+JoR6zbx0kesbJrbnkM8QjzkSFVgslAOWFbTqCRhMVZN6yXqd0HGCnQBi29uesu3sBgAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 5
};

})()),
"[project]/assets/BANK-LOGOS/bajaj.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/bajaj.d3656a52.png");
})()),
"[project]/assets/BANK-LOGOS/bajaj.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/bajaj.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/bajaj.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAfklEQVR42pWOvQqDQBCE99HT5A2SKinSBkmaBNImYBDBH7BUQVE4sVCrU2/vVl3sLRyGaYb5GJg3BJuF0tRIHDVJZZQhNhrSNIEViOMneYTV6Zs9w8ryBaebdXD3xOEdv6L65pQXuzj/8uu/sNMWeNtK5C3TejQMHHBF7X61AC/us7ZbD8fuAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/assets/BANK-LOGOS/BOM.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/BOM.b4b074cf.png");
})()),
"[project]/assets/BANK-LOGOS/BOM.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/BOM.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/BOM.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 920,
    height: 495,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAX0lEQVR42kWMQQqAIBBFvf8t2gRBZ2hVraSodgVWgqJjpqMXaKCgxV/89+CxnHNKSUDgpxukOyDQJchoV0QuXTXretGkfcRPQMBmM8Woykl1wv4CKWXvfodW2NX4N/UA2ulWKSh0IOMAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 4
};

})()),
"[project]/assets/BANK-LOGOS/HDFC.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/HDFC.bd925260.png");
})()),
"[project]/assets/BANK-LOGOS/HDFC.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/HDFC.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/HDFC.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAeklEQVR42pXOzQpEUBjG8fdeZz9NzWyn+bgEYocIJbKyYYGyE5buQCFfC3KOUyglKwu/nt2z+cNyAk6PuR+mqsmLLsuP1e0AjRuElPj5aY+vcXvJ97f+/Ju04EMZJalpiZLNCjbDO5zqcYprOTEQQhBC4wbtMMZwuWoFGxKsTz03or8AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/assets/BANK-LOGOS/ICICI.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/ICICI.0f644f23.png");
})()),
"[project]/assets/BANK-LOGOS/ICICI.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/ICICI.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/ICICI.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAZklEQVR42pWOQQtAMBzF9/0/jXLBgRslirIyOcjBQaRtbLH9x9xRXr/Dq1+9Hjpfgr6EAXgQrMa9H0yUz3xbVkGFlIfalUasiEiauDl2sirErVeSuOnIMNopY6MBLAB3AWMs6PerC2HGuPxp3/VeAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/assets/BANK-LOGOS/IDBI.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/IDBI.861def21.png");
})()),
"[project]/assets/BANK-LOGOS/IDBI.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/IDBI.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/IDBI.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 264,
    height: 148,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAWUlEQVR42l3MsQmAMBBA0VvXARQtFRexCwGJsbCwisKJjQNkkujdBYzYiPC6Dx8uYY4xMH2dQmD30R9Ti6bZhnLR2dy9wGLvUadQo6lWXTiV5E4BPSsJ8l/dW11OXIL1uxwAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 4
};

})()),
"[project]/assets/BANK-LOGOS/kotak.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/kotak.964b09c6.png");
})()),
"[project]/assets/BANK-LOGOS/kotak.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/kotak.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/kotak.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAaUlEQVR42pXOywpAQBiG4bl9S+5ADomwsZO1HEpcgEPsWAzKzPRrhrKRmoWvb/dsXiQkQ1IgDNpxxtvxBSeuFMXSjGRNC6gbyArIy7MbHrBVPcZhRF2fegHRzZsRZdBPC96J4Px99LvqAs2BsssCXuZeAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/assets/BANK-LOGOS/PNB.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/PNB.4f5b2e52.png");
})()),
"[project]/assets/BANK-LOGOS/PNB.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/PNB.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/PNB.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAkElEQVR42pWOOQqDQBhG/2OkmAQCqUKKHCcHsc0ChiykCqQ3gbQJLkewUBQbZZBBRhnERhAEtXKdC1j48boPHg/6kcHokble+PszTa6I3MZSw9519OlyG/BTJMdFcF7Sx4ZeUSDOOaUpgHW467u1v1/5py29oOQ1C2+oMARIHUy+KlOVAisNk7iN0+UWTK4aAOXboPYNoqtkAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/assets/BANK-LOGOS/SBI.png [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/SBI.0ab42018.png");
})()),
"[project]/assets/BANK-LOGOS/SBI.png.mjs { IMAGE => \"[project]/assets/BANK-LOGOS/SBI.png [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/assets/BANK-LOGOS/SBI.png [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 600,
    height: 600,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAv0lEQVR42iWOOwrCUBBFxw2ojeIiRNcigmCpC7DQQhDXIPbaC/5BMIVYSFRI4bfSIk1IiORDQkjik5gXxzwYmHPv3BkGoihyAzqWvJpg1gVzInko0QQvoJ2bnZzKMJKwELp32/tSWMp+KnYTcSGkZ/JK8aFxsli2vNdLvM64ebagdbFYsHo0KgeDrbavNmzUd2b+P1Xg1PxaRcgulO2LAAlp7+HkFkqRU3GG0H86n5ACfoZtp5Gh6A5El9cISjR/V5CIA06y7hcAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 8
};

})()),
"[project]/frontend/content/bank-partner-logos.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BANK_PARTNER_LOGOS": ()=>BANK_PARTNER_LOGOS
});
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/Axis.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/Axis.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/bajaj.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/bajaj.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/BOM.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/BOM.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/HDFC.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/HDFC.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/ICICI.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/ICICI.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/IDBI.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/IDBI.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/kotak.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/kotak.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/PNB.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/PNB.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/assets/BANK-LOGOS/SBI.png.mjs { IMAGE => "[project]/assets/BANK-LOGOS/SBI.png [app-client] (static)" } [app-client] (structured image object, ecmascript)');
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
const BANK_PARTNER_LOGOS = [
    {
        id: "axis",
        name: "Axis Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$Axis$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "bajaj",
        name: "Bajaj Finserv",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$bajaj$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "bom",
        name: "Bank of Maharashtra",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$BOM$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "hdfc",
        name: "HDFC Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$HDFC$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "icici",
        name: "ICICI Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$ICICI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "idbi",
        name: "IDBI Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$IDBI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "kotak",
        name: "Kotak Mahindra Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$kotak$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "pnb",
        name: "Punjab National Bank",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$PNB$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    },
    {
        id: "sbi",
        name: "State Bank of India",
        image: __TURBOPACK__imported__module__$5b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$assets$2f$BANK$2d$LOGOS$2f$SBI$2e$png__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
    }
];

})()),
"[project]/frontend/components/marketing/FaqSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FaqSection": ()=>FaqSection,
    "faqItems": ()=>faqItems
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/content/site-data.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const faqItems = [
    {
        id: "1",
        question: "What does KLFPRO Consulting actually do?",
        answer: "We are an independent financial advisory and distribution platform. You get structured comparisons across loans, cards, and related products, plus human guidance from inquiry through documentation—without pushing a single lender."
    },
    {
        id: "2",
        question: "How does the process work end-to-end?",
        answer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-3 text-[#1E293B]",
                    children: "A straightforward flow—built for clarity, not jargon:"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "list-decimal space-y-2 pl-5 text-[#1E293B]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "Tell us your goal and share basic profile details."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "We shortlist eligible options from our partner bank & NBFC network."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "You compare terms digitally with our team on call or chat."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: "We coordinate paperwork and status updates until sanction / disbursement."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-[#1E293B]",
                    children: "Partners using KLFPRO tools get the same transparency on offers, payouts, and case tracking."
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    },
    {
        id: "3",
        question: "Is my information handled securely?",
        answer: "Yes. We treat personal and financial data with strict access controls and encryption in line with industry practice. Information is used only to evaluate fit, prepare applications, and service your case—not for unrelated marketing resale."
    },
    {
        id: "4",
        question: "Do you store my internet banking username or password?",
        answer: "No. KLFPRO does not collect or store your bank login credentials. Any bank-linked verification happens through regulated channels offered by the lender or authorized aggregators—you stay in control of credentials."
    },
    {
        id: "5",
        question: "Who sees my data besides KLFPRO?",
        answer: "Details are shared only with institutions involved in your application—typically the lender or credit bureau for scoring—with your consent and purpose limitation. We do not sell personal data bundles to unrelated third parties."
    },
    {
        id: "6",
        question: "How wide is your lender network in India?",
        answer: "We work with a broad set of major public and private banks and NBFCs across retail and MSME products. Coverage is deep on mainstream names; not every small cooperative may be on the panel—your RM will confirm live eligibility."
    },
    {
        id: "7",
        question: "How long until I hear back after I apply?",
        answer: "Initial eligibility feedback is often same day or within one business day. Full sanction timelines depend on the lender, document quality, and product type—many retail cases move inside 24–72 hours once the file is complete."
    }
];
function Chevron({ open }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 bg-zinc-50 text-zinc-500 transition-colors duration-200 group-hover:border-zinc-300 group-hover:bg-white",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            className: `transition-transform duration-200 ${open ? "rotate-180" : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 5.25L7 8.75L10.5 5.25",
                stroke: "currentColor",
                strokeWidth: "1.35",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c = Chevron;
function SupportIllustration() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 200 200",
        className: "h-full w-full max-h-[200px] text-[#D4AF37]/90",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "faqGold",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "rgb(253 224 71)",
                            stopOpacity: "0.95"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "rgb(250 204 21)",
                            stopOpacity: "0.55"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "100",
                r: "78",
                fill: "none",
                stroke: "url(#faqGold)",
                strokeWidth: "0.5",
                className: "opacity-40"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M100 42v28M100 130v12M62 100h-12M150 100h-12",
                stroke: "currentColor",
                strokeWidth: "0.35",
                className: "opacity-25",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "58",
                y: "72",
                width: "84",
                height: "56",
                rx: "10",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.1",
                className: "opacity-80"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M76 96h48M76 108h32",
                stroke: "currentColor",
                strokeWidth: "0.9",
                strokeLinecap: "round",
                className: "opacity-50"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "138",
                r: "5",
                fill: "currentColor",
                className: "opacity-70"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_c1 = SupportIllustration;
function FaqSection() {
    _s();
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1");
    const headRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(headRef, {
        once: true,
        margin: "-10%"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "relative border-t border-zinc-200/80 bg-zinc-50 py-16 md:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.9),transparent),linear-gradient(180deg,rgba(250,250,250,0.6)_0%,transparent_35%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1180px] px-5 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: headRef,
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mx-auto max-w-[720px] text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500",
                                children: "Help center"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 text-balance text-[1.85rem] font-semibold tracking-tight text-zinc-900 md:text-[2.35rem]",
                                children: "Straight answers on loans, partners & your data"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-[15px] leading-relaxed text-[#1E293B] md:text-base",
                                children: "No fluff—just how KLFPRO works, what we protect, and what you can expect when you move forward with us."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-14 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                                initial: {
                                    opacity: 0,
                                    x: -12
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.55,
                                    delay: 0.08,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#081428] p-8 text-white shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] md:min-h-[440px] md:p-9",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-white/50",
                                                children: "KLFPRO"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]",
                                                children: "Still unsure?"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm leading-relaxed text-white/70",
                                                children: [
                                                    "Browse the topics on the right, or reach the desk directly—we respond during ",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].hours.toLowerCase(),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-10 flex items-center justify-center py-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12),transparent_65%)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SupportIllustration, {}, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10 border-t border-white/10 pt-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium uppercase tracking-[0.18em] text-white/50",
                                                children: "Direct line"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phonePrimary.replace(/\s/g, "")}`,
                                                className: "mt-1 block text-lg font-semibold text-white tabular-nums hover:text-[#B8972E]",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].phonePrimary
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].emailPrimary}`,
                                                className: "mt-2 block text-sm text-white/70 hover:text-[#B8972E]/90",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$site$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteConfig"].emailPrimary
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 153,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 16
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.55,
                                    delay: 0.12,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1
                                    ]
                                },
                                className: "flex flex-col gap-3",
                                children: faqItems.map((item)=>{
                                    const isOpen = openId === item.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-200 ${isOpen ? "border-zinc-300 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_18px_48px_-24px_rgba(0,0,0,0.12)]" : "border-zinc-200/90 bg-white/90 hover:border-zinc-300 hover:shadow-sm"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setOpenId(isOpen ? null : item.id),
                                                className: "group flex w-full items-start justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5",
                                                "aria-expanded": isOpen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pt-0.5 text-[15px] font-medium leading-snug text-zinc-900 md:text-[16px]",
                                                        children: item.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chevron, {
                                                        open: isOpen
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
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
                                                        duration: 0.28,
                                                        ease: [
                                                            0.4,
                                                            0,
                                                            0.2,
                                                            1
                                                        ]
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border-t border-zinc-100 px-5 pb-5 pt-1 text-[14px] leading-relaxed md:px-6 md:text-[15px]",
                                                        children: typeof item.answer === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#1E293B]",
                                                            children: item.answer
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 62
                                                        }, this) : item.answer
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this) : null
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/FaqSection.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(FaqSection, "zU5MPGO2a5WFe4wf1X4GCIrWyJE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c2 = FaqSection;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Chevron");
__turbopack_refresh__.register(_c1, "SupportIllustration");
__turbopack_refresh__.register(_c2, "FaqSection");

})()),
"[project]/frontend/components/marketing/BankingPartnersSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BankingPartnersSection": ()=>BankingPartnersSection
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$bank$2d$partner$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/content/bank-partner-logos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/KlfMotion.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
function AmbientBackdrop() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_0%_30%,rgba(212,175,55,0.15),transparent_52%),radial-gradient(ellipse_70%_50%_at_100%_70%,rgba(153,27,51,0.08),transparent_48%),linear-gradient(165deg,#FAF6EE_0%,#FFFFFF_45%,#FAF6EE_100%)]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute -left-8 top-0 h-full w-[min(52%,420px)] opacity-[0.4]",
                viewBox: "0 0 400 640",
                preserveAspectRatio: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 140 C90 100 130 220 50 280 S-10 360 70 420 S190 460 110 560 S40 620 140 640",
                        fill: "none",
                        stroke: "rgb(250 204 21)",
                        strokeWidth: "1"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 240 C110 200 150 300 70 360 S30 460 110 500 S210 540 130 620",
                        fill: "none",
                        stroke: "rgb(250 204 21)",
                        strokeWidth: "0.75",
                        opacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = AmbientBackdrop;
function BankingPartnersSection() {
    _s();
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(gridRef, {
        once: true,
        margin: "-8%"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "banking-partners",
        className: "relative overflow-hidden border-t border-[#0A1128]/15 py-16 md:py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AmbientBackdrop, {}, void 0, false, {
                fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[1] mx-auto max-w-[1180px] px-5 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 lg:grid-cols-[minmax(0,300px)_1fr] lg:gap-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$KlfMotion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KlfReveal"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1128]/55",
                                            children: "Lender network"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mt-3 text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-[#0A1128] md:text-[2.1rem] lg:text-[2.35rem]",
                                            children: [
                                                "Banks & ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#B8972E]",
                                                    children: "NBFCs"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 29
                                                }, this),
                                                " we work with"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-[400px] text-[14px] leading-relaxed text-[#1E293B] md:text-[15px]",
                                    children: "Representative partners from our active panel—each brand shown once. Your application can still be matched across a broader bank & NBFC network when you move to sanction and disbursement."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#banking-partners-grid",
                                    className: "interactive-lift mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-gradient-to-r from-[#D4AF37] to-[#B8972E] px-6 py-2.5 text-[14px] font-semibold text-zinc-950 shadow-[0_0_28px_-8px_rgba(212,175,55,0.45)] transition hover:border-amber-300/60",
                                    children: [
                                        "View panel",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": true,
                                            className: "text-base leading-none",
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "banking-partners-grid",
                            ref: gridRef,
                            className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$bank$2d$partner$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BANK_PARTNER_LOGOS"].map((bank, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 14
                                    },
                                    animate: gridInView ? {
                                        opacity: 1,
                                        y: 0
                                    } : {},
                                    transition: {
                                        duration: 0.45,
                                        delay: i * 0.06,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    whileHover: {
                                        y: -3,
                                        transition: {
                                            duration: 0.2
                                        }
                                    },
                                    className: "group flex min-h-[88px] flex-col items-center justify-center rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-[#D4AF37]/25 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.5)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex h-[52px] w-full max-w-[132px] items-center justify-center rounded-xl bg-[#0A1128]/5 px-3 shadow-inner",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-8 w-full md:h-9",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: bank.image,
                                                    alt: bank.name,
                                                    fill: true,
                                                    className: "object-contain",
                                                    sizes: "(max-width: 640px) 40vw, 132px"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2.5 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-[#1E293B] opacity-0 transition-opacity duration-200 group-hover:opacity-100",
                                            children: bank.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, bank.id, true, {
                                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/BankingPartnersSection.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(BankingPartnersSection, "m+vopBtZUu6AMLRrtCUrUt3Xz9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = BankingPartnersSection;
var _c, _c1;
__turbopack_refresh__.register(_c, "AmbientBackdrop");
__turbopack_refresh__.register(_c1, "BankingPartnersSection");

})()),
"[project]/frontend/components/marketing/MostSearchedLinksSection.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MostSearchedLinksSection": ()=>MostSearchedLinksSection
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
const navRows = [
    [
        "Personal Loan",
        "Home Loan",
        "Business Loan",
        "Loan Against Property",
        "Vehicle Loan"
    ],
    [
        "CIBIL Score",
        "Interest Rates",
        "Calculators",
        "Knowledge Hub",
        "Tools & Utilities"
    ]
];
const dropdownData = {
    "Personal Loan": [
        [
            "HDFC Personal Loan",
            "IndusInd Bank Personal Loan"
        ],
        [
            "Bank of Baroda Personal Loan",
            "Aditya Birla Personal Loan"
        ],
        [
            "SBI Personal Loan",
            "PNB Personal Loan"
        ],
        [
            "Axis Bank Personal Loan",
            "Canara Bank Personal Loan"
        ],
        [
            "ICICI Personal Loan",
            "L&T Finance Personal Loan"
        ]
    ],
    "Home Loan": [
        [
            "HDFC Ltd Home Loan",
            "Axis Bank Home Loan"
        ],
        [
            "SBI Home Loan",
            "PNB Home Loan"
        ],
        [
            "HDFC Bank Home Loan",
            "Canara Bank Home Loan"
        ],
        [
            "LIC Housing Finance Home Loan",
            "ICICI Bank Home Loan"
        ],
        [
            "Bank of Baroda Home Loan",
            "Kotak Bank Home Loan"
        ]
    ],
    "Business Loan": [
        [
            "HDFC Bank Business Loan",
            "Tata Capital Business Loan"
        ],
        [
            "SBI Business Loan",
            "Bank of Baroda Business Loan"
        ],
        [
            "Axis Bank Business Loan",
            "IndusInd Bank Business Loan"
        ],
        [
            "ICICI Bank Business Loan",
            "Punjab National Bank Business Loan"
        ],
        [
            "Kotak Bank Business Loan",
            "Bajaj Finserv Business Loan"
        ]
    ],
    "Loan Against Property": [
        [
            "HDFC Loan Against Property",
            "Canara Bank Loan Against Property"
        ],
        [
            "SBI Loan Against Property",
            "Muthoot Finance Loan Against Property"
        ],
        [
            "ICICI Bank Loan Against Property",
            "Kotak Mahindra Bank Loan Against Property"
        ],
        [
            "Axis Bank Loan Against Property",
            "Bank of Baroda Loan Against Property"
        ],
        [
            "PNB Loan Against Property",
            "IDFC Loan Against Property"
        ]
    ],
    "Vehicle Loan": [
        [
            "Car Loan",
            "Construction Equipment Loan"
        ],
        [
            "Used Car Loan"
        ],
        [
            "Two Wheeler Loan"
        ],
        [
            "Super Bike Loan"
        ],
        [
            "Commercial Vehicle Loan"
        ]
    ],
    "CIBIL Score": [
        [
            "Check Your CIBIL Score",
            "Check CIBIL Card"
        ],
        [
            "HDFC Bank CIBIL Score"
        ],
        [
            "PNB CIBIL Score",
            "Check CIBIL Score by Aadhar Card"
        ],
        [
            "Union Bank of India CIBIL Score",
            "How to Improve Your CIBIL Score"
        ],
        [
            "Axis Bank CIBIL Score"
        ]
    ],
    "Interest Rates": [
        [
            "SBI Personal Loan Interest Rate",
            "PNB Personal Loan Interest Rate",
            "HDFC Ltd Home Loan Interest Rates",
            "Axis Bank Home Loan Interest Rates"
        ],
        [
            "HDFC Bank Personal Loan Interest Rate",
            "Canara Bank Personal Loan Interest Rate",
            "ICICI Bank Home Loan Interest Rates",
            "Canara Bank Home Loan Interest Rates"
        ],
        [
            "ICICI Bank Personal Loan Interest Rates",
            "Bank of India Personal Loan Interest Rate",
            "LIC Housing Finance Home Loan Interest Rates",
            "HDFC Bank Home Loan Interest Rates"
        ],
        [
            "Axis Bank Personal Loan Interest Rate",
            "Piramal Finance Personal Loan",
            "Bank Of Baroda Home Loan Interest Rates"
        ],
        [
            "Bank of Baroda Personal Loan Interest Rate",
            "SBI Home Loan Interest Rates",
            "PNB Home Loan Interest Rates"
        ]
    ],
    Calculators: [
        [
            "SIP Calculator",
            "PPF Calculator"
        ],
        [
            "FD Calculator",
            "GST Calculator"
        ],
        [
            "Compound Interest Calculator",
            "Mutual Fund Calculator"
        ],
        [
            "Car Loan EMI Calculator",
            "Lumpsum Calculator"
        ],
        [
            "Income Tax Calculator"
        ]
    ],
    "Knowledge Hub": [
        [
            "Blog",
            "Indian Holidays"
        ],
        [
            "Banking Guides",
            "Insurance"
        ],
        [
            "Aadhaar Card"
        ],
        [
            "PAN Card"
        ],
        [
            "Income Tax"
        ]
    ],
    "Tools & Utilities": [
        [
            "Currency Converter"
        ],
        [
            "IFSC Code Finder"
        ],
        [
            "Today Gold Rate"
        ],
        [
            "Today Silver Rate"
        ],
        []
    ]
};
function Chevron({ open, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none",
        className: `shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className ?? ""}`,
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 4.5L6 7.5L9 4.5",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c = Chevron;
function ArrowLink() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        className: "shrink-0 opacity-40 transition-opacity duration-200 group-hover:opacity-100",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 11L11 3M11 3H5M11 3V9",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
            lineNumber: 102,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c1 = ArrowLink;
function MostSearchedLinksSection() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!active) return [];
        return (dropdownData[active] ?? []).map((col)=>col.filter(Boolean));
    }, [
        active
    ]);
    const toggleGroup = (label)=>{
        setActive((prev)=>prev === label ? null : label);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative border-t border-[#0A1128]/15 bg-[#FAF6EE] py-14 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(212,175,55,0.06),transparent_50%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(153,27,51,0.05),transparent_45%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[1] mx-auto max-w-[1180px] px-5 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-2xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0A1128]/50",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-2 text-2xl font-semibold tracking-tight text-[#0A1128] md:text-3xl",
                                children: "Most searched links"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-relaxed text-[#1E293B] md:text-[15px]",
                                children: "Jump into the topics visitors open the most—tap a category to see related links below."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 space-y-3 md:mt-12",
                        children: navRows.map((row, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5",
                                children: row.map((label)=>{
                                    const isActive = active === label;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleGroup(label),
                                        className: `group flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-[14px] font-medium transition-[border-color,background-color,box-shadow,color] duration-200 md:py-4 md:text-[15px] ${isActive ? "border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] text-amber-50 shadow-[0_0_0_1px_rgba(212,175,55,0.12)_inset]" : "border-[#0A1128]/15 bg-[#0A1128]/5 text-[#0A1128] hover:border-[#0A1128]/20 hover:bg-[#0A1128]/5 hover:text-[#0A1128]"}`,
                                        "aria-expanded": isActive,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 truncate",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex items-center gap-1 ${isActive ? "text-[#B8972E]" : "text-[#1E293B]"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chevron, {
                                                    open: isActive
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                lineNumber: 153,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, rowIdx, false, {
                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        initial: false,
                        children: active && activeColumns.some((c)=>c.length > 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: 6
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
                            className: "mt-8 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#FAF6EE]/95 p-5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.55)] backdrop-blur-xl md:p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-[#0A1128]/15 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-[0.18em] text-[#1E293B]",
                                            children: "Related to"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-semibold text-[#0A1128]",
                                            children: active
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6",
                                    children: activeColumns.map((column, colIdx)=>column.length === 0 ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2.5",
                                            children: column.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "group/link flex w-full items-start justify-between gap-2 rounded-lg py-1.5 text-left text-[13px] leading-snug text-[#1E293B] transition-colors hover:bg-[#0A1128]/5 hover:text-[#0A1128] md:text-[14px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "min-w-0",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLink, {}, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 27
                                                    }, this)
                                                }, item, false, {
                                                    fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 25
                                                }, this))
                                        }, `${active}-col-${colIdx}`, false, {
                                            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                            lineNumber: 180,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, active, true, {
                            fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/MostSearchedLinksSection.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(MostSearchedLinksSection, "RgTKMETnJaHqUotT+V/ztRz2m8o=");
_c2 = MostSearchedLinksSection;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Chevron");
__turbopack_refresh__.register(_c1, "ArrowLink");
__turbopack_refresh__.register(_c2, "MostSearchedLinksSection");

})()),
"[project]/frontend/components/marketing/ChatFab.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChatFab": ()=>ChatFab
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function ChatFab() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        type: "button",
        animate: {
            y: [
                0,
                -6,
                0
            ]
        },
        transition: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut"
        },
        whileHover: {
            scale: 1.08,
            rotateZ: -4
        },
        whileTap: {
            scale: 0.96
        },
        onClick: ()=>{
            if (window.CalculatorHub) {
                window.CalculatorHub.openHub();
            } else {
                console.error("CalculatorHub is not loaded yet.");
            }
        },
        className: "interactive-lift fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#fef3c7] via-[#D4AF37] to-amber-300 text-zinc-900 shadow-[0_0_40px_-4px_rgba(212,175,55,0.45)] ring-2 ring-[#facc15]/40 transition hover:shadow-[0_0_36px_6px_rgba(212,175,55,0.5)]",
        "aria-label": "Open Calculator",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "translate-y-px",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "2",
                    width: "16",
                    height: "20",
                    rx: "2",
                    ry: "2"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "6",
                    x2: "16",
                    y2: "6"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "14",
                    x2: "16",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "14",
                    x2: "12",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "14",
                    x2: "8",
                    y2: "14.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "10",
                    x2: "16",
                    y2: "10.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "10",
                    x2: "12",
                    y2: "10.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "10",
                    x2: "8",
                    y2: "10.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "16",
                    y1: "18",
                    x2: "16",
                    y2: "18.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "12",
                    y1: "18",
                    x2: "12",
                    y2: "18.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "8",
                    y1: "18",
                    x2: "8",
                    y2: "18.01"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/ChatFab.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ChatFab;
var _c;
__turbopack_refresh__.register(_c, "ChatFab");

})()),
"[project]/frontend/components/marketing/ConversionLandingPage.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ConversionLandingPage": ()=>ConversionLandingPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$HeroSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/HeroSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MidPageOfferSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/MidPageOfferSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$LightProductsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/LightProductsBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ScrollJourneySections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/ScrollJourneySections.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$FinancialCalculatorsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/FinancialCalculatorsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$TrustedPartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/TrustedPartnersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$bank$2d$partner$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/content/bank-partner-logos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/FaqSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$BankingPartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/BankingPartnersSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MostSearchedLinksSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/MostSearchedLinksSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MarketingFooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/MarketingFooterSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ChatFab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/ChatFab.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const productCards = [
    {
        title: "Home Loan",
        description: "Instant approval at competitive rates starting at 8.5% p.a.",
        badge: "8.5% p.a.",
        image: "/assets/products/home-loan.png"
    },
    {
        title: "Personal Loan",
        description: "Paperless journey, fast credit up to INR 50 Lakhs.",
        badge: "10.25% p.a.",
        image: "/assets/products/personal-loan.png"
    },
    {
        title: "Car Loan",
        description: "Drive your dream car with low EMI options.",
        badge: "9.0% p.a.",
        image: "/assets/products/car-loan.png"
    },
    {
        title: "Business Loan",
        description: "Grow your business with collateral-free funding.",
        badge: "11.0% p.a.",
        image: "/assets/products/business-loan.png"
    },
    {
        title: "Credit Card",
        description: "Compare top issuer offers with rewards and cashback.",
        badge: "Top offers",
        image: "/assets/products/credit-card.png"
    },
    {
        title: "Education Loan",
        description: "Fund your dreams with flexible repayment support.",
        badge: "Custom plans",
        image: "/assets/products/education-loan.png"
    }
];
const productCardInitialStates = [
    {
        opacity: 0,
        x: -78,
        y: 80,
        rotateX: 15,
        rotateZ: 0,
        scale: 0.9
    },
    {
        opacity: 0,
        x: 0,
        y: 90,
        rotateX: 15,
        rotateZ: 0,
        scale: 0.9
    },
    {
        opacity: 0,
        x: 78,
        y: 80,
        rotateX: 15,
        rotateZ: 0,
        scale: 0.9
    },
    {
        opacity: 0,
        x: -68,
        y: 78,
        rotateX: 16,
        rotateZ: -5,
        scale: 0.9
    },
    {
        opacity: 0,
        x: 0,
        y: 56,
        rotateX: 15,
        rotateZ: 0,
        scale: 0.78
    },
    {
        opacity: 0,
        x: 0,
        y: 92,
        rotateX: 17,
        rotateZ: 3,
        scale: 0.9
    }
];
const featurePoints = [
    "Instant Approval (5 min)",
    "Lowest Interest Rates",
    "Zero Hidden Charges",
    "Paperless Process",
    "Dedicated Relationship Manager",
    "24x7 Support"
];
const testimonials = [
    [
        "I applied at night and got a clear update the next morning. The team explained every step without any confusion.",
        "Rahul Mehta",
        "Gurgaon",
        "Personal Loan"
    ],
    [
        "I compared lenders in one place and my advisor suggested the best option for my salary profile. Very practical support.",
        "Neha Sharma",
        "Delhi",
        "Home Loan"
    ],
    [
        "From document upload to final disbursal, everything felt organized and fast. I did not have to chase anyone.",
        "Amit Verma",
        "Noida",
        "Business Loan"
    ]
];
const journeySteps = [
    "Check Eligibility",
    "Submit Documents",
    "Get Approval",
    "Instant Disbursal"
];
const journeyStepDescriptions = [
    "Share your requirement and basic profile details.",
    "Upload documents digitally with quick verification.",
    "Compare matched lender offers with clear terms.",
    "Get sanctioned amount and smooth disbursal support."
];
const flowNodePositions = [
    100,
    430,
    760,
    1100
];
const boardStats = [
    {
        title: "Approvals today",
        value: "324"
    },
    {
        title: "Avg disbursal",
        value: "18h"
    },
    {
        title: "Support CSAT",
        value: "4.8/5"
    },
    {
        title: "Repeat users",
        value: "62%"
    }
];
const reveal = {
    hidden: {
        opacity: 0,
        y: 26
    },
    visible: {
        opacity: 1,
        y: 0
    }
};
const sectionClass = "relative py-20 md:py-24";
function ConversionLandingPage() {
    _s();
    const [expandedFeature, setExpandedFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeTestimonial, setActiveTestimonial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pauseTestimonials, setPauseTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cursorGlow, setCursorGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [activeFlowStep, setActiveFlowStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredFlowStep, setHoveredFlowStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2500000);
    const [tenureYears, setTenureYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [interestRate, setInterestRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10.5);
    const flowSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flowInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(flowSectionRef, {
        amount: 0.35,
        once: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pauseTestimonials) return;
        const timer = setInterval(()=>{
            setActiveTestimonial((prev)=>(prev + 1) % testimonials.length);
        }, 4200);
        return ()=>clearInterval(timer);
    }, [
        pauseTestimonials
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!flowInView) {
            setActiveFlowStep(0);
            return;
        }
        setActiveFlowStep(0);
        let current = 0;
        const timer = setInterval(()=>{
            current += 1;
            setActiveFlowStep(current);
            if (current >= journeySteps.length - 1) clearInterval(timer);
        }, 780);
        return ()=>clearInterval(timer);
    }, [
        flowInView
    ]);
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    const emiValue = monthlyRate === 0 ? loanAmount / totalMonths : loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emiValue * totalMonths;
    const totalInterest = totalPayment - loanAmount;
    const loanProgress = (loanAmount - 10000) / (10000000 - 10000) * 100;
    const tenureProgress = (tenureYears - 1) / (30 - 1) * 100;
    const interestProgress = (interestRate - 5) / (24 - 5) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen text-[#0A1128]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-30 bg-[#FAF6EE]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/marketing/consulting-bg.png",
                    alt: "KLFPRO Consulting Background",
                    fill: true,
                    className: "object-cover opacity-80 mix-blend-multiply",
                    quality: 90,
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_8%,rgba(212,175,55,0.16),transparent_42%),radial-gradient(circle_at_80%_34%,rgba(212,175,55,0.09),transparent_45%)]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none fixed -left-20 top-10 -z-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl",
                animate: {
                    x: [
                        0,
                        26,
                        0
                    ],
                    y: [
                        0,
                        18,
                        0
                    ],
                    opacity: [
                        0.38,
                        0.62,
                        0.38
                    ]
                },
                transition: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none fixed right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl",
                animate: {
                    x: [
                        0,
                        -24,
                        0
                    ],
                    y: [
                        0,
                        20,
                        0
                    ],
                    opacity: [
                        0.22,
                        0.5,
                        0.22
                    ]
                },
                transition: {
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-0 -z-10 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 220 220%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 /%3E%3C/filter%3E%3Crect width=%22220%22 height=%22220%22 filter=%22url(%23n)%22 opacity=%220.035%22 /%3E%3C/svg%3E')]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$HeroSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSlider"], {}, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "products",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true,
                    amount: 0.18
                },
                transition: {
                    duration: 0.55,
                    ease: "easeOut"
                },
                className: sectionClass + " bg-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1240px] px-4 md:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight md:text-4xl",
                            children: "Our Financial Products"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-2xl text-[#1E293B]",
                            children: "Exact products data with modern UI layout and long-page flow."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                            style: {
                                perspective: "1000px"
                            },
                            children: productCards.map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                    initial: productCardInitialStates[idx],
                                    whileInView: {
                                        opacity: 1,
                                        x: 0,
                                        y: 0,
                                        rotateX: 0,
                                        rotateZ: 0,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true,
                                        margin: "-50px",
                                        amount: 0.32
                                    },
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: idx * 0.15
                                    },
                                    style: {
                                        transformStyle: "preserve-3d"
                                    },
                                    className: "group relative min-h-[300px] overflow-hidden rounded-2xl border border-[#0A1128]/20 bg-[#FAF6EE] p-5 backdrop-blur-lg transition-all duration-300 hover:border-[#D4AF37]/45 hover:shadow-[0_0_40px_rgba(212,175,55,0.24)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "pointer-events-none absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105",
                                            style: {
                                                backgroundImage: `url('${card.image}')`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            className: "pointer-events-none absolute inset-0",
                                            style: {
                                                backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.88) 100%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(212,175,55,0.24),transparent_46%),linear-gradient(140deg,rgba(255,255,255,0.08),transparent_48%)] opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-x-6 bottom-6 top-auto h-16 rounded-full bg-[#D4AF37]/18 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex h-full flex-col justify-end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-[#0A1128]/20 bg-[#FDFBF7]/25 p-4 backdrop-blur-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-semibold text-[#0A1128]",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-[#0A1128]",
                                                        children: card.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                                        href: `/eligibility?product=${(card.title || "personal-loan").toLowerCase().replace(/ /g, "-")}`,
                                                        whileTap: {
                                                            scale: 0.97
                                                        },
                                                        className: "inline-block mt-5 text-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-5 py-2 text-sm font-semibold text-zinc-900 shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(212,175,55,0.5)]",
                                                        children: "Apply now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 228,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 mt-4 inline-flex rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold text-[#B8972E]",
                                            children: card.badge
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, card.title, true, {
                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "how",
                initial: {
                    opacity: 0
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true,
                    amount: 0.16
                },
                className: sectionClass + " relative overflow-hidden bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_35%,rgba(212,175,55,0.14),transparent_42%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.1),transparent_36%)]",
                        animate: {
                            opacity: [
                                0.4,
                                0.8,
                                0.4
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: flowSectionRef,
                        className: "relative mx-auto max-w-[1240px] px-4 md:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight md:text-4xl",
                                children: "Get Your Loan in 4 Simple Steps"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-2xl text-[#0F1C3F]",
                                children: "A guided flow from eligibility check to final disbursal, designed for speed and clarity."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-10 min-h-[540px] md:min-h-[620px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pointer-events-none absolute inset-0 z-0 hidden md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 1200 620",
                                            className: "h-full w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                            id: "flow-path",
                                                            x1: "0%",
                                                            y1: "0%",
                                                            x2: "100%",
                                                            y2: "0%",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "0%",
                                                                    stopColor: "#f59e0b",
                                                                    stopOpacity: "0.95"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "55%",
                                                                    stopColor: "#facc15",
                                                                    stopOpacity: "0.98"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                    offset: "100%",
                                                                    stopColor: "#f8fafc",
                                                                    stopOpacity: "0.9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                            id: "flow-glow",
                                                            x: "-20%",
                                                            y: "-50%",
                                                            width: "140%",
                                                            height: "200%",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                                    stdDeviation: "4",
                                                                    result: "blur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                    lineNumber: 278,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "blur"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 21
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                            in: "SourceGraphic"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 21
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M500 120 Q620 170 700 250 T500 390 T700 520",
                                                    fill: "none",
                                                    stroke: "url(#flow-path)",
                                                    strokeWidth: "4",
                                                    strokeLinecap: "round",
                                                    initial: {
                                                        pathLength: 0,
                                                        opacity: 0.2
                                                    },
                                                    animate: flowInView ? {
                                                        pathLength: (activeFlowStep + 1) / journeySteps.length,
                                                        opacity: 1
                                                    } : {
                                                        pathLength: 0,
                                                        opacity: 0.2
                                                    },
                                                    transition: {
                                                        duration: 0.75,
                                                        ease: "easeInOut"
                                                    },
                                                    style: {
                                                        filter: "url(#flow-glow)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                                    d: "M500 120 Q620 170 700 250 T500 390 T700 520",
                                                    fill: "none",
                                                    stroke: "url(#flow-path)",
                                                    strokeWidth: "2",
                                                    strokeDasharray: "8 14",
                                                    strokeLinecap: "round",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: flowInView ? {
                                                        opacity: [
                                                            0.35,
                                                            0.95,
                                                            0.35
                                                        ],
                                                        strokeDashoffset: [
                                                            0,
                                                            -140
                                                        ]
                                                    } : {
                                                        opacity: 0.1
                                                    },
                                                    transition: {
                                                        duration: 4.2,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 15
                                                }, this),
                                                [
                                                    {
                                                        x: 500,
                                                        y: 120
                                                    },
                                                    {
                                                        x: 700,
                                                        y: 250
                                                    },
                                                    {
                                                        x: 500,
                                                        y: 390
                                                    },
                                                    {
                                                        x: 700,
                                                        y: 520
                                                    }
                                                ].map(({ x, y }, idx)=>{
                                                    const nodeActive = idx <= activeFlowStep || hoveredFlowStep === idx;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                        cx: x,
                                                        cy: y,
                                                        r: nodeActive ? 7 : 4,
                                                        fill: nodeActive ? "#facc15" : "#fde68a",
                                                        animate: nodeActive ? {
                                                            opacity: [
                                                                0.65,
                                                                1,
                                                                0.65
                                                            ],
                                                            filter: [
                                                                "drop-shadow(0 0 0 rgba(245,158,11,0.2))",
                                                                "drop-shadow(0 0 10px rgba(245,158,11,0.75))",
                                                                "drop-shadow(0 0 0 rgba(245,158,11,0.2))"
                                                            ]
                                                        } : {
                                                            opacity: 0.75
                                                        },
                                                        transition: {
                                                            duration: 1.2,
                                                            repeat: nodeActive ? Infinity : 0
                                                        }
                                                    }, `flow-node-${x}`, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this);
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                    r: "4",
                                                    fill: "#fde68a",
                                                    className: "drop-shadow-[0_0_8px_rgba(212,175,55,0.85)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                        dur: "5.8s",
                                                        repeatCount: "indefinite",
                                                        path: "M500 120 Q620 170 700 250 T500 390 T700 520"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                    r: "3.3",
                                                    fill: "#60a5fa",
                                                    className: "drop-shadow-[0_0_8px_rgba(96,165,250,0.85)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                        begin: "1s",
                                                        dur: "5.8s",
                                                        repeatCount: "indefinite",
                                                        path: "M500 120 Q620 170 700 250 T500 390 T700 520"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                    r: "3.5",
                                                    fill: "#facc15",
                                                    className: "drop-shadow-[0_0_8px_rgba(212,175,55,0.9)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                        begin: "2.1s",
                                                        dur: "5.8s",
                                                        repeatCount: "indefinite",
                                                        path: "M500 120 Q620 170 700 250 T500 390 T700 520"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 269,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        "aria-hidden": true,
                                        className: "pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-y-1/2 text-[150px] font-black tracking-[0.12em] text-[#0A1128]/[0.05] blur-[1px] md:block",
                                        animate: {
                                            x: [
                                                "-52%",
                                                "-48%",
                                                "-52%"
                                            ]
                                        },
                                        transition: {
                                            duration: 10,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        children: "KLFPRO"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col gap-5",
                                        style: {
                                            perspective: "1000px"
                                        },
                                        children: journeySteps.map((step, i)=>{
                                            const isActive = i <= activeFlowStep;
                                            const isHovered = hoveredFlowStep === i;
                                            const alignRight = i % 2 === 1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 32,
                                                    scale: 0.95,
                                                    rotateX: 8
                                                },
                                                viewport: {
                                                    once: true,
                                                    margin: "-50px"
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    rotateX: 0
                                                },
                                                viewport: {
                                                    once: true,
                                                    amount: 0.2
                                                },
                                                transition: {
                                                    duration: 0.65,
                                                    ease: "easeOut",
                                                    delay: i * 0.14
                                                },
                                                whileHover: {
                                                    scale: 1.05,
                                                    rotateX: 0,
                                                    borderColor: "rgba(212,175,55,0.55)",
                                                    boxShadow: "0 0 36px rgba(212,175,55,0.22)"
                                                },
                                                onMouseEnter: ()=>setHoveredFlowStep(i),
                                                onMouseLeave: ()=>setHoveredFlowStep(null),
                                                style: {
                                                    transformStyle: "preserve-3d",
                                                    willChange: "transform, box-shadow"
                                                },
                                                className: `group relative w-full max-w-[560px] rounded-2xl border bg-[#0A1128]/5 p-5 backdrop-blur-xl transition-all duration-300 ${isActive ? "border-[#D4AF37]/55" : "border-[#0A1128]/15"} ${alignRight ? "md:ml-auto md:mt-8" : "md:mr-auto"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        "aria-hidden": true,
                                                        className: "pointer-events-none absolute inset-0 rounded-2xl",
                                                        animate: isHovered ? {
                                                            boxShadow: "0 0 45px rgba(212,175,55,0.28)"
                                                        } : {
                                                            boxShadow: "0 0 0 rgba(212,175,55,0)"
                                                        },
                                                        transition: {
                                                            duration: 0.28,
                                                            ease: "easeOut"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: `mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${isActive ? "bg-[#D4AF37]/25 text-[#B8972E]" : "bg-[#0A1128]/5 text-[#0F1C3F]"}`,
                                                        animate: isActive ? {
                                                            scale: [
                                                                0.9,
                                                                1.05,
                                                                1
                                                            ],
                                                            boxShadow: [
                                                                "0 0 0 rgba(212,175,55,0.0)",
                                                                "0 0 22px rgba(212,175,55,0.48)",
                                                                "0 0 0 rgba(212,175,55,0.0)"
                                                            ]
                                                        } : {
                                                            scale: 1
                                                        },
                                                        transition: {
                                                            duration: 0.9,
                                                            ease: "easeOut"
                                                        },
                                                        whileHover: {
                                                            rotate: 10
                                                        },
                                                        children: [
                                                            "0",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8
                                                        },
                                                        viewport: {
                                                            once: true,
                                                            margin: "-50px"
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: i * 0.12 + 0.12,
                                                            duration: 0.35
                                                        },
                                                        className: "text-xl font-semibold",
                                                        children: step
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8
                                                        },
                                                        viewport: {
                                                            once: true,
                                                            margin: "-50px"
                                                        },
                                                        whileInView: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        viewport: {
                                                            once: true
                                                        },
                                                        transition: {
                                                            delay: i * 0.12 + 0.24,
                                                            duration: 0.35
                                                        },
                                                        className: "mt-2 text-sm text-[#0F1C3F]",
                                                        children: journeyStepDescriptions[i]
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, step, true, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "why",
                initial: {
                    opacity: 0
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true,
                    amount: 0.15
                },
                className: sectionClass + " relative overflow-hidden bg-transparent",
                onMouseMove: (event)=>{
                    const target = event.currentTarget.getBoundingClientRect();
                    const x = (event.clientX - target.left) / target.width * 100;
                    const y = (event.clientY - target.top) / target.height * 100;
                    setCursorGlow({
                        x,
                        y
                    });
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute -z-0 h-64 w-64 rounded-full bg-yellow-400/15 blur-3xl",
                        animate: {
                            x: `${cursorGlow.x - 32}%`,
                            y: `${cursorGlow.y - 32}%`
                        },
                        transition: {
                            type: "spring",
                            stiffness: 90,
                            damping: 20
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 md:px-6",
                        style: {
                            perspective: "1200px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -80
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true,
                                    amount: 0.3
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                },
                                className: "rounded-3xl border border-[#0A1128]/15 bg-gradient-to-br from-[#FAF6EE] to-[#FAF6EE] p-8 backdrop-blur-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-[0.2em] text-[#1E293B]",
                                        children: "Why Thousands Trust KLFPRO"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-3 text-3xl font-bold",
                                        children: "Service Quality Highlights"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 text-[#0F1C3F]",
                                        children: featurePoints.map((item, idx)=>{
                                            const isOpen = expandedFeature === idx;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "button",
                                                initial: {
                                                    opacity: 0,
                                                    x: -40
                                                },
                                                viewport: {
                                                    once: true,
                                                    margin: "-50px"
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: true,
                                                    amount: 0.4
                                                },
                                                transition: {
                                                    duration: 0.55,
                                                    ease: "easeOut",
                                                    delay: idx * 0.08
                                                },
                                                onClick: ()=>setExpandedFeature(isOpen ? -1 : idx),
                                                whileHover: {
                                                    x: 10,
                                                    rotateX: 3
                                                },
                                                className: "w-full rounded-xl border border-[#0A1128]/15 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-4 py-3 text-left transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_0_28px_rgba(212,175,55,0.15)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-yellow-400",
                                                                children: isOpen ? "-" : "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 462,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                            initial: {
                                                                opacity: 0,
                                                                height: 0,
                                                                marginTop: 0
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                height: "auto",
                                                                marginTop: 10
                                                            },
                                                            exit: {
                                                                opacity: 0,
                                                                height: 0,
                                                                marginTop: 0
                                                            },
                                                            className: "overflow-hidden text-sm text-[#1E293B]",
                                                            children: item
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item, true, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 80
                                },
                                viewport: {
                                    once: true,
                                    margin: "-50px"
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true,
                                    amount: 0.3
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut"
                                },
                                className: "relative overflow-hidden rounded-3xl border border-[#0A1128]/15 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.28),transparent_52%),linear-gradient(160deg,#151515,#090909)] p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "aria-hidden": true,
                                        className: "pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_10%,rgba(255,255,255,0.12)_44%,transparent_80%)]",
                                        animate: {
                                            x: [
                                                "-130%",
                                                "130%"
                                            ]
                                        },
                                        transition: {
                                            duration: 3.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8972E]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-flex h-2.5 w-2.5 rounded-full bg-[#D4AF37]",
                                                        animate: {
                                                            opacity: [
                                                                0.4,
                                                                1,
                                                                0.4
                                                            ],
                                                            scale: [
                                                                0.9,
                                                                1.15,
                                                                0.9
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 1.2,
                                                            repeat: Infinity
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 17
                                                    }, this),
                                                    "LIVE"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-2xl font-semibold",
                                                children: "Live conversion board"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 505,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[#0F1C3F]",
                                                children: "Recent approvals, response times, and advisor support visibility."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 grid gap-3 sm:grid-cols-2",
                                                children: boardStats.map((stat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveStatCard, {
                                                        title: stat.title,
                                                        value: stat.value,
                                                        delay: idx * 0.08
                                                    }, stat.title, false, {
                                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 483,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "reviews",
                initial: {
                    opacity: 0
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                className: sectionClass + " relative overflow-hidden bg-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.11),transparent_46%)]",
                        animate: {
                            opacity: [
                                0.4,
                                0.75,
                                0.4
                            ]
                        },
                        transition: {
                            duration: 7.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 524,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto max-w-[1240px] px-4 md:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight md:text-4xl",
                                children: "What Our Customers Say"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-10 flex h-[320px] items-center justify-center md:h-[340px]",
                                style: {
                                    perspective: "1200px"
                                },
                                onMouseEnter: ()=>setPauseTestimonials(true),
                                onMouseLeave: ()=>setPauseTestimonials(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "aria-hidden": true,
                                        initial: {
                                            opacity: 0,
                                            x: -24
                                        },
                                        animate: {
                                            opacity: 0.4,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        },
                                        className: "pointer-events-none absolute left-[5%] top-1/2 hidden w-[30%] max-w-sm -translate-y-1/2 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 blur-[0.6px] md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-[#1E293B]",
                                            children: [
                                                '"',
                                                testimonials[(activeTestimonial - 1 + testimonials.length) % testimonials.length][0],
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    }, `ghost-left-${activeTestimonial}`, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 538,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        "aria-hidden": true,
                                        initial: {
                                            opacity: 0,
                                            x: 24
                                        },
                                        animate: {
                                            opacity: 0.4,
                                            x: 0
                                        },
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeOut"
                                        },
                                        className: "pointer-events-none absolute right-[5%] top-1/2 hidden w-[30%] max-w-sm -translate-y-1/2 rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4 blur-[0.6px] md:block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed text-[#1E293B]",
                                            children: [
                                                '"',
                                                testimonials[(activeTestimonial + 1) % testimonials.length][0],
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this)
                                    }, `ghost-right-${activeTestimonial}`, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 32,
                                                rotateY: 12,
                                                scale: 0.94,
                                                filter: "blur(3px)"
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                rotateY: 0,
                                                scale: 1,
                                                filter: "blur(0px)"
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: -28,
                                                rotateY: -12,
                                                scale: 0.95,
                                                filter: "blur(3px)"
                                            },
                                            transition: {
                                                duration: 0.85,
                                                ease: [
                                                    0.22,
                                                    1,
                                                    0.36,
                                                    1
                                                ]
                                            },
                                            whileHover: {
                                                y: -10,
                                                boxShadow: "0 0 40px rgba(212,175,55,0.22)"
                                            },
                                            className: "w-full max-w-2xl rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/45",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1 text-yellow-400",
                                                    children: [
                                                        0,
                                                        1,
                                                        2,
                                                        3,
                                                        4
                                                    ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            transition: {
                                                                duration: 0.24,
                                                                delay: 0.16 + star * 0.1
                                                            },
                                                            children: "★"
                                                        }, star, false, {
                                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-lg leading-relaxed text-[#0A1128]",
                                                    children: [
                                                        '"',
                                                        testimonials[activeTestimonial][0],
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-sm text-[#1E293B]",
                                                    children: [
                                                        testimonials[activeTestimonial][1],
                                                        " - ",
                                                        testimonials[activeTestimonial][2],
                                                        " - ",
                                                        testimonials[activeTestimonial][3]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, testimonials[activeTestimonial][1], true, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2",
                                        children: testimonials.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setActiveTestimonial(idx),
                                                "aria-label": `Show testimonial ${idx + 1}`,
                                                className: `h-2 rounded-full transition-all ${idx === activeTestimonial ? "w-8 bg-[#D4AF37]" : "w-2 bg-white/35 hover:bg-white/70"}`
                                            }, item[1], false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 605,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 532,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 517,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "eligibility",
                initial: {
                    opacity: 0,
                    y: 60
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                className: sectionClass + " relative overflow-hidden bg-gradient-to-br from-[#FAF6EE] via-[#FDFBF7] to-[#FAF6EE]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(212,175,55,0.16),transparent_44%),radial-gradient(circle_at_80%_72%,rgba(212,175,55,0.08),transparent_46%)]",
                        animate: {
                            opacity: [
                                0.45,
                                0.8,
                                0.45
                            ]
                        },
                        transition: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto grid max-w-[1240px] gap-8 px-4 md:grid-cols-2 md:px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold tracking-tight md:text-4xl",
                                        children: "Quick EMI Planner"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 max-w-md text-[#0F1C3F]",
                                        children: "Estimate your EMI instantly and apply with the same profile settings."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-3 sm:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultTile, {
                                                title: "Monthly EMI",
                                                value: emiValue
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultTile, {
                                                title: "Total Interest",
                                                value: totalInterest
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 642,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultTile, {
                                                title: "Total Payment",
                                                value: totalPayment
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 643,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    rotateX: 2.5,
                                    y: -4
                                },
                                transition: {
                                    duration: 0.35
                                },
                                style: {
                                    transformPerspective: 1000
                                },
                                className: "rounded-2xl border border-[#D4AF37]/25 bg-[#0A1128]/5 p-5 backdrop-blur-lg shadow-[0_14px_50px_-20px_rgba(212,175,55,0.3)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-2 block text-sm font-semibold text-[#0A1128]",
                                        children: "Loan amount"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 10000,
                                        max: 10000000,
                                        value: loanAmount,
                                        onChange: (event)=>setLoanAmount(Number(event.target.value)),
                                        className: "h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]",
                                        style: {
                                            background: `linear-gradient(to right, #facc15 ${loanProgress}%, #3f3f46 ${loanProgress}%)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 653,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-[#1E293B]",
                                        children: [
                                            "INR ",
                                            loanAmount.toLocaleString("en-IN")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 662,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-2 mt-4 block text-sm font-semibold text-[#0A1128]",
                                        children: "Tenure (years)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 1,
                                        max: 30,
                                        value: tenureYears,
                                        onChange: (event)=>setTenureYears(Number(event.target.value)),
                                        className: "h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]",
                                        style: {
                                            background: `linear-gradient(to right, #facc15 ${tenureProgress}%, #3f3f46 ${tenureProgress}%)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 665,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-[#1E293B]",
                                        children: [
                                            tenureYears,
                                            " years"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 674,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "mb-2 mt-4 block text-sm font-semibold text-[#0A1128]",
                                        children: "Interest rate"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 676,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 5,
                                        max: 24,
                                        step: 0.1,
                                        value: interestRate,
                                        onChange: (event)=>setInterestRate(Number(event.target.value)),
                                        className: "h-2 w-full appearance-none rounded-full bg-zinc-700 accent-[#facc15]",
                                        style: {
                                            background: `linear-gradient(to right, #facc15 ${interestProgress}%, #3f3f46 ${interestProgress}%)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-[#1E293B]",
                                        children: [
                                            interestRate.toFixed(1),
                                            "% p.a."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: `/eligibility?product=personal-loan`,
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        whileHover: {
                                            scale: 1.02,
                                            boxShadow: "0 0 40px rgba(212,175,55,0.35)"
                                        },
                                        className: "mt-5 block w-full text-center rounded-full bg-gradient-to-r from-[#D4AF37] via-[#f7b801] to-[#fde68a] px-5 py-2.5 font-semibold text-zinc-900 transition",
                                        children: "Apply for this plan"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                        lineNumber: 689,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 60
                },
                viewport: {
                    once: true,
                    margin: "-50px"
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    amount: 0.2
                },
                transition: {
                    duration: 0.7,
                    ease: "easeOut"
                },
                className: sectionClass + " relative overflow-hidden bg-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[1240px] px-4 md:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-center text-2xl font-semibold tracking-tight text-[#0A1128] md:text-3xl",
                            children: "Trusted by leading banks & NBFCs"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 709,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-3 max-w-xl text-center text-sm text-[#1E293B]",
                            children: "Each mark is a real partner—no duplicates in the strip—aligned with the lender panel we work with every day."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 712,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mt-8 overflow-hidden rounded-2xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF6EE] to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                    lineNumber: 716,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF6EE] to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex w-max gap-4",
                                    animate: {
                                        x: [
                                            "0%",
                                            "-50%"
                                        ]
                                    },
                                    transition: {
                                        duration: 32,
                                        ease: "linear",
                                        repeat: Infinity
                                    },
                                    children: [
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$bank$2d$partner$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BANK_PARTNER_LOGOS"],
                                        ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$content$2f$bank$2d$partner$2d$logos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BANK_PARTNER_LOGOS"]
                                    ].map((bank, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.06,
                                                y: -2
                                            },
                                            className: "flex h-16 w-36 items-center justify-center rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 px-4 transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-10 w-full transition duration-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: bank.image,
                                                    alt: bank.name,
                                                    fill: true,
                                                    className: "object-contain",
                                                    sizes: "140px"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                    lineNumber: 730,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                                lineNumber: 729,
                                                columnNumber: 19
                                            }, this)
                                        }, `${bank.id}-${index}`, false, {
                                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                                    lineNumber: 718,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 708,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MidPageOfferSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidPageOfferSlider"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 740,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 739,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$LightProductsBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightProductsBlock"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 743,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 742,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ScrollJourneySections$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollJourneySections"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 746,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$FinancialCalculatorsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FinancialCalculatorsSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 749,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$TrustedPartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrustedPartnersSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 751,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaqSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 755,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 754,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$BankingPartnersSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BankingPartnersSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 758,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MostSearchedLinksSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MostSearchedLinksSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 761,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 760,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemedBand, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$MarketingFooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketingFooterSection"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 764,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 763,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ChatFab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatFab"], {}, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 766,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#eligibility",
                className: "fixed bottom-4 left-4 right-4 z-40 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#eab308] px-5 py-3 text-center font-semibold text-zinc-900 shadow-[0_0_30px_-10px_rgba(212,175,55,0.75)] md:hidden",
                children: "Check Eligibility - Free"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 768,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(ConversionLandingPage, "3M+yaaVmPMX0zxTcFgYB0r4fSus=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ConversionLandingPage;
function ResultTile({ title, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            boxShadow: [
                "0 0 0 rgba(212,175,55,0.05)",
                "0 0 24px rgba(212,175,55,0.16)",
                "0 0 0 rgba(212,175,55,0.05)"
            ]
        },
        transition: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
        },
        className: "rounded-xl border border-[#0A1128]/15 bg-[#0A1128]/5 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-[0.18em] text-zinc-500",
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 782,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedNumber, {
                value: value
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 783,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 777,
        columnNumber: 5
    }, this);
}
_c1 = ResultTile;
function AnimatedNumber({ value }) {
    _s1();
    const [displayValue, setDisplayValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const start = displayValue;
        const end = value;
        const duration = 550;
        const startTime = performance.now();
        let frameId = 0;
        const update = (now)=>{
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(start + (end - start) * eased);
            if (progress < 1) frameId = requestAnimationFrame(update);
        };
        frameId = requestAnimationFrame(update);
        return ()=>cancelAnimationFrame(frameId);
    }, [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "mt-1 text-lg font-semibold text-yellow-400",
        children: [
            "INR ",
            Math.round(displayValue).toLocaleString("en-IN")
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 808,
        columnNumber: 10
    }, this);
}
_s1(AnimatedNumber, "Lqc8yQgp4qAbMjipQh0276ZQpcw=");
_c2 = AnimatedNumber;
function LiveStatCard({ title, value, delay }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        viewport: {
            once: true,
            margin: "-50px"
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.5
        },
        transition: {
            duration: 0.55,
            delay,
            ease: "easeOut"
        },
        animate: {
            y: [
                -5,
                5,
                -5
            ]
        },
        className: "rounded-xl border border-[#0A1128]/20 bg-[#0A1128]/5 p-3 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/45 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] uppercase tracking-[0.18em] text-zinc-500",
                children: title
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 821,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CounterValue, {
                    value: value
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                    lineNumber: 823,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 822,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 813,
        columnNumber: 5
    }, this);
}
_c3 = LiveStatCard;
function CounterValue({ value }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.8
    });
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isInView) return;
        const hasSuffix = /[a-zA-Z%/]/.test(value);
        const numeric = parseFloat(value);
        if (Number.isNaN(numeric)) {
            setDisplay(value);
            return;
        }
        const decimals = value.includes(".") ? value.split(".")[1]?.replace(/[^0-9].*$/, "").length ?? 1 : 0;
        const suffix = hasSuffix ? value.replace(/[0-9.]/g, "") : "";
        const total = 900;
        const started = performance.now();
        let frameId = 0;
        const update = (now)=>{
            const progress = Math.min((now - started) / total, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numeric * eased;
            setDisplay(`${current.toFixed(decimals)}${suffix}`);
            if (progress < 1) frameId = requestAnimationFrame(update);
        };
        frameId = requestAnimationFrame(update);
        return ()=>cancelAnimationFrame(frameId);
    }, [
        isInView,
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
        ref: ref,
        className: "text-lg font-semibold text-yellow-400",
        animate: {
            opacity: [
                0.75,
                1,
                0.75
            ]
        },
        transition: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
        },
        children: display
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 860,
        columnNumber: 5
    }, this);
}
_s2(CounterValue, "gqFtqfvfWqP0HFS5ovAKjSNkf+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c4 = CounterValue;
function ThemedBand({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-transparent",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -left-20 top-14 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 874,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-14 bottom-10 h-36 w-36 rounded-full bg-[#fef3c7]/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 875,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(212,175,55,0.08),transparent_40%)]",
                animate: {
                    opacity: [
                        0.35,
                        0.62,
                        0.35
                    ]
                },
                transition: {
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 876,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
                lineNumber: 882,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ConversionLandingPage.tsx",
        lineNumber: 873,
        columnNumber: 5
    }, this);
}
_c5 = ThemedBand;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "ConversionLandingPage");
__turbopack_refresh__.register(_c1, "ResultTile");
__turbopack_refresh__.register(_c2, "AnimatedNumber");
__turbopack_refresh__.register(_c3, "LiveStatCard");
__turbopack_refresh__.register(_c4, "CounterValue");
__turbopack_refresh__.register(_c5, "ThemedBand");

})()),
"[project]/frontend/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ConversionLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/frontend/components/marketing/ConversionLandingPage.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$marketing$2f$ConversionLandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConversionLandingPage"], {}, void 0, false, {
        fileName: "[project]/frontend/app/page.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = HomePage;
var _c;
__turbopack_refresh__.register(_c, "HomePage");

})()),
"[project]/frontend/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Bproject%5D__f73d95._.js.map