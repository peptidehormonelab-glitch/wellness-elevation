import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/Motion";

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
    <div>
      <section className="container-page pt-20 pb-16 max-w-4xl">
        <FadeUp>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl">Disclaimer</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: June 28, 2026</p>
        </FadeUp>
      </section>

      <section className="container-page pb-28 max-w-4xl">
        <div className="surface-glass rounded-3xl border border-white/[0.08] p-8 md:p-12 space-y-10">
          <Section title="General Wellness Notice">
            Products and services offered by PLC Optimization LLC are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
          </Section>
          <Section title="Not Medical Advice">
            Information provided on this website — including articles, coaching materials, product descriptions and educational content — is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the guidance of a qualified healthcare provider with any questions you may have regarding a medical condition or before starting any new exercise, nutrition, or supplement program.
          </Section>
          <Section title="No Physician-Patient Relationship">
            Use of this website, coaching services, or any communication with PLC Optimization LLC does not create a physician-patient relationship, nor any relationship with a licensed healthcare provider. Coaching and wellness guidance are not a substitute for medical diagnosis, treatment, or supervision by a qualified professional.
          </Section>
          <Section title="Coaching and Educational Purpose">
            Coaching, consultations, and all educational content provided by PLC Optimization LLC are intended for motivation, education, and lifestyle support only. They are not designed to diagnose or manage medical conditions. You are solely responsible for evaluating how this information applies to your personal circumstances.
          </Section>
          <Section title="User Responsibility">
            You remain solely responsible for any health, wellness, nutrition, supplement, exercise, or lifestyle decisions you make based on information from this website or from PLC Optimization LLC. Always consult a qualified healthcare professional before making decisions that may affect your health, especially if you are pregnant, nursing, have a medical condition, or are taking medications.
          </Section>
          <Section title="No Guarantees">
            Individual results from coaching, nutrition guidance, supplement use and lifestyle programs vary based on individual physiology, adherence, prior fitness level and overall lifestyle. PLC Optimization LLC does not guarantee any specific outcome, and no content on this website should be interpreted as a promise of results.
          </Section>
          <Section title="Product Use">
            All supplements and skin care products sold or recommended by PLC Optimization LLC are authorized for general wellness use. Always read product labels, follow directions for use and consult a healthcare professional if you are pregnant, nursing, have a medical condition, or are taking any medications.
          </Section>
          <Section title="Limitation of Liability">
            To the maximum extent permitted by applicable law, PLC Optimization LLC shall not be liable for any indirect, incidental, special or consequential damages arising from your use of this website, its content, products, coaching, or services. This limitation of liability is consistent with the Terms & Conditions governing use of this website.
          </Section>
          <Section title="Governing Law">
            This Disclaimer is governed by the laws of the State of Wyoming, United States, and is operated in compliance with applicable U.S. laws. Any legal matters arising from your use of this website shall be resolved under Wyoming law.
          </Section>
          <Section title="Contact">
            For questions about this disclaimer, please contact us at{" "}
            <a href="mailto:contact@plcoptimization.com" className="text-electric-glow hover:underline">contact@plcoptimization.com</a>.
          </Section>

        </div>

        <div className="mt-10 flex gap-4">
          <Link to="/privacy" className="btn-ghost-light !py-2.5 !px-5 !text-[10px]">Privacy Policy</Link>
          <Link to="/terms" className="btn-ghost-light !py-2.5 !px-5 !text-[10px]">Terms & Conditions</Link>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-white/[0.06] pb-10 last:border-0 last:pb-0">
      <h2 className="text-xl md:text-2xl font-display text-foreground mb-3">{title}</h2>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
