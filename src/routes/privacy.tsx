import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/Motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PLC Optimization" },
      { name: "description", content: "How PLC Optimization LLC collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — PLC Optimization" },
      { property: "og:description", content: "Privacy policy for PLC Optimization LLC." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div>
      <section className="container-page pt-20 pb-16 max-w-4xl">
        <FadeUp>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: June 27, 2026</p>
        </FadeUp>
      </section>

      <section className="container-page pb-28 max-w-4xl">
        <div className="surface-glass rounded-3xl border border-white/[0.08] p-8 md:p-12 space-y-10">
          <Section title="1. Introduction">
            PLC Optimization LLC ("PLC", "we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use and protect information you provide through our website, products and services.
          </Section>
          <Section title="2. Information We Collect">
            We may collect information you voluntarily provide, including your name, email address, phone number, and the content of inquiries submitted through our forms. We may also collect non-personal usage data such as browser type, device type, pages visited, and approximate location for analytics purposes.
          </Section>
          <Section title="3. How We Use Your Information">
            We use the information we collect to respond to inquiries, deliver requested services, process product information requests, improve our website and communications, comply with legal obligations and protect the rights and safety of PLC and our clients.
          </Section>
          <Section title="4. Sharing of Information">
            We do not sell your personal information. We may share limited information with trusted service providers (such as email, analytics or payment processors) strictly to operate the business, or when required by law.
          </Section>
          <Section title="5. Cookies & Analytics">
            Our website may use cookies and similar technologies to remember preferences and analyze traffic. You can control cookies through your browser settings. Disabling cookies may affect site functionality.
          </Section>
          <Section title="6. Data Retention & Security">
            We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or to meet legal requirements. We apply reasonable administrative and technical safeguards to protect personal information, although no method of transmission over the internet is fully secure.
          </Section>
          <Section title="7. Your Rights">
            Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information. To exercise these rights, contact us at{" "}
            <a href="mailto:contact@plcoptimization.com" className="text-electric-glow hover:underline">contact@plcoptimization.com</a>.
          </Section>
          <Section title="8. Children's Privacy">
            Our website and services are intended for adults. We do not knowingly collect personal information from children under 13.
          </Section>
          <Section title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "last updated" date.
          </Section>
          <Section title="10. Contact">
            For privacy questions, contact PLC Optimization LLC at{" "}
            <a href="mailto:contact@plcoptimization.com" className="text-electric-glow hover:underline">contact@plcoptimization.com</a>.
          </Section>
        </div>

        <div className="mt-10 flex gap-4">
          <Link to="/terms" className="btn-ghost-light !py-2.5 !px-5 !text-[10px]">Terms & Conditions</Link>
          <Link to="/disclaimer" className="btn-ghost-light !py-2.5 !px-5 !text-[10px]">Disclaimer</Link>
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
