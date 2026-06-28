import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NewsletterSection } from "@/components/NewsletterSection";
import { motion, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero.jpg";
import productsImg from "@/assets/products.jpg";
import cardPerformance from "@/assets/card-performance.jpg";
import cardLongevity from "@/assets/card-longevity.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardWellness from "@/assets/card-wellness.jpg";
import cardCosmetic from "@/assets/card-cosmetic.jpg";
import coachingImg from "@/assets/coaching.jpg";
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        name: "description",
        content:
          "PLC Optimization LLC delivers premium wellness solutions for sports performance, healthy aging, nutrition, skin care and lifestyle optimization. U.S. registered, science-based, built for the long term.",
      },
      { property: "og:title", content: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        property: "og:description",
        content: "Premium wellness brand for individuals who take the long view on their health. Sports performance, longevity, nutrition and authorized supplementation.",
      },
    ],
  }),
  component: Home,
});

const DISCIPLINES = [
  { num: "01", t: "Performance", d: "Train and recover with the precision of a serious athlete.", img: cardPerformance },
  { num: "02", t: "Longevity", d: "Build a body that stays strong, mobile and vital for decades.", img: cardLongevity },
  { num: "03", t: "Nutrition", d: "Fuel with intention. Every macro, every meal, every day.", img: cardNutrition },
  { num: "04", t: "Precision Wellness", d: "Recovery, resilience and energy — evidence-guided, science-informed.", img: cardWellness },
  { num: "05", t: "Skin Care", d: "Premium skin care rituals that reflect your standard.", img: cardCosmetic },
];



const FAQ = [
  {
    q: "What makes PLC Optimization different from other wellness brands?",
    a: "We combine private 1:1 coaching, nutrition guidance, authorized supplementation and premium skin care under one disciplined standard. Our approach is long-horizon — built to compound over years, not weeks. We also explain everything: the science, the sourcing, the reasoning.",
  },
  {
    q: "Are your supplements safe and properly authorized?",
    a: "All products in our portfolio are authorized for general wellness retail use and selected for purity, transparency and effectiveness. We do not carry any products making unauthorized health claims or using undisclosed proprietary blends.",
  },
  {
    q: "Do I need to be an elite athlete to benefit from PLC Optimization?",
    a: "Not at all. Our programs serve a wide range of individuals — from competitive athletes to executives pursuing healthy aging, from those optimizing nutrition to those seeking a structured longevity lifestyle. The common thread is a commitment to doing things properly.",
  },
  {
    q: "How does the coaching intake process work?",
    a: "It begins with a private intake consultation to understand your goals, training history, lifestyle and starting point. From there, we design a custom training, nutrition and recovery blueprint — then refine it continuously as you progress and your priorities evolve.",
  },
  {
    q: "What is your wellness compliance position?",
    a: "PLC Optimization operates strictly within wellness and educational positioning. We make no medical claims, do not advertise prescription substances and always recommend consulting a qualified healthcare provider before beginning any new program.",
  },
  {
    q: "How quickly can I expect a response to my inquiry?",
    a: "All inquiries submitted through our contact form receive a response within one business day. Existing coaching clients have direct messaging access during business hours.",
  },
];

const MARQUEE_ITEMS = [
  "Sports Performance", "Healthy Aging", "Nutrition Coaching", "Premium Skincare",
  "Longevity Lifestyle", "Authorized Supplements", "1:1 Coaching", "Lifestyle Optimization",
  "Sports Performance", "Healthy Aging", "Nutrition Coaching", "Premium Skincare",
  "Longevity Lifestyle", "Authorized Supplements", "1:1 Coaching", "Lifestyle Optimization",
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-start justify-between w-full py-6 text-left gap-6 group cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-electric-glow shrink-0 mt-1 font-medium">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-base md:text-lg font-display font-medium text-foreground group-hover:text-electric-glow transition-colors duration-300 leading-snug">
            {q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 mt-1"
          aria-hidden="true"
        >
          <ChevronDown size={17} className="text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-muted-foreground leading-relaxed pl-10 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden min-h-[95vh] flex flex-col justify-center"
        style={{ background: "var(--gradient-hero)" }}
        aria-label="Hero"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1104}
            className="w-full h-full object-cover object-center img-premium"
            style={{ opacity: 0.32 }}
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.10 0.012 240 / 0.20) 0%, oklch(0.10 0.012 240 / 0.55) 65%, oklch(0.10 0.012 240) 100%)",
            }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-electric/[0.05] blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-electric-dim/[0.07] blur-[100px]" />
        </div>

        <div className="container-page relative pt-16 pb-28 lg:pt-20 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="eyebrow">PLC Optimization · U.S. Registered LLC</span>
          </motion.div>

          <motion.h1
            className="mt-7 max-w-5xl text-5xl md:text-7xl lg:text-[90px] leading-[1.02] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Optimize Your{" "}
            <em className="not-italic text-gradient-electric">Body.</em>
            <br />
            Elevate Your{" "}
            <span className="text-gradient-silver">Life.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-base md:text-lg text-foreground/95 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
          >
            A premium American wellness company built around evidence-guided coaching, precision supplementation and long-term human optimization.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58 }}
          >
            <Link to="/services" className="btn-electric">Explore Services</Link>
            <Link to="/about" className="btn-ghost-light">Our Philosophy</Link>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06]"
            style={{ background: "oklch(1 0 0 / 0.03)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            aria-label="Trust indicators"
          >
            {[
              { value: "US Registered", label: "Limited Liability Company" },
              { value: "Evidence-Guided", label: "Science-Informed Standards" },
              { value: "Transparent", label: "Sourcing & Documentation" },
              { value: "Global Network", label: "International Partners" },
            ].map(s => (
              <div
                key={s.label}
                className="bg-background/55 backdrop-blur-sm px-6 py-7 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <p className="text-lg md:text-xl font-display text-gradient-silver tracking-tight">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70 mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="py-5 border-y border-white/[0.05] overflow-hidden bg-background/50" aria-hidden="true">
        <div className="flex gap-0 whitespace-nowrap animate-marquee">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/50">
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-electric/50 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── WHY PLC OPTIMIZATION ── */}
      <section className="container-page py-32 lg:py-40" aria-labelledby="why-heading">
        <FadeUp>
          <div className="max-w-3xl">
            <span className="eyebrow">Why PLC Optimization</span>
            <h2 id="why-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
              A single standard,{" "}
              <span className="text-gradient-silver">applied without exception.</span>
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-xl">
              Five commitments that define every program, product and partnership we put our name on.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { t: "Evidence First", d: "Every recommendation is guided by scientific evidence and continuous research." },
            { t: "Transparent Standards", d: "Clear documentation, responsible sourcing and quality-focused processes." },
            { t: "Premium Quality", d: "Identity verification, third-party testing where applicable, and continuous quality review." },
            { t: "Long-Term Optimization", d: "Focused on sustainable wellness and long-term performance rather than short-term trends." },
            { t: "Global Perspective", d: "US-based company with an international outlook and trusted European partnerships." },
          ].map((p, i) => (
            <StaggerItem key={p.t}>
              <div className="surface-glass rounded-2xl p-7 h-full border border-white/[0.06] card-hover">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-lg md:text-xl font-display leading-snug">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>


      {/* ── DISCIPLINES ── */}

      <section className="container-page py-28" aria-labelledby="disciplines-heading">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Five Disciplines</span>
              <h2 id="disciplines-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">One elevated standard.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Five interconnected areas of premium wellness, designed to integrate seamlessly into a single, disciplined way of living.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {DISCIPLINES.map((c, i) => (
            <StaggerItem key={c.t}>
              <article
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] aspect-[3/4] card-hover cursor-default ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover img-premium transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 35%, oklch(0.08 0.012 240 / 0.50) 65%, oklch(0.08 0.012 240 / 0.94) 100%)" }}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow font-medium">{c.num}</p>
                  <h3 className="mt-2 text-xl md:text-2xl font-display">{c.t}</h3>
                  <p className="mt-1.5 text-[11px] md:text-xs text-muted-foreground leading-relaxed line-clamp-2">{c.d}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── ABOUT BAND ── */}
      <section className="relative py-28 overflow-hidden border-y border-white/[0.06]" aria-labelledby="about-band-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-electric/[0.04] blur-[90px]" />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <span className="eyebrow">About PLC Optimization</span>
            <h2 id="about-band-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              A premium standard for body, performance and longevity.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              PLC Optimization LLC is a U.S.-registered wellness company created for individuals who want measured, lifelong results — not trends. We integrate coaching, nutrition guidance, authorized supplementation and premium skin care into one disciplined, evidence-guided standard.
            </p>
            <Link to="/about" className="mt-8 inline-flex btn-ghost-light items-center gap-2">
              Our Story <ArrowRight size={14} aria-hidden="true" />
            </Link>

          </SlideLeft>

          <SlideRight>
            <div
              className="relative rounded-2xl overflow-hidden border border-white/[0.07] surface-glass p-10 md:p-12"
              style={{ background: "radial-gradient(ellipse 100% 70% at 30% 0%, oklch(0.66 0.22 250 / 0.08), transparent 70%)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]" aria-hidden="true">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <pattern id="hexgrid" width="40" height="46" patternUnits="userSpaceOnUse">
                      <polygon points="20,2 38,12 38,34 20,44 2,34 2,12" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#hexgrid)" className="text-electric-glow" />
                </svg>
              </div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-electric-glow relative">A Premium Standard</p>
              <p className="mt-6 text-2xl md:text-3xl font-display leading-snug relative">
                "Optimization is a practice — built patiently, refined continuously, sustained across decades."
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70 relative">PLC Optimization · Operating Philosophy</p>
            </div>
          </SlideRight>
        </div>
      </section>



      {/* ── FOUR PILLARS ── */}
      <section className="container-page py-28" aria-labelledby="pillars-heading">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Four Pillars</span>
              <h2 id="pillars-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">The PLC framework.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Four integrated domains where premium standards translate into measurable, lasting results.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            { t: "Performance", d: "Train and recover with the precision of a serious athlete.", img: cardPerformance },
            { t: "Longevity", d: "Build a body that stays strong, mobile and vital for decades.", img: cardLongevity },
            { t: "Premium Skin Care", d: "Premium skin care rituals that reflect your standard.", img: cardCosmetic },
            { t: "Coaching", d: "Private 1:1 guidance refined continuously over the long term.", img: coachingImg },
          ].map((p) => (
            <StaggerItem key={p.t}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] aspect-[4/3] card-hover">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover img-premium transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 35%, oklch(0.08 0.012 240 / 0.55) 70%, oklch(0.08 0.012 240 / 0.95) 100%)" }}
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-display">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">{p.d}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section className="container-page py-28" aria-labelledby="products-heading">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] relative">
              <img
                src={productsImg}
                alt="Premium supplement portfolio on dark surface"
                loading="lazy"
                className="w-full h-full object-cover img-premium"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.08), transparent)" }}
                aria-hidden="true"
              />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Precision Supplementation</span>
            <h2 id="products-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Cellular health. Disciplined formulations.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              A curated portfolio for micronutrient optimization, cellular health and metabolic resilience — proteins, creatine, vitamins, minerals, hydration and recovery essentials. Every product authorized for retail, selected for purity, bioavailability and transparent formulation. No proprietary blends. No noise.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Product categories">
              {["Whey & Plant Proteins", "Creatine Monohydrate", "Daily Multivitamins", "Essential Minerals", "Hydration Formulas", "Recovery Blends"].map(x => (
                <li key={x} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="glow-dot" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/products" className="mt-10 inline-flex btn-electric items-center gap-2">
              View Portfolio <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </SlideRight>
        </div>
      </section>




      {/* ── NEWSLETTER ── */}
      <NewsletterSection />


      {/* ── FAQ ── */}
      <section className="py-28 border-y border-white/[0.06]" aria-labelledby="faq-heading">
        <div className="container-page">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <span className="eyebrow">Common Questions</span>
                <h2 id="faq-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">Everything you need to know.</h2>
              </div>
              <Link to="/contact" className="shrink-0 btn-ghost-light self-start lg:mt-14">
                Ask a Question
              </Link>
            </div>
          </FadeUp>

          <div className="max-w-4xl" role="list" aria-label="Frequently asked questions">
            {FAQ.map((item, i) => (
              <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="container-page py-28" aria-labelledby="cta-heading">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl border border-white/[0.09] p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.08), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <span className="eyebrow justify-center mb-6">Begin Your Journey</span>
            <h2 id="cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">
              Ready to live at a higher standard?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Speak with our team about private coaching, product guidance or any of our wellness disciplines. We respond within one business day.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-electric">Book a Consultation</Link>
              <Link to="/services" className="btn-ghost-light">View All Services</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
