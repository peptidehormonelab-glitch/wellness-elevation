import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import longevityImg from "@/assets/longevity.jpg";
import performanceImg from "@/assets/performance.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PLC Optimization — Premium Wellness & Lifestyle Optimization" },
      {
        name: "description",
        content:
          "PLC Optimization LLC is a Wyoming-based wellness company offering performance coaching, nutrition guidance, recovery optimization, educational resources and evidence-informed wellness practices.",
      },
      { property: "og:title", content: "About PLC Optimization — Premium Wellness & Lifestyle Optimization" },
      {
        property: "og:description",
        content:
          "A Wyoming-based wellness company focused on lifestyle optimization, performance coaching, nutrition guidance and evidence-informed wellness practices.",
      },
      { property: "og:url", content: "https://plc-elevate-life.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://plc-elevate-life.lovable.app/about" }],
  }),
  component: About,
});

const VALUES = [
  {
    t: "Integrity",
    d: "We operate with honesty, clarity and respect in every client interaction, product recommendation and coaching conversation.",
  },
  {
    t: "Education",
    d: "We believe informed clients make better decisions. Every recommendation is paired with explanation, context and practical guidance.",
  },
  {
    t: "Transparency",
    d: "From sourcing standards to communication practices, we disclose what matters so clients can engage with confidence.",
  },
  {
    t: "Continuous Improvement",
    d: "Wellness is an evolving field. We review new research, refine our protocols and improve our services so clients benefit from current thinking.",
  },
];

const STANDARDS = [
  {
    title: "Ethical Business Practices",
    desc: "We conduct business according to clear principles: honest marketing, fair pricing, respect for client autonomy and responsible wellness communication.",
  },
  {
    title: "Customer Privacy",
    desc: "Personal information is handled with care. We limit data collection, protect communications and honor the privacy expectations of our clients.",
  },
  {
    title: "Transparent Communication",
    desc: "We explain the reasoning behind our recommendations, disclose relevant limitations and welcome questions about any product, protocol or service.",
  },
  {
    title: "Responsible Wellness Education",
    desc: "All content, coaching and product information is educational and intended for general wellness. We do not provide medical advice or promise specific health outcomes.",
  },
  {
    title: "Continuous Improvement",
    desc: "We regularly evaluate our offerings, incorporate client feedback and refine our approach to maintain a high standard of service and education.",
  },
];

function About() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-24" aria-labelledby="about-hero-heading">
        <FadeUp>
          <span className="eyebrow">About PLC Optimization</span>
          <h1
            id="about-hero-heading"
            className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-5xl leading-[1.03]"
          >
            A Wyoming-based company for{" "}
            <span className="text-gradient-electric">wellness</span>,{" "}
            <span className="text-gradient-silver">performance</span>{" "}
            and lifestyle optimization.
          </h1>
          <p className="mt-9 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            PLC Optimization LLC is a U.S. Registered LLC based in Wyoming, focused on helping individuals improve their health, performance and daily lifestyle through education, responsible coaching and evidence-informed wellness practices. We offer guidance in general wellness, performance coaching, nutrition, recovery optimization and educational resources — always grounded in integrity and transparency.
          </p>
        </FadeUp>
      </section>

      {/* ── MISSION ── */}
      <section className="border-y border-white/[0.06] relative overflow-hidden py-28" aria-labelledby="mission-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={longevityImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.08 }} loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.95), oklch(0.10 0.012 240 / 0.7))" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.04] blur-[80px] -translate-y-1/2" />
        </div>

        <div className="container-page relative max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="eyebrow justify-center">Our Mission</span>
            <h2 id="mission-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Help individuals optimize their health, performance and daily lifestyle.
            </h2>
            <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
              Our mission is to help individuals optimize their health, performance and daily lifestyle through education, responsible coaching and evidence-informed wellness strategies. We provide the structure, resources and guidance clients need to make informed, sustainable choices — without overpromising, without medical claims, and without compromising on integrity.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── COMPANY VALUES ── */}
      <section className="py-28 border-b border-white/[0.06]" aria-labelledby="values-heading">
        <div className="container-page">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div>
                <span className="eyebrow">Our Values</span>
                <h2 id="values-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                  Four principles that guide our work.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                These values shape how we communicate, how we coach and how we build trust with every client.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <StaggerItem key={v.t}>
                <div className="surface-glass rounded-2xl p-8 md:p-10 h-full card-hover">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-electric-glow">0{i + 1}</p>
                  <h3 className="mt-4 text-2xl md:text-3xl font-display">{v.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-sm">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── PROFESSIONAL STANDARDS ── */}
      <section className="container-page py-28" aria-labelledby="standards-heading">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideLeft>
            <span className="eyebrow">Professional Standards</span>
            <h2 id="standards-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Committed to doing things the right way.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed">
              PLC Optimization LLC is committed to ethical business practices, customer privacy, transparent communication, responsible wellness education and continuous improvement. These standards define how we operate and how we serve our clients.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We do not diagnose, treat or prescribe. We provide educational information, coaching and premium wellness products for general lifestyle support, and we encourage every client to consult a qualified healthcare provider for personal medical questions.
            </p>
          </SlideLeft>

          <SlideRight>
            <StaggerContainer className="space-y-5">
              {STANDARDS.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className="surface-glass rounded-xl p-7 card-hover">
                    <p className="text-[9px] tracking-[0.35em] uppercase text-electric-glow mb-3">0{i + 1}</p>
                    <h3 className="text-lg font-display text-foreground mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </SlideRight>
        </div>
      </section>

      {/* ── PHILOSOPHY / FOCUS AREAS ── */}
      <section className="container-page pb-28" aria-labelledby="philosophy-heading">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3]">
              <img
                src={performanceImg}
                alt="Performance coaching and lifestyle optimization environment"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">What We Focus On</span>
            <h2 id="philosophy-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Wellness education and lifestyle support.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed">
              Our work centers on general wellness, lifestyle optimization, performance coaching, nutrition guidance, recovery optimization and educational resources. Every service is designed to help clients build better habits, make informed decisions and pursue long-term health with confidence.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We emphasize evidence-informed practices, responsible communication and practical strategies that fit into real life. We never make disease-related claims, never promise specific outcomes, and always present wellness as a long-term discipline rather than a quick fix.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/services" className="btn-electric">Explore Services</Link>
              <Link to="/contact" className="btn-ghost-light">Get in Touch</Link>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28" aria-labelledby="about-cta-heading">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl border border-white/[0.09] p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.68 0.09 75 / 0.08), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <h2 id="about-cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">
              Ready to learn more about PLC Optimization?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Speak with our team about coaching, nutrition guidance or our educational resources. We respond within one business day.
            </p>
            <Link to="/contact" className="mt-10 inline-flex btn-electric items-center gap-2">
              Contact PLC <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
