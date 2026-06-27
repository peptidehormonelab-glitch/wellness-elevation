import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import performanceImg from "@/assets/performance.jpg";
import longevityImg from "@/assets/longevity.jpg";
import skincareImg from "@/assets/skincare.jpg";
import productsImg from "@/assets/products.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import diagnosticsImg from "@/assets/card-diagnostics.jpg";

import wellnessBalanceImg from "@/assets/wellness-balance.jpg";
import coachingConsultImg from "@/assets/coaching-consult.jpg";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PLC Optimization" },
      {
        name: "description",
        content:
          "Sports performance, healthy aging, longevity lifestyle, nutrition guidance, premium skincare, 1:1 coaching and lifestyle optimization. Every service built on an evidence-based, long-horizon standard.",
      },
      { property: "og:title", content: "Services — PLC Optimization" },
      {
        property: "og:description",
        content: "Premium wellness, performance and longevity services from PLC Optimization LLC — built on evidence, refined by experience.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    tag: "Performance",
    num: "01",
    title: "Sports Performance",
    img: performanceImg,
    desc: "Periodized strength and conditioning built for athletes who train with purpose — engineered for measurable, sustainable progress over time, not just the next training block.",
    bullets: [
      "Periodized strength programming",
      "Conditioning & endurance protocols",
      "Recovery science integration",
      "Performance nutrition guidance",
    ],
  },
  {
    tag: "Longevity",
    num: "02",
    title: "Healthy Aging",
    img: longevityImg,
    desc: "A lifestyle-driven approach to maintaining mobility, strength and energy through every decade — grounded in evidence, designed for the long term.",
    bullets: [
      "Mobility & joint health focus",
      "Strength through every life stage",
      "Energy & vitality optimization",
      "Long-horizon lifestyle design",
    ],
  },
  {
    tag: "Lifestyle",
    num: "03",
    title: "Longevity Lifestyle",
    img: lifestyleImg,
    desc: "A comprehensive approach to sleep, stress, training and nutrition — built to compound quietly over years and adapt as your life and priorities evolve.",
    bullets: [
      "Sleep optimization frameworks",
      "Stress & recovery protocols",
      "Habit architecture design",
      "Nutrition periodization",
    ],
  },
  {
    tag: "Precision Wellness",
    num: "04",
    title: "Precision Wellness & Human Optimization",
    img: wellnessBalanceImg,
    desc: "Recovery, energy, resilience and long-term health — guided by biomarkers, HRV, recovery science and personalized lifestyle strategies. A human performance approach, not a fitness program.",
    bullets: [
      "Recovery & HRV-guided protocols",
      "Cellular health & micronutrient context",
      "Functional movement assessment",
      "Lifestyle optimization sessions",
    ],
  },

  {
    tag: "Nutrition",
    num: "05",
    title: "Nutrition & Precision Supplementation",
    img: productsImg,
    desc: "Evidence-led nutrition strategy and precision supplementation guidance — from macro planning to micronutrient optimization and authorized product curation, explained clearly and without marketing noise.",
    bullets: [
      "Macro & micronutrient strategy",
      "Authorized supplement curation",
      "Biomarker-aware planning",
      "Performance nutrition timing",
    ],
  },

  {
    tag: "Skin Care",
    num: "06",
    title: "Premium Skin Care & Clinical Aesthetics",
    img: skincareImg,
    desc: "Professional skin care optimization — clinical aesthetic treatments, premium daily rituals and science-led anti-aging strategies designed around your skin, not a generic product line.",
    bullets: [
      "Clinical skin diagnostics",
      "Microneedling & facial rejuvenation",
      "Daily ritual & barrier care",
      "Anti-aging skin optimization",
    ],
  },

  {
    tag: "Coaching",
    num: "07",
    title: "Private Coaching & Lifestyle Optimization",
    img: coachingConsultImg,
    desc: "1:1 coaching that integrates training, nutrition, recovery and habit design into one cohesive lifestyle blueprint — refined continuously as you grow.",
    bullets: [
      "Private intake consultation",
      "Custom lifestyle blueprint",
      "Weekly check-ins & refinement",
      "Direct coaching access",
    ],
  },
  {
    tag: "Diagnostics",
    num: "08",
    title: "Advanced Diagnostics",
    img: diagnosticsImg,
    desc: "Comprehensive assessments that translate data into action — body composition, biomarkers, cardiorespiratory and metabolic testing reviewed through a long-horizon optimization lens.",
    bullets: [
      "Body composition & DEXA review",
      "Blood biomarker interpretation",
      "VO₂ Max & metabolic testing",
      "Personalized health dashboards",
    ],
  },
];


function Services() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-20" aria-labelledby="services-hero-heading">
        <FadeUp>
          <span className="eyebrow">Services</span>
          <h1 id="services-hero-heading" className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-4xl leading-[1.03]">
            A complete suite for{" "}
            <span className="text-gradient-electric">optimization</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From sports performance to premium skincare, every service is designed to integrate seamlessly — not compete. One disciplined standard, applied across every area of your wellness life.
          </p>
        </FadeUp>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="container-page pb-24">
        <StaggerContainer className="space-y-5">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.title}>
              <article
                className={`group grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/[0.07] surface-glass card-hover ${
                  i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
                aria-labelledby={`service-${s.num}-heading`}
              >
                <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[240px] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.10 0.012 240 / 0.4))" }}
                    aria-hidden="true"
                  />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-background/65 border border-white/10 backdrop-blur-md text-silver">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">{s.tag} · {s.num}</p>
                  <h2 id={`service-${s.num}-heading`} className="mt-4 text-3xl md:text-4xl font-display">{s.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg text-sm">{s.desc}</p>

                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5" aria-label="Includes">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="glow-dot" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="mt-8 self-start inline-flex btn-ghost-light items-center gap-2">
                    Inquire <ArrowRight size={13} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28" aria-labelledby="services-cta-heading">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.10), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <span className="eyebrow justify-center mb-6">Begin Here</span>
            <h2 id="services-cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">Not sure where to begin?</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Book a private consultation and we'll architect the right path based on your goals, timeline and lifestyle — at no obligation.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric">Book a Consultation</Link>
          </div>
        </FadeUp>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/50 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/70">Wellness Notice.</span>{" "}
        Products and services are intended for general wellness and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before beginning any new wellness program.
      </p>
    </div>
  );
}
