"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface FragranceEnquiryModalProps {
  fragrance: { id: string; name: string; price: string } | null;
  onClose: () => void;
}

export default function FragranceEnquiryModal({ fragrance, onClose }: FragranceEnquiryModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (fragrance) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [fragrance]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(() => { onClose(); setSubmitted(false); setForm({ name: "", email: "", message: "" }); }, 280);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fragrance) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/fragrance-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, fragrance: fragrance.name, message: form.message }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Something went wrong."); return; }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!fragrance) return null;

  const inputClass = "w-full bg-transparent border border-[#8C7235]/30 px-4 py-3 text-[13px] text-[#F5F0E8] placeholder-[#6B6450] focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={handleClose}
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-[520px] bg-[#0A0A08] border-l border-[#8C7235]/20 flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 py-7 border-b border-[#8C7235]/15 shrink-0">
          <div className="space-y-1">
            <span className="section-tag text-gold">Enquire to Acquire</span>
            <h2 className="font-serif font-light text-[#F5F0E8]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
              {fragrance.name}
            </h2>
            <p className="text-[#8C7235] font-light" style={{ fontSize: "13px" }}>{fragrance.price}</p>
          </div>
          <button onClick={handleClose} className="text-[#6B6450] hover:text-[#F5F0E8] transition-colors mt-1 p-1 -mr-1" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-7">
              <p className="text-[#A09888] font-light leading-[1.75]" style={{ fontSize: "14px" }}>
                Submit your details and we will personally follow up to discuss availability, delivery, and your experience with the house.
              </p>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#6B6450] font-medium" style={{ fontSize: "10px" }}>Your Name</label>
                <input type="text" required placeholder="Full name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#6B6450] font-medium" style={{ fontSize: "10px" }}>Email Address</label>
                <input type="email" required placeholder="your@email.com" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#6B6450] font-medium" style={{ fontSize: "10px" }}>
                  Fragrance of Interest
                </label>
                <div className="px-4 py-3 border border-[#8C7235]/30 text-[#F5F0E8] font-light" style={{ fontSize: "13px" }}>
                  {fragrance.name}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#6B6450] font-medium" style={{ fontSize: "10px" }}>
                  Message <span className="text-[#4A4438] normal-case tracking-normal">— Optional</span>
                </label>
                <textarea rows={3} placeholder="Any questions, occasion, or context you'd like to share…"
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none leading-[1.75]`} style={{ minHeight: "90px" }} />
              </div>

              {error && (
                <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400">{error}</div>
              )}

              <button type="submit" disabled={submitting}
                className="w-full py-4 bg-gold hover:bg-gold-light text-[#0A0A08] font-semibold uppercase transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontSize: "11px", letterSpacing: "0.3em" }}>
                {submitting ? "Submitting…" : "Submit Enquiry"}
              </button>

              <p className="text-[#4A4438] font-light text-center" style={{ fontSize: "11px" }}>
                No payment is collected at this stage. Our team will follow up personally.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-start space-y-6 py-6">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l4 4 10-10" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="space-y-2">
                <span className="section-tag text-gold block">Enquiry Received</span>
                <h3 className="font-serif font-light text-[#F5F0E8]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}>
                  Thank you, {form.name.split(" ")[0]}.
                </h3>
                <p className="text-[#A09888] font-light leading-[1.75]" style={{ fontSize: "14px" }}>
                  We have received your enquiry for <span className="text-[#F5F0E8]">{fragrance.name}</span>. A member of our team will be in touch personally within 24–48 hours.
                </p>
              </div>
              <button onClick={handleClose}
                className="border border-[#8C7235]/40 hover:border-gold px-8 py-3 text-[#A09888] hover:text-[#F5F0E8] transition-all duration-300 uppercase tracking-[0.2em]"
                style={{ fontSize: "10px" }}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
