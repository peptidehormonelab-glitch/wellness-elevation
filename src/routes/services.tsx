import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import performanceImg from "@/assets/performance.jpg";
import longevityImg from "@/assets/longevity.jpg";
import skincareImg from "@/assets/skincare.jpg";
import coachingImg from "@/assets/coaching.jpg";
import productsImg from "@/assets/products.jpg";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PLC Optimization" },
      { name: "description", content: "Sports performance, healthy aging, longevity lifestyle, men's and women's wellness, nutrition guidance, premium skincare, and coaching." },
      { property: "og:title", content: "Services — PLC Optimization" },
      { property: "og:description", content: "Premium wellness, performance and longevity services from PLC Optimization LLC." },
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
    desc: "Strength, conditioning and recovery protocols designed for serious athletes — engineered for measurable progress and long-term durability.",
    bullets: ["Periodized strength programming", "Conditioning & endurance protocols", "Recovery optimization", "Performance nutrition guidance"],
  },
  {
    tag: "Longevity",
    num: "02",
    title: "Healthy Aging",
    img: longevityImg,
    desc: "Lifestyle systems that protect mobility, energy and strength through every decade of life — built on evidence, refined by experience.",
    bullets: ["Mobility & joint health focus", "Hormonal wellness strategies", "Energy & vitality systems", "Long-horizon lifestyle design"],
  },
  {
    tag: "Lifestyle",
    num: "03",
    title: "Longevity Lifestyle",
    img: longevityImg,
    desc: "A long-horizon approach to sleep, stress, training and nutrition — built to compound over years and adapt as you evolve.",
    bullets: ["Sleep optimization frameworks", "Stress management protocols", "Habit architecture", "Nutrition periodization"],
  },
  {
    tag: "Wellness",
    num: "04",
    title: "Men's & Women's Wellness",
    img: coachingImg,
    desc: "Programs tailored to the distinct performance and longevity needs of men and women at every life stage.",
    bullets: ["Stage-specific programming", "Hormonal balance support", "Body composition guidance", "Lifestyle integration"],
  },
  {
    tag: "Nutrition",
    num: "05",
    title: "Nutrition & Supplement Guidance",
    img: productsImg,
    desc: "Evidence-led nutrition strategy and authorized supplementation guidance from proteins to vitamins, minerals and hydration.",
    bullets: ["Macro & micronutrient strategy", "Authorized supplement curation", "Elimination & reintroduction protocols", "Performance nutrition timing"],
  },
  {
    tag: "Cosmetic",
    num: "06",
    title: "Premium Cosmetic & Skincare",
    img: skincareImg,
    desc: "Curated cosmetic and skincare solutions that elevate your daily ritual with clean, considered formulations.",
    bullets: ["Clean ingredient formulations", "Daily skincare rituals", "Antioxidant care systems", "Hydration & barrier support"],
  },
  {
    tag: "Coaching",
    num: "07",
    title: "Coaching & Lifestyle Optimization",
    img: coachingImg,
    desc: "1:1 coaching that integrates training, nutrition, recovery and habit design into one cohesive lifestyle blueprint.",
    bullets: ["Private intake consultation", "Custom lifestyle blueprint", "Weekly check-ins & refinement", "Direct coaching access"],
  },
];

function Services() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-20">
        <FadeUp>
          <span className="eyebrow">Services</span>
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-4xl leading-[1.03]">
            A complete suite for{" "}
            <span className="text-gradient-electric">optimization</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From performance training to premium skincare, every service is designed to integrate into one disciplined standard of living.
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
                    style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.10 0.012 240 / 0.5))" }}
                  />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-background/60 border border-white/10 backdrop-blur-md text-silver">
                      {s.tag}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">{s.tag} · {s.num}</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-display">{s.title}</h2>
                  <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>

                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                    {s.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="glow-dot" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-8 self-start inline-flex btn-ghost-light items-center gap-2"
                  >
                    Inquire <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.12), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.1] rounded-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">Not sure where to begin?</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Book a private consultation and we'll architect the right path for you.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric">Book a Consultation</Link>
          </div>
        </FadeUp>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8 mt-4">
        <span className="text-silver/80">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
