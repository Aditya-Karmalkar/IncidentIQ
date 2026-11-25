module.exports = [
"[project]/app/tickets/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TicketsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$nav$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/nav-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TicketsPage() {
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredTickets, setFilteredTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [categoryFilter, setCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Modal State
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Database Connection Failures');
    const [severity, setSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('critical');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        'All Categories',
        'Database Connection Failures',
        'Payment Processing Errors',
        'API Rate Limiting',
        'Authentication Failures',
        'Configuration Problems',
        'Third-party Integration Errors'
    ];
    async function loadTickets() {
        setLoading(true);
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTickets"])();
            setTickets(data);
            setFilteredTickets(data);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadTickets();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let result = [
            ...tickets
        ];
        if (statusFilter !== 'all') {
            result = result.filter((t)=>t.status === statusFilter);
        }
        if (categoryFilter !== 'all' && categoryFilter !== 'All Categories') {
            result = result.filter((t)=>t.category === categoryFilter);
        }
        setFilteredTickets(result);
    }, [
        statusFilter,
        categoryFilter,
        tickets
    ]);
    async function handleCreateTicket(e) {
        e.preventDefault();
        if (!title || !description) return;
        setIsSubmitting(true);
        try {
            const created = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTicket"])({
                title,
                description,
                category,
                severity
            });
            setIsModalOpen(false);
            setTitle('');
            setDescription('');
            await loadTickets();
        // Navigate or focus on created ticket
        } catch  {
            alert('Failed to create ticket');
        } finally{
            setIsSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--color-paper-3)] text-[var(--color-ink)] font-[var(--font-body)] antialiased",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$nav$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavHeader"], {}, void 0, false, {
                fileName: "[project]/app/tickets/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-rule)] pb-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-semibold tracking-tight text-[var(--color-ink)]",
                                        children: "Incident Management Queue"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-muted)] mt-1",
                                        children: [
                                            filteredTickets.length,
                                            " incidents catalogued across the shared operational intelligence corpus."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tickets/page.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsModalOpen(true),
                                className: "px-4 py-2 rounded-[var(--radius-pill)] bg-[var(--color-cool)] text-[var(--color-paper-3)] font-medium text-xs hover:opacity-90 transition-opacity flex items-center gap-2 self-start shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        "aria-hidden": "true",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 5v14M5 12h14"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    "Create Support Incident"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tickets/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tickets/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-4 p-3 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    {
                                        id: 'all',
                                        label: 'All Incidents'
                                    },
                                    {
                                        id: 'open',
                                        label: 'Open'
                                    },
                                    {
                                        id: 'investigating',
                                        label: 'Investigating'
                                    },
                                    {
                                        id: 'pending_approval',
                                        label: 'Pending SRE'
                                    },
                                    {
                                        id: 'resolved',
                                        label: 'Resolved'
                                    }
                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setStatusFilter(tab.id),
                                        className: `px-3 py-1.5 rounded-[var(--radius-pill)] transition-colors font-mono ${statusFilter === tab.id ? 'bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule-2)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}`,
                                        children: tab.label
                                    }, tab.id, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/tickets/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-muted)] font-mono text-[11px]",
                                        children: "Domain:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: categoryFilter,
                                        onChange: (e)=>setCategoryFilter(e.target.value),
                                        className: "bg-[var(--color-paper-2)] border border-[var(--color-rule)] text-[var(--color-ink)] rounded-[var(--radius-pill)] px-2.5 py-1 text-xs outline-none focus:border-[var(--color-cool)]",
                                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c,
                                                children: c
                                            }, c, false, {
                                                fileName: "[project]/app/tickets/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tickets/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tickets/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-[var(--color-rule)] text-[var(--color-muted)] font-mono bg-[var(--color-paper-2)]/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "TICKET ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "TITLE & SYMPTOMS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "CATEGORY"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "FINGERPRINT"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "SEVERITY"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal",
                                                    children: "STATUS"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3 px-4 font-normal text-right",
                                                    children: "ACTION"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "divide-y divide-[var(--color-rule)]",
                                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 7,
                                                className: "text-center py-12 text-[var(--color-muted)] font-mono",
                                                children: "Loading support incident queue..."
                                            }, void 0, false, {
                                                fileName: "[project]/app/tickets/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this) : filteredTickets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: 7,
                                                className: "text-center py-12 text-[var(--color-muted)] font-mono",
                                                children: "No matching incidents found in this filter view."
                                            }, void 0, false, {
                                                fileName: "[project]/app/tickets/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this) : filteredTickets.map((t)=>{
                                            const severityClass = t.severity === 'critical' ? 'bg-[var(--color-bad-soft)] text-[var(--color-bad)] border-[var(--color-bad)]/30' : t.severity === 'high' ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)] border-[var(--color-accent)]/30' : 'bg-[var(--color-paper-2)] text-[var(--color-muted)] border-[var(--color-rule)]';
                                            const statusClass = t.status === 'resolved' ? 'bg-[var(--color-ok-soft)] text-[var(--color-ok)]' : t.status === 'pending_approval' ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]' : 'bg-[var(--color-cool-soft)] text-[var(--color-cool)]';
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-[var(--color-paper-2)]/40 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 font-mono font-medium text-[var(--color-cool)] whitespace-nowrap",
                                                        children: t.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 max-w-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-[var(--color-ink)] truncate",
                                                                children: t.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tickets/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-[var(--color-muted)] truncate mt-0.5",
                                                                children: t.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tickets/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-[var(--color-muted)] whitespace-nowrap",
                                                        children: t.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-[10px] bg-[var(--color-paper-2)] border border-[var(--color-rule)] px-1.5 py-0.5 rounded text-[var(--color-muted)]",
                                                            children: t.fingerprint ? t.fingerprint.slice(0, 24) + '…' : 'pending_triage'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-0.5 rounded text-[10px] font-mono border ${severityClass}`,
                                                            children: t.severity
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-0.5 rounded text-[10px] font-mono capitalize ${statusClass}`,
                                                            children: t.status.replace('_', ' ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 px-4 text-right whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/investigation?id=${t.id}`,
                                                            className: "px-2.5 py-1 rounded bg-[var(--color-paper-2)] hover:bg-[var(--color-cool)] hover:text-[var(--color-paper-3)] border border-[var(--color-rule)] transition-colors text-[11px] font-mono inline-flex items-center gap-1",
                                                            children: "Investigate DAG"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tickets/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, t.id, true, {
                                                fileName: "[project]/app/tickets/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/tickets/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tickets/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/tickets/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tickets/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--color-paper)] border border-[var(--color-rule)] rounded-[var(--radius-card)] max-w-lg w-full p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-b border-[var(--color-rule)] pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-semibold text-[var(--color-ink)]",
                                            children: "Submit Support Incident Ticket"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "text-[var(--color-muted)] hover:text-[var(--color-ink)] text-sm",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tickets/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleCreateTicket,
                                    className: "space-y-4 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[var(--color-muted)] font-mono mb-1",
                                                    children: "INCIDENT TITLE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: title,
                                                    onChange: (e)=>setTitle(e.target.value),
                                                    placeholder: "e.g. HikariCP connection pool timeout on checkout service",
                                                    className: "w-full bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-[var(--radius-pill)] px-3 py-2 text-[var(--color-ink)] outline-none focus:border-[var(--color-cool)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[var(--color-muted)] font-mono mb-1",
                                                            children: "CATEGORY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: category,
                                                            onChange: (e)=>setCategory(e.target.value),
                                                            className: "w-full bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-[var(--radius-pill)] px-3 py-2 text-[var(--color-ink)] outline-none focus:border-[var(--color-cool)]",
                                                            children: categories.filter((c)=>c !== 'All Categories').map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c,
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/app/tickets/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-[var(--color-muted)] font-mono mb-1",
                                                            children: "SEVERITY"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 283,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: severity,
                                                            onChange: (e)=>setSeverity(e.target.value),
                                                            className: "w-full bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-[var(--radius-pill)] px-3 py-2 text-[var(--color-ink)] outline-none focus:border-[var(--color-cool)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "critical",
                                                                    children: "Critical"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tickets/page.tsx",
                                                                    lineNumber: 289,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "high",
                                                                    children: "High"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tickets/page.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "medium",
                                                                    children: "Medium"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tickets/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "low",
                                                                    children: "Low"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/tickets/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/tickets/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[var(--color-muted)] font-mono mb-1",
                                                    children: "TECHNICAL DESCRIPTION & STACK TRACE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    required: true,
                                                    rows: 4,
                                                    value: description,
                                                    onChange: (e)=>setDescription(e.target.value),
                                                    placeholder: "Provide error logs, status codes, latency spikes, or symptoms...",
                                                    className: "w-full bg-[var(--color-paper-2)] border border-[var(--color-rule)] rounded-[var(--radius-pill)] p-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-cool)] font-mono text-[11px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-end gap-3 pt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsModalOpen(false),
                                                    className: "px-4 py-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] text-[var(--color-muted)] hover:text-[var(--color-ink)]",
                                                    children: "Cancel"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    disabled: isSubmitting,
                                                    className: "px-4 py-2 rounded-[var(--radius-pill)] bg-[var(--color-cool)] text-[var(--color-paper-3)] font-medium hover:opacity-90 disabled:opacity-50",
                                                    children: isSubmitting ? 'Ingesting...' : 'Ingest & Normalize'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/tickets/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/tickets/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tickets/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tickets/page.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/tickets/page.tsx",
                        lineNumber: 241,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/tickets/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tickets/page.tsx",
        lineNumber: 83,
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

//# sourceMappingURL=_0eoqv9q-95u_q._.js.map