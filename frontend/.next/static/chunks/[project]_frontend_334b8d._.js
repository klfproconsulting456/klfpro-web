(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_frontend_334b8d._.js", {

"[project]/frontend/components/marketing/HeroSlider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "HeroSlider": ()=>HeroSlider
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                className: "absolute inset-0 bg-[#FAF6EE] pt-[72px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
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
                        className: "absolute inset-0 top-[72px]",
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
                className: "pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[100px] sm:h-[140px] w-full overflow-hidden leading-none opacity-95",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 top-[0px]",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23FF9933'/%3E%3C/svg%3E")`,
                            backgroundSize: "1000px 100%"
                        },
                        animate: {
                            backgroundPositionX: [
                                "0px",
                                "-1000px"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            ease: "linear",
                            duration: 12
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 top-[20px] sm:top-[30px]",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
                            backgroundSize: "1000px 100%"
                        },
                        animate: {
                            backgroundPositionX: [
                                "0px",
                                "-1000px"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            ease: "linear",
                            duration: 15
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 top-[40px] sm:top-[60px]",
                        style: {
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,50 C250,100 750,0 1000,50 L1000,100 L0,100 Z' fill='%23138808'/%3E%3C/svg%3E")`,
                            backgroundSize: "1000px 100%"
                        },
                        animate: {
                            backgroundPositionX: [
                                "0px",
                                "-1000px"
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            ease: "linear",
                            duration: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 74,
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
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl text-[#0A1128] drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]",
                            children: "Your Financial Journey, Simplified"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-[#0A1128] drop-shadow-[0_2px_10px_rgba(255,255,255,0.8)]",
                            children: "Smart comparisons, faster approvals, and better financial decisions."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 115,
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
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#products",
                                    className: "rounded-full border border-white/30 bg-[#0A1128]/5 px-7 py-3 font-semibold text-[#0A1128] backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:bg-white/12",
                                    children: "Explore Services"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 107,
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
                lineNumber: 135,
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
                lineNumber: 143,
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
                        lineNumber: 154,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/HeroSlider.tsx",
                lineNumber: 152,
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
                lineNumber: 164,
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
                        className: "relative mt-8 h-[480px] sm:h-[420px] md:h-[330px]",
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
                                    const xValue = position === "left" ? "-110%" : position === "right" ? "10%" : "-50%";
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
                                                        className: "relative h-48 w-full shrink-0 overflow-hidden md:h-full md:min-h-[220px]",
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
                                                                sizes: "400px",
                                                                unoptimized: true
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
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const cards = [
    {
        title: "Business Loan",
        desc: "Get the funds you need to grow your business.",
        image: "/assets/products/business_loan_card.jpg",
        btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
        href: "/loans/business",
        badge: null,
        btnText: "Apply Now >"
    },
    {
        title: "Loan Against Property",
        desc: "Unlock the value of your property for bigger opportunities.",
        image: "/assets/products/lap_card.jpg",
        btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
        href: "/loans/loan-against-property",
        badge: "Lowest EMI",
        btnText: "Apply Now >"
    },
    {
        title: "Home Loan",
        desc: "Turn your dream home into a reality.",
        image: "/assets/products/home_loan_card.jpg",
        btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
        href: "/loans/home",
        badge: "Best Rates",
        btnText: "Explore >"
    },
    {
        title: "Education Loan",
        desc: "Invest in your future with the right education funding.",
        image: "/assets/products/education_loan_card.jpg",
        btnClass: "bg-[#ffca28] text-gray-900 hover:bg-[#ffb300] shadow-sm",
        href: "/loans/education",
        badge: "New",
        btnText: "Explore >"
    }
];
function LightProductsBlock() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "products",
        className: "relative scroll-mt-24 bg-[#FAF6EE] py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-auto max-w-[1280px] px-4 text-center md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
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
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold tracking-tight text-[#111827] md:text-[40px]",
                            children: [
                                "Find the Right Financial ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#ffca28]",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                    lineNumber: 60,
                                    columnNumber: 38
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-3 max-w-2xl text-[16px] text-gray-600 font-medium",
                            children: "Get started in minutes with our simple, fast and convenient application process."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left",
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
                            className: "group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48 w-full overflow-hidden bg-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: c.image,
                                            alt: c.title,
                                            fill: true,
                                            className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        c.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute right-3 top-3 z-10 rounded-full bg-[#ffca28] px-3 py-1 text-[11px] font-bold text-gray-900 shadow-sm",
                                            children: c.badge
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col flex-grow p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-gray-900 mb-2",
                                            children: c.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[14px] text-gray-600 mb-6 flex-grow leading-relaxed",
                                            children: c.desc
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: c.href,
                                                className: `inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${c.btnClass}`,
                                                children: c.btnText
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, c.title, true, {
                            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/marketing/LightProductsBlock.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
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
        exploreHref: "/loans/home",
        reverse: true
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
                        lineNumber: 142,
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
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "Designed For You"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-[760px] text-[16px] text-[#0A1128] md:text-[17px]",
                                children: "Explore options suited to your goals with smooth digital comparison and assisted application flow."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 141,
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
                            lineNumber: 168,
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
                                                        lineNumber: 197,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        section.key === "credit-cards" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CreditCardOrbit, {}, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[310px] w-[235px] overflow-hidden rounded-[26px] border border-black/15 shadow-[0_22px_40px_-24px_rgba(0,0,0,0.65)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: section.image,
                                                    alt: section.imageAlt,
                                                    fill: true,
                                                    className: "object-cover",
                                                    sizes: "250px",
                                                    unoptimized: true
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF6EE]/35 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 182,
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
                                            lineNumber: 220,
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
                                                            lineNumber: 234,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: point
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, point, true, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 226,
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
                                                                lineNumber: 245,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 240,
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
                                                                lineNumber: 253,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        idx !== sections.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-12 h-px max-w-[1110px] bg-[#0A1128]/5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 259,
                            columnNumber: 44
                        }, this) : null
                    ]
                }, section.key, true, {
                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                    lineNumber: 167,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
        lineNumber: 140,
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
                lineNumber: 303,
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
                lineNumber: 307,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_30%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_35%_70%,rgba(212,175,55,0.12),transparent_42%)]"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0A1128]/15"
            }, void 0, false, {
                fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                lineNumber: 313,
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
                lineNumber: 314,
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
                            lineNumber: 348,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.24)_42%,transparent_64%)] opacity-55"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 354,
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
                            lineNumber: 355,
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
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] uppercase tracking-[0.2em] text-[#0A1128]/75",
                                    children: "Platinum"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "relative mt-4 text-[18px] font-semibold",
                            children: card.bank
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 367,
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
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "VISA"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                            lineNumber: 368,
                            columnNumber: 13
                        }, this)
                    ]
                }, `${card.bank}-${index}`, true, {
                    fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
                    lineNumber: 333,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/marketing/ScrollJourneySections.tsx",
        lineNumber: 288,
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
    legalName: "KLFPRO Consulting Private Limited",
    domain: "https://www.klfpro.in",
    phonePrimary: "0124-4068700",
    phoneSecondary: "+91 9711000680",
    emailPrimary: "info@klfpro.com",
    emailSecondary: "klfproconsulting@gmail.com",
    address: "11th Floor, Tower B3, Spaze i-Tech Park 1142, Badshahpur Sohna Road, Sector 49, Gurugram, Haryana 122018, India",
    addressStreet: "11th Floor, Tower B3, Spaze i-Tech Park 1142, Badshahpur Sohna Road, Sector 49",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122018",
    addressCountry: "IN",
    hours: "Mon-Sat: 10AM - 7PM",
    foundingYear: 2015,
    socialLinks: {
        facebook: "https://www.facebook.com/klfpro",
        linkedin: "https://www.linkedin.com/company/klfpro",
        instagram: "https://www.instagram.com/klfpro"
    },
    geo: {
        latitude: 28.4089,
        longitude: 77.0425
    }
};
const loanTypes = [
    "Home Loans",
    "Business Loans",
    "Personal Loans",
    "Loan Against Property",
    "Car Loans",
    "Education Loans",
    "MSME Loan",
    "Vehicle Loan",
    "Balance Transfer",
    "Commercial Property Loan"
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
                                                        className: "interactive-lift rounded-xl border border-[#0A1128]/15 bg-[#FDFBF7]/60 px-4 py-2.5 text-l