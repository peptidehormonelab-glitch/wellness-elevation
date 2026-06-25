import { createFileRoute, Link } from "@tanstack/react-router";
import productsImg from "@/assets/products.jpg";
import skincareImg from "@/assets/skincare.jpg";

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
  { name: "Premium Proteins", desc: "Whey isolate, blends and plant-based proteins selected for purity and amino profile.", items: ["Whey Isolate", "Whey Concentrate", "Plant Protein Blend", "Recovery Protein"] },
  { name: "Creatine", desc: "Authorized creatine monohydrate — the most studied performance compound in nutrition.", items: ["Creatine Monohydrate", "Micronized Creatine"] },
  { name: "Vitamins", desc: "Daily essentials and targeted vitamins for general wellness and lifestyle support.", items: ["Daily Multivitamin", "Vitamin D3 + K2", "Vitamin C Complex", "B-Complex"] },
  { name: "Minerals", desc: "Foundational mineral support for general wellness and active lifestyles.", items: ["Magnesium Glycinate", "Zinc Picolinate", "Calcium Complex", "Iron Bisglycinate"] },
  { name: "Hydration", desc: "Premium electrolyte and hydration formulas built for performance and daily life.", items: ["Performance Electrolytes", "Daily Hydration", "Endurance Mix"] },
  { name: "Recovery", desc: "Recovery essentials to support training adaptation, sleep and daily wellbeing.", items: ["Post-Training Recovery", "Sleep Support Blend", "Joint & Mobility"] },
];

function Products() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <img src={productsImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.7), oklch(0.10 0.01 240))" }} />
        <div className="container-page relative pt-24 pb-28">
          <span className="eyebrow">Authorized Portfolio</span>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[1.05]">Premium supplementation, <span className="text-gradient-electric">honestly formulated</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A curated portfolio of authorized supplements — proteins, creatine, vitamins, minerals, hydration and recovery essentials — selected for purity, transparency and real-world effectiveness.
          </p>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <article key={c.name} className="surface-glass rounded-2xl p-8 flex flex-col">
              <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">Category 0{i + 1}</p>
              <h3 className="mt-4 text-2xl md:text-3xl">{c.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="hairline my-6" />
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.items.map(it => (
                  <li key={it} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-electric" />{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden border border-white/5">
            <img src={skincareImg} alt="Premium luxury skincare serum" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Cosmetic & Skincare</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Premium cosmetic care, elevated daily.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Our cosmetic line brings the same disciplined standard to your skincare ritual — clean ingredients, considered formulations and a quietly luxurious experience.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground max-w-lg">
              {["Hydrating Serums", "Antioxidant Care", "Moisturizers", "Cleansers", "Eye Care", "SPF Daily"].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-electric" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="rounded-3xl p-10 md:p-16 surface-glass text-center" style={{ background: "radial-gradient(ellipse at center, oklch(0.66 0.20 250 / 0.18), transparent 70%)" }}>
          <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">Product inquiries & wholesale</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">For availability, pricing and partnership opportunities, contact our team directly.</p>
          <Link to="/contact" className="mt-8 inline-flex btn-electric">Request Information</Link>
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/80 max-w-3xl leading-relaxed">
        <span className="text-silver">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
