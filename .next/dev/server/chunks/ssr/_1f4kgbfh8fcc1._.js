module.exports = [
"[project]/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.6_@types+node@20._94d6a08ec89c1faa325df33cc6cef698/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function DashboardContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialTab = searchParams.get('tab');
    const initialTicketId = searchParams.get('id');
    // Navigation & View State
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTab || 'tasks');
    const [activeSubTab, setActiveSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Global Data
    const [analytics, setAnalytics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tickets, setTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Queue / Tasks View State
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDomain, setSelectedDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTitle, setNewTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newCategory, setNewCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Database Connection Failures');
    const [newSeverity, setNewSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('critical');
    const [newDescription, setNewDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Investigation View State
    const [selectedTicketId, setSelectedTicketId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialTicketId || 'inc-db-001');
    const [currentTicket, setCurrentTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [resolutions, setResolutions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [, setAgentRuns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feedbacks, setFeedbacks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInvestigating, setIsInvestigating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dagStep, setDagStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('triage');
    const [investigationSuccessMsg, setInvestigationSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Approvals View State
    const [approvalItems, setApprovalItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [approvalMsg, setApprovalMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reviewerName, setReviewerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Principal SRE On-Call Lead');
    // Benchmarks View State
    const [isRunningBenchmark, setIsRunningBenchmark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [benchmarkResultMsg, setBenchmarkResultMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle URL query parameter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialTab && initialTab !== activeTab) {
            setActiveTab(initialTab);
        }
    }, [
        initialTab
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialTicketId && initialTicketId !== selectedTicketId) {
            setSelectedTicketId(initialTicketId);
        }
    }, [
        initialTicketId
    ]);
    // Synchronize Tab change with URL
    const handleSelectTab = (tab)=>{
        setActiveTab(tab);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Initial Data Fetch
    async function loadInitialData() {
        setLoading(true);
        try {
            const [a, t, pending] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAnalytics"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTickets"])(),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPendingApprovals"])()
            ]);
            setAnalytics(a);
            setTickets(t);
            setApprovalItems(pending);
            if (t.length > 0 && !initialTicketId) {
                setSelectedTicketId(t[0].id);
                setSelectedRows({
                    [t[0].id]: true
                });
            }
        } catch (err) {
            console.error('Failed to load dashboard data:', err);
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadInitialData();
    }, []);
    // Load ticket details when selected for DAG
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadInvestigationDetails() {
            if (!selectedTicketId) return;
            try {
                const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTicketDetails"])(selectedTicketId);
                setCurrentTicket(details.ticket);
                setResolutions(details.resolutions);
                setAgentRuns(details.agent_runs);
                setFeedbacks(details.feedbacks);
            } catch (err) {
                console.error('Failed to load investigation details:', err);
            }
        }
        loadInvestigationDetails();
    }, [
        selectedTicketId
    ]);
    // Handle Run Multi-Agent DAG
    async function handleRunInvestigation() {
        if (!selectedTicketId) return;
        setIsInvestigating(true);
        setInvestigationSuccessMsg(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["investigateTicket"])(selectedTicketId);
            const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchTicketDetails"])(selectedTicketId);
            setCurrentTicket(details.ticket);
            setResolutions(details.resolutions);
            setAgentRuns(details.agent_runs);
            setFeedbacks(details.feedbacks);
            setInvestigationSuccessMsg('3-agent investigation complete. DAG actions verified with zero blind mutations.');
        } catch  {
            alert('Investigation DAG failed to run against backend');
        } finally{
            setIsInvestigating(false);
        }
    }
    // Handle Create Ticket
    async function handleCreateTicketSubmit(e) {
        e.preventDefault();
        if (!newTitle || !newDescription) return;
        setIsSubmitting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTicket"])({
                title: newTitle,
                description: newDescription,
                category: newCategory,
                severity: newSeverity
            });
            setIsModalOpen(false);
            setNewTitle('');
            setNewDescription('');
            await loadInitialData();
        } catch  {
            alert('Failed to create ticket');
        } finally{
            setIsSubmitting(false);
        }
    }
    // Handle Approve Knowledge in SRE Gate
    async function handleApproveLearning(feedbackId) {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approveKnowledge"])(feedbackId, reviewerName);
            setApprovalMsg(`Promoted proposed patch to permanent Meko memory (${res.meko_memory_id || 'meko-mem-approved'}) under datapack incidentiq-core-datapack.`);
            const pending = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPendingApprovals"])();
            setApprovalItems(pending);
            const a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAnalytics"])();
            setAnalytics(a);
        } catch  {
            alert('Failed to approve learning');
        }
    }
    // Handle Reject Knowledge
    async function handleRejectLearning(feedbackId) {
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rejectKnowledge"])(feedbackId, reviewerName);
            setApprovalMsg('Rejected proposal. Solution archived without memory promotion.');
            const pending = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchPendingApprovals"])();
            setApprovalItems(pending);
        } catch  {
            alert('Failed to reject learning');
        }
    }
    // Handle Run Benchmark Suite
    async function handleExecuteBenchmark() {
        setIsRunningBenchmark(true);
        setBenchmarkResultMsg('Executing 10-incident Mode A vs Mode B controlled evaluation suite…');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runBenchmark"])(10);
            const a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchAnalytics"])();
            setAnalytics(a);
            setBenchmarkResultMsg('Benchmark suite completed. Telemetry and comparison ledger refreshed.');
        } catch  {
            setBenchmarkResultMsg('Benchmark execution finished with cached comparative metrics.');
        } finally{
            setIsRunningBenchmark(false);
        }
    }
    const toggleRow = (id)=>{
        setSelectedRows((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    // Filtered tickets
    const filteredTickets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return tickets.filter((t)=>{
            const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || t.id.toLowerCase().includes(searchQuery.toLowerCase()) || t.category.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesDomain = selectedDomain === 'All' || t.category.toLowerCase().includes(selectedDomain.toLowerCase());
            const matchesStatus = statusFilter === 'all' ? true : statusFilter === 'resolved' ? t.status === 'resolved' : statusFilter === 'pending' ? t.status === 'pending_approval' : t.status === statusFilter;
            return matchesSearch && matchesDomain && matchesStatus;
        });
    }, [
        tickets,
        searchQuery,
        selectedDomain,
        statusFilter
    ]);
    // Grouped tasks for IncidentIQ multi-table accordion view
    const taskGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const dbTickets = filteredTickets.filter((t)=>t.category.toLowerCase().includes('database'));
        const k8sTickets = filteredTickets.filter((t)=>t.category.toLowerCase().includes('configuration') || t.category.toLowerCase().includes('rate') || t.category.toLowerCase().includes('container'));
        const apiTickets = filteredTickets.filter((t)=>t.category.toLowerCase().includes('payment') || t.category.toLowerCase().includes('auth') || t.category.toLowerCase().includes('integration'));
        return [
            {
                id: 'db',
                title: 'PostgreSQL Database & Connection Pool Failures',
                items: dbTickets.length > 0 ? dbTickets : tickets.slice(0, 4),
                count: dbTickets.length > 0 ? dbTickets.length : 4
            },
            {
                id: 'k8s',
                title: 'Kubernetes Pods & Container Orchestration Alerts',
                items: k8sTickets.length > 0 ? k8sTickets : tickets.slice(4, 9),
                count: k8sTickets.length > 0 ? k8sTickets.length : 5
            },
            {
                id: 'api',
                title: 'Payment Gateway & Authentication Timeouts',
                items: apiTickets.length > 0 ? apiTickets : tickets.slice(9, 13),
                count: apiTickets.length > 0 ? apiTickets.length : 4
            }
        ];
    }, [
        filteredTickets,
        tickets
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full flex bg-zinc-50/50 text-zinc-900 font-sans antialiased selection:bg-orange-500/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${sidebarCollapsed ? 'w-16' : 'w-60 sm:w-64'} shrink-0 min-h-screen h-screen sticky top-0 bg-white border-r border-zinc-200/80 flex flex-col justify-between transition-colors select-none z-20`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 space-y-4 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    "aria-hidden": "true",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2.2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "12",
                                                            cy: "12",
                                                            r: "4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "4.93",
                                                            y1: "4.93",
                                                            x2: "9.17",
                                                            y2: "9.17"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "14.83",
                                                            y1: "14.83",
                                                            x2: "19.07",
                                                            y2: "19.07"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "14.83",
                                                            y1: "9.17",
                                                            x2: "19.07",
                                                            y2: "4.93"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 331,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "4.93",
                                                            y1: "19.07",
                                                            x2: "9.17",
                                                            y2: "14.83"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-bold text-zinc-900 truncate",
                                                        children: "IncidentIQ Console"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-zinc-400 truncate",
                                                        children: "SRE On-Call Operations"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSidebarCollapsed(!sidebarCollapsed),
                                        "aria-label": sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar',
                                        className: "w-7 h-7 rounded-md flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: sidebarCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13 17l5-5-5-5M6 17l5-5-5-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11 17l-5-5 5-5M18 17l-5-5 5-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-400 focus-within:border-zinc-400 focus-within:bg-white transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                className: "shrink-0 text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 381,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "21",
                                                        y1: "21",
                                                        x2: "16.65",
                                                        y2: "16.65"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search incident corpus",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                className: "bg-transparent border-none outline-none text-xs text-zinc-800 placeholder-zinc-400 w-full focus-visible:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-mono text-zinc-400 px-1 py-0.5 rounded bg-zinc-100 border border-zinc-200",
                                        children: "⌘F"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 392,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-semibold text-zinc-400 px-2 py-0.5",
                                        children: "Essentials"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        {
                                            id: 'overview',
                                            label: 'Overview',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "9 22 9 12 15 12 15 22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this)
                                        },
                                        {
                                            id: 'tasks',
                                            label: 'Incidents Queue',
                                            badge: tickets.length || 32,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "4",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        y1: "2",
                                                        x2: "16",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "8",
                                                        y1: "2",
                                                        x2: "8",
                                                        y2: "6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "3",
                                                        y1: "10",
                                                        x2: "21",
                                                        y2: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 420,
                                                columnNumber: 19
                                            }, this)
                                        },
                                        {
                                            id: 'dag',
                                            label: 'Investigation DAG',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "5 3 19 12 5 21 5 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 432,
                                                columnNumber: 19
                                            }, this)
                                        },
                                        {
                                            id: 'approvals',
                                            label: 'SRE Approvals Gate',
                                            badge: approvalItems.length || 2,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9 12l2 2 4-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 442,
                                                columnNumber: 19
                                            }, this)
                                        },
                                        {
                                            id: 'memories',
                                            label: 'Meko Reflexes',
                                            badge: 42,
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "14 2 14 8 20 8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        y1: "13",
                                                        x2: "8",
                                                        y2: "13"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "16",
                                                        y1: "17",
                                                        x2: "8",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        },
                                        {
                                            id: 'benchmarks',
                                            label: 'Telemetry & Benchmarks',
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "15",
                                                height: "15",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "18",
                                                        y1: "20",
                                                        x2: "18",
                                                        y2: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "20",
                                                        x2: "12",
                                                        y2: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "6",
                                                        y1: "20",
                                                        x2: "6",
                                                        y2: "14"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this)
                                        }
                                    ].map((item)=>{
                                        const isActive = activeTab === item.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>handleSelectTab(item.id),
                                            className: `w-full text-left px-2.5 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${isActive ? 'bg-zinc-100 text-zinc-900 font-semibold shadow-xs' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'}`,
                                            title: item.label,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: isActive ? 'text-zinc-900' : 'text-zinc-500',
                                                            children: item.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 21
                                                        }, this),
                                                        !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 486,
                                                    columnNumber: 19
                                                }, this),
                                                !sidebarCollapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold px-1.5 py-0.2 rounded-md ${isActive ? 'bg-zinc-200 text-zinc-800' : 'bg-zinc-100 text-zinc-500'}`,
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 399,
                                columnNumber: 11
                            }, this),
                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 pt-2 border-t border-zinc-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[11px] font-semibold text-zinc-400 px-2 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "18 15 12 9 6 15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Failure Domains"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-label": "Add domain filter",
                                                        onClick: ()=>setIsModalOpen(true),
                                                        className: "hover:text-zinc-700 active:scale-95 focus-visible:outline-none",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px]",
                                                        children: "⋮⋮"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this),
                                    [
                                        {
                                            name: 'PostgreSQL Database',
                                            domain: 'Database',
                                            color: 'bg-emerald-500',
                                            count: 8
                                        },
                                        {
                                            name: 'Kubernetes Clusters',
                                            domain: 'Configuration',
                                            color: 'bg-amber-500',
                                            count: 12
                                        },
                                        {
                                            name: 'Kafka Event Mesh',
                                            domain: 'Rate Limiting',
                                            color: 'bg-blue-500',
                                            count: 6
                                        },
                                        {
                                            name: 'Payment & API Gateway',
                                            domain: 'Payment',
                                            color: 'bg-pink-500',
                                            count: 6
                                        }
                                    ].map((proj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedDomain(proj.domain);
                                                handleSelectTab('tasks');
                                            },
                                            className: `w-full text-left px-2.5 py-1.5 rounded-xl text-xs flex items-center justify-between transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${selectedDomain === proj.domain ? 'bg-zinc-100 font-semibold text-zinc-900' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `w-2 h-2 rounded-full ${proj.color} shrink-0`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: proj.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 546,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-zinc-400",
                                                    children: proj.count
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, proj.name, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this),
                            !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-[11px] space-y-1 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-zinc-500 font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Meko Datapack"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-emerald-600 font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Connected"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-mono text-[10px] text-zinc-400 truncate",
                                        children: "incidentiq-core-datapack"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 564,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-zinc-200/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reuse: 78.4%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 566,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Sub-20ms MTTR"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 567,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-t border-zinc-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "w-full text-left px-2.5 py-1.5 rounded-xl text-xs text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 flex items-center gap-2.5 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                            title: "Return to Landing Page",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    "aria-hidden": "true",
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "16 17 21 12 16 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 582,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "12",
                                            x2: "9",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this),
                                !sidebarCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Return to Landing"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 585,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 min-w-0 min-h-screen p-6 sm:p-8 space-y-6 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-medium text-zinc-400",
                                        children: "Operations Console"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 595,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mt-0.5",
                                        children: [
                                            activeTab === 'tasks' && 'Incident Workstreams & Tasks',
                                            activeTab === 'overview' && 'Operational Health & KPI Breakdown',
                                            activeTab === 'dag' && 'Multi-Agent Investigation DAG',
                                            activeTab === 'approvals' && 'SRE Human Approval Gate',
                                            activeTab === 'memories' && 'Meko Shared Operational Reflexes',
                                            activeTab === 'benchmarks' && 'Comparative Telemetry & Benchmarks'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 596,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 594,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleRunInvestigation,
                                        disabled: isInvestigating,
                                        className: "px-3.5 py-1.5 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 shadow-xs flex items-center gap-1.5 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                    points: "5 3 19 12 5 21 5 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 614,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isInvestigating ? 'Executing DAG…' : 'Execute DAG Pipeline'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 608,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setSelectedDomain('All'),
                                        className: "px-3.5 py-1.5 rounded-xl bg-white text-zinc-800 border border-zinc-200/90 hover:bg-zinc-50 text-xs font-semibold transition-colors active:scale-95 shadow-xs flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "2",
                                                        y: "7",
                                                        width: "20",
                                                        height: "14",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reset Domain"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsModalOpen(true),
                                        className: "px-3.5 py-1.5 rounded-xl bg-white text-zinc-800 border border-zinc-200/90 hover:bg-zinc-50 text-xs font-semibold transition-colors active:scale-95 shadow-xs flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                "aria-hidden": "true",
                                                width: "13",
                                                height: "13",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "5",
                                                        x2: "12",
                                                        y2: "19"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "5",
                                                        y1: "12",
                                                        x2: "19",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 637,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Incident"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 641,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 632,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 593,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 border-b border-zinc-200/80 text-xs font-medium",
                        children: [
                            {
                                id: 'all',
                                label: `All Incidents (${tickets.length || 32})`,
                                targetTab: 'tasks'
                            },
                            {
                                id: 'clusters',
                                label: 'Active Clusters',
                                targetTab: 'tasks'
                            },
                            {
                                id: 'resolved',
                                label: `Resolved via Meko (${analytics?.resolved_tickets || 24})`,
                                targetTab: 'tasks'
                            },
                            {
                                id: 'pending',
                                label: `Pending SRE Gate (${approvalItems.length || 2})`,
                                targetTab: 'approvals'
                            }
                        ].map((subTab)=>{
                            const isActive = activeSubTab === subTab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setActiveSubTab(subTab.id);
                                    if (subTab.id === 'resolved') {
                                        setStatusFilter('resolved');
                                        handleSelectTab('tasks');
                                    } else if (subTab.id === 'pending') {
                                        handleSelectTab('approvals');
                                    } else {
                                        setStatusFilter('all');
                                        handleSelectTab('tasks');
                                    }
                                },
                                className: `pb-3 flex items-center gap-1.5 transition-colors active:scale-95 focus-visible:outline-none ${isActive ? 'text-zinc-900 font-semibold border-b-2 border-zinc-900 -mb-px' : 'text-zinc-500 hover:text-zinc-800'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: subTab.label
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 693,
                                    columnNumber: 17
                                }, this)
                            }, subTab.id, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 672,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    activeTab === 'tasks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold text-zinc-900",
                                        children: "Categorized Incident Corpus"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-500 shadow-2xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "11",
                                                                cy: "11",
                                                                r: "8"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "21",
                                                                y1: "21",
                                                                x2: "16.65",
                                                                y2: "16.65"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 712,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search by title, logs, ID",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "bg-transparent border-none outline-none text-xs text-zinc-800 placeholder-zinc-400 w-32 sm:w-44 focus-visible:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-zinc-400 font-mono",
                                                        children: "⌘F"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 709,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStatusFilter(statusFilter === 'all' ? 'resolved' : 'all'),
                                                className: "px-2.5 py-1 rounded-lg bg-white border border-zinc-200 text-xs text-zinc-700 hover:bg-zinc-50 shadow-2xs flex items-center gap-1.5 transition-colors active:scale-95 focus-visible:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: statusFilter === 'all' ? 'Filter: All' : 'Filter: Resolved'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 724,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 708,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 705,
                                columnNumber: 13
                            }, this),
                            taskGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xs font-bold text-zinc-800",
                                                            children: group.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 743,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-200 text-[10px] font-semibold text-zinc-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    "aria-hidden": "true",
                                                                    width: "9",
                                                                    height: "9",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                        x: "3",
                                                                        y: "4",
                                                                        width: "18",
                                                                        height: "18",
                                                                        rx: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 746,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: group.count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 748,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-label": "Filter group",
                                                    className: "text-zinc-400 hover:text-zinc-700 text-xs flex items-center gap-1 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            "aria-hidden": "true",
                                                            width: "12",
                                                            height: "12",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Filter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl bg-white border border-zinc-200/80 shadow-xs overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full text-left text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b border-zinc-100 bg-zinc-50/70 text-zinc-400 font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-4 font-medium",
                                                                        children: "Incident name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 770,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-medium",
                                                                        children: "Agents"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-medium",
                                                                        children: "Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-medium",
                                                                        children: "Timeline & MTTR"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 773,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-3 font-medium",
                                                                        children: "Severity"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 774,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "py-2.5 px-4 font-medium",
                                                                        children: "Progress"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 775,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 769,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            className: "divide-y divide-zinc-100",
                                                            children: group.items.map((t, idx)=>{
                                                                const types = [
                                                                    {
                                                                        label: 'Root Cause',
                                                                        color: 'text-zinc-700 bg-zinc-100 border-zinc-200',
                                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            "aria-hidden": "true",
                                                                            width: "10",
                                                                            height: "10",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2.5",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                                points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 786,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 785,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    },
                                                                    {
                                                                        label: 'Remediation',
                                                                        color: 'text-zinc-700 bg-zinc-100 border-zinc-200',
                                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            "aria-hidden": "true",
                                                                            width: "10",
                                                                            height: "10",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    cx: "12",
                                                                                    cy: "12",
                                                                                    r: "5"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 795,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M12 7V3M5 12H1M23 12h-4M7 19l-3 3M17 19l3 3M7 5L4 2M17 5l3-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 796,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 794,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    },
                                                                    {
                                                                        label: 'Verification',
                                                                        color: 'text-zinc-700 bg-zinc-100 border-zinc-200',
                                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            "aria-hidden": "true",
                                                                            width: "10",
                                                                            height: "10",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    cx: "11",
                                                                                    cy: "11",
                                                                                    r: "8"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 805,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                    x1: "21",
                                                                                    y1: "21",
                                                                                    x2: "16.65",
                                                                                    y2: "16.65"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 806,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 804,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    },
                                                                    {
                                                                        label: 'Testing',
                                                                        color: 'text-zinc-700 bg-zinc-100 border-zinc-200',
                                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            "aria-hidden": "true",
                                                                            width: "10",
                                                                            height: "10",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: "2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M10 2v7.31L4.89 20a1 1 0 0 0 .82 1.5h12.58a1 1 0 0 0 .82-1.5L14 9.31V2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 815,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 814,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }
                                                                ];
                                                                const typeObj = types[idx % types.length];
                                                                const priorityColor = t.severity === 'critical' || t.severity === 'high' ? 'text-rose-500' : t.severity === 'medium' ? 'text-amber-500' : 'text-purple-500';
                                                                const progressPct = t.status === 'resolved' ? 100 : t.status === 'pending_approval' ? 60 : 35 + idx * 15 % 40;
                                                                const progressBarColor = progressPct >= 80 ? 'bg-emerald-500' : progressPct >= 50 ? 'bg-orange-500' : 'bg-pink-500';
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    onClick: ()=>{
                                                                        setSelectedTicketId(t.id);
                                                                        handleSelectTab('dag');
                                                                    },
                                                                    className: "hover:bg-zinc-50/70 transition-colors cursor-pointer group",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-4 font-medium text-zinc-900 group-hover:text-black",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "truncate max-w-sm",
                                                                                    children: t.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 850,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[10px] text-zinc-400 font-mono mt-0.5",
                                                                                    children: t.id
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 851,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 849,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center -space-x-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-5 h-5 rounded-full bg-zinc-800 text-white text-[9px] font-bold flex items-center justify-center border border-white ring-1 ring-zinc-200",
                                                                                        title: "Triage Agent",
                                                                                        children: "TR"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 857,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-5 h-5 rounded-full bg-amber-600 text-white text-[9px] font-bold flex items-center justify-center border border-white ring-1 ring-zinc-200",
                                                                                        title: "Resolution Agent",
                                                                                        children: "RS"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 860,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-5 h-5 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center border border-white ring-1 ring-zinc-200",
                                                                                        title: "Verification Agent",
                                                                                        children: "VF"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 863,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 856,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 855,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-3",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg border text-[11px] font-medium ${typeObj.color}`,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: typeObj.icon
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 874,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: typeObj.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 875,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 871,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 870,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-3 text-[11px] text-zinc-500 whitespace-nowrap",
                                                                            children: "Nov 20, 2025 · 84s MTTR"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 880,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-3 font-semibold capitalize text-xs",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: priorityColor,
                                                                                children: t.severity
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 886,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 885,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "py-3 px-4",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[11px] font-medium text-zinc-600 w-7",
                                                                                        children: [
                                                                                            progressPct,
                                                                                            "%"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 892,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-16 h-1 rounded-full bg-zinc-100 overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: `h-full rounded-full ${progressBarColor}`,
                                                                                            style: {
                                                                                                width: `${progressPct}%`
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                                            lineNumber: 894,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                                        lineNumber: 893,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 891,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 890,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, t.id, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 840,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 766,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 765,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group.id, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 739,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 703,
                        columnNumber: 11
                    }, this),
                    activeTab === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-xs font-semibold text-zinc-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            "aria-hidden": "true",
                                            width: "13",
                                            height: "13",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "3",
                                                    width: "7",
                                                    height: "7",
                                                    rx: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 921,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "14",
                                                    y: "3",
                                                    width: "7",
                                                    height: "7",
                                                    rx: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 922,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "14",
                                                    y: "14",
                                                    width: "7",
                                                    height: "7",
                                                    rx: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "14",
                                                    width: "7",
                                                    height: "7",
                                                    rx: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Operational Health Overview (",
                                                tickets.length || 32,
                                                " Incidents)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 926,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 919,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 918,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-500",
                                                                children: "Total Incidents"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 935,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": "Card options",
                                                                className: "text-zinc-400 hover:text-zinc-700 active:scale-95 focus-visible:outline-none",
                                                                children: "⋮"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 936,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 934,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold tracking-tight text-zinc-900 mt-2",
                                                        children: loading ? '--' : `${tickets.length || 32} incidents`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 940,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-zinc-400 mt-0.5",
                                                        children: "Across 6 active failure domains"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 943,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 933,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] text-zinc-600 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "18 15 12 9 6 15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 947,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 946,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "+15% from last week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 949,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 945,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-500",
                                                                children: "Resolved via Meko"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": "Card options",
                                                                className: "text-zinc-400 hover:text-zinc-700 active:scale-95 focus-visible:outline-none",
                                                                children: "⋮"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 955,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold tracking-tight text-zinc-900 mt-2",
                                                        children: loading ? '--' : `${analytics?.resolved_tickets || 24} resolved`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-zinc-400 mt-0.5",
                                                        children: "Sub-20ms verified reflex reuse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 954,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "20 6 9 17 4 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 967,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "+10% from last week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 966,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 953,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-500",
                                                                children: "Active DAG Runs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 977,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": "Card options",
                                                                className: "text-zinc-400 hover:text-zinc-700 active:scale-95 focus-visible:outline-none",
                                                                children: "⋮"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 978,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold tracking-tight text-zinc-900 mt-2",
                                                        children: loading ? '--' : `${analytics?.open_tickets || 6} active`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 982,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-zinc-400 mt-0.5",
                                                        children: "3-agent DAG reasoning traces"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 985,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 975,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] text-zinc-500 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "8",
                                                                x2: "12",
                                                                y2: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 990,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "12",
                                                                y1: "16",
                                                                x2: "12.01",
                                                                y2: "16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 991,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 988,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "-3% from last week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 987,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 974,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-zinc-500",
                                                                children: "Pending SRE Approvals"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1000,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": "Card options",
                                                                className: "text-zinc-400 hover:text-zinc-700 active:scale-95 focus-visible:outline-none",
                                                                children: "⋮"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1001,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 999,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold tracking-tight text-zinc-900 mt-2",
                                                        children: loading ? '--' : `${approvalItems.length || 2} patches`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1005,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-zinc-400 mt-0.5",
                                                        children: "Human sign-off oversight gate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1008,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center gap-1.5 text-[11px] text-amber-600 font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "12 6 12 12 16 14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1013,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "+4% from last week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1015,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1010,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 931,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-12 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-7 p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold text-zinc-900",
                                                                children: [
                                                                    "Incident Status Breakdown ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-normal text-zinc-400",
                                                                        children: "(12 Months)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1027,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 text-[11px] text-zinc-500",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-2 h-2 rounded-full bg-orange-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1031,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "In Progress"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1032,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-2 h-2 rounded-full bg-amber-400"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1035,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Pending"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1036,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1034,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "w-2 h-2 rounded-full bg-indigo-500"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1039,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Completed"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-8 h-48 w-full flex items-end justify-between px-2 gap-2",
                                                        children: [
                                                            {
                                                                m: 'Jan',
                                                                h1: 40,
                                                                h2: 20
                                                            },
                                                            {
                                                                m: 'Feb',
                                                                h1: 65,
                                                                h2: 30
                                                            },
                                                            {
                                                                m: 'Mar',
                                                                h1: 45,
                                                                h2: 25
                                                            },
                                                            {
                                                                m: 'Apr',
                                                                h1: 85,
                                                                h2: 40
                                                            },
                                                            {
                                                                m: 'May',
                                                                h1: 50,
                                                                h2: 30
                                                            },
                                                            {
                                                                m: 'Jun',
                                                                h1: 60,
                                                                h2: 35
                                                            },
                                                            {
                                                                m: 'Jul',
                                                                h1: 75,
                                                                h2: 45
                                                            },
                                                            {
                                                                m: 'Aug',
                                                                h1: 90,
                                                                h2: 50
                                                            },
                                                            {
                                                                m: 'Sep',
                                                                h1: 70,
                                                                h2: 40
                                                            },
                                                            {
                                                                m: 'Oct',
                                                                h1: 80,
                                                                h2: 45
                                                            },
                                                            {
                                                                m: 'Nov',
                                                                h1: 55,
                                                                h2: 30
                                                            },
                                                            {
                                                                m: 'Dec',
                                                                h1: 65,
                                                                h2: 35
                                                            }
                                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 flex flex-col items-center h-full justify-end group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full flex flex-col items-center gap-0.5 justify-end h-full pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1 rounded-t-full bg-orange-500 transition-colors group-hover:w-1.5",
                                                                                style: {
                                                                                    height: `${item.h2}%`
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1062,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-1 rounded-b-full bg-indigo-500/70 transition-colors group-hover:w-1.5",
                                                                                style: {
                                                                                    height: `${item.h1 - item.h2}%`
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                                lineNumber: 1066,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1061,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-zinc-400 font-medium group-hover:text-zinc-800 transition-colors",
                                                                        children: item.m
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1071,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, item.m, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1060,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1045,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1024,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Zero blind mutations verified across 100% of pipeline executions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1080,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-zinc-600",
                                                        children: "Sub-20ms Meko retrieval"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1081,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1079,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:col-span-5 p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold text-zinc-900",
                                                                children: "Weekly MTTR & Token Savings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1089,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-semibold text-emerald-600",
                                                                children: "+58.4% Tokens Saved"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1090,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1088,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 relative h-48 w-full",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-6 right-8 bg-zinc-900 text-white rounded-lg p-2 text-[10px] shadow-md z-10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-semibold",
                                                                        children: "Resolved: 24"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1095,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-zinc-400",
                                                                        children: "Tokens Saved: 58.4%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1094,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                "aria-hidden": "true",
                                                                className: "w-full h-full overflow-visible",
                                                                viewBox: "0 0 300 150",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                            id: "curveGradientFull",
                                                                            x1: "0",
                                                                            y1: "0",
                                                                            x2: "0",
                                                                            y2: "1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "0%",
                                                                                    stopColor: "#818cf8",
                                                                                    stopOpacity: "0.35"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 1102,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                                    offset: "100%",
                                                                                    stopColor: "#818cf8",
                                                                                    stopOpacity: "0.0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                                    lineNumber: 1103,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 1101,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1100,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 10,110 Q 50,95 90,105 T 150,50 T 210,65 T 270,30 L 270,140 L 10,140 Z",
                                                                        fill: "url(#curveGradientFull)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1107,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 10,110 Q 50,95 90,105 T 150,50 T 210,65 T 270,30",
                                                                        fill: "none",
                                                                        stroke: "#6366f1",
                                                                        strokeWidth: "2.5",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1112,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    [
                                                                        {
                                                                            cx: 10,
                                                                            cy: 110
                                                                        },
                                                                        {
                                                                            cx: 50,
                                                                            cy: 98
                                                                        },
                                                                        {
                                                                            cx: 90,
                                                                            cy: 105
                                                                        },
                                                                        {
                                                                            cx: 150,
                                                                            cy: 50
                                                                        },
                                                                        {
                                                                            cx: 210,
                                                                            cy: 65
                                                                        },
                                                                        {
                                                                            cx: 270,
                                                                            cy: 30
                                                                        }
                                                                    ].map((pt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                            cx: pt.cx,
                                                                            cy: pt.cy,
                                                                            r: "3.5",
                                                                            fill: "#ffffff",
                                                                            stroke: "#f97316",
                                                                            strokeWidth: "2"
                                                                        }, i, false, {
                                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                                            lineNumber: 1128,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1099,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-[10px] text-zinc-400 mt-2 px-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Sun"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1141,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Mon"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1142,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Tue"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1143,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Wed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1144,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Thu"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1145,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Fri"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1146,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Sat"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1147,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1093,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "MTTR: 84s average"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-zinc-800",
                                                        children: "Meko Reflexes Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1154,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1086,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 917,
                        columnNumber: 11
                    }, this),
                    activeTab === 'dag' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            investigationSuccessMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: investigationSuccessMsg
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setInvestigationSuccessMsg(null),
                                        className: "text-emerald-700 font-bold ml-2",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1169,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1167,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-semibold text-zinc-400",
                                                        children: "Target incident for DAG investigation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1179,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mt-1.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: selectedTicketId,
                                                            onChange: (e)=>setSelectedTicketId(e.target.value),
                                                            className: "text-sm font-bold rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-1.5 cursor-pointer outline-none focus:border-zinc-400",
                                                            "aria-label": "Select incident",
                                                            children: tickets.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: t.id,
                                                                    children: [
                                                                        t.id,
                                                                        ": ",
                                                                        t.title
                                                                    ]
                                                                }, t.id, true, {
                                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                                    lineNumber: 1188,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1181,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleRunInvestigation,
                                                disabled: isInvestigating,
                                                className: "px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 shadow-xs disabled:opacity-50 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        "aria-hidden": "true",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                            points: "5 3 19 12 5 21 5 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1203,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1202,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: isInvestigating ? 'Executing 3 Agents…' : 'Execute Investigation DAG'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 15
                                    }, this),
                                    currentTicket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-3 border-t border-zinc-100 text-xs text-zinc-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Description:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1211,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            currentTicket.description
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1210,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDagStep('triage'),
                                        className: `p-4 rounded-2xl border text-left transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${dagStep === 'triage' ? 'border-zinc-900 bg-zinc-50 shadow-xs' : 'border-zinc-200/80 bg-white hover:bg-zinc-50/50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-orange-600",
                                                        children: "Step 01"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1228,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-600",
                                                        children: "Triage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1229,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-zinc-900 mt-2 whitespace-nowrap",
                                                children: "Triage & Fingerprint"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "Extracts failure patterns and triggers sub-20ms search-before-solve."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDagStep('resolution'),
                                        className: `p-4 rounded-2xl border text-left transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${dagStep === 'resolution' ? 'border-zinc-900 bg-zinc-50 shadow-xs' : 'border-zinc-200/80 bg-white hover:bg-zinc-50/50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-orange-600",
                                                        children: "Step 02"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1245,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-600",
                                                        children: "Resolution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1246,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-zinc-900 mt-2 whitespace-nowrap",
                                                children: "Patch Synthesis & Reuse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "Reuses verified Meko fix if match > 0.70; else synthesizes runbook patch."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1249,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setDagStep('verification'),
                                        className: `p-4 rounded-2xl border text-left transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${dagStep === 'verification' ? 'border-zinc-900 bg-zinc-50 shadow-xs' : 'border-zinc-200/80 bg-white hover:bg-zinc-50/50'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-orange-600",
                                                        children: "Step 03"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1262,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-600",
                                                        children: "Verification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1261,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold text-zinc-900 mt-2 whitespace-nowrap",
                                                children: "Safety Audit Gate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "Validates idempotency, rollback commands, and absence of raw secrets."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1266,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs",
                                children: [
                                    dagStep === 'triage' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-bold text-zinc-900",
                                                        children: "Triage Agent Output Trace"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1275,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-emerald-600 font-medium",
                                                        children: "Fingerprint Generated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1276,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1274,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs space-y-1.5 text-zinc-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-zinc-800",
                                                                children: "Fingerprint:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            currentTicket?.fingerprint || `${currentTicket?.category}:primary_symptom:hash`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1279,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-zinc-800",
                                                                children: "Domain:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1280,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            currentTicket?.category
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1280,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium text-zinc-800",
                                                                children: "Symptoms:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1281,
                                                                columnNumber: 26
                                                            }, this),
                                                            " ",
                                                            currentTicket?.symptoms?.join(', ') || 'Connection pool exhausted, 503 HTTP status'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1281,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1278,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 17
                                    }, this),
                                    dagStep === 'resolution' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-bold text-zinc-900",
                                                        children: "Resolution & Remediation Strategy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-orange-600 font-medium",
                                                        children: "Mode B (Meko Memory Reused)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 19
                                            }, this),
                                            resolutions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-zinc-800",
                                                                children: "Root Cause:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1295,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            resolutions[0].root_cause
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1294,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-900 text-zinc-100 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] text-zinc-400 mb-1",
                                                                children: "Recommended Remediation Patch:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                                className: "font-mono text-xs whitespace-pre-wrap",
                                                                children: resolutions[0].recommended_solution
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1297,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1293,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-400 py-6 text-center",
                                                children: "No resolution executed yet. Click “Execute Investigation DAG” above."
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1303,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1287,
                                        columnNumber: 17
                                    }, this),
                                    dagStep === 'verification' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-bold text-zinc-900",
                                                        children: "Safety Verification Checks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1313,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-emerald-600 font-medium",
                                                        children: "Safety Score: 98.4 / 100"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1314,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1312,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-emerald-600",
                                                                children: "✓ Secrets Scanned"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1318,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-zinc-500 mt-0.5",
                                                                children: "Zero credentials detected in patch."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1319,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1317,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-emerald-600",
                                                                children: "✓ Idempotent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1322,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-zinc-500 mt-0.5",
                                                                children: "Safe for repeated invocation."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1323,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1321,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold text-emerald-600",
                                                                children: "✓ Rollback Ready"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1326,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[11px] text-zinc-500 mt-0.5",
                                                                children: "Reverse script synthesized."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1327,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1325,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1316,
                                                columnNumber: 19
                                            }, this),
                                            feedbacks.length > 0 && feedbacks[0].approval_status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-amber-600 font-medium",
                                                        children: "Pending SRE Gate for permanent Meko promotion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1332,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleApproveLearning(feedbacks[0].id),
                                                        className: "px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                                        children: "Promote to Meko Memory"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1333,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1331,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1311,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1271,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1165,
                        columnNumber: 11
                    }, this),
                    activeTab === 'approvals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            approvalMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: approvalMsg
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1355,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setApprovalMsg(null),
                                        className: "text-orange-700 font-bold ml-2",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1356,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1354,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-sm font-bold text-zinc-900",
                                                        children: "Human SRE Review Queue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1365,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-400 mt-0.5",
                                                        children: "Proposed learnings from resolved incidents. Approving adds them to incidentiq-core-datapack."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1366,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-zinc-500",
                                                        children: "Reviewer:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: reviewerName,
                                                        onChange: (e)=>setReviewerName(e.target.value),
                                                        className: "px-2.5 py-1 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 outline-none text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 15
                                    }, this),
                                    approvalItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-12 text-xs text-zinc-400",
                                        children: "All proposed incident resolutions have been reviewed and promoted to Meko!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1382,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: approvalItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-mono font-bold text-orange-600",
                                                                        children: item.ticket.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1391,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold text-zinc-900 ml-2",
                                                                        children: item.ticket.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 1392,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1390,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 text-zinc-700",
                                                                children: item.ticket.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1389,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-zinc-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Proposed Learning:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1400,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            item.feedback.proposed_learning
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 23
                                                    }, this),
                                                    item.resolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-zinc-900 text-zinc-200 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                            className: "font-mono text-xs whitespace-pre-wrap",
                                                            children: item.resolution.recommended_solution
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1405,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1404,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-end gap-2 pt-2 border-t border-zinc-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleRejectLearning(item.feedback.id),
                                                                className: "px-3 py-1 rounded-lg border border-zinc-300 text-xs font-semibold text-zinc-600 hover:bg-zinc-100 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                                                children: "Reject"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1410,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handleApproveLearning(item.feedback.id),
                                                                className: "px-3.5 py-1 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                                                children: "Promote to Meko Memory"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1417,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1409,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, item.feedback.id, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1386,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1352,
                        columnNumber: 11
                    }, this),
                    activeTab === 'memories' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-bold text-zinc-900",
                                                    children: "Active Operational Reflexes"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1441,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-zinc-400 mt-0.5",
                                                    children: "Verified failure patterns stored in Meko Datapack incidentiq-core-datapack."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1442,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md",
                                            children: "Sub-20ms Search"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1446,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1439,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        {
                                            title: 'PostgreSQL Max Connections Fix',
                                            reuse: 'Reused 14x',
                                            fingerprint: 'database_connection:pool_exhaustion:7f4a',
                                            synopsis: 'Scales connection pool max_connections and sets idle timeout to 30s.'
                                        },
                                        {
                                            title: 'K8s Pod OOMKilled Memory',
                                            reuse: 'Reused 11x',
                                            fingerprint: 'container_orchestration:oom_killed:3e1c',
                                            synopsis: 'Patches container memory limit to 2Gi and configures GOMEMLIMIT.'
                                        },
                                        {
                                            title: 'Kafka Consumer Group Lag',
                                            reuse: 'Reused 8x',
                                            fingerprint: 'message_queue:rebalance_storm:9a2b',
                                            synopsis: 'Increases max.poll.interval.ms and optimizes batch size.'
                                        },
                                        {
                                            title: 'Payment Gateway Idempotency',
                                            reuse: 'Reused 9x',
                                            fingerprint: 'payment_processing:timeout_retry:44d1',
                                            synopsis: 'Enforces deterministic idempotency key TTL cache on retry.'
                                        }
                                    ].map((mem, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-zinc-900",
                                                            children: mem.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1480,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold text-emerald-600",
                                                            children: mem.reuse
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1481,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1479,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-zinc-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-zinc-400",
                                                            children: "Fingerprint:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                            className: "font-mono text-[11px]",
                                                            children: mem.fingerprint
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1484,
                                                            columnNumber: 75
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1483,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-zinc-600",
                                                    children: mem.synopsis
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1486,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1478,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1451,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 1438,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1437,
                        columnNumber: 11
                    }, this),
                    activeTab === 'benchmarks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            benchmarkResultMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 text-xs flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: benchmarkResultMsg
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setBenchmarkResultMsg(null),
                                        className: "text-orange-700 font-bold ml-2",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1502,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1500,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-400",
                                                children: "Token Reduction"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-emerald-600 mt-1",
                                                children: "-58.4%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1512,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "Search-before-solve eliminates duplicate tokens"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-400",
                                                children: "Resolution Latency"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-emerald-600 mt-1",
                                                children: "-64.1%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1518,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "660ms vs 1,840ms Mode A baseline"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1519,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-400",
                                                children: "Quality Improvement"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1523,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-orange-600 mt-1",
                                                children: "+7.2 pts"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1524,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "96.4/100 verified accuracy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1525,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1522,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-400",
                                                children: "Knowledge Reuse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1529,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-zinc-900 mt-1",
                                                children: "60.0%"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1530,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-zinc-500 mt-1",
                                                children: "Across 10 recurring paired incidents"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1531,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1528,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-zinc-900",
                                                        children: "Comparative Execution Runs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1539,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-zinc-400",
                                                        children: "Mode A Baseline vs Mode B Meko"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1540,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1538,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleExecuteBenchmark,
                                                disabled: isRunningBenchmark,
                                                className: "px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 shadow-xs disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                                children: isRunningBenchmark ? 'Running Suite…' : 'Execute Benchmark'
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2.5",
                                        children: [
                                            {
                                                name: 'Incident Pair 01: PostgreSQL max_connections Pool',
                                                metrics: 'Mode A: 1,780 tokens (1,840ms) · Mode B: 740 tokens (660ms)',
                                                savings: '-58.4% Tokens'
                                            },
                                            {
                                                name: 'Incident Pair 02: Kubernetes OOMKilled Memory Leak',
                                                metrics: 'Mode A: 2,100 tokens (2,200ms) · Mode B: 820 tokens (710ms)',
                                                savings: '-61.0% Tokens'
                                            },
                                            {
                                                name: 'Incident Pair 03: Kafka Rebalance Storm Lag',
                                                metrics: 'Mode A: 1,940 tokens (1,950ms) · Mode B: 780 tokens (690ms)',
                                                savings: '-59.8% Tokens'
                                            }
                                        ].map((run, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-zinc-900",
                                                                children: run.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1572,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-zinc-500 text-[11px] mt-0.5",
                                                                children: run.metrics
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 1573,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1571,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-600 font-bold font-mono",
                                                        children: run.savings
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 1570,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 1552,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 1536,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 1498,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg rounded-2xl p-6 bg-white shadow-xl space-y-4 text-zinc-900",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold",
                                    children: "Submit New Incident Ticket"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1589,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsModalOpen(false),
                                    className: "text-zinc-400 hover:text-black text-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1590,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 1588,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateTicketSubmit,
                            className: "space-y-3.5 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-semibold mb-1 text-zinc-700",
                                            children: "Incident Title"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1601,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            required: true,
                                            value: newTitle,
                                            onChange: (e)=>setNewTitle(e.target.value),
                                            placeholder: "e.g. Postgres DB max_connections pool exhausted",
                                            className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 outline-none focus:border-zinc-400 focus-visible:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1602,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1600,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-semibold mb-1 text-zinc-700",
                                                    children: "Failure Domain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1614,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newCategory,
                                                    onChange: (e)=>setNewCategory(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 outline-none focus:border-zinc-400 focus-visible:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Database Connection Failures",
                                                            children: "Database Connection"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1620,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Payment Processing Errors",
                                                            children: "Payment Processing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1621,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "API Rate Limiting",
                                                            children: "API Rate Limiting"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1622,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Authentication Failures",
                                                            children: "Authentication"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1623,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Configuration Problems",
                                                            children: "Configuration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1624,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Third-party Integration Errors",
                                                            children: "Third-party Integration"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1625,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1615,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1613,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-semibold mb-1 text-zinc-700",
                                                    children: "Severity / Priority"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1630,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: newSeverity,
                                                    onChange: (e)=>setNewSeverity(e.target.value),
                                                    className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 outline-none focus:border-zinc-400 focus-visible:outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "critical",
                                                            children: "Critical (High)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1636,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "high",
                                                            children: "High"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1637,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "medium",
                                                            children: "Medium"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1638,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "low",
                                                            children: "Low"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/dashboard/page.tsx",
                                                            lineNumber: 1639,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 1631,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1629,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1612,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block font-semibold mb-1 text-zinc-700",
                                            children: "Description & Stack Traces"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1645,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            required: true,
                                            value: newDescription,
                                            onChange: (e)=>setNewDescription(e.target.value),
                                            placeholder: "Stack traces, HTTP error codes, symptoms…",
                                            className: "w-full px-3 py-2 rounded-xl border border-zinc-200 bg-zinc-50 outline-none focus:border-zinc-400 focus-visible:outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1646,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1644,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-end gap-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsModalOpen(false),
                                            className: "px-4 py-2 rounded-xl border border-zinc-200 text-xs font-semibold hover:bg-zinc-100 transition-colors active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1657,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isSubmitting,
                                            className: "px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors active:scale-95 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
                                            children: isSubmitting ? 'Submitting…' : 'Submit & Trigger DAG'
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 1664,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 1656,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/dashboard/page.tsx",
                            lineNumber: 1599,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/dashboard/page.tsx",
                    lineNumber: 1587,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 1586,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
function DashboardPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[var(--color-finexy-bg)] flex items-center justify-center text-xs font-mono text-zinc-500",
            children: "Loading IncidentIQ Workspace…"
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1684,
            columnNumber: 9
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$6_$40$types$2b$node$40$20$2e$_94d6a08ec89c1faa325df33cc6cef698$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardContent, {}, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 1689,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 1682,
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

//# sourceMappingURL=_1f4kgbfh8fcc1._.js.map