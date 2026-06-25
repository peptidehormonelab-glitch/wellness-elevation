import { createFileRoute, Link } from "@tanstack/react-router";
import performanceImg from "@/assets/performance.jpg";
import longevityImg from "@/assets/longevity.jpg";
import skincareImg from "@/assets/skincare.jpg";
import coachingImg from "@/assets/coaching.jpg";
import productsImg from "@/assets/products.jpg";

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
  { tag: "Performance", title: "Sports Performance", img: performanceImg, desc: "Strength, conditioning and recovery protocols designed for serious athletes — engineered for measurable progress and durability." },
  { tag: "Longevity", title: "Healthy Aging", img: longevityImg, desc: "Lifestyle systems that protect mobility, energy and strength through every decade of life." },
  { tag: "Lifestyle", title: "Longevity Lifestyle", img: longevityImg, desc: "A long-horizon approach to sleep, stress, training and nutrition — built to compound over years." },
  { tag: "Wellness", title: "Men's & Women's Wellness", img: coachingImg, desc: "Programs tailored to the distinct performance and longevity needs of men and women at every life stage." },
  { tag: "Nutrition", title: "Nutrition & Supplement Guidance", img: productsImg, desc: "Evidence-led nutrition strategy and authorized supplementation guidance from proteins to vitamins, minerals and hydration." },
  { tag: "Cosmetic", title: "Premium Cosmetic & Skincare", img: skincareImg, desc: "Curated cosmetic and skincare solutions that elevate your daily ritual with clean, considered formulations." },
  { tag: "Coaching", title: "Coaching & Lifestyle Optimization", img: coachingImg, desc: "1:1 coaching that integrates training, nutrition, recovery and habit design into one cohesive lifestyle blueprint." },
];

function Services() {
  return (
    <div>
      <section className="container-page pt-20 pb-20">
        <span className="eyebrow">Services</span>
        <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[1.05]">A complete suite for <span className="text-gradient-electric">optimization</span>.</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          From performance training to premium skincare, every service is designed to integrate into one disciplined standard of living.
        </p>
      </section>

      <section className="container-page pb-28 space-y-6">
        {SERVICES.map((s, i) => (
          <article key={s.title} className={`grid lg:grid-cols-12 gap-6 rounded-3xl overflow-hidden border border-white/5 surface-glass ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[260px]">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, oklch(0.10 0.01 240 / 0.6))" }} />
            </div>
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">{s.tag} · 0{i + 1}</p>
              <h2 className="mt-4 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>
              <Link to="/contact" className="mt-8 self-start btn-ghost-light">Inquire</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-28">
        <div className="rounded-3xl p-10 md:p-16 text-center surface-glass" style={{ background: "radial-gradient(ellipse at center, oklch(0.66 0.20 250 / 0.18), transparent 70%)" }}>
          <h2 className="text-3xl md:text-5xl">Not sure where to begin?</h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">Book a private consultation and we'll architect the right path for you.</p>
          <Link to="/contact" className="mt-8 inline-flex btn-electric">Book a Consultation</Link>
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/80 max-w-3xl leading-relaxed">
        <span className="text-silver">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
