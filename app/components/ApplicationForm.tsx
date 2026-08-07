"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { HEADER_OFFSET_CLASS } from "./Header";

const STEPS = [
  { id: "you", num: "1", label: "YOU" },
  { id: "world", num: "2", label: "YOUR WORLD" },
  { id: "taste", num: "3", label: "YOUR TASTE" },
  { id: "intent", num: "4", label: "THE INTENT" },
] as const;

const HOW_HEARD = [
  "Personal referral",
  "Instagram",
  "LinkedIn",
  "WhatsApp",
  "Press",
  "Event",
  "Online search",
  "Other",
];

const COUNTRIES = [
  "Select country",
  "Nigeria",
  "South Africa",
  "Ghana",
  "Kenya",
  "United States",
  "United Kingdom",
  "France",
  "Germany",
  "Canada",
  "United Arab Emirates",
  "Other",
];

const LIFESTYLE_OPTIONS = [
  "Which statement best describes your lifestyle?",
  "I move through the world with quiet intention.",
  "I build things that outlast trends.",
  "I value depth over display.",
  "I collect experiences, not noise.",
  "Other",
];

const VALUE_OPTIONS = [
  "Integrity",
  "Excellence",
  "Creativity",
  "Faith",
  "Legacy",
  "Freedom",
  "Other",
];

const DESCRIBE_OPTIONS = [
  "How would the people closest to you describe you?",
  "Disciplined and considered",
  "Creative and intuitive",
  "Ambitious and grounded",
  "Quietly influential",
  "Other",
];

const FRAGRANCE_FAMILIES = [
  "Which fragrance family do you gravitate toward most?",
  "Oriental / Amber",
  "Woody",
  "Floral",
  "Fresh / Citrus",
  "Leather / Animalic",
  "I am still discovering",
];

const STYLE_OPTIONS = [
  "How would you describe your personal style?",
  "Minimal and precise",
  "Classic with modern edges",
  "Bold and expressive",
  "Quiet luxury",
  "Other",
];

const EXPERIENCE_OPTIONS = [
  "Select an option",
  "Yes — keep me informed of private experiences",
  "Yes — private previews only",
  "Not at this time",
];

const PRIVILEGES = [
  {
    title: "Permanently Numbered",
    body: "One of only 250 bottles in existence. Never to be repeated.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <path d="M10 30V14l8-6 8 6v16" />
        <path d="M10 14h16M14 30V18h8v12M14 22h8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Founder's Experience",
    body: "Early access. Private purchase. Personal correspondence from the Maison.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <circle cx="18" cy="18" r="12" />
        <path d="M18 10c3.5 0 6 2.2 6 5.2S21 20 18 20s-5.5-1.6-5.5-4" strokeLinecap="round" />
        <path d="M18 13c2 0 3.5 1.2 3.5 3s-1.4 3-3.5 3-3.2-.9-3.2-2.2" strokeLinecap="round" />
        <circle cx="18" cy="18" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "The First Chapter",
    body: "Edition I sets the foundation of the Maison Vereen legacy. You are part of the beginning.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <circle cx="18" cy="18" r="12" />
        <circle cx="18" cy="18" r="8" />
        <text x="18" y="21.5" textAnchor="middle" fill="currentColor" stroke="none" fontSize="9" fontFamily="Georgia, serif">
          M
        </text>
      </svg>
    ),
  },
  {
    title: "Legacy Recognition",
    body: "Your name will be recorded in the Maison Vereen archives for contributing to our story.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
        <circle cx="18" cy="18" r="12" />
        <path d="M6.5 18h23M18 6.5c3.2 3.5 5 7.2 5 11.5S21.2 26 18 29.5C14.8 26 13 22.3 13 18s1.8-8 5-11.5z" />
      </svg>
    ),
  },
];

const fieldClass =
  "w-full max-w-full min-w-0 bg-[#16130E] border border-gold/35 px-4 py-3.5 text-base font-light text-[#EDE8DE] placeholder:text-gold/55 outline-1 outline-gold/40 focus:border-gold transition-colors";
const selectClass =
  "w-full max-w-full min-w-0 bg-[#16130E] border border-gold/35 px-4 py-3.5 text-base font-light text-gold outline-1 outline-gold/40 focus:border-gold transition-colors appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20fill%3D%22none%22%20stroke%3D%22%23C9A84C%22%20stroke-width%3D%221.3%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10";
