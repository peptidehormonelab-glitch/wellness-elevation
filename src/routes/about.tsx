import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import longevityImg from "@/assets/longevity.jpg";
import performanceImg from "@/assets/performance.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PLC Optimization LLC" },
      {
        name: "description",
        content:
          "PLC Optimization LLC is a U.S.-registered premium wellness brand founded on the belief that lasting health is built through discipline, education and evidence-based practice.",
      },
      { property: "og:title", content: "About — PLC Optimization LLC" },
      {
        property: "og:description",
        content: "The story, philosophy and mission behind PLC Optimization LLC — a premium wellness brand built for the long term.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    t: "Discipline",
    d: "Lasting outcomes are never accidental. They come from systems — structured, consistent and built to compound. Every program, every product, every coaching engagement reflects this principle.",
  },
  {
    t: "Transparency",
    d: "We explain everything: the science behind our protocols, the sourcing behind our products, the reasoning behind every recommendation. You will never encounter vague claims or hidden formulations.",
  },
  {
    t: "Longevity",
    d: "We optimize for the body you'll inhabit in 20 years, not just the next season. True wellness is a long-horizon practice — and every decision we make is filtered through that lens.",
  },
  {
    t: "Elevation",
    d: "Wellness should feel premium — from the products you use to the coaching conversations you have. We hold every touchpoint to a standard that reflects the seriousness of your commitment.",
  },
];

const MILESTONES = [
  { year: "U.S. LLC", label: "Formally Registered" },
  { year: "5+", label: "Wellness Disciplines" },
  { year: "100%", label: "Authorized Products" },
  { year: "1:1", label: "Private Coaching" },
];

