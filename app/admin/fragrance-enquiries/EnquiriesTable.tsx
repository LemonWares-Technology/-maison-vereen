"use client";

import { useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface Enquiry {
  id: string;
  name: string;
  email: string;
  fragrance: string;
  message: string | null;
  status: string;
  createdAt: string;
}

interface Pagination { total: number; page: number; limit: number; pages: number; }

const STATUS_META: Record<string, { label: string; cls: string }> = {
  NEW:       { label: "New",       cls: "text-amber-400  border-amber-400/30  bg-amber-400/[0.08]" },
  CONTACTED: { label: "Contacted", cls: "text-blue-400   border-blue-400/30   bg-blue-400/[0.08]" },
  COMPLETED: { label: "Completed", cls: "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.08]" },
};

const STATUSES = ["", "NEW", "CONTACTED", "COMPLETED"];

function StatusBadge({ status }: { status: string }) {
  const m = STATUS_META[status] ?? { label: status, cls: "" };
  return <span className={`inline-flex text-xs uppercase tracking-[0.15em] border px-2 py-0.5 leading-5 ${m.cls}`}>{m.label}</span>;
}

export default function EnquiriesTable({
  enquiries,
  pagination,
  currentSearch,
  currentStatus,
}: {
  enquiries: Enquiry[];
  pagination: Pagination;
  currentSearch: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [search, setSearch] = useState(currentSearch);
  const [expanded, setExpanded] = useState<string | null>(null);

  function updateParams(updates: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) => v ? params.set(k, v) : params.delete(k));
    startTransition(() => router.push(`${pathname}?${params.toString()}`));
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParams({ search, page: "1" });
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/fragrance-enquiry/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    router.refresh();
  }

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        <form onSubmit={handleSearch} className="flex-1 flex min-w-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3A3530] pointer-events-none" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, fragrance…"
              className="w-full bg-[#0D0D0D] border border-white/[0.07] pl-9 pr-8 py-2.5 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/40 transition-colors" />
            {search && (
              <button type="button" onClick={() => { setSearch(""); updateParams({ search: "", page: "1" }); }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3A3530] hover:text-[#E8E2D9]">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button type="submit" className="border border-l-0 border-white/[0.07] bg-[#0D0D0D] px-4 text-xs uppercase tracking-widest text-[#4A4438] hover:text-gold transition-colors shrink-0">Go</button>
        </form>
        <div className="relative shrink-0">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#3A3530] pointer-events-none" />
          <select value={currentStatus} onChange={(e) => updateParams({ status: e.target.value, page: "1" })}
            className="bg-[#0D0D0D] border border-white/[0.07] pl-8 pr-4 py-2.5 text-xs text-[#8A8178] focus:outline-none focus:border-gold/40 cursor-pointer appearance-none sm:w-[160px]">
            {STATUSES.map((s) => <option key={s} value={s} className="bg-[#0D0D0D]">{s || "All statuses"}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      {!pending && (
        <div className="border border-white/6 overflow-hidden">
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 bg-[#0C0C0C]">
                  {["Enquirer", "Fragrance", "Status", "Date", "Actions"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#3A3530] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {enquiries.length === 0 ? (
                  <tr><td colSpan={5} className="px-5 py-16 text-center text-[#2A2420] text-sm">No enquiries yet.</td></tr>
                ) : enquiries.map((enq) => (
                  <>
                    <tr key={enq.id} className="admin-row cursor-pointer hover:bg-white/2" onClick={() => setExpanded(expanded === enq.id ? null : enq.id)}>
                      <td className="px-5 py-3.5">
                        <p className="text-sm text-[#C8C0B4] font-medium">{enq.name}</p>
                        <p className="text-xs text-[#3A3530]">{enq.email}</p>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#5A5449]">{enq.fragrance}</td>
                      <td className="px-5 py-3.5"><StatusBadge status={enq.status} /></td>
                      <td className="px-5 py-3.5 text-xs text-[#3A3530] whitespace-nowrap">
                        {new Date(enq.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          {STATUSES.filter(s => s && s !== enq.status).map((s) => (
                            <button key={s} onClick={(e) => { e.stopPropagation(); updateStatus(enq.id, s); }}
                              className={`text-xs uppercase tracking-widest border px-2 py-1 transition-colors ${STATUS_META[s]?.cls ?? ""} opacity-60 hover:opacity-100`}>
                              {STATUS_META[s]?.label}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                    {expanded === enq.id && enq.message && (
                      <tr key={`${enq.id}-msg`} className="bg-[#0D0D0D]">
                        <td colSpan={5} className="px-5 py-4">
                          <p className="text-xs uppercase tracking-[0.2em] text-[#3A3530] mb-2">Message</p>
                          <p className="text-xs text-[#7A7068] leading-relaxed max-w-[600px]">{enq.message}</p>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile list */}
          <div className="sm:hidden divide-y divide-white/5">
            {enquiries.length === 0 ? (
              <p className="py-16 text-center text-[#2A2420] text-sm">No enquiries yet.</p>
            ) : enquiries.map((enq) => (
              <div key={enq.id} className="px-4 py-4 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-[#C8C0B4] font-medium">{enq.name}</p>
                    <p className="text-xs text-[#3A3530]">{enq.email}</p>
                    <p className="text-xs text-[#5A5449] mt-1">{enq.fragrance}</p>
                  </div>
                  <StatusBadge status={enq.status} />
                </div>
                {enq.message && <p className="text-xs text-[#5A5449] leading-relaxed">{enq.message}</p>}
                <div className="flex items-center gap-2 pt-1">
                  {STATUSES.filter(s => s && s !== enq.status).map((s) => (
                    <button key={s} onClick={() => updateStatus(enq.id, s)}
                      className={`text-xs uppercase tracking-widest border px-2 py-1 ${STATUS_META[s]?.cls ?? ""} opacity-70 hover:opacity-100 transition-opacity`}>
                      → {STATUS_META[s]?.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-[#0C0C0C]">
              <span className="text-xs text-[#3A3530]">
                {(pagination.page - 1) * pagination.limit + 1}–{Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
              </span>
              <div className="flex items-center gap-1">
                <button disabled={pagination.page <= 1} onClick={() => updateParams({ page: String(pagination.page - 1) })}
                  className="p-1.5 text-[#4A4438] hover:text-gold disabled:opacity-25 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs text-[#5A5449] tabular-nums">{pagination.page}/{pagination.pages}</span>
                <button disabled={pagination.page >= pagination.pages} onClick={() => updateParams({ page: String(pagination.page + 1) })}
                  className="p-1.5 text-[#4A4438] hover:text-gold disabled:opacity-25 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
