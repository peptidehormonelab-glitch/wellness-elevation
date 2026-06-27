import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import productsImg from "@/assets/products.jpg";
import skincareImg from "@/assets/skincare.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — PLC Optimization" },
      {
        name: "description",
        content:
          "Authorized premium supplements including proteins, creatine, vitamins, minerals, hydration and recovery essentials. Plus premium skin care. All authorized, all transparent.",
      },
      { property: "og:title", content: "Products — PLC Optimization" },
      {
        property: "og:description",
        content: "A curated portfolio of authorized supplements and premium skin care — selected for purity, transparency and real-world effectiveness.",
      },
    ],
  }),
  component: Products,
});

const CATEGORIES = [
  {
    num: "01",
    name: "Premium Proteins",
    tag: "Performance",
    desc: "Whey isolate, blends and plant-based proteins selected for purity, complete amino acid profiles and clean formulations without unnecessary additives.",
    items: ["Whey Isolate", "Whey Concentrate", "Plant Protein Blend", "Recovery Protein"],
  },
  {
    num: "02",
    name: "Creatine",
    tag: "Performance",
    desc: "Authorized creatine monohydrate — the most rigorously studied performance compound in sports nutrition, selected for purity and bioavailability.",
    items: ["Creatine Monohydrate", "Micronized Creatine"],
  },
  {
    num: "03",
    name: "Vitamins",
    tag: "Wellness",
    desc: "Daily essentials and targeted vitamins for general wellness, immune function and lifestyle optimization — formulated for real-world effectiveness.",
    items: ["Daily Multivitamin", "Vitamin D3 + K2", "Vitamin C Complex", "B-Complex"],
  },
  {
    num: "04",
    name: "Minerals",
    tag: "Wellness",
    desc: "Foundational mineral support for general wellness, muscle function and active lifestyles — selected for bioavailability and clean sourcing.",
    items: ["Magnesium Glycinate", "Zinc Picolinate", "Calcium Complex", "Iron Bisglycinate"],
  },
  {
    num: "05",
    name: "Hydration",
    tag: "Performance",
    desc: "Premium electrolyte and hydration formulas built for performance recovery and daily lifestyle support — without artificial colors or excessive fillers.",
    items: ["Performance Electrolytes", "Daily Hydration", "Endurance Formula"],
  },
  {
    num: "06",
    name: "Recovery",
    tag: "Longevity",
    desc: "Recovery essentials to support training adaptation, restful sleep and sustained daily wellbeing — selected for safety, evidence and effectiveness.",
    items: ["Post-Training Recovery", "Sleep Support Blend", "Joint & Mobility"],
  },
];

const SKINCARE = [
  "Hydrating Serums",
  "Antioxidant Protection",
  "Premium Moisturizers",
  "Gentle Cleansers",
  "Eye Care",
  "Daily SPF Protection",
];

const STANDARDS = [
  {
    label: "Authorized",
    desc: "Every product is authorized for general wellness retail use — no unauthorized health claims.",
  },
  {
    label: "Transparent",
    desc: "Full ingredient disclosure. No hidden proprietary blends. What is in the product is on the label.",
  },
  {
    label: "Verified",
    desc: "Selected for purity, bioavailability and real-world effectiveness — not marketing potential.",
  },
  {
    label: "Curated",
    desc: "Every product in our portfolio earns its place through rigorous evaluation — nothing is carried by default.",
  },
];

function Products() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]" aria-labelledby="products-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={productsImg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.16 }}
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, oklch(0.10 0.012 240 / 0.65), oklch(0.10 0.012 240))" }}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-electric/[0.05] blur-[80px]" />
        </div>

        <div className="container-page relative pt-24 pb-28">
          <FadeUp>
            <span className="eyebrow">Authorized Portfolio</span>
            <h1 id="products-hero-heading" className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-4xl leading-[1.03]">
              Premium supplementation,{" "}
              <span className="text-gradient-electric">honestly formulated</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A curated portfolio of authorized supplements — proteins, creatine, vitamins, minerals, hydration and recovery essentials — every product selected for purity, transparency and proven real-world effectiveness. No noise. No inflated claims.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── STANDARDS BAND ── */}
      <section className="border-b border-white/[0.06]" aria-label="Our product standards">
        <div className="container-page py-14">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-px">
            {STANDARDS.map(s => (
              <StaggerItem key={s.label}>
                <div className="text-center py-8 px-6">
                  <p className="text-xl font-display text-gradient-electric">{s.label}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="container-page py-24" aria-labelledby="portfolio-heading">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <span className="eyebrow">Supplement Portfolio</span>
              <h2 id="portfolio-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">Six disciplined categories.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Every category is curated with the same standard — authorized products, transparent formulations and clear explanations of what each compound does and why it is included.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <article className="surface-glass rounded-2xl p-8 flex flex-col h-full card-hover" aria-labelledby={`cat-${c.num}-heading`}>
                <div className="flex items-start justify-between mb-1">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">Category {c.num}</p>
                  <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground/60 border border-white/10 rounded-full px-2.5 py-1">
                    {c.tag}
                  </span>
                </div>
                <h3 id={`cat-${c.num}-heading`} className="mt-4 text-2xl md:text-3xl font-display">{c.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>

                <div className="hairline my-6" />

                <ul className="space-y-2.5" aria-label={`${c.name} products`}>
                  {c.items.map(it => (
                    <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="glow-dot" aria-hidden="true" />
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
      <section className="container-page pb-28" aria-labelledby="skincare-heading">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] relative">
              <img
                src={skincareImg}
                alt="Premium luxury luxury skin care products"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.06), transparent)" }}
                aria-hidden="true"
              />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Skin Care</span>
            <h2 id="skincare-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Premium skin care, elevated daily.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              Our skin care line brings the same disciplined standard to your skincare ritual — clean, thoughtfully selected ingredients, considered formulations and a quietly luxurious experience that reflects your commitment to excellence in every area of life.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Skincare categories">
              {SKINCARE.map(x => (
                <li key={x} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="glow-dot" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-10 inline-flex btn-ghost-light items-center gap-2">
              Request Skincare Info <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </SlideRight>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-28" aria-labelledby="products-cta-heading">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.10), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <span className="eyebrow justify-center mb-6">Product Inquiries</span>
            <h2 id="products-cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">Inquiries, availability & partnerships.</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              For product availability, pricing information, wholesale inquiries or partnership opportunities, contact our team directly. We respond within one business day.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric">Request Information</Link>
          </div>
        </FadeUp>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/50 max-w-3xl leading-relaxed border-t border-white/[0.06] pt-8">
        <span className="text-silver/70">Wellness Notice.</span>{" "}
        Products are intended for general wellness and educational purposes only. They are not intended to diagnose, treat, cure, or prevent any disease. Always read product labels. Consult a qualified healthcare provider before use if pregnant, nursing, taking medications or managing a health condition.
      </p>
    </div>
  );
}
