import { createFileRoute, Link } from "@tanstack/react-router";
import longevityImg from "@/assets/longevity.jpg";

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
  { t: "Discipline", d: "Premium outcomes come from systems, not shortcuts. Every protocol is designed to be sustainable." },
  { t: "Transparency", d: "Clear sourcing, clear formulations, clear coaching. No noise, no inflated claims." },
  { t: "Longevity", d: "We optimize for the body you'll inhabit in 20 years — not just the next 12 weeks." },
  { t: "Elevation", d: "Wellness should feel premium. From product to coaching, the experience matters." },
];

function About() {
  return (
    <div>
      <section className="container-page pt-20 pb-24">
        <span className="eyebrow">About PLC Optimization</span>
        <h1 className="mt-6 text-5xl md:text-7xl max-w-4xl leading-[1.05]">A premium standard for <span className="text-gradient-electric">body, performance</span> and <span className="text-gradient-silver">longevity</span>.</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          PLC Optimization LLC is a U.S.-registered wellness brand created for individuals who want measured, lifelong results — not trends. We combine coaching, nutrition guidance, authorized supplementation and premium cosmetic care into one disciplined standard.
        </p>
      </section>

      <section className="relative border-y border-white/5">
        <img src={longevityImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="container-page relative py-24 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2 className="mt-5 text-4xl md:text-5xl">Help you build a body and lifestyle that compound.</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Optimization is not a 12-week program. It is a long horizon practice — built from intelligent training, intentional recovery, clean nutrition and considered supplementation. Our role is to give you the structure, products and guidance to live that practice with clarity and confidence.
          </p>
        </div>
      </section>

      <section className="container-page py-28">
        <span className="eyebrow">Our Values</span>
        <h2 className="mt-5 text-4xl md:text-5xl max-w-3xl">Four principles that shape every program and product.</h2>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {VALUES.map((v, i) => (
            <div key={v.t} className="surface-glass rounded-2xl p-8 md:p-10">
              <p className="text-xs tracking-[0.32em] uppercase text-electric-glow">0{i + 1}</p>
              <h3 className="mt-4 text-2xl md:text-3xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="rounded-3xl border border-white/10 p-10 md:p-16 surface-glass text-center">
          <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto">Built for individuals who refuse to compromise on how they live.</h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">Speak with our team about coaching, nutrition guidance or our authorized product portfolio.</p>
          <Link to="/contact" className="mt-10 inline-flex btn-electric">Contact PLC</Link>
        </div>
      </section>
    </div>
  );
}
