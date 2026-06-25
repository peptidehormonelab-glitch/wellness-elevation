import { createFileRoute, Link } from "@tanstack/react-router";
import coachingImg from "@/assets/coaching.jpg";

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
  { name: "Foundation", price: "From $399 / month", desc: "For those building structure into their training, nutrition and recovery for the first time.", features: ["Weekly programming", "Nutrition framework", "Supplement guidance", "Monthly review"] },
  { name: "Performance", price: "From $799 / month", desc: "For athletes and high-performers pursuing measurable strength, endurance and physique outcomes.", features: ["Custom training cycles", "Detailed nutrition plan", "Recovery protocols", "Bi-weekly 1:1 calls", "Direct messaging access"] },
  { name: "Longevity", price: "From $999 / month", desc: "A long-horizon practice for mobility, energy and strength through every decade.", features: ["Holistic lifestyle design", "Mobility & recovery focus", "Personalized nutrition", "Sleep & stress strategy", "Quarterly reassessments"] },
];

const PROCESS = [
  { t: "Assessment", d: "Private intake call to understand your goals, history and lifestyle." },
  { t: "Blueprint", d: "A custom training, nutrition and recovery plan designed around your real schedule." },
  { t: "Execution", d: "Weekly coaching and check-ins to maintain accountability and momentum." },
  { t: "Iteration", d: "Continuous refinement so your program evolves as you do." },
];

function Coaching() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5">
        <img src={coachingImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 240 / 0.6), oklch(0.10 0.01 240))" }} />
        <div className="container-page relative pt-24 pb-28">
          <span className="eyebrow">Private Coaching</span>
          <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[1.05]">Private coaching for the <span className="text-gradient-electric">optimized life</span>.</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            1:1 coaching that integrates training, nutrition guidance, recovery and habit design into one cohesive standard. Built for individuals who take their performance and longevity seriously.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-electric">Apply for Coaching</Link>
            <Link to="/services" className="btn-ghost-light">All Services</Link>
          </div>
        </div>
      </section>

      <section className="container-page py-28">
        <span className="eyebrow">Programs</span>
        <h2 className="mt-5 text-4xl md:text-5xl">Three disciplined tiers.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <article key={p.name} className={`rounded-2xl p-8 border ${i === 1 ? "border-electric/40 surface-glass" : "border-white/5 surface-glass"} flex flex-col`}>
              {i === 1 && <p className="text-[10px] uppercase tracking-[0.32em] text-electric-glow mb-3">Most Selected</p>}
              <h3 className="text-3xl md:text-4xl">{p.name}</h3>
              <p className="mt-2 text-sm text-silver">{p.price}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="hairline my-6" />
              <ul className="space-y-2 text-sm text-muted-foreground mb-8">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2"><span className="mt-2 w-1 h-1 rounded-full bg-electric shrink-0" />{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={i === 1 ? "btn-electric mt-auto" : "btn-ghost-light mt-auto"}>Apply</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-28">
        <span className="eyebrow">Our Process</span>
        <h2 className="mt-5 text-4xl md:text-5xl max-w-3xl">A measured path from intake to lasting transformation.</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((s, i) => (
            <div key={s.t} className="surface-glass rounded-2xl p-7">
              <p className="text-xs uppercase tracking-[0.32em] text-electric-glow">Step 0{i + 1}</p>
              <h3 className="mt-4 text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="container-page pb-16 text-xs text-muted-foreground/80 max-w-3xl leading-relaxed">
        <span className="text-silver">Disclaimer.</span> Products and services are intended for general wellness and lifestyle support only. They are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  );
}
