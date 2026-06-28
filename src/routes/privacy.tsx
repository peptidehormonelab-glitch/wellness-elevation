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
          <Section title="1. Effective Date & Introduction">
            This Privacy Policy is effective as of June 28, 2026. PLC Optimization LLC, a Wyoming limited liability company registered in the United States ("PLC", "we", "our", or "us"), respects your privacy and is committed to protecting the personal information you share with us. This policy explains how we collect, use, store, and safeguard your information when you visit our website, use our services, or communicate with us.
          </Section>
          <Section title="2. Information We Collect">
            We collect information that you voluntarily provide to us, including:
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Contact details submitted through our inquiry forms (name, email address, phone number, and the content of your message).</li>
              <li>Email addresses provided when subscribing to our newsletter or educational updates.</li>
              <li>Information you share during coaching consultations or service discussions.</li>
            </ul>
            We also collect certain technical and usage information automatically through cookies and similar technologies, such as browser type, device type, pages visited, and approximate geographic location, to help us understand how visitors use our website and improve its functionality.
          </Section>
          <Section title="3. How We Use Your Information">
            We use the information we collect for lawful and legitimate business purposes, including:
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Responding to inquiries and providing information about our wellness, coaching, and lifestyle optimization services.</li>
              <li>Delivering newsletters, educational content, and service updates you have requested.</li>
              <li>Processing product information requests and coordinating consultations.</li>
              <li>Improving our website, services, and client communications.</li>
              <li>Complying with legal obligations and protecting the rights and safety of PLC Optimization and our clients.</li>
            </ul>
            We process personal information based on your consent, our contractual or pre-contractual obligations, legal compliance, or our legitimate interest in operating and improving our business, as applicable.
          </Section>
          <Section title="4. Email Communications">
            When you provide your email address, we may send you informational, educational, and promotional communications related to wellness, longevity, performance, nutrition, and skin health. You may unsubscribe from marketing emails at any time by clicking the "Unsubscribe" link at the bottom of any email or by contacting us directly. Transactional or service-related communications (such as responses to your inquiries) may still be sent even after you opt out of marketing messages.
          </Section>
          <Section title="5. Cookies & Similar Technologies">
            Our website may use cookies and similar technologies to remember your preferences, analyze website traffic, and improve user experience. You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. We do not use cookies to collect sensitive personal information without your knowledge.
          </Section>
          <Section title="6. Sharing with Third-Party Service Providers">
            We do not sell, rent, or trade your personal information. We may share limited personal information with trusted third-party service providers who perform services on our behalf, such as website hosting, analytics, email delivery, and customer relationship management. These providers are contractually obligated to use your information only for the services they provide to us and to maintain appropriate confidentiality and security measures.
          </Section>
          <Section title="7. Data Retention">
            We retain personal information only for as long as necessary to fulfill the purposes described in this policy, to comply with legal obligations, to resolve disputes, and to enforce our agreements. When personal information is no longer needed, we securely delete or anonymize it in accordance with our internal data retention practices.
          </Section>
          <Section title="8. Data Security">
            We apply reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.
          </Section>
          <Section title="9. Your Privacy Rights">
            Depending on your location, you may have the right to:
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Access the personal information we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Request a copy of your information in a portable format.</li>
            </ul>
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:contact@plcoptimization.com" className="text-electric-glow hover:underline">contact@plcoptimization.com</a>. We will respond to your request in accordance with applicable law.
          </Section>
          <Section title="10. International Visitors">
            PLC Optimization LLC is based in the United States. If you access our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your jurisdiction. By using our website, you consent to the transfer of your information to the United States. For visitors in the European Economic Area, United Kingdom, or Switzerland, we process personal data in accordance with applicable privacy laws, including the General Data Protection Regulation (GDPR) where relevant, and respect the rights described above.
          </Section>
          <Section title="11. Children's Privacy">
            Our website and services are intended for adults aged 18 and older. We do not knowingly collect personal information from children under the age of 16. If we learn that we have collected personal information from a child without appropriate parental consent, we will take steps to delete that information as soon as possible.
          </Section>
          <Section title="12. Changes to This Policy">
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. The updated version will be indicated by a revised "Last updated" date at the top of this page. We encourage you to review this policy periodically.
          </Section>
          <Section title="13. Contact Us">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our handling of your personal information, please contact us at{" "}
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
