import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="container-page pt-20 pb-12">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-6 text-5xl md:text-7xl max-w-3xl leading-[1.05]">Speak with the <span className="text-gradient-electric">PLC team</span>.</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          For coaching, services, product information or partnership inquiries, send us a note and our team will respond within one business day.
        </p>
      </section>

      <section className="container-page pb-28 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 surface-glass rounded-3xl p-8 md:p-12">
          {sent ? (
            <div className="py-20 text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">Received</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Thank you.</h2>
              <p className="mt-4 text-muted-foreground">Our team will be in touch within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" type="tel" />
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-silver">Interest</label>
                <select name="interest" className="mt-3 w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-electric">
                  <option className="bg-background">Private Coaching</option>
                  <option className="bg-background">Sports Performance</option>
                  <option className="bg-background">Healthy Aging & Longevity</option>
                  <option className="bg-background">Nutrition & Supplements</option>
                  <option className="bg-background">Cosmetic & Skincare</option>
                  <option className="bg-background">Partnership / Wholesale</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.28em] text-silver">Message</label>
                <textarea name="message" rows={5} required className="mt-3 w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-electric resize-none" />
              </div>
              <button type="submit" className="btn-electric">Send Inquiry</button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="surface-glass rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">PLC Optimization LLC</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">A premium wellness brand registered in the United States, serving clients nationwide.</p>
          </div>
          <div className="surface-glass rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-silver">Email</p>
            <a href="mailto:contact@plcoptimization.com" className="mt-2 block text-lg hover:text-electric-glow transition-colors">contact@plcoptimization.com</a>
            <p className="mt-6 text-xs uppercase tracking-[0.32em] text-silver">Hours</p>
            <p className="mt-2 text-sm text-muted-foreground">Mon – Fri · 9:00 – 18:00 ET</p>
          </div>
          <div className="surface-glass rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.32em] text-silver">Response Time</p>
            <p className="mt-2 text-sm text-muted-foreground">All inquiries are answered within one business day.</p>
          </div>
        </aside>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/80 max-w-3xl leading-relaxed">
        <span className="text-silver">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.28em] text-silver">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-electric"
      />
    </div>
  );
}