const COMMITMENTS = [
  {
    num: "01",
    title: "We educate before we sell.",
    desc: "Every product recommendation, every coaching decision is preceded by an explanation. We want you to understand the why — so you can make informed choices long after our engagement ends.",
  },
  {
    num: "02",
    title: "We cite our sources.",
    desc: "Our protocols are grounded in peer-reviewed research on exercise physiology, nutrition science and lifestyle medicine. We do not follow trends. We follow evidence.",
  },
  {
    num: "03",
    title: "We operate within clear boundaries.",
    desc: "PLC Optimization occupies a precise position: premium wellness and educational support. We make no medical claims. We recommend no prescription substances. We always encourage consulting a qualified healthcare provider.",
  },
  {
    num: "04",
    title: "We commit to the long term.",
    desc: "We measure our success not by programs sold but by the progress our clients make over years. A client who achieves lasting results is our most important outcome.",
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
            A premium standard for{" "}
            <span className="text-gradient-electric">body, performance</span>{" "}
            and{" "}
            <span className="text-gradient-silver">longevity</span>.
          </h1>
          <p className="mt-9 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            PLC Optimization LLC is a U.S.-registered wellness brand built for individuals who want measured, lifelong results — not trends, not shortcuts, not the next 12-week miracle. We integrate coaching, nutrition guidance, authorized supplementation and premium cosmetic care into one disciplined, evidence-based standard.
          </p>
        </FadeUp>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-white/[0.06]" aria-label="Company highlights">
        <div className="container-page py-14">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {MILESTONES.map(m => (
              <StaggerItem key={m.year}>
                <div className="text-center py-8 px-4">
                  <p className="text-3xl md:text-4xl font-display text-gradient-electric">{m.year}</p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 mt-3">{m.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── BRAND STORY / WHY WE EXIST ── */}
      <section className="relative border-b border-white/[0.06] overflow-hidden py-28" aria-labelledby="story-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={longevityImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.10 }} loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.95), oklch(0.10 0.012 240 / 0.7))" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.04] blur-[80px] -translate-y-1/2" />
        </div>

        <div className="container-page relative grid lg:grid-cols-2 gap-16 items-start">
          <SlideLeft>
            <span className="eyebrow">Why We Exist</span>
            <h2 id="story-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Built for a specific kind of person.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed text-lg">
              PLC Optimization was created for individuals who look at the wellness industry and see noise — exaggerated claims, unverifiable results, products built for marketing budgets rather than real physiology.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We exist to be the alternative. A premium wellness resource that operates with integrity — where every recommendation is defensible, every product is authorized, and every coaching relationship is built on honest, educational conversation.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We are not here to sell you a 30-day reset. We are here to help you build a body and lifestyle that compound — that serve you with increasing strength, mobility and clarity through every decade ahead.
            </p>
          </SlideLeft>

          <SlideRight>
            <div className="space-y-8 pt-2 lg:pt-16">
              {[
                {
                  heading: "The problem we saw",
                  body: "A wellness industry saturated with short-horizon thinking: aggressive promises, proprietary blends, coaching programs built around convenience rather than science. People deserved better.",
                },
                {
                  heading: "The standard we set",
                  body: "Every decision at PLC Optimization — product selection, coaching design, content creation — passes through a single filter: is this grounded in evidence, and does it genuinely serve our client's long-term health?",
                },
                {
                  heading: "The vision we hold",
                  body: "A global wellness brand trusted by serious individuals who understand that exceptional health is built through discipline and compounding systems — not purchased in a subscription box.",
                },
              ].map(item => (
                <div key={item.heading} className="surface-glass rounded-xl p-7 card-hover">
                  <h3 className="text-lg font-display text-foreground mb-3">{item.heading}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="container-page py-28" aria-labelledby="mission-heading">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <span className="eyebrow justify-center">Our Mission</span>
            <h2 id="mission-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Help you build a body and lifestyle that compound.
            </h2>
            <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
              Optimization is not a program you complete. It is a practice you build — intelligent training, intentional recovery, clean nutrition and considered supplementation, sustained across decades. Our role is to give you the structure, products and guidance to live that practice with clarity and confidence.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/services" className="btn-electric">Explore Services</Link>
              <Link to="/coaching" className="btn-ghost-light">Private Coaching</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-28 border-y border-white/[0.06]" aria-labelledby="values-heading">
        <div className="container-page">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
              <div>
                <span className="eyebrow">Our Values</span>
                <h2 id="values-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-2xl">
                  Four principles that shape everything.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                These are not marketing language. They are the operating principles behind every decision we make — from product curation to coaching design.
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

      {/* ── COMMITMENTS ── */}
      <section className="container-page py-28" aria-labelledby="commitments-heading">
        <FadeUp>
          <span className="eyebrow">Our Commitments</span>
          <h2 id="commitments-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-14">
            How we hold ourselves accountable.
          </h2>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {COMMITMENTS.map((c) => (
            <StaggerItem key={c.num}>
              <div className="surface-glass rounded-2xl p-8 h-full card-hover relative overflow-hidden">
                <div
                  className="absolute top-4 right-6 text-[52px] font-display text-white/[0.03] select-none leading-none"
                  aria-hidden="true"
                >
                  {c.num}
                </div>
                <p className="text-[9px] tracking-[0.35em] uppercase text-electric-glow mb-4">{c.num}</p>
                <h3 className="text-xl md:text-2xl font-display mb-4">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="container-page pb-28" aria-labelledby="philosophy-heading">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3]">
              <img
                src={performanceImg}
                alt="Athletic performance and premium wellness training"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Our Philosophy</span>
            <h2 id="philosophy-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Built for individuals who refuse to compromise.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed">
              We exist for a specific kind of person: someone who takes their health seriously, demands quality and transparency, and understands that lasting results come from consistent, disciplined systems — not shortcuts, supplements alone, or programs designed for the masses.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That is the standard we hold ourselves to. And it is the standard we bring to every product, every program and every client relationship we build.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/coaching" className="btn-electric">Explore Coaching</Link>
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
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.08), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <h2 id="about-cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">
              Ready to experience a higher standard of wellness?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Speak with our team about coaching, nutrition guidance or our authorized product portfolio. We respond within one business day.
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