const dateClass =
  `${fieldClass} text-gold scheme-dark ` +
  "[&::-webkit-calendar-picker-indicator]:cursor-pointer " +
  "[&::-webkit-calendar-picker-indicator]:opacity-90 " +
  "[&::-webkit-calendar-picker-indicator]:[filter:invert(72%)_sepia(42%)_saturate(480%)_hue-rotate(5deg)_brightness(95%)]";
/** Bordered shell with label + control inside (Taste / Intent pattern) */
const floatShellClass =
  "block w-full max-w-full min-w-0 bg-[#16130E] border border-gold/35 px-4 py-3.5 outline-1 outline-gold/40 transition-colors focus-within:border-gold";
const floatLabelClass =
  "block font-sans text-sm sm:text-base text-gold font-light leading-snug";
const floatTextareaClass =
  "mt-2 w-full min-h-20 resize-y bg-transparent border-0 p-0 text-base font-light text-[#EDE8DE] placeholder:text-gold/55 outline-none";
const optionClass = "bg-[#0C0B0A] text-gold";
const labelClass =
  "font-sans text-xs uppercase tracking-[0.22em] text-gold font-medium";
/** Sentence-case question labels above fields */
const questionLabelClass =
  "block font-sans text-sm sm:text-base text-gold font-light leading-snug";

type FormState = {
  fullName: string;
  preferredName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  dob: string;
  occupation: string;
  howHeard: string;
  presence: string;
  lifestyle: string;
  values: string[];
  describedAs: string;
  passion: string;
  fragranceFamily: string;
  preferences: string;
  personalStyle: string;
  drawsYou: string;
  yourStory: string;
  experiences: string;
  consent: boolean;
};

const INITIAL_FORM: FormState = {
  fullName: "",
  preferredName: "",
  email: "",
  phone: "",
  country: COUNTRIES[0],
  city: "",
  dob: "",
  occupation: "",
  howHeard: "",
  presence: "",
  lifestyle: LIFESTYLE_OPTIONS[0],
  values: [],
  describedAs: DESCRIBE_OPTIONS[0],
  passion: "",
  fragranceFamily: FRAGRANCE_FAMILIES[0],
  preferences: "",
  personalStyle: STYLE_OPTIONS[0],
  drawsYou: "",
  yourStory: "",
  experiences: EXPERIENCE_OPTIONS[0],
  consent: false,
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [activeStep, setActiveStep] = useState("you");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [newsletterError, setNewsletterError] = useState("");

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    STEPS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(id);
        },
        { root: null, rootMargin: "-35% 0px -45% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!submitted) return;
    document
      .getElementById("registry-application")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submitted]);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleValue = (value: string) => {
    setForm((prev) => {
      const has = prev.values.includes(value);
      if (has) return { ...prev, values: prev.values.filter((v) => v !== value) };
      if (prev.values.length >= 3) return prev;
      return { ...prev, values: [...prev.values, value] };
    });
  };

  const requiredComplete =
    form.fullName.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.country !== COUNTRIES[0] &&
    form.occupation.trim().length > 0 &&
    form.drawsYou.trim().length > 0;

  const canSubmit = requiredComplete && form.consent;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      setSubmitError("Please complete all required fields before submitting.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const earlyThing = [
        form.preferredName && `Preferred name: ${form.preferredName}`,
        form.city && `City: ${form.city}`,
        form.dob && `DOB: ${form.dob}`,
        form.lifestyle !== LIFESTYLE_OPTIONS[0] && `Lifestyle: ${form.lifestyle}`,
        form.values.length && `Values: ${form.values.join(", ")}`,
        form.describedAs !== DESCRIBE_OPTIONS[0] && `Described as: ${form.describedAs}`,
        form.fragranceFamily !== FRAGRANCE_FAMILIES[0] && `Fragrance family: ${form.fragranceFamily}`,
        form.personalStyle !== STYLE_OPTIONS[0] && `Personal style: ${form.personalStyle}`,
        form.experiences !== EXPERIENCE_OPTIONS[0] && `Experiences: ${form.experiences}`,
      ]
        .filter(Boolean)
        .join("\n");

      const anythingElse = [
        form.presence && `Presence: ${form.presence}`,
        form.passion && `Passion: ${form.passion}`,
        form.preferences && `Preferences: ${form.preferences}`,
        form.yourStory && `Story: ${form.yourStory}`,
      ]
        .filter(Boolean)
        .join("\n\n");

      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          country: form.country,
          whatYouDo: form.occupation.trim(),
          howHeard:
            form.howHeard === "" ? "Not specified" : form.howHeard,
          whatMadeApply: form.drawsYou.trim(),
          earlyThing: earlyThing || null,
          anythingElse: anythingElse || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterStatus("loading");
    setNewsletterError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setNewsletterStatus("error");
        setNewsletterError(data.error ?? "Could not join. Please try again.");
        return;
      }
      setNewsletterStatus("ok");
      setNewsletterEmail("");
    } catch {
      setNewsletterStatus("error");
      setNewsletterError("Network error. Please try again.");
    }
  };

  return (
    <div
      id="registry-application"
      className={`relative bg-[#060506] text-[#EDE8DE] overflow-x-clip ${HEADER_OFFSET_CLASS}`}
    >
      <div className="w-[90%] md:w-full max-w-6xl mx-auto min-w-0">
        <div className="md:grid md:grid-cols-2 md:items-start md:gap-0">
          {/* LEFT — intro, image, privileges, quote, join */}
          <aside className="relative min-w-0 bg-[#060506] border-b md:border-b-0 md:border-r border-gold/20">
            <div className="w-full max-w-xl mx-auto md:max-w-none md:mx-0 md:pr-10 lg:pr-14 py-10 md:py-16 space-y-10 md:space-y-12 pb-14">
              {/* Intro */}
              <div className="space-y-5">
                <span className="font-sans text-xs uppercase tracking-[0.32em] text-gold font-medium block">
                  The House of 250
                </span>

                <h1
                  className="font-serif font-light text-gold leading-[1.08] tracking-tight uppercase"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.6rem)" }}
                >
                  This is not a pre-order.
                  <br />
                  This is a calling.
                </h1>

                {/* <div className="w-10 h-px bg-gold" /> */}

                <div className="space-y-4 body-copy">
                  <p>
                    Edition I is the first chapter in the story of Maison Vereen.
                    Only 250 bottles will ever exist. Once they are gone, they
                    will never be made again.
                  </p>
                  <p>
                    The House of 250 is not for everyone. It is for those who
                    value legacy over trend, presence over noise, and depth over
                    display.
                  </p>
                  <p className="italic text-gold">
                    If this is you, we invite you to step forward.
                  </p>
                </div>
              </div>

              {/* Product image — dark edges blend into page */}
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src="/edition1perfumebottle.webp"
                  alt="Maison Vereen Edition I — House of 250"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #060506 0%, transparent 12%, transparent 88%, #060506 100%), linear-gradient(to right, #060506 0%, transparent 8%, transparent 92%, #060506 100%)",
                  }}
                  aria-hidden
                />
              </div>

              {/* Privileges */}
              <div className="border border-gold/40 p-5 sm:p-6 space-y-5">
                <h2 className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-medium">
                  The Privilege of the House of 250
                </h2>
                <ul className="space-y-5">
                  {PRIVILEGES.map((item) => (
                    <li key={item.title} className="flex gap-3.5 items-start">
                      <span className="text-gold shrink-0 mt-0.5">{item.icon}</span>
                      <div className="space-y-1.5 min-w-0">
                        <p className="font-sans text-sm sm:text-base uppercase tracking-[0.12em] text-gold font-semibold">
                          {item.title}
                        </p>
                        <p className="font-sans text-sm sm:text-[15px] text-[#EDE8DE]/80 font-light leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="border border-gold/40 p-6 sm:p-8 text-center space-y-5">
                <span className="font-serif text-4xl text-gold leading-none block" aria-hidden>
                  &ldquo;
                </span>
                <p className="font-sans text-base sm:text-lg uppercase tracking-[0.14em] text-gold font-semibold leading-relaxed">
                  A fragrance from Maison Vereen is not something you wear. It is
                  something you become.
                </p>
                <p className="font-serif italic text-gold text-xl">Maison Vereen</p>
              </div>

              {/* Join the Maison */}
              <div className="space-y-5 pt-2">
                <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.18em] text-gold font-light">
                  Join the Maison
                </h2>
                <p className="font-sans text-base text-[#EDE8DE]/75 font-light leading-relaxed">
                  Be the first to hear about future Maison Vereen collections.
                </p>
                <form
                  onSubmit={handleNewsletter}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    className={`${fieldClass} flex-1`}
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="border border-gold/60 hover:border-gold text-gold px-8 py-3 text-xs tracking-[0.28em] uppercase font-medium transition-colors shrink-0"
                  >
                    {newsletterStatus === "loading" ? "…" : "Join"}
                  </button>
                </form>
                {newsletterStatus === "ok" && (
                  <p className="font-sans text-sm text-gold">You are on the list.</p>
                )}
                {newsletterStatus === "error" && (
                  <p className="font-sans text-sm text-red-300/90">{newsletterError}</p>
                )}
              </div>
            </div>
          </aside>

          {/* RIGHT — application form */}
          <div className="relative min-w-0 bg-[#060506] scroll-mt-4">
            <div className="w-full max-w-2xl mx-auto md:max-w-none md:mx-0 md:pl-10 lg:pl-14 py-10 md:py-16 space-y-10 min-w-0">
              <div className="space-y-3">
                <h2 className="font-serif text-xl sm:text-2xl uppercase tracking-[0.18em] text-gold font-light">
                  Registry Application
                </h2>
                <p className="font-sans text-base text-[#EDE8DE]/75 font-light leading-relaxed max-w-lg">
                  Tell us about you. Not just what you like - but what moves you. This helps us understand if we're the right fit, and how we can best serve you as part of the House.
                </p>
              </div>

              {/* Stepper */}
              <div className="flex items-start justify-between gap-1 sm:gap-2 pt-2 overflow-hidden">
                {STEPS.map((step, i) => {
                  const active = activeStep === step.id;
                  const activeIdx = STEPS.findIndex((s) => s.id === activeStep);
                  const done = i < activeIdx;
                  return (
                    <div key={step.id} className="flex-1 min-w-0 flex flex-col items-center gap-2 relative">
                      {i < STEPS.length - 1 && (
                        <div
                          className={`absolute top-4 left-[calc(50%+14px)] w-[calc(100%-14px)] h-px ${
                            done || active ? "bg-gold/60 " : "bg-gold/25"
                          }`}
                          aria-hidden
                        />
                      )}
                      <div
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-sans ${
                          active
                            ? "bg-gold text-[#060506]"
                            : "border border-gold/50 text-gold bg-[#060506]"
                        }`}
                      >
                        {step.num}
                      </div>
                      <span
                        className={`font-serif text-[10px] sm:text-xs uppercase tracking-[0.18em] text-center ${
                          active ? "text-gold" : "text-gold/55"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {submitted ? (
                <div className="border border-gold/40 p-8 space-y-4 text-center">
                  <p className="font-serif text-2xl text-gold font-light">
                    Application received.
                  </p>
                  <p className="font-sans text-base text-[#EDE8DE]/85 font-light leading-relaxed">
                    A member of the House will review your application personally.
                    You will receive a response at the email you provided.
                  </p>
                  <Link
                    href="/"
                    className="inline-block border border-gold/60 hover:border-gold text-gold px-8 py-3 text-xs tracking-[0.28em] uppercase font-medium transition-colors"
                  >
                    Return to the House
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-14">
                  <section
                    id="step-you"
                    ref={(el) => {
                      sectionRefs.current.you = el;
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-gold font-light">
                        1. You
                      </h3>
                      <p className={labelClass}>Let&apos;s get to know you.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <label className="block space-y-2">
                        <span className={labelClass}>
                          Full Name <span className="text-gold" aria-hidden>*</span>
                        </span>
                        <input
                          className={fieldClass}
                          placeholder="Full Name"
                          value={form.fullName}
                          onChange={(e) => setField("fullName", e.target.value)}
                          required
                          aria-required="true"
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>Preferred Name</span>
                        <input
                          className={fieldClass}
                          placeholder="Name you prefer to be addressed"
                          value={form.preferredName}
                          onChange={(e) => setField("preferredName", e.target.value)}
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>
                          Email Address <span className="text-gold" aria-hidden>*</span>
                        </span>
                        <input
                          type="email"
                          className={fieldClass}
                          placeholder="Email Address"
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                          required
                          aria-required="true"
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>Phone Number</span>
                        <input
                          type="tel"
                          className={fieldClass}
                          placeholder="Phone Number"
                          value={form.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>
                          Country <span className="text-gold" aria-hidden>*</span>
                        </span>
                        <select
                          className={selectClass}
                          value={form.country}
                          onChange={(e) => setField("country", e.target.value)}
                          required
                          aria-required="true"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c} className={optionClass}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>City</span>
                        <input
                          className={fieldClass}
                          placeholder="City"
                          value={form.city}
                          onChange={(e) => setField("city", e.target.value)}
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>Date of Birth</span>
                        <input
                          type="date"
                          className={dateClass}
                          value={form.dob}
                          onChange={(e) => setField("dob", e.target.value)}
                        />
                      </label>
                      <label className="block space-y-2">
                        <span className={labelClass}>
                          Occupation / Industry <span className="text-gold" aria-hidden>*</span>
                        </span>
                        <input
                          className={fieldClass}
                          placeholder="Occupation / Industry"
                          value={form.occupation}
                          onChange={(e) => setField("occupation", e.target.value)}
                          required
                          aria-required="true"
                        />
                      </label>
                    </div>

                    <label className={floatShellClass}>
                      <span className={floatLabelClass}>How did you hear about Maison Vereen?</span>
                      <select
                        className="mt-2 w-full bg-transparent border-0 p-0 text-base font-light text-gold outline-none appearance-none cursor-pointer"
                        value={form.howHeard}
                        onChange={(e) => setField("howHeard", e.target.value)}
                      >
                        <option value="" disabled className={optionClass}>Select an option</option>
                        {HOW_HEARD.map((o) => (
                          <option key={o} value={o} className={optionClass}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className={floatShellClass}>
                      <span className={floatLabelClass}>What does presence mean to you?</span>
                      <textarea
                        className={floatTextareaClass}
                        placeholder="Share your thoughts..."
                        value={form.presence}
                        onChange={(e) => setField("presence", e.target.value)}
                      />
                    </label>
                  </section>

                  <section
                    id="step-world"
                    ref={(el) => {
                      sectionRefs.current.world = el;
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-gold font-light">
                        2. Your World
                      </h3>
                      <p className={labelClass}>
                        Help us understand your rhythm, values &amp; lifestyle.
                      </p>
                    </div>

                    <select
                      className={selectClass}
                      value={form.lifestyle}
                      onChange={(e) => setField("lifestyle", e.target.value)}
                    >
                      {LIFESTYLE_OPTIONS.map((o) => (
                        <option key={o} value={o} className={optionClass}>
                          {o}
                        </option>
                      ))}
                    </select>

                    <div className="space-y-4">
                      <p className="font-sans text-base text-gold font-light">
                        What are values you live by?{" "}
                        <span className="text-gold/70">(Select up to 3)</span>
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {VALUE_OPTIONS.map((value) => {
                          const checked = form.values.includes(value);
                          return (
                            <label
                              key={value}
                              className="flex items-center gap-2.5 cursor-pointer group"
                            >
                              <span
                                className={`w-4 h-4 border shrink-0 flex items-center justify-center transition-colors ${
                                  checked
                                    ? "border-gold bg-gold/20"
                                    : "border-gold/50"
                                }`}
                              >
                                {checked && (
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden>
                                    <path d="M1 4l2.5 2.5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </span>
                              <input
                                type="checkbox"
                                className="sr-only"
                                checked={checked}
                                onChange={() => toggleValue(value)}
                              />
                              <span className="font-sans text-base text-gold font-light group-hover:text-gold-light transition-colors">
                                {value}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <select
                      className={selectClass}
                      value={form.describedAs}
                      onChange={(e) => setField("describedAs", e.target.value)}
                    >
                      {DESCRIBE_OPTIONS.map((o) => (
                        <option key={o} value={o} className={optionClass}>
                          {o}
                        </option>
                      ))}
                    </select>

                    <textarea
                      className={`${fieldClass} min-h-28 resize-y`}
                      placeholder="What is one thing you are deeply passionate about? Share your thoughts..."
                      value={form.passion}
                      onChange={(e) => setField("passion", e.target.value)}
                    />
                  </section>

                  <section
                    id="step-taste"
                    ref={(el) => {
                      sectionRefs.current.taste = el;
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-gold font-light uppercase tracking-[0.08em]">
                        3. Your Taste
                      </h3>
                      <p className={labelClass}>
                        We curate for depth. Tell us what you appreciate.
                      </p>
                    </div>

                    <select
                      className={selectClass}
                      value={form.fragranceFamily}
                      onChange={(e) => setField("fragranceFamily", e.target.value)}
                      aria-label="Which fragrance family do you gravitate toward most?"
                    >
                      {FRAGRANCE_FAMILIES.map((o) => (
                        <option key={o} value={o} className={optionClass}>
                          {o}
                        </option>
                      ))}
                    </select>

                    <label className={floatShellClass}>
                      <span className={floatLabelClass}>
                        Do you have any fragrance preferences or dislikes we should
                        know?
                      </span>
                      <textarea
                        className={floatTextareaClass}
                        placeholder="Share your thoughts..."
                        value={form.preferences}
                        onChange={(e) => setField("preferences", e.target.value)}
                      />
                    </label>

                    <select
                      className={selectClass}
                      value={form.personalStyle}
                      onChange={(e) => setField("personalStyle", e.target.value)}
                      aria-label="How would you describe your personal style?"
                    >
                      {STYLE_OPTIONS.map((o) => (
                        <option key={o} value={o} className={optionClass}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </section>

                  <section
                    id="step-intent"
                    ref={(el) => {
                      sectionRefs.current.intent = el;
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-gold font-light uppercase tracking-[0.08em]">
                        4. The Intent
                      </h3>
                      <p className={labelClass}>
                        Why are you interested in joining the House of 250?
                      </p>
                    </div>

                    <label className="block space-y-2">
                      <span className={questionLabelClass}>
                        What draws you to Edition I – The House of 250?{" "}
                        <span className="text-gold" aria-hidden>*</span>
                      </span>
                      <textarea
                        className={`${fieldClass} min-h-28 resize-y`}
                        placeholder="Share your thoughts..."
                        value={form.drawsYou}
                        onChange={(e) => setField("drawsYou", e.target.value)}
                        required
                        aria-required="true"
                      />
                    </label>

                    <label className="block space-y-2">
                      <span className={questionLabelClass}>
                        How do you envision Maison Vereen becoming a part of your
                        story?
                      </span>
                      <textarea
                        className={`${fieldClass} min-h-28 resize-y`}
                        placeholder="Share your thoughts..."
                        value={form.yourStory}
                        onChange={(e) => setField("yourStory", e.target.value)}
                      />
                    </label>

                    <label className="block space-y-2">
                      <span className={questionLabelClass}>
                        Would you like to be considered for any special experiences
                        or private previews?
                      </span>
                      <select
                        className={selectClass}
                        value={form.experiences}
                        onChange={(e) => setField("experiences", e.target.value)}
                      >
                        {EXPERIENCE_OPTIONS.map((o) => (
                          <option key={o} value={o} className={optionClass}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>
                  </section>

                  <div className="space-y-6 pt-2 border-t border-gold/25">
                    <label className="flex items-start gap-3 cursor-pointer group pt-6">
                      <span
                        className={`mt-0.5 w-4 h-4 border shrink-0 flex items-center justify-center ${
                          form.consent ? "border-gold bg-gold/20" : "border-gold/50"
                        }`}
                      >
                        {form.consent && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="#C9A84C" strokeWidth="1.4" aria-hidden>
                            <path d="M1 4l2.5 2.5L9 1" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={form.consent}
                        onChange={(e) => setField("consent", e.target.checked)}
                      />
                      <span className="font-sans text-base text-gold font-light leading-relaxed group-hover:text-gold-light">
                        I understand that registration does not guarantee
                        selection. Only 250 will be chosen.
                      </span>
                    </label>

                    {submitError && (
                      <p className="font-sans text-base text-red-300/90">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting || !canSubmit}
                      className="w-full bg-gold hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed text-[#060506] py-4 text-xs tracking-[0.28em] uppercase font-semibold transition-colors"
                    >
                      {submitting ? "Submitting…" : "Submit Application"}
                    </button>

                    <p className="flex items-center justify-center gap-2 font-sans text-xs text-gold/70 tracking-wide">
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
                        <rect x="2" y="6" width="8" height="7" rx="1" />
                        <path d="M4 6V4.5a2 2 0 014 0V6" strokeLinecap="round" />
                      </svg>
                      All information is kept private and secured.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
