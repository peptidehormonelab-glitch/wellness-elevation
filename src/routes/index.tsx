import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Zap, Shield, Clock, Users, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
import { FadeUp, FadeIn, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from "@/components/Motion";

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

const DISCIPLINES = [
  { num: "01", t: "Performance", d: "Train and recover like a serious athlete.", img: cardPerformance },
  { num: "02", t: "Longevity", d: "Age with strength, energy and clarity.", img: cardLongevity },
  { num: "03", t: "Nutrition", d: "Eat with intention and precision.", img: cardNutrition },
  { num: "04", t: "Wellness", d: "A vibrant life, for you and your family.", img: cardWellness },
  { num: "05", t: "Cosmetic Care", d: "Skincare rituals, elevated daily.", img: cardCosmetic },
];

const PILLARS = [
  { title: "Sports Performance", desc: "Programming, nutrition guidance and recovery protocols designed for athletes who train with purpose.", img: performanceImg },
  { title: "Healthy Aging", desc: "A measured, lifestyle-driven approach to mobility, strength and energy through every decade.", img: longevityImg },
  { title: "Premium Cosmetic Care", desc: "Clean, science-led skincare formulations that elevate your daily ritual.", img: skincareImg },
  { title: "Coaching & Lifestyle", desc: "1:1 coaching that aligns nutrition, training and habit design with your real life.", img: coachingImg },
];

const STATS = [
  { value: "U.S. LLC", label: "Registered Entity" },
  { value: "1:1", label: "Private Coaching" },
  { value: "5+", label: "Wellness Disciplines" },
  { value: "100%", label: "Authorized Products" },
];

const TESTIMONIALS = [
  {
    quote: "The coaching program transformed how I approach training and nutrition. My performance metrics improved significantly within three months.",
    author: "Michael R.",
    role: "Competitive Triathlete",
    rating: 5,
  },
  {
    quote: "PLC Optimization brought a level of discipline and clarity to my wellness routine I'd never experienced. The personalized approach is exceptional.",
    author: "Sarah K.",
    role: "Executive & Wellness Enthusiast",
    rating: 5,
  },
  {
    quote: "The longevity program is unlike anything else available. It's science-led, practical, and built for the long term — not a quick fix.",
    author: "James T.",
    role: "Healthcare Professional",
    rating: 5,
  },
];

const SCIENTIFIC = [
  { icon: Zap, title: "Evidence-Led Protocols", desc: "Every program and product recommendation is grounded in established research on exercise physiology, nutrition science and lifestyle medicine." },
  { icon: Shield, title: "Authorized & Transparent", desc: "All supplements in our portfolio are authorized for retail sale, clearly formulated and selected for purity, bioavailability and real-world effectiveness." },
  { icon: Clock, title: "Long-Horizon Thinking", desc: "We optimize for the body you'll inhabit in 20 years — not just the next 12 weeks. Compounding results require compounding systems." },
  { icon: Users, title: "Personalized Systems", desc: "No cookie-cutter programs. Every coaching blueprint is built around your unique physiology, schedule, history and goals." },
];

const FAQ = [
  {
    q: "What makes PLC Optimization different from other wellness brands?",
    a: "We combine private 1:1 coaching, nutrition guidance, authorized supplementation and premium cosmetic care under one disciplined standard. Our approach is long-horizon — built to compound over years, not weeks."
  },
  {
    q: "Are your supplements safe and tested?",
    a: "All products in our portfolio are authorized for general wellness retail use and selected for purity, transparency and effectiveness. We do not carry any products making unauthorized health claims."
  },
  {
    q: "Do I need to be an elite athlete to work with PLC Optimization?",
    a: "Absolutely not. Our programs serve everyone from serious athletes to busy professionals pursuing healthy aging, from individuals optimizing nutrition to those seeking a structured longevity lifestyle."
  },
  {
    q: "How does the coaching process work?",
    a: "It begins with a private intake consultation to understand your goals, history and lifestyle. From there we architect a custom training, nutrition and recovery blueprint — then refine it continuously as you progress."
  },
  {
    q: "What is your response time for inquiries?",
    a: "All inquiries submitted through our contact form are answered within one business day. Existing coaching clients have direct messaging access during business hours."
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
    <div className="border-b border-white/[0.08]">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-start justify-between w-full py-6 text-left gap-6 group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-electric-glow shrink-0 mt-1">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-base md:text-lg font-display font-medium text-foreground group-hover:text-electric-glow transition-colors duration-300">{q}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="shrink-0 mt-1"
        >
          <ChevronDown size={18} className="text-muted-foreground" />
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
      >
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Premium athletic wellness photography"
            width={1600}
            height={1104}
            className="w-full h-full object-cover object-center"
            style={{ opacity: 0.22, mixBlendMode: "luminosity" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.012 240 / 0) 0%, oklch(0.10 0.012 240 / 0.6) 70%, oklch(0.10 0.012 240) 100%)" }} />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-electric/[0.06] blur-[100px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-electric-dim/[0.08] blur-[80px]" />
        </div>

        <div className="container-page relative pt-16 pb-24 lg:pt-20 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="eyebrow">PLC Optimization · U.S. Registered LLC</span>
          </motion.div>

          <motion.h1
            className="mt-7 max-w-5xl text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Optimize Your{" "}
            <em className="not-italic text-gradient-electric">Body.</em>
            <br />
            Elevate Your{" "}
            <span className="text-gradient-silver">Life.</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            PLC Optimization delivers premium wellness solutions focused on sports performance, healthy aging, nutrition, cosmetic care, and lifestyle optimization — built for individuals who refuse to settle.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <Link to="/services" className="btn-electric">Explore Services</Link>
            <Link to="/about" className="btn-ghost-light">Our Philosophy</Link>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.07]"
            style={{ background: "oklch(1 0 0 / 0.04)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {STATS.map(s => (
              <div
                key={s.label}
                className="bg-background/60 backdrop-blur-sm px-6 py-7 hover:bg-white/[0.04] transition-colors duration-300"
              >
                <p className="text-2xl md:text-3xl font-display text-gradient-silver">{s.value}</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div className="py-5 border-y border-white/[0.06] overflow-hidden bg-background/40">
        <div className="flex gap-0 whitespace-nowrap animate-marquee will-change-transform">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5 text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60">
              {item}
              <span className="inline-block w-1 h-1 rounded-full bg-electric/60 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── DISCIPLINES ── */}
      <section className="container-page py-28">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="eyebrow">Five Disciplines</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">One elevated standard.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Every solution is built around five interlocking areas of premium wellness — designed to integrate, not compete.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {DISCIPLINES.map((c, i) => (
            <StaggerItem key={c.t}>
              <article
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] aspect-[3/4] card-hover cursor-default ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                <img
                  src={c.img}
                  alt={c.t}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 20%, oklch(0.08 0.012 240 / 0.6) 60%, oklch(0.08 0.012 240 / 0.97) 100%)" }}
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
      <section className="relative py-28 overflow-hidden border-y border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-electric/[0.05] blur-[80px]" />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-16 items-center">
          <SlideLeft>
            <span className="eyebrow">About PLC Optimization</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">A premium standard for body, performance and longevity.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              PLC Optimization LLC is a U.S.-registered wellness brand created for individuals who want measured, lifelong results — not trends. We combine coaching, nutrition guidance, authorized supplementation and premium cosmetic care into one disciplined standard.
            </p>
            <Link to="/about" className="mt-8 inline-flex btn-ghost-light items-center gap-2">
              Our Story <ArrowRight size={14} />
            </Link>
          </SlideLeft>

          <SlideRight>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Discipline", desc: "Premium outcomes come from systems, not shortcuts." },
                { title: "Transparency", desc: "Clear sourcing, clear formulations, no inflated claims." },
                { title: "Longevity", desc: "Optimizing for the body you'll inhabit in 20 years." },
                { title: "Elevation", desc: "From product to coaching, the experience matters." },
              ].map((v, i) => (
                <div
                  key={v.title}
                  className="surface-glass rounded-xl p-6 card-hover"
                >
                  <p className="text-[9px] uppercase tracking-[0.3em] text-electric-glow">0{i + 1}</p>
                  <h3 className="mt-3 text-lg font-display">{v.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </SlideRight>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="container-page py-28">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow">The Four Pillars</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">A complete system for the optimized life.</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Every program and protocol is built around four interlocking pillars — designed to compound over years, not weeks.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => (
            <StaggerItem key={p.title}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.07] aspect-[5/4] md:aspect-[6/5]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-75 transition-all duration-700"
                  style={{ transform: "scale(1)", transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 25%, oklch(0.08 0.012 240 / 0.97) 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">0{i + 1}</p>
                  <h3 className="mt-3 text-2xl md:text-3xl font-display">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">{p.desc}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ── SCIENTIFIC APPROACH ── */}
      <section className="py-28 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.04] blur-[80px]" />
        </div>
        <div className="container-page relative">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow justify-center">Scientific Approach</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">Built on evidence. Refined by experience.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our methodology is grounded in established science — not trends. Every program, product and protocol reflects a disciplined, evidence-led standard.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCIENTIFIC.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="surface-glass rounded-2xl p-7 h-full card-hover">
                  <div className="w-10 h-10 rounded-xl bg-electric/[0.12] border border-electric/20 flex items-center justify-center mb-5">
                    <s.icon size={18} className="text-electric-glow" strokeWidth={1.5} />
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-electric-glow mb-3">0{i + 1}</p>
                  <h3 className="text-xl md:text-2xl font-display mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── LONGEVITY BAND ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={longevityImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} loading="lazy" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.10 0.012 240) 0%, oklch(0.10 0.012 240 / 0.7) 55%, oklch(0.10 0.012 240 / 0.3) 100%)" }} />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
          <SlideLeft>
            <span className="eyebrow">Longevity Lifestyle</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Engineered to age with strength, clarity and grace.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              We design lifestyle systems that compound: intelligent training, intentional recovery, clean nutrition and considered supplementation. The result is sustained vitality — across every decade of life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-ghost-light">Our Philosophy</Link>
              <Link to="/services" className="btn-electric">View Services</Link>
            </div>
          </SlideLeft>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section className="container-page py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScaleIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.07] aspect-[4/3] relative">
              <img
                src={productsImg}
                alt="Premium supplement line on dark surface"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.1), transparent)" }} />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Authorized Supplements</span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl">Clean ingredients. Disciplined formulations.</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              A curated portfolio of premium proteins, creatine, vitamins, minerals, hydration and recovery essentials — all authorized for retail sale and selected for purity, transparency and effectiveness.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {["Whey & Plant Proteins", "Creatine Monohydrate", "Daily Multivitamins", "Essential Minerals", "Hydration Formulas", "Recovery Blends"].map(x => (
                <li key={x} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="glow-dot" />
                  {x}
                </li>
              ))}
            </ul>
            <Link to="/products" className="mt-10 inline-flex btn-electric items-center gap-2">
              View Portfolio <ArrowRight size={14} />
            </Link>
          </SlideRight>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-electric/[0.04] blur-[80px]" />
        </div>
        <div className="container-page relative">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow justify-center">Client Outcomes</span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">Real people. Measurable results.</h2>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <StaggerItem key={i}>
                <div className="surface-glass rounded-2xl p-8 h-full flex flex-col card-hover">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} className="text-electric fill-electric" />
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base text-foreground/90 leading-relaxed font-display italic flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-white/[0.07]">
                    <p className="text-sm font-medium text-foreground">{t.author}</p>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-electric-glow mt-1">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container-page py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl">Common questions.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm">
              Everything you need to know about our approach, products, and coaching programs.
            </p>
            <Link to="/contact" className="mt-8 inline-flex btn-electric items-center gap-2">
              Ask Us Directly <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <div className="lg:col-span-8">
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="container-page pb-20 pt-4">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.66 0.22 250 / 0.12), transparent 70%)" }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border border-electric/[0.12] rounded-3xl" />
            </div>
            <span className="eyebrow justify-center">Begin the Standard</span>
            <h2 className="mt-7 text-4xl md:text-6xl lg:text-7xl max-w-3xl mx-auto leading-[1.04]">
              Your optimized life starts with one disciplined decision.
            </h2>
            <p className="mt-7 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Book a private consultation to design your performance, longevity and lifestyle blueprint.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-electric">Book a Consultation</Link>
              <Link to="/coaching" className="btn-ghost-light">Coaching Programs</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
