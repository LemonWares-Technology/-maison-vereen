"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Check, Loader2 } from "lucide-react";

export type AdminFragrance = {
  id: string;
  slug: string;
  name: string;
  notes: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  sortOrder: number;
  published: boolean;
  no: string;
  createdAt: string;
  updatedAt: string;
};

export default function CollectionManager({
  initial,
}: {
  initial: AdminFragrance[];
}) {
  const [items, setItems] = useState(initial);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [reordering, setReordering] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  const inputClass =
    "w-full bg-transparent border-b border-white/8 py-2.5 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  async function persistOrder(next: AdminFragrance[]) {
    setReordering(true);
    setError("");
    setOk("");
    try {
      const res = await fetch("/api/admin/signature-fragrances", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: next.map((item) => item.id) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not update order.");
        return;
      }
      setItems(data.fragrances);
      setOk("Hierarchy updated.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setReordering(false);
    }
  }

  function move(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    const [row] = next.splice(index, 1);
    next.splice(target, 0, row);
    setItems(next);
    void persistOrder(next);
  }

  async function saveItem(item: AdminFragrance) {
    setSavingId(item.id);
    setError("");
    setOk("");
    try {
      const res = await fetch(`/api/admin/signature-fragrances/${item.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: item.name,
          notes: item.notes,
          description: item.description,
          imageSrc: item.imageSrc,
          imageAlt: item.imageAlt,
          published: item.published,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save.");
        return;
      }
      setItems((prev) =>
        prev.map((row) => (row.id === item.id ? { ...row, ...data.fragrance } : row))
      );
      setOk(`Saved ${item.name}.`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSavingId(null);
    }
  }

  function updateField(id: string, key: keyof AdminFragrance, value: string | boolean) {
    setItems((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [key]: value } : row))
    );
  }

  return (
    <div className="space-y-4">
      {(error || ok) && (
        <p className={`text-xs ${error ? "text-red-400" : "text-emerald-400"}`}>
          {error || ok}
        </p>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="border border-white/[0.07] bg-[#0D0D0D] p-5 space-y-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="font-serif text-gold text-lg">{item.no}</span>
                <span className="font-serif text-[#E8E2D9] tracking-[0.12em]">
                  {item.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => move(index, -1)}
                  disabled={index === 0 || reordering}
                  className="p-2 text-[#6A6258] hover:text-gold disabled:opacity-30"
                  aria-label="Move up"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => move(index, 1)}
                  disabled={index === items.length - 1 || reordering}
                  className="p-2 text-[#6A6258] hover:text-gold disabled:opacity-30"
                  aria-label="Move down"
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="space-y-1">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                  Name
                </span>
                <input
                  className={inputClass}
                  value={item.name}
                  onChange={(e) => updateField(item.id, "name", e.target.value)}
                />
              </label>
              <label className="space-y-1">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                  Notes
                </span>
                <input
                  className={inputClass}
                  value={item.notes}
                  onChange={(e) => updateField(item.id, "notes", e.target.value)}
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                  Description
                </span>
                <input
                  className={inputClass}
                  value={item.description}
                  onChange={(e) =>
                    updateField(item.id, "description", e.target.value)
                  }
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                  Image path
                </span>
                <input
                  className={inputClass}
                  value={item.imageSrc}
                  onChange={(e) => updateField(item.id, "imageSrc", e.target.value)}
                />
              </label>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <label className="flex items-center gap-2 text-xs text-[#6A6258] cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.published}
                  onChange={(e) =>
                    updateField(item.id, "published", e.target.checked)
                  }
                />
                Visible on site
              </label>
              <button
                type="button"
                onClick={() => saveItem(item)}
                disabled={savingId === item.id}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gold/40 text-gold text-[10px] uppercase tracking-[0.22em] hover:bg-gold/10 disabled:opacity-50"
              >
                {savingId === item.id ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Check className="w-3.5 h-3.5" />
                )}
                Save
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
