import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — PLC Optimization" },
      { name: "description", content: "Terms and conditions governing use of the PLC Optimization LLC website, products and services." },
      { property: "og:title", content: "Terms & Conditions — PLC Optimization" },
      { property: "og:description", content: "Terms and conditions for PLC Optimization LLC." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="container-page py-20 max-w-3xl">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-6 text-5xl md:text-6xl">Terms & Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
        <Section title="1. Acceptance of Terms">
          By accessing or using the website, products or services of PLC Optimization LLC ("PLC"), you agree to be bound by these Terms & Conditions. If you do not agree, do not use the website or services.
        </Section>
        <Section title="2. Wellness Disclaimer">
          Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease. Information provided on this website is for educational and informational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider before beginning any new training, nutrition or supplementation program.
        </Section>
        <Section title="3. Coaching Services">
          Coaching, programming and lifestyle guidance provided by PLC are educational and motivational in nature. Results vary by individual and depend on adherence, prior fitness level, nutrition and overall lifestyle. PLC does not guarantee specific outcomes.
        </Section>
        <Section title="4. Products">
          PLC offers authorized supplements (including proteins, creatine, vitamins, minerals, hydration and recovery products) and premium cosmetic and skincare items intended for general wellness use. Always review product labels and use as directed.
        </Section>
        <Section title="5. Intellectual Property">
          All content on this website — including text, graphics, logos, images and program materials — is the property of PLC Optimization LLC and is protected by applicable intellectual property laws. You may not reproduce or distribute content without written permission.
        </Section>
        <Section title="6. User Conduct">
          You agree not to use the website or services for any unlawful purpose, to infringe on the rights of others, or to interfere with the operation of the website.
        </Section>
        <Section title="7. Payments & Refunds">
          Coaching programs and product orders are subject to the specific pricing, billing and refund terms communicated at the time of purchase. Unless explicitly stated, services rendered are non-refundable.
        </Section>
        <Section title="8. Limitation of Liability">
          To the maximum extent permitted by law, PLC Optimization LLC shall not be liable for any indirect, incidental, special or consequential damages arising from your use of the website, products or services.
        </Section>
        <Section title="9. Governing Law">
          These Terms are governed by the laws of the United States and the state in which PLC Optimization LLC is registered, without regard to conflict-of-law principles.
        </Section>
        <Section title="10. Changes to Terms">
          PLC may update these Terms at any time. Continued use of the website or services after changes constitutes acceptance of the updated Terms.
        </Section>
        <Section title="11. Contact">
          For questions about these Terms, contact PLC Optimization LLC at contact@plcoptimization.com.
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
