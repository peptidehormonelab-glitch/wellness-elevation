import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import productsImg from "@/assets/products.jpg";
import longevityImg from "@/assets/longevity.jpg";
import skincareImg from "@/assets/skincare.jpg";
import performanceImg from "@/assets/performance.jpg";
import coachingImg from "@/assets/coaching.jpg";
import cardPerformance from "@/assets/card-performance.jpg";
import cardLongevity from "@/assets/card-longevity.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardWellness from "@/assets/card-wellness.jpg";
import cardCosmetic from "@/assets/card-cosmetic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLC Optimization — Optimize Your Body. Elevate Your Life." },
      { name: "description", content: "Luxury wellness optimization, sports performance, healthy aging, nutrition coaching, premium skincare, and authorized supplements." },
      { property: "og:title", content: "PLC Optimization — Optimize Your Body. Elevate Your Life." },
      { property: "og:description", content: "Luxury wellness optimization, sports performance, healthy aging, nutrition coaching, premium skincare, and authorized supplements." },
    ],
  }),
  component: Home,
});

const PILLARS = [
  { title: "Sports Performance", desc: "Programming, nutrition guidance and recovery protocols designed for athletes who train with purpose.", img: performanceImg },
  { title: "Healthy Aging", desc: "A measured, lifestyle-driven approach to mobility, strength and energy through every decade.", img: longevityImg },
  { title: "Premium Cosmetic Care", desc: "Clean, science-led skincare formulations that elevate your daily ritual.", img: skincareImg },
  { title: "Coaching & Lifestyle", desc: "1:1 coaching that aligns nutrition, training and habit design with your real life.", img: coachingImg },
];

const STATS = [
  { k: "U.S. LLC", v: "Registered" },
  { k: "Authorized", v: "Supplements" },
  { k: "1:1", v: "Coaching" },
  { k: "Premium", v: "Formulations" },
];

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-50">
          <img src={heroImg} alt="Athletic man and woman in profile, premium wellness photography" width={1600} height={1104} className="w-full h-full object-cover object-center mix-blend-luminosity" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.10 0.01 240 / 0.5) 60%, oklch(0.10 0.01 240) 100%)" }} />
        <div className="container-page relative pt-24 pb-32 lg:pt-36 lg:pb-44 min-h-[88vh] flex flex-col justify-center">
          <span className="eyebrow">PLC Optimization · U.S. Registered LLC</span>
          <h1 className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl leading-[1.02]">
            Optimize Your <em className="not-italic text-gradient-electric">Body.</em><br />
            Elevate Your <span className="text-gradient-silver">Life.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            PLC Optimization delivers premium wellness solutions focused on sports performance, healthy aging, nutrition, cosmetic care, and lifestyle optimization. Our mission is to help people achieve long-term vitality, confidence, and overall well-being through education, coaching, and carefully selected wellness products.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="btn-electric">Explore Services</Link>
            <Link to="/about" className="btn-ghost-light">Learn More</Link>
          </div>

          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden surface-glass">
            {STATS.map(s => (
              <div key={s.k} className="bg-background/40 px-6 py-7">
                <p className="text-2xl font-display text-gradient-silver">{s.v}</p>
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground mt-2">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE CARDS */}
      <section className="container-page py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Deliver</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Five disciplines. One elevated standard.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">Every solution we offer is built around five interlocking areas of premium wellness.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {[
            { t: "Performance", d: "Train and recover like a serious athlete.", img: cardPerformance },
            { t: "Longevity", d: "Age with strength, energy and clarity.", img: cardLongevity },
            { t: "Nutrition", d: "Eat with intention and precision.", img: cardNutrition },
            { t: "Wellness", d: "A vibrant life, for you and your family.", img: cardWellness },
            { t: "Cosmetic Care", d: "Skincare rituals, elevated daily.", img: cardCosmetic },
          ].map((c, i) => (
            <article
              key={c.t}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 aspect-[3/4] ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
            >
              <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.1) 0%, oklch(0.10 0.01 240 / 0.55) 55%, oklch(0.08 0.01 240 / 0.95) 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] uppercase tracking-[0.32em] text-electric-glow">0{i + 1}</p>
                <h3 className="mt-2 text-xl md:text-2xl">{c.t}</h3>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-page py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow">The Four Pillars</span>
            <h2 className="mt-5 text-4xl md:text-5xl">A complete system for the optimized life.</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every program, product and protocol is built around four interlocking pillars — designed to compound over years, not weeks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface aspect-[5/4] md:aspect-[6/5]">
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.10 0.01 240 / 0.95) 100%)" }} />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">0{i + 1}</p>
                <h3 className="mt-3 text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LONGEVITY BAND */}
      <section className="relative py-28 overflow-hidden border-y border-white/5">
        <div className="absolute inset-0">
          <img src={longevityImg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.10 0.01 240) 0%, oklch(0.10 0.01 240 / 0.6) 60%, transparent 100%)" }} />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Longevity Lifestyle</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Engineered to age with strength, clarity and grace.</h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              We design lifestyle systems that compound: intelligent training, intentional recovery, clean nutrition and considered supplementation. The result is sustained vitality — across every decade of life.
            </p>
            <Link to="/about" className="mt-8 btn-ghost-light">Our Philosophy</Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="container-page py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <img src={productsImg} alt="Premium supplement line on dark surface" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Authorized Supplements</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Clean ingredients. Disciplined formulations.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              A curated portfolio of premium proteins, creatine, vitamins, minerals, hydration and recovery essentials — all authorized for retail sale and selected for purity, transparency and effectiveness.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["Whey & Plant Proteins", "Creatine Monohydrate", "Daily Multivitamins", "Essential Minerals", "Hydration Formulas", "Recovery Blends"].map(x => (
                <li key={x} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-electric" /> {x}</li>
              ))}
            </ul>
            <Link to="/products" className="mt-10 btn-electric">View Products</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="surface-glass rounded-3xl p-12 md:p-20 text-center" style={{ background: "radial-gradient(ellipse at center, oklch(0.66 0.20 250 / 0.18), transparent 70%)" }}>
          <span className="eyebrow justify-center">Begin the Standard</span>
          <h2 className="mt-6 text-4xl md:text-6xl max-w-3xl mx-auto">Your optimized life starts with one disciplined decision.</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Book a private consultation to design your performance, longevity and lifestyle blueprint.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-electric">Book a Consultation</Link>
            <Link to="/coaching" className="btn-ghost-light">Coaching Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
