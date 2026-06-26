import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import productsImg from "@/assets/products.jpg";
import skincareImg from "@/assets/skincare.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — PLC Optimization" },
      { name: "description", content: "Authorized premium supplements including proteins, creatine, vitamins, minerals, hydration and recovery products, plus premium cosmetic care." },
      { property: "og:title", content: "Products — PLC Optimization" },
      { property: "og:description", content: "A curated portfolio of authorized supplements and premium cosmetic care." },
    ],
  }),
  component: Products,
});

const CATEGORIES = [
  {
    num: "01",
    name: "Premium Proteins",
    tag: "Performance",
    desc: "Whey isolate, blends and plant-based proteins selected for purity and complete amino acid profile.",
    items: ["Whey Isolate", "Whey Concentrate", "Plant Protein Blend", "Recovery Protein"],
  },
  {
    num: "02",
    name: "Creatine",
    tag: "Performance",
    desc: "Authorized creatine monohydrate — the most rigorously studied performance compound in sports nutrition.",
    items: ["Creatine Monohydrate", "Micronized Creatine"],
  },
  {
    num: "03",
    name: "Vitamins",
    tag: "Wellness",
    desc: "Daily essentials and targeted vitamins for general wellness, immune support and lifestyle optimization.",
    items: ["Daily Multivitamin", "Vitamin D3 + K2", "Vitamin C Complex", "B-Complex"],
  },
  {
    num: "04",
    name: "Minerals",
    tag: "Wellness",
    desc: "Foundational mineral support for general wellness, muscle function and active lifestyles.",
    items: ["Magnesium Glycinate", "Zinc Picolinate", "Calcium Complex", "Iron Bisglycinate"],
  },
  {
    num: "05",
    name: "Hydration",
    tag: "Performance",
    desc: "Premium electrolyte and hydration formulas built for performance recovery and daily lifestyle support.",
    items: ["Performance Electrolytes", "Daily Hydration", "Endurance Formula"],
  },
  {
    num: "06",
    name: "Recovery",
    tag: "Longevity",
    desc: "Recovery essentials to support training adaptation, restful sleep and daily wellbeing.",
    items: ["Post-Training Recovery", "Sleep Support Blend", "Joint & Mobility"],
  },
];

const SKINCARE = [
  "Hydrating Serums",
  "Antioxidant Care",
  "Premium Moisturizers",
  "Gentle Cleansers",
  "Eye Care",
  "Daily SPF Protection",
];

const STANDARDS = [
  { label: "Authorized", desc: "All products are authorized for general wellness retail sale." },
  { label: "Transparent", desc: "Clear formulations with no hidden proprietary blends." },
  { label: "Pure", desc: "Selected for purity, bioavailability and real-world effectiveness." },
  { label: "Curated", desc: "Every product earns its place through rigorous evaluation." },
];

function Products() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0">
          <img
            src={productsImg}
            alt="Premium supplement line"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.18 }}
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.012 240 / 0.6), oklch(0.10 0.012 240))" }} />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-electric/[0.06] blur-[80px]" />
        </div>

        <div className="container-page relative pt-24 pb-28">
          <FadeUp>
            <span className="eyebrow">Authorized Portfolio</span>
            <h1 className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-4xl leading-[1.03]">
              Premium supplementation,{" "}
              <span className="text-gradient-electric">honestly formulated</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A curated portfolio of authorized supplements — proteins, creatine, vitamins, minerals, hydration and recovery essentials — selected for purity, transparency and real-world effectiveness.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section className="border-b border-white/[0.06]">
        <div className="container-page py-14">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {STANDARDS.map(s => (
              <StaggerItem key={s.label}>
                <div className="text-center py-8 px-6">
                  <p className="text-lg font-display text-gradient-electric">{s.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="container-page py-24">
        <FadeUp>
          <span className="eyebrow">Supplement Portfolio</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">Six disciplined categories.</h2>
        </FadeUp>

        <StaggerContainer className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <article className="surface-glass rounded-2xl p-8 flex flex-col h-full card-hover">
                <div className="flex items-start justify-between mb-1">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">Category {c.num}</p>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60 border border-white/10 rounded-full px-2.5 py-1">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-display">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>

                <div className="hairline my-6" />

                <ul className="space-y-2.5">
                  {c.items.map(it => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="glow-dot" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── SKINCARE ── */}
      <section className="container-page pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] relative">
              <img
                src={skincareImg}
                alt="Premium luxury skincare"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.08), transparent)" }} />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Cosmetic & Skincare</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Premium cosmetic care, elevated daily.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              Our cosmetic line brings the same disciplined standard to your skincare ritual — clean ingredients, considered formulations and a quietly luxurious experience.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {SKINCARE.map(x => (
                <li key={x} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="glow-dot" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-10 inline-flex btn-ghost-light items-center gap-2">
              Request Skincare Info <ArrowRight size={13} />
            </Link>
          </SlideRight>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.12), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.1] rounded-3xl pointer-events-none" />
            <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">Product inquiries & wholesale</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              For availability, pricing and partnership opportunities, contact our team directly.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric">Request Information</Link>
          </div>
        </FadeUp>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/60 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/80">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
