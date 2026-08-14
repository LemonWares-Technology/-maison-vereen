"use client";

import { useState, useEffect } from "react";

interface FragranceEnquiryModalProps {
  fragrance: { id: string; name: string; no?: string; price?: string } | null;
  onClose: () => void;
}

const TEAM_WHATSAPP = "2348144413526";

export default function FragranceEnquiryModal({
  fragrance,
  onClose,
}: FragranceEnquiryModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (fragrance) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [fragrance]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
      setError("");
    }, 280);
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
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          fragrance: fragrance.name,
          fragranceNo: fragrance.no ?? "",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      const whatsappText = [
        "New Signature Collection enquiry",
        "",
        `Fragrance: ${fragrance.name}${fragrance.no ? ` (${fragrance.no})` : ""}`,
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Phone: ${form.phone.trim()}`,
        form.message.trim() ? `Message: ${form.message.trim()}` : null,
      ]
        .filter(Boolean)
        .join("\n");
      window.open(
        `https://wa.me/${TEAM_WHATSAPP}?text=${encodeURIComponent(whatsappText)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!fragrance) return null;

  const inputClass =
    "w-full bg-transparent border border-gold/30 px-4 py-3 text-sm text-[#EDE8DE] placeholder-[#EDE8DE]/35 focus:outline-none focus:border-gold/60 transition-colors duration-300";

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={handleClose}
      />

      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-[520px] bg-[#0A0A08] border-l border-gold/20 flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: visible ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-start justify-between px-8 py-7 border-b border-gold/15 shrink-0">
          <div className="space-y-1">
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold font-medium">
              Enquire to Acquire
            </span>
            <h2
              className="font-serif font-light text-[#EDE8DE]"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}
            >
              {fragrance.name}
            </h2>
            {fragrance.no ? (
              <p className="text-gold/80 font-light text-sm">{fragrance.no}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="text-[#EDE8DE]/45 hover:text-[#EDE8DE] transition-colors mt-1 p-1 -mr-1"
            aria-label="Close"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden
            >
              <path d="M3 3l12 12M15 3L3 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-7">
              <p className="text-[#EDE8DE]/75 font-light leading-[1.75] text-sm md:text-base">
                Submit your details and we will personally follow up to discuss
                availability, delivery, and your experience with the house.
              </p>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#EDE8DE]/45 font-medium text-[10px]">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#EDE8DE]/45 font-medium text-[10px]">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#EDE8DE]/45 font-medium text-[10px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / phone number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#EDE8DE]/45 font-medium text-[10px]">
                  Fragrance of Interest
                </label>
                <div className="px-4 py-3 border border-gold/30 text-[#EDE8DE] font-light text-sm">
                  {fragrance.no ? `${fragrance.no} — ${fragrance.name}` : fragrance.name}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block uppercase tracking-[0.25em] text-[#EDE8DE]/45 font-medium text-[10px]">
                  Message{" "}
                  <span className="text-[#EDE8DE]/30 normal-case tracking-normal">
                    — Optional
                  </span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Any questions, occasion, or context you’d like to share…"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none leading-[1.75] min-h-[90px]`}
                />
              </div>

              {error && (
                <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gold hover:bg-gold-light text-[#060506] font-semibold uppercase tracking-[0.3em] text-[11px] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting…" : "Submit Enquiry"}
              </button>

              <p className="text-[#EDE8DE]/35 font-light text-center text-[11px]">
                No payment is collected at this stage. Our team will follow up
                personally.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-start space-y-6 py-6">
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l4 4 10-10"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-gold font-medium block">
                  Enquiry Received
                </span>
                <h3
                  className="font-serif font-light text-[#EDE8DE]"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)" }}
                >
                  Thank you, {form.name.split(" ")[0]}.
                </h3>
                <p className="text-[#EDE8DE]/75 font-light leading-[1.75] text-sm md:text-base">
                  We have received your enquiry for{" "}
                  <span className="text-[#EDE8DE]">{fragrance.name}</span>. A
                  member of our team will be in touch personally within 24–48
                  hours.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="border border-gold/40 hover:border-gold px-8 py-3 text-[#EDE8DE]/70 hover:text-[#EDE8DE] transition-all duration-300 uppercase tracking-[0.2em] text-[10px]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
