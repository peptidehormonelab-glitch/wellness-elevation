import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/Motion";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — PLC Optimization LLC" },
      { name: "description", content: "How PLC Optimization LLC uses cookies and similar technologies on its website, and how you can manage your cookie preferences." },
      { property: "og:title", content: "Cookie Policy — PLC Optimization LLC" },
      { property: "og:description", content: "How PLC Optimization LLC uses cookies and similar technologies." },
      { property: "og:url", content: "https://plc-elevate-life.lovable.app/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://plc-elevate-life.lovable.app/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <div>
      <section className="container-page pt-20 pb-16 max-w-4xl">
        <FadeUp>
          <span className="eyebrow">Legal</span>
          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl">Cookie Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: June 28, 2026</p>
        </FadeUp>
      </section>

      <section className="container-page pb-28 max-w-4xl">
        <div className="surface-glass rounded-3xl border border-white/[0.08] p-8 md:p-12 space-y-10">
          <Section title="1. Introduction">
            This Cookie Policy explains how PLC Optimization LLC, a Wyoming limited liability company registered in the United States ("PLC", "we", "our", or "us"), uses cookies and similar technologies on this website. It should be read together with our Privacy Policy.
          </Section>
          <Section title="2. What Cookies Are">
            Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites function properly, to improve user experience, and to provide information to the website owner about how the site is used.
          </Section>
          <Section title="3. Types of Cookies We May Use">
            We may use the following categories of cookies:
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><span className="text-foreground">Essential cookies</span> — required for the website to function correctly.</li>
              <li><span className="text-foreground">Preference cookies</span> — remember your settings and preferences.</li>
              <li><span className="text-foreground">Analytics cookies</span> — help us understand how visitors interact with the website so we can improve it.</li>
            </ul>
          </Section>
          <Section title="4. Third-Party Cookies">
            Some cookies may be placed by trusted third-party service providers (such as analytics or hosting providers) acting on our behalf. These providers are contractually required to handle data in accordance with applicable privacy laws.
          </Section>
          <Section title="5. Managing Your Cookies">
            You can control or disable cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when a cookie is set. Please note that disabling certain cookies may affect the functionality of this website.
          </Section>
          <Section title="6. Changes to This Policy">
            We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or legal requirements. The updated version will be indicated by a revised "Last updated" date at the top of this page.
          </Section>
          <Section title="7. Contact">
            For questions about this Cookie Policy, please contact us at{" "}
            <a href="mailto:contact@plcoptimization.com" className="text-electric-glow hover:underline">contact@plcoptimization.com</a>.
          </Section>
        </div>

        <div className="mt-10 flex gap-4">
          <Link to="/privacy" className="btn-ghost-light !py-2.5 !px-5 !text-[10px]">Privacy Policy</Link>
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
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
