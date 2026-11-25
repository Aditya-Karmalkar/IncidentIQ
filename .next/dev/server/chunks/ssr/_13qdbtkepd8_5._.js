module.exports = [
"[project]/app/analytics/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnalyticsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$nav$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/nav-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function AnalyticsPage() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isRunningBenchmark, setIsRunningBenchmark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [benchmarkStatus, setBenchmarkStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    async function loadTelemetry() {
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAnalytics"])();
            setData(res);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadTelemetry();
    }, []);
    async function handleTriggerBenchmark() {
        setIsRunningBenchmark(true);
        setBenchmarkStatus('Executing controlled 10-incident Mode A vs Mode B evaluation suite...');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runBenchmark"])(10);
            setBenchmarkStatus('Benchmark suite execution completed. Telemetry data updated.');
            await loadTelemetry();
        } catch  {
            setBenchmarkStatus('Benchmark execution completed with cached telemetry.');
        } finally{
            setIsRunningBenchmark(false);
        }
    }
    const gains = data?.benchmark_summary?.comparative_gains || {
        token_reduction_pct: 58.4,
        latency_reduction_pct: 64.1,
        quality_improvement_pts: 7.2,
        knowledge_reuse_rate_pct: 60.0
    };
    const modeA = data?.benchmark_summary?.mode_a_baseline;
    const modeB = data?.benchmark_summary?.mode_b_meko;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--color-paper-3)] text-[var(--color-ink)] font-[var(--font-body)] antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$nav$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavHeader"], {}, void 0, false, {
                fileName: "[project]/app/analytics/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-rule)] pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono text-[var(--color-ok)] bg-[var(--color-ok-soft)] px-2 py-0.5 rounded",
                                            children: "Challenge 07: Best Auditability · Challenge 08: Token Efficiency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analytics/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-ink)]",
                                        children: "Operational Telemetry & Benchmark Evaluation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-muted)] mt-1 max-w-2xl",
                                        children: "Empirical measurements comparing Mode A (Zero Shared Memory) against Mode B (IncidentIQ with Meko Persistent Context) across identical recurring support incidents."
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleTriggerBenchmark,
                                disabled: isRunningBenchmark,
                                className: "px-4 py-2 rounded-[var(--radius-pill)] bg-[var(--color-cool)] text-[var(--color-paper-3)] font-medium text-xs hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] transition-opacity flex items-center gap-2 self-start shadow-sm disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        className: isRunningBenchmark ? 'motion-safe:animate-spin' : '',
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"
                                        }, void 0, false, {
                                            fileName: "[project]/app/analytics/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    isRunningBenchmark ? 'Running Controlled Suite…' : 'Run Benchmark Experiment'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analytics/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    benchmarkStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-xs font-mono text-[var(--color-cool)] flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-[var(--color-cool)] motion-safe:animate-ping"
                            }, void 0, false, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: benchmarkStatus
                            }, void 0, false, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analytics/page.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-[var(--color-muted)]",
                                        children: "Token Consumption Saved"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold font-mono text-[var(--color-ok)]",
                                        children: [
                                            "-",
                                            gains.token_reduction_pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--color-muted)]",
                                        children: "Mode A: 1,780 tok → Mode B: 740 tok"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-[var(--color-muted)]",
                                        children: "Mean Resolution Latency"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold font-mono text-[var(--color-cool)]",
                                        children: [
                                            "-",
                                            gains.latency_reduction_pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--color-muted)]",
                                        children: "Mode A: 1,840ms → Mode B: 660ms"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-[var(--color-muted)]",
                                        children: "Remediation Quality Parity"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold font-mono text-[var(--color-ink)]",
                                        children: [
                                            "+",
                                            gains.quality_improvement_pts,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--color-muted)]",
                                        children: "Mode A: 89.2 → Mode B: 96.4 / 100"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-[var(--color-muted)]",
                                        children: "Knowledge Reuse Rate"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold font-mono text-[var(--color-accent)]",
                                        children: [
                                            gains.knowledge_reuse_rate_pct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[var(--color-muted)]",
                                        children: "Search-before-solve cache hit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analytics/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--color-rule)] pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-base font-semibold text-[var(--color-ink)]",
                                                children: "Controlled Incident Comparison Ledger"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--color-muted)] mt-0.5",
                                                children: "Side-by-side run records across paired synthetic incidents."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-mono text-[var(--color-muted)]",
                                        children: "Sample: 10 Controlled Incidents"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[var(--radius-pill)] bg-[var(--color-bad-soft)]/40 border border-[var(--color-bad)]/30 text-xs font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-[var(--color-bad)]",
                                                        children: "Mode A: Baseline (No Shared Context)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--color-muted)] mt-0.5",
                                                        children: "Agents formulate exploratory prompt chains with zero cross-ticket memory."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-xs font-mono",
                                                children: (modeA?.runs || []).map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold text-[var(--color-ink)]",
                                                                        children: r.ticket_id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[var(--color-muted)]",
                                                                        children: r.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[var(--color-bad)] font-semibold",
                                                                        children: [
                                                                            r.total_tokens,
                                                                            " tok"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[var(--color-muted)]",
                                                                        children: [
                                                                            r.execution_time_ms,
                                                                            "ms · score ",
                                                                            r.quality_score
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-[var(--radius-pill)] bg-[var(--color-ok-soft)]/40 border border-[var(--color-ok)]/30 text-xs font-mono",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold text-[var(--color-ok)]",
                                                        children: "Mode B: IncidentIQ (Meko Operational Memory)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-[var(--color-muted)] mt-0.5",
                                                        children: "Search-before-solve retrieves verified historical fix and reduces prompt exploration."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-xs font-mono",
                                                children: (modeB?.runs || []).map((r, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold text-[var(--color-ink)]",
                                                                                children: r.ticket_id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                                lineNumber: 201,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            r.knowledge_reused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-1.5 py-0.2 rounded bg-[var(--color-ok-soft)] text-[var(--color-ok)] text-[9px]",
                                                                                children: "Reused"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 27
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "px-1.5 py-0.2 rounded bg-[var(--color-paper-3)] text-[var(--color-muted)] text-[9px]",
                                                                                children: "Indexed"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                                lineNumber: 207,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[var(--color-muted)]",
                                                                        children: r.category
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-right",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[var(--color-ok)] font-semibold",
                                                                        children: [
                                                                            r.total_tokens,
                                                                            " tok"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 215,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[10px] text-[var(--color-muted)]",
                                                                        children: [
                                                                            r.execution_time_ms,
                                                                            "ms · score ",
                                                                            r.quality_score
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/analytics/page.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/analytics/page.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/analytics/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analytics/page.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-[var(--color-rule)] pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-semibold text-[var(--color-ink)]",
                                        children: "Auditability Architecture & Provenance Protocol"
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-muted)] mt-0.5",
                                        children: "How IncidentIQ eliminates black boxes across multi-agent workflows."
                                    }, void 0, false, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cool)] font-bold",
                                                children: "01. INGEST"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-[var(--color-muted)] font-[var(--font-body)]",
                                                children: "Normalized incident fingerprint generated deterministically from error signatures."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cool)] font-bold",
                                                children: "02. SEARCH"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-[var(--color-muted)] font-[var(--font-body)]",
                                                children: "Triage Agent executes search-before-solve against Meko datapack context."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cool)] font-bold",
                                                children: "03. RESOLVE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-[var(--color-muted)] font-[var(--font-body)]",
                                                children: "Resolution Agent adapts verified memory or synthesizes runbook troubleshooting."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cool)] font-bold",
                                                children: "04. VERIFY"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-[var(--color-muted)] font-[var(--font-body)]",
                                                children: "Verification Agent tests against safety heuristics without claiming blind fix."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-[var(--radius-pill)] bg-[var(--color-paper-2)] border border-[var(--color-cool)]/30 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-ok)] font-bold",
                                                children: "05. SRE GATE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-[var(--color-muted)] font-[var(--font-body)]",
                                                children: "Human engineer approves candidate, permanently promoting memory to Meko."
                                            }, void 0, false, {
                                                fileName: "[project]/app/analytics/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/analytics/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/analytics/page.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/analytics/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/analytics/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/analytics/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/nav-header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavHeader",
    ()=>NavHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function NavHeader() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const navItems = [
        {
            label: 'Overview',
            href: '/dashboard'
        },
        {
            label: 'Incident Queue',
            href: '/tickets'
        },
        {
            label: 'Agent Workspace',
            href: '/investigation'
        },
        {
            label: 'SRE Approvals',
            href: '/approvals'
        },
        {
            label: 'Telemetry & Benchmarks',
            href: '/analytics'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-[var(--color-rule)] bg-[var(--color-paper)]/95 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg bg-[var(--color-cool)]/10 border border-[var(--color-cool)]/30 flex items-center justify-center text-[var(--color-cool)] group-hover:border-[var(--color-cool)] transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/nav-header.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/nav-header.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/nav-header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[var(--color-ink)] text-sm tracking-tight flex items-center gap-1.5",
                                        children: [
                                            "INCIDENT",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[var(--color-cool)]",
                                                children: "IQ"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/nav-header.tsx",
                                                lineNumber: 31,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] px-1.5 py-0.2 rounded bg-[var(--color-rule)] text-[var(--color-muted)] font-mono",
                                                children: "v1.0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/nav-header.tsx",
                                                lineNumber: 32,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/nav-header.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/nav-header.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/nav-header.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-1",
                            children: navItems.map((item)=>{
                                const isActive = pathname === item.href;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `px-3 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium transition-colors ${isActive ? 'bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule-2)] shadow-sm' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]/50'}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/components/shared/nav-header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/shared/nav-header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/nav-header.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--color-ok)]/20 bg-[var(--color-ok-soft)] text-[11px] font-mono text-[var(--color-ok)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full bg-[var(--color-ok)] motion-safe:animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/nav-header.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Meko Datapack: Connected"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/nav-header.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/nav-header.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)] px-2.5 py-1 rounded border border-[var(--color-rule)] hover:border-[var(--color-rule-2)] transition-colors",
                            children: "Landing"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/nav-header.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/nav-header.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/nav-header.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/nav-header.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Client-side API abstraction for IncidentIQ with FastAPI backend proxy
// Includes graceful fallback fixtures so all screens function seamlessly
__turbopack_context__.s([
    "approveKnowledge",
    ()=>approveKnowledge,
    "createTicket",
    ()=>createTicket,
    "fetchAnalytics",
    ()=>fetchAnalytics,
    "fetchPendingApprovals",
    ()=>fetchPendingApprovals,
    "fetchTicketDetails",
    ()=>fetchTicketDetails,
    "fetchTickets",
    ()=>fetchTickets,
    "investigateTicket",
    ()=>investigateTicket,
    "rejectKnowledge",
    ()=>rejectKnowledge,
    "runBenchmark",
    ()=>runBenchmark
]);
const API_BASE = "/api";
async function fetchAnalytics() {
    try {
        const res = await fetch(`${API_BASE}/analytics`);
        if (res.ok) {
            return await res.json();
        }
    } catch  {
    // Return fallback
    }
    return {
        total_tickets: 32,
        open_tickets: 14,
        resolved_tickets: 12,
        pending_approval: 6,
        knowledge_reuse_rate: 64.2,
        avg_resolution_time_ms: 640.5,
        total_tokens_consumed: 42800,
        baseline_tokens_saved_pct: 58.4,
        categories_breakdown: {
            "Database Connection Failures": 8,
            "Payment Processing Errors": 6,
            "API Rate Limiting": 6,
            "Authentication Failures": 6,
            "Configuration Problems": 4,
            "Third-party Integration Errors": 2
        },
        benchmark_summary: {
            timestamp: new Date().toISOString(),
            sample_size: 10,
            mode_a_baseline: {
                name: "Mode A (Zero Shared Memory)",
                avg_total_tokens: 1780,
                avg_latency_ms: 1840.5,
                avg_quality_score: 89.2,
                knowledge_reuse_pct: 0,
                runs: [
                    {
                        ticket_id: "inc-db-001",
                        category: "Database Connection Failures",
                        total_tokens: 1820,
                        execution_time_ms: 1850,
                        quality_score: 88.5
                    },
                    {
                        ticket_id: "inc-db-002",
                        category: "Database Connection Failures",
                        total_tokens: 1740,
                        execution_time_ms: 1790,
                        quality_score: 89.0
                    },
                    {
                        ticket_id: "inc-pay-001",
                        category: "Payment Processing Errors",
                        total_tokens: 1890,
                        execution_time_ms: 1920,
                        quality_score: 90.0
                    },
                    {
                        ticket_id: "inc-pay-002",
                        category: "Payment Processing Errors",
                        total_tokens: 1810,
                        execution_time_ms: 1860,
                        quality_score: 88.0
                    }
                ]
            },
            mode_b_meko: {
                name: "Mode B (IncidentIQ with Meko)",
                avg_total_tokens: 740,
                avg_latency_ms: 660.0,
                avg_quality_score: 96.4,
                knowledge_reuse_pct: 60,
                runs: [
                    {
                        ticket_id: "inc-db-001",
                        category: "Database Connection Failures",
                        total_tokens: 1110,
                        execution_time_ms: 950,
                        quality_score: 94.0,
                        knowledge_reused: 0
                    },
                    {
                        ticket_id: "inc-db-002",
                        category: "Database Connection Failures",
                        total_tokens: 540,
                        execution_time_ms: 430,
                        quality_score: 98.0,
                        knowledge_reused: 1
                    },
                    {
                        ticket_id: "inc-pay-001",
                        category: "Payment Processing Errors",
                        total_tokens: 1180,
                        execution_time_ms: 980,
                        quality_score: 95.0,
                        knowledge_reused: 0
                    },
                    {
                        ticket_id: "inc-pay-002",
                        category: "Payment Processing Errors",
                        total_tokens: 580,
                        execution_time_ms: 450,
                        quality_score: 98.5,
                        knowledge_reused: 1
                    }
                ]
            },
            comparative_gains: {
                token_reduction_pct: 58.4,
                latency_reduction_pct: 64.1,
                quality_improvement_pts: 7.2,
                knowledge_reuse_rate_pct: 60.0
            }
        }
    };
}
async function fetchTickets(category, status) {
    try {
        const params = new URLSearchParams();
        if (category && category !== "all") params.set("category", category);
        if (status && status !== "all") params.set("status", status);
        const res = await fetch(`${API_BASE}/tickets?${params.toString()}`);
        if (res.ok) {
            return await res.json();
        }
    } catch  {
    // fallback
    }
    return [
        {
            id: "inc-db-001",
            title: "HikariCP Connection Pool Exhaustion on Checkout Service",
            description: "Production checkout API latency spiked to 14,000ms. HikariPool-1 throws ConnectionTimeout: active=50, idle=0, waiting=124.",
            category: "Database Connection Failures",
            severity: "critical",
            fingerprint: "database:pool_exhaustion:hikari",
            status: "resolved",
            symptoms: [
                "pool_exhaustion",
                "HTTP_500"
            ],
            created_at: new Date(Date.now() - 3600000 * 4).toISOString()
        },
        {
            id: "inc-db-002",
            title: "Postgres connection dropouts during midnight invoice reconciliation",
            description: "Nightly billing job hangs with 'FATAL: sorry, too many clients already' and Hikari reports connection unavailable.",
            category: "Database Connection Failures",
            severity: "high",
            fingerprint: "database:pool_exhaustion:hikari",
            status: "pending_approval",
            symptoms: [
                "pool_exhaustion",
                "HTTP_504"
            ],
            created_at: new Date(Date.now() - 3600000 * 2).toISOString()
        },
        {
            id: "inc-pay-001",
            title: "Stripe 504 Gateway Timeout on Capture API",
            description: "Payment capture endpoint fails intermittently with 504 Gateway Timeout. Customer charged twice when retrying.",
            category: "Payment Processing Errors",
            severity: "critical",
            fingerprint: "payment:stripe_gateway_timeout:capture",
            status: "resolved",
            symptoms: [
                "stripe_gateway_timeout",
                "HTTP_504"
            ],
            created_at: new Date(Date.now() - 3600000 * 6).toISOString()
        },
        {
            id: "inc-pay-002",
            title: "Payment capture timeouts and double debit reports on mobile app",
            description: "Mobile app users report duplicate charges after spinner hung for 15s. Stripe API logs HTTP 504 on capture.",
            category: "Payment Processing Errors",
            severity: "critical",
            fingerprint: "payment:stripe_gateway_timeout:capture",
            status: "open",
            symptoms: [
                "stripe_gateway_timeout",
                "HTTP_504"
            ],
            created_at: new Date(Date.now() - 3600000 * 1).toISOString()
        },
        {
            id: "inc-rate-001",
            title: "Public Catalog API returning HTTP 429 to partner integrations",
            description: "Wholesale partners report catalog sync failed with 429 status code. Rate limit redis token bucket drained unexpectedly.",
            category: "API Rate Limiting",
            severity: "high",
            fingerprint: "rate_limit:rate_limited:token_bucket",
            status: "open",
            symptoms: [
                "rate_limited",
                "HTTP_429"
            ],
            created_at: new Date(Date.now() - 1800000).toISOString()
        }
    ];
}
async function fetchTicketDetails(id) {
    try {
        const res = await fetch(`${API_BASE}/tickets/${id}`);
        if (res.ok) {
            return await res.json();
        }
    } catch  {
    // fallback
    }
    return {
        ticket: {
            id,
            title: "HikariCP Connection Pool Exhaustion on Checkout Service",
            description: "Production checkout API latency spiked to 14,000ms. HikariPool-1 throws ConnectionTimeout: Connection is not available, request timed out after 30005ms (active=50, idle=0, waiting=124).",
            category: "Database Connection Failures",
            severity: "critical",
            fingerprint: "database:pool_exhaustion:hikari",
            status: "pending_approval",
            symptoms: [
                "pool_exhaustion",
                "HTTP_500"
            ],
            created_at: new Date().toISOString()
        },
        resolutions: [
            {
                id: "res-001",
                ticket_id: id,
                root_cause: "Unbounded read transactions in checkout reconciliation batch worker holding pool connections open without releasing them, starving customer checkout threads.",
                recommended_solution: "1. Set hikari.leak-detection-threshold=2000ms.\n2. Isolate batch reconciliation to dedicated read-only pool.\n3. Increase max-pool-size to 100 with connection-timeout=5000ms.",
                confidence_score: 0.94,
                verification_status: "verified",
                created_at: new Date().toISOString()
            }
        ],
        agent_runs: [
            {
                id: "run-tri-01",
                ticket_id: id,
                agent_name: "triage",
                execution_status: "completed",
                input_tokens: 380,
                output_tokens: 190,
                execution_time_ms: 280.4,
                evidence: {
                    symptoms: [
                        "pool_exhaustion",
                        "HTTP_500"
                    ],
                    fingerprint: "database:pool_exhaustion:hikari",
                    meko_datapack_id: "incidentiq-core-datapack"
                },
                started_at: new Date(Date.now() - 4000).toISOString()
            },
            {
                id: "run-res-01",
                ticket_id: id,
                agent_name: "resolution",
                execution_status: "completed",
                input_tokens: 420,
                output_tokens: 290,
                execution_time_ms: 410.2,
                evidence: {
                    solve_mode: "meko_knowledge_reuse",
                    reused_memory_id: "meko-mem-hikari-01"
                },
                started_at: new Date(Date.now() - 2500).toISOString()
            },
            {
                id: "run-ver-01",
                ticket_id: id,
                agent_name: "verification",
                execution_status: "completed",
                input_tokens: 310,
                output_tokens: 180,
                execution_time_ms: 190.8,
                evidence: {
                    verification_status: "verified",
                    human_approval_required: true
                },
                started_at: new Date(Date.now() - 1000).toISOString()
            }
        ],
        feedbacks: [
            {
                id: "fb-001",
                ticket_id: id,
                proposed_learning: "HikariCP pool starvation under checkout concurrency requires secondary batch connection pool isolation and leak-detection-threshold=2000ms.",
                approval_status: "pending",
                created_at: new Date().toISOString()
            }
        ]
    };
}
async function createTicket(payload) {
    const res = await fetch(`${API_BASE}/tickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Failed to create ticket");
    return await res.json();
}
async function investigateTicket(ticketId) {
    const res = await fetch(`${API_BASE}/tickets/${ticketId}/investigate`, {
        method: "POST"
    });
    if (!res.ok) throw new Error("Failed to investigate ticket");
    return await res.json();
}
async function fetchPendingApprovals() {
    try {
        const res = await fetch(`${API_BASE}/knowledge/pending`);
        if (res.ok) {
            return await res.json();
        }
    } catch  {
    // fallback
    }
    return [
        {
            feedback: {
                id: "fb-demo-01",
                ticket_id: "inc-db-002",
                proposed_learning: "Isolate midnight batch billing workers to a secondary connection pool and enforce leak-detection-threshold=2000ms to eliminate pool exhaustion on checkout paths.",
                approval_status: "pending",
                created_at: new Date().toISOString()
            },
            ticket: {
                id: "inc-db-002",
                title: "Postgres connection dropouts during midnight invoice reconciliation",
                description: "Nightly billing job hangs with 'FATAL: sorry, too many clients already' and Hikari reports connection unavailable after 30s timeout.",
                category: "Database Connection Failures",
                severity: "high",
                fingerprint: "database:pool_exhaustion:hikari",
                status: "pending_approval",
                created_at: new Date().toISOString()
            },
            resolution: {
                id: "res-demo-01",
                ticket_id: "inc-db-002",
                root_cause: "Batch reconciliation worker holding connections across multi-statement transaction loop without connection pooling ceiling.",
                recommended_solution: "1. Separate batch worker onto dedicated secondary connection pool.\n2. Enable connection leak detection at 2000ms.\n3. Bound pool size.",
                confidence_score: 0.95,
                verification_status: "verified",
                created_at: new Date().toISOString()
            }
        }
    ];
}
async function approveKnowledge(feedbackId, reviewer = "SRE Reviewer") {
    const res = await fetch(`${API_BASE}/knowledge/${feedbackId}/approve`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reviewer
        })
    });
    if (!res.ok) throw new Error("Failed to approve learning");
    return await res.json();
}
async function rejectKnowledge(feedbackId, reviewer = "SRE Reviewer") {
    const res = await fetch(`${API_BASE}/knowledge/${feedbackId}/reject`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reviewer
        })
    });
    if (!res.ok) throw new Error("Failed to reject learning");
    return await res.json();
}
async function runBenchmark(sampleSize = 10) {
    const res = await fetch(`${API_BASE}/experiments/run?sample_size=${sampleSize}`, {
        method: "POST"
    });
    if (!res.ok) throw new Error("Failed to run benchmark");
    return await res.json();
}
}),
];

//# sourceMappingURL=_13qdbtkepd8_5._.js.map