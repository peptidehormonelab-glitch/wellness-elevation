import { createFileRoute } from "@tanstack/react-router";

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
    <div className="container-page py-20 max-w-3xl">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-6 text-5xl md:text-6xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

      <div className="mt-12 space-y-10 text-muted-foreground leading-relaxed">
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
          Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information. To exercise these rights, contact us at contact@plcoptimization.com.
        </Section>
        <Section title="8. Children's Privacy">
          Our website and services are intended for adults. We do not knowingly collect personal information from children under 13.
        </Section>
        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "last updated" date.
        </Section>
        <Section title="10. Contact">
          For privacy questions, contact PLC Optimization LLC at contact@plcoptimization.com.
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
