import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import longevityImg from "@/assets/longevity.jpg";
import performanceImg from "@/assets/performance.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PLC Optimization LLC" },
      { name: "description", content: "PLC Optimization LLC is a premium U.S.-based wellness brand built on performance, longevity and lifestyle optimization." },
      { property: "og:title", content: "About — PLC Optimization LLC" },
      { property: "og:description", content: "Premium U.S.-based wellness brand for performance, longevity and lifestyle optimization." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Discipline", d: "Premium outcomes come from systems, not shortcuts. Every protocol is designed to be sustainable, measurable and built on compounding progress." },
  { t: "Transparency", d: "Clear sourcing, clear formulations, clear coaching. No noise, no inflated claims. What you see is what you get — always." },
  { t: "Longevity", d: "We optimize for the body you'll inhabit in 20 years — not just the next 12 weeks. True wellness is a long-horizon practice." },
  { t: "Elevation", d: "Wellness should feel premium. From product quality to the coaching experience, every touchpoint reflects an elevated standard." },
];

const MILESTONES = [
  { year: "Founded", label: "U.S. Registered LLC" },
  { year: "5+", label: "Wellness disciplines" },
  { year: "100%", label: "Authorized products" },
  { year: "1:1", label: "Private coaching" },
];

function About() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-24">
        <FadeUp>
          <span className="eyebrow">About PLC Optimization</span>
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-5xl leading-[1.03]">
            A premium standard for{" "}
            <span className="text-gradient-electric">body, performance</span>{" "}
            and{" "}
            <span className="text-gradient-silver">longevity</span>.
          </h1>
          <p className="mt-9 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            PLC Optimization LLC is a U.S.-registered wellness brand created for individuals who want measured, lifelong results — not trends. We combine coaching, nutrition guidance, authorized supplementation and premium cosmetic care into one disciplined standard.
          </p>
        </FadeUp>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-white/[0.06]">
        <div className="container-page py-14">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {MILESTONES.map(m => (
              <StaggerItem key={m.year}>
                <div className="text-center py-8 px-4">
                  <p className="text-3xl md:text-4xl font-display text-gradient-electric">{m.year}</p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-3">{m.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="relative border-b border-white/[0.06] overflow-hidden py-28">
        <div className="absolute inset-0">
          <img src={longevityImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.12 }} loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.05] blur-[80px] -translate-y-1/2" />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">Help you build a body and lifestyle that compound.</h2>
          </SlideLeft>
          <SlideRight>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Optimization is not a 12-week program. It is a long-horizon practice — built from intelligent training, intentional recovery, clean nutrition and considered supplementation.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our role is to give you the structure, products and guidance to live that practice with clarity and confidence — for decades to come.
            </p>
            <Link to="/services" className="mt-8 inline-flex btn-ghost-light items-center gap-2">
              Our Services <ArrowRight size={14} />
            </Link>
          </SlideRight>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="container-page py-28">
        <FadeUp>
          <span className="eyebrow">Our Values</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl max-w-3xl">Four principles that shape every program and product.</h2>
        </FadeUp>
        <StaggerContainer className="mt-14 grid md:grid-cols-2 gap-5">
          {VALUES.map((v, i) => (
            <StaggerItem key={v.t}>
              <div className="surface-glass rounded-2xl p-8 md:p-10 h-full card-hover">
                <p className="text-[9px] tracking-[0.35em] uppercase text-electric-glow">0{i + 1}</p>
                <h3 className="mt-4 text-2xl md:text-3xl font-display">{v.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="container-page pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3]">
              <img
                src={performanceImg}
                alt="Athletic performance and wellness"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScaleIn>
          <SlideRight>
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Built for individuals who refuse to compromise.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed">
              We exist for a specific kind of person: someone who takes their health seriously, demands quality and transparency, and understands that lasting results come from consistent, disciplined systems — not shortcuts.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That is the standard we hold ourselves to. And it's the standard we bring to everything we create.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/coaching" className="btn-electric">Explore Coaching</Link>
              <Link to="/contact" className="btn-ghost-light">Contact Us</Link>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl border border-white/[0.09] p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.1), transparent 70%)" }}
          >
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">Built for individuals who refuse to compromise on how they live.</h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">Speak with our team about coaching, nutrition guidance or our authorized product portfolio.</p>
            <Link to="/contact" className="mt-10 inline-flex btn-electric">Contact PLC</Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
