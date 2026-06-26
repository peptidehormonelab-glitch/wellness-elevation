import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, SlideLeft, SlideRight } from "@/components/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PLC Optimization" },
      { name: "description", content: "Contact PLC Optimization LLC for coaching, services, products and partnership inquiries." },
      { property: "og:title", content: "Contact — PLC Optimization" },
      { property: "og:description", content: "Speak with the PLC Optimization team." },
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
    label: "Hours",
    value: "Mon – Fri · 9:00 – 18:00 ET",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
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
      <section className="container-page pt-20 pb-12">
        <FadeUp>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-3xl leading-[1.03]">
            Speak with the{" "}
            <span className="text-gradient-electric">PLC team</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            For coaching, services, product information or partnership inquiries, send us a note and our team will respond within one business day.
          </p>
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="py-16 text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-electric/[0.12] border border-electric/30 flex items-center justify-center">
                      <CheckCircle size={28} className="text-electric-glow" />
                    </div>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-electric-glow mb-3">Received</p>
                  <h2 className="text-3xl md:text-4xl font-display">Thank you.</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm mx-auto">
                    Our team will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display mb-1">Send an inquiry</h2>
                    <p className="text-sm text-muted-foreground">All fields marked with * are required.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="First name" name="firstName" required />
                    <Field label="Last name" name="lastName" required />
                  </div>
                  <Field label="Email address *" name="email" type="email" required />
                  <Field label="Phone (optional)" name="phone" type="tel" />

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 appearance-none cursor-pointer"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='oklch(0.62 0.006 240)' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
                    >
                      {INTERESTS.map(i => (
                        <option key={i} value={i} className="bg-[oklch(0.12_0.012_240)] text-foreground">{i}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 resize-none placeholder:text-muted-foreground/40"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-electric w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : "Send Inquiry"}
                  </button>

                  <p className="text-xs text-muted-foreground/50 text-center leading-relaxed">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-muted-foreground transition-colors">Privacy Policy</a>.
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
                A premium wellness brand registered in the United States, serving clients nationwide through private coaching, authorized supplementation and lifestyle optimization.
              </p>
            </div>

            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="surface-glass rounded-2xl p-7 border border-white/[0.09] flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-electric/[0.1] border border-electric/20 flex items-center justify-center shrink-0">
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

            <div className="surface-glass rounded-2xl p-7 border border-white/[0.09]">
              <p className="text-[9px] uppercase tracking-[0.3em] text-silver mb-3">Response Time</p>
              <p className="text-sm text-foreground">All inquiries are answered within one business day.</p>
              <div className="hairline my-5" />
              <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
                For coaching applications, expect a follow-up call within 2 business days to discuss your goals.
              </p>
            </div>
          </SlideRight>
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/80">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
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
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.28em] text-silver mb-3">
        {label}{required ? " *" : ""}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border border-white/[0.14] rounded-xl px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-electric/60 focus:ring-1 focus:ring-electric/30 transition-all duration-200 placeholder:text-muted-foreground/40"
      />
    </div>
  );
}
