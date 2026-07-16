(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/middleware_ts_cadd0a._.js", {

"[project]/frontend/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function middleware(request) {
    const url = request.nextUrl;
    // Extract the hostname
    let hostname = request.headers.get('host') || '';
    // Remove port for local development
    hostname = hostname.split(':')[0];
    // Define domains associated with healthcare
    const isHealthcare = hostname === 'klfprohealthcare.com' || hostname === 'www.klfprohealthcare.com' || hostname.includes('klfprohealthcare.vercel.app') || // Vercel preview domain
    hostname.includes('klfprohealthcare.local') || // Local testing (e.g. klfprohealthcare.local:3000)
    hostname.startsWith('healthcare.') // alternative local testing (e.g. healthcare.localhost)
    ;
    if (isHealthcare) {
        // If the path already starts with /klfpro-healthcare, we don't need to rewrite it, 
        // but ideally, users shouldn't see it in the URL.
        if (!url.pathname.startsWith('/klfpro-healthcare')) {
            // Rewrite the URL to point to the /klfpro-healthcare folder
            // e.g. /about -> /klfpro-healthcare/about
            url.pathname = `/klfpro-healthcare${url.pathname === '/' ? '' : url.pathname}`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(url);
        }
    } else {
        // We are on a non-healthcare domain (e.g. klfpro.in or localhost).
        // If a user tries to access /klfpro-healthcare directly, redirect them to the actual healthcare domain!
        // This prevents duplicate content (SEO) and strict domain boundaries.
        if (url.pathname.startsWith('/klfpro-healthcare')) {
            const newUrl = new URL(request.url);
            // If we're on localhost, we can just redirect to healthcare.local, but for production:
            const targetHost = hostname === 'localhost' ? 'healthcare.localhost:3000' : 'www.klfprohealthcare.com';
            newUrl.hostname = targetHost.split(':')[0];
            if (targetHost.includes(':')) {
                newUrl.port = targetHost.split(':')[1];
            } else {
                newUrl.port = '' // Standard port 80/443 for production
                ;
            }
            newUrl.pathname = url.pathname.replace('/klfpro-healthcare', '') || '/';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(newUrl, 301);
        }
    }
    // For klfpro.in, www.klfpro.in, or localhost, serve normally (root routes)
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - Metadata files (favicon, sitemap, robots)
     * - All static asset files (images, icons, etc)
     */ '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
    ]
};

})()),
}]);

//# sourceMappingURL=middleware_ts_cadd0a._.js.map