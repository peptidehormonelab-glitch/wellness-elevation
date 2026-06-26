import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft, SlideRight } from "@/components/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PLC Optimization" },
      {
        name: "description",
        content:
          "Contact PLC Optimization LLC for private coaching, services, product information or partnership inquiries. We respond within one business day.",
      },
      { property: "og:title", content: "Contact — PLC Optimization" },
      { property: "og:description", content: "Speak with the PLC Optimization team. We respond within one business day." },
    ],
  }),
  component: Contact,
});

const INTERESTS = [
  "Private Coaching",
  "Sports Performance",
  "Healthy Aging & Longevity",
  "Nutrition & Supplements",
  "Cosmetic & Skincare",
  "Partnership / Wholesale",
  "General Inquiry",
];

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@plcoptimization.com",
    href: "mailto:contact@plcoptimization.com",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within one business day",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
];

const REASONS = [
  { label: "Private Coaching", desc: "Apply for 1:1 coaching", to: "/coaching" as const },
  { label: "All Services", desc: "Explore our full offering", to: "/services" as const },
  { label: "Products", desc: "Supplement & skincare portfolio", to: "/products" as const },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  }

  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-12" aria-labelledby="contact-hero-heading">
        <FadeUp>
          <span className="eyebrow">Contact</span>
          <h1 id="contact-hero-heading" className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-3xl leading-[1.03]">
            Speak with the{" "}
            <span className="text-gradient-electric">PLC team</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            For coaching, services, product information or partnership inquiries — send us a note and our team will respond within one business day. No automated replies.
          </p>
        </FadeUp>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="container-page pb-10" aria-label="Quick navigation">
        <FadeUp>
          <div className="flex flex-wrap gap-3">
            {REASONS.map(r => (
              <Link
                key={r.label}
                to={r.to}
                className="inline-flex items-center gap-3 surface-glass rounded-xl px-5 py-3.5 border border-white/[0.08] hover:border-electric/30 hover:bg-electric/[0.04] transition-all duration-250 group"
              >
                <div>
                  <p className="text-xs font-medium text-foreground group-hover:text-electric-glow transition-colors">{r.label}</p>
                  <p className="text-[11px] text-muted-foreground/70">{r.desc}</p>
                </div>
                <ArrowRight size={13} className="text-muted-foreground group-hover:text-electric-glow transition-colors shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ── FORM + ASIDE ── */}
      <section className="container-page pb-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Form */}
          <SlideLeft className="lg:col-span-7">
            <div className="surface-glass rounded-3xl p-8 md:p-12 border border-white/[0.09]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="py-16 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric/[0.10] border border-electric/[0.25] flex items-center justify-center">
                      <CheckCircle size={28} className="text-electric-glow" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-electric-glow mb-3">Received</p>
                  <h2 className="text-3xl md:text-4xl font-display">Thank you.</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm mx-auto text-sm">
                    Our team will review your inquiry and be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" aria-label="Contact inquiry form" noValidate>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display mb-1">Send an inquiry</h2>
                    <p className="text-sm text-muted-foreground">Fields marked with * are required.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="First name" name="firstName" required />
                    <Field label="Last name" name="lastName" required />
                  </div>
                  <Field label="Email address" name="email" type="email" required />
                  <Field label="Phone (optional)" name="phone" type="tel" />

                  <div>
                    <label htmlFor="interest" className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='oklch(0.62 0.006 240)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      {INTERESTS.map(i => (
                        <option key={i} value={i} className="bg-[#0e1018] text-foreground">
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 resize-none placeholder:text-muted-foreground/40"
                      placeholder="Tell us about your goals and how we can help…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-electric w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" aria-hidden="true" />
                        Sending…
                      </span>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground/45 text-center leading-relaxed">
                    By submitting you agree to our{" "}
                    <Link to="/privacy" className="underline hover:text-muted-foreground transition-colors">
                      Privacy Policy
                    </Link>
                    . We do not share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </SlideLeft>

          {/* Sidebar */}
          <SlideRight className="lg:col-span-5 space-y-5">
            <div className="surface-glass rounded-2xl p-8 border border-white/[0.09]">
              <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow mb-4">PLC Optimization LLC</p>
              <h3 className="text-xl font-display mb-3">Premium Wellness, Elevated.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A premium wellness brand formally registered in the United States, serving clients through private coaching, authorized supplementation and evidence-based lifestyle optimization.
              </p>
            </div>

            <address className="not-italic space-y-4">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="surface-glass rounded-2xl p-6 border border-white/[0.09] flex items-start gap-5">
                  <div
                    className="w-10 h-10 rounded-xl bg-electric/[0.09] border border-electric/[0.16] flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Icon size={16} className="text-electric-glow" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-silver mb-1.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-foreground hover:text-electric-glow transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </address>

            <div className="surface-glass rounded-2xl p-7 border border-white/[0.09]">
              <p className="text-[9px] uppercase tracking-[0.3em] text-silver mb-3">Hours</p>
              <p className="text-sm text-foreground">Monday – Friday</p>
              <p className="text-sm text-muted-foreground">9:00 AM – 6:00 PM Eastern Time</p>
              <div className="hairline my-5" />
              <p className="text-xs text-muted-foreground/55 leading-relaxed">
                Coaching clients have direct messaging access during business hours. New applicants can expect a follow-up call within 2 business days.
              </p>
            </div>
          </SlideRight>
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/50 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/70">Wellness Notice.</span>{" "}
        Products and services are intended for general wellness and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before beginning any new wellness program.
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 placeholder:text-muted-foreground/40"
      />
    </div>
  );
}
