import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — PLC Optimization" },
      { name: "description", content: "Wellness disclaimer for PLC Optimization LLC products, services and educational content." },
      { property: "og:title", content: "Disclaimer — PLC Optimization" },
      { property: "og:description", content: "Wellness disclaimer for PLC Optimization LLC." },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <div className="container-page py-20 max-w-3xl">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-6 text-5xl md:text-6xl">Disclaimer</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
        <Section title="General Wellness Notice">
          Products and services offered by PLC Optimization LLC are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
        </Section>
        <Section title="Not Medical Advice">
          Information provided on this website — including articles, coaching materials, product descriptions and educational content — is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the guidance of a qualified healthcare provider with any questions you may have regarding a medical condition or before starting any new exercise, nutrition, or supplement program.
        </Section>
        <Section title="No Guarantees">
          Individual results from coaching, nutrition guidance, supplement use and lifestyle programs vary. PLC Optimization LLC does not guarantee any specific outcome, and testimonials or examples should not be interpreted as promises of similar results.
        </Section>
        <Section title="Product Use">
          All supplements and cosmetic products sold or recommended by PLC Optimization LLC are authorized for general wellness use. Always read product labels, follow directions for use and consult a healthcare professional if you are pregnant, nursing, have a medical condition, or are taking any medications.
        </Section>
        <Section title="Contact">
          For questions about this disclaimer, please contact us at contact@plcoptimization.com.
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl text-foreground">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
