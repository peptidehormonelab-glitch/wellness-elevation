import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import coachingImg from "@/assets/coaching.jpg";
import performanceImg from "@/assets/performance.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/coaching")({
  head: () => ({
    meta: [
      { title: "Coaching — PLC Optimization" },
      { name: "description", content: "Premium 1:1 coaching combining training, nutrition guidance, recovery and habit design for performance, longevity and lifestyle optimization." },
      { property: "og:title", content: "Coaching — PLC Optimization" },
      { property: "og:description", content: "Private coaching for performance, longevity and lifestyle optimization." },
    ],
  }),
  component: Coaching,
});

const PROGRAMS = [
  {
    name: "Foundation",
    price: "From $399",
    period: "/ month",
    desc: "For those building structure into their training, nutrition and recovery for the first time.",
    featured: false,
    features: [
      "Weekly programming",
      "Nutrition framework",
      "Supplement guidance",
      "Monthly review call",
      "Wellness check-ins",
    ],
  },
  {
    name: "Performance",
    price: "From $799",
    period: "/ month",
    desc: "For athletes and high-performers pursuing measurable strength, endurance and physique outcomes.",
    featured: true,
    features: [
      "Custom training cycles",
      "Detailed nutrition plan",
      "Recovery protocols",
      "Bi-weekly 1:1 calls",
      "Direct messaging access",
      "Performance tracking",
    ],
  },
  {
    name: "Longevity",
    price: "From $999",
    period: "/ month",
    desc: "A long-horizon practice for sustained mobility, energy and strength through every decade.",
    featured: false,
    features: [
      "Holistic lifestyle design",
      "Mobility & recovery focus",
      "Personalized nutrition",
      "Sleep & stress strategy",
      "Quarterly reassessments",
      "Comprehensive blueprint",
    ],
  },
];

const PROCESS = [
  { step: "01", t: "Assessment", d: "Private intake call to understand your goals, history, lifestyle and starting point." },
  { step: "02", t: "Blueprint", d: "A custom training, nutrition and recovery plan designed around your real schedule and life." },
  { step: "03", t: "Execution", d: "Weekly coaching and check-ins to maintain accountability, momentum and clarity." },
  { step: "04", t: "Iteration", d: "Continuous refinement so your program evolves as you grow and your goals shift." },
];

const INCLUDED = [
  "Personalized training programs",
  "Nutrition & macro guidance",
  "Supplement protocol design",
  "Recovery & sleep optimization",
  "Habit architecture support",
  "Progress tracking systems",
  "Direct coach communication",
  "Ongoing program refinement",
];

function Coaching() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0">
          <img
            src={coachingImg}
            alt="Private coaching session"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.22 }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.012 240 / 0.5), oklch(0.10 0.012 240))" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.07] blur-[100px]" />
        </div>

        <div className="container-page relative pt-24 pb-28">
          <FadeUp>
            <span className="eyebrow">Private Coaching</span>
            <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-4xl leading-[1.03]">
              Private coaching for the{" "}
              <span className="text-gradient-electric">optimized life</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              1:1 coaching that integrates training, nutrition guidance, recovery and habit design into one cohesive standard. Built for individuals who take their performance and longevity seriously.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-electric">Apply for Coaching</Link>
              <Link to="/services" className="btn-ghost-light">All Services</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="container-page py-28">
        <FadeUp>
          <span className="eyebrow">Programs</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">Three disciplined tiers.</h2>
          <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
            Each program is built around your specific goals, timeline and lifestyle. All tiers include a private intake consultation.
          </p>
        </FadeUp>

        <StaggerContainer className="mt-14 grid md:grid-cols-3 gap-5">
          {PROGRAMS.map((p, i) => (
            <StaggerItem key={p.name}>
              <article
                className={`relative rounded-2xl p-8 border flex flex-col h-full card-hover ${
                  p.featured
                    ? "border-electric/40 bg-gradient-to-b from-electric/[0.08] to-transparent backdrop-blur-sm"
                    : "border-white/[0.07] surface-glass"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-gradient-to-r from-electric/90 to-electric-glow/90 text-background shadow-[var(--shadow-glow)]">
                      Most Selected
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-3xl md:text-4xl font-display">{p.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl font-display text-gradient-electric">{p.price}</span>
                    <span className="text-sm text-muted-foreground">{p.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>

                <div className="hairline my-7" />

                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check size={14} className="text-electric-glow mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={p.featured ? "btn-electric mt-auto" : "btn-ghost-light mt-auto"}
                >
                  Apply Now
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-electric/[0.04] blur-[80px]" />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <span className="eyebrow">What's Included</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Every coaching tier includes the essentials.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed">
              Regardless of the tier you choose, every PLC coaching engagement is built on the same foundational commitment to your results.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric items-center gap-2">
              Apply for Coaching <ArrowRight size={14} />
            </Link>
          </SlideLeft>

          <SlideRight>
            <ul className="grid grid-cols-1 gap-3">
              {INCLUDED.map(item => (
                <li key={item} className="flex items-center gap-4 py-3 border-b border-white/[0.06]">
                  <div className="w-7 h-7 rounded-full bg-electric/[0.12] border border-electric/20 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-electric-glow" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </SlideRight>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="container-page py-28">
        <FadeUp>
          <span className="eyebrow">Our Process</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-3xl">A measured path from intake to lasting transformation.</h2>
        </FadeUp>

        <StaggerContainer className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((s) => (
            <StaggerItem key={s.t}>
              <div className="surface-glass rounded-2xl p-7 h-full card-hover relative overflow-hidden">
                <div className="absolute top-5 right-5 text-[42px] font-display text-white/[0.04] select-none leading-none">
                  {s.step}
                </div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">Step {s.step}</p>
                <h3 className="mt-4 text-2xl font-display">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── IMAGE BAND ── */}
      <section className="container-page pb-24">
        <div className="rounded-2xl overflow-hidden border border-white/[0.07] relative aspect-[21/9]">
          <img
            src={performanceImg}
            alt="Athletic performance coaching"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.6 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.10 0.012 240 / 0.8) 0%, oklch(0.10 0.012 240 / 0.4) 60%, transparent 100%)" }} />
          <div className="absolute inset-0 flex items-center">
            <div className="p-10 md:p-16 max-w-2xl">
              <ScaleIn>
                <p className="text-xs uppercase tracking-[0.3em] text-electric-glow mb-4">Ready to begin?</p>
                <h3 className="text-3xl md:text-5xl font-display text-foreground">Apply for private coaching today.</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">Spots are limited. We work with a select number of clients at a time to ensure the highest quality of coaching.</p>
                <Link to="/contact" className="mt-7 inline-flex btn-electric">Apply Now</Link>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/80">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
