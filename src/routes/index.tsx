import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight, Shield, Clock, Zap, Users, Award, BookOpen, HeartPulse, Eye } from "lucide-react";
import { NewsletterSection } from "@/components/NewsletterSection";
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
      { title: "PLC Optimization — Premium Wellness. Elite Performance. Lasting Results." },
      {
        name: "description",
        content:
          "PLC Optimization LLC delivers premium wellness solutions for sports performance, healthy aging, nutrition, cosmetic care and lifestyle optimization. U.S. registered, science-based, built for the long term.",
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
  { num: "04", t: "Wellness", d: "A vibrant life, designed for you and the people you love.", img: cardWellness },
  { num: "05", t: "Cosmetic Care", d: "Premium skincare rituals that reflect your standard.", img: cardCosmetic },
];

const PILLARS = [
  {
    title: "Sports Performance",
    desc: "Periodized programming, recovery science and performance nutrition for athletes who train with purpose — not just frequency.",
    img: performanceImg,
  },
  {
    title: "Healthy Aging",
    desc: "A measured, evidence-led approach to mobility, strength and sustained energy through every decade of life.",
    img: longevityImg,
  },
  {
    title: "Premium Cosmetic Care",
    desc: "Clean, thoughtfully formulated skincare that elevates your daily ritual without compromise.",
    img: skincareImg,
  },
  {
    title: "Coaching & Lifestyle",
    desc: "Private 1:1 coaching that aligns training, nutrition and habit design with the life you actually live.",
    img: coachingImg,
  },
];

const STATS = [
  { value: "U.S. LLC", label: "Registered Entity" },
  { value: "1:1", label: "Private Coaching" },
  { value: "5+", label: "Wellness Disciplines" },
  { value: "100%", label: "Authorized Products" },
];


const SCIENTIFIC = [
  {
    icon: Zap,
    title: "Evidence-Led Protocols",
    desc: "Every program and product recommendation is grounded in established exercise physiology, nutrition science and lifestyle medicine research — not trends.",
  },
  {
    icon: Shield,
    title: "Authorized & Transparent",
    desc: "All supplements in our portfolio are authorized for retail, clearly formulated and selected for purity, bioavailability and real-world effectiveness.",
  },
  {
    icon: Clock,
    title: "Long-Horizon Thinking",
    desc: "We optimize for the body you'll inhabit in 20 years — not just the next 12 weeks. Compounding results require compounding systems, built patiently.",
  },
  {
    icon: Users,
    title: "Personalized Systems",
    desc: "No pre-built templates. Every coaching blueprint is designed around your physiology, schedule, history and goals — then refined continuously.",
  },
];

const TRUST = [
  {
    icon: Award,
    label: "U.S. Registered LLC",
    desc: "PLC Optimization is a formally incorporated U.S. limited liability company — a verifiable, legally accountable entity with transparent business registration.",
  },
  {
    icon: BookOpen,
    label: "Education First",
    desc: "Every article, protocol and recommendation is grounded in established science and clearly explained. We believe informed individuals make better long-term decisions.",
  },
  {
    icon: Eye,
    label: "Transparent Communication",
    desc: "We do not use proprietary blends, inflated outcome claims or anonymous endorsements. What we say, we can substantiate. What we do not know, we say so.",
  },
  {
    icon: Shield,
    label: "Premium Quality Standards",
    desc: "Our supplement portfolio is curated for purity, bioavailability and authorised retail status. Every product in our range meets the standards we would apply to ourselves.",
  },
  {
    icon: HeartPulse,
    label: "Responsible Wellness Positioning",
    desc: "We make no medical claims, do not promote prescription substances and always direct clients to qualified healthcare professionals for clinical decisions.",
  },
  {
    icon: Clock,
    label: "Long-Term Trust",
    desc: "Trust is built through consistency, not campaigns. We are building a company for the long term — measured by sustained client outcomes, not quarterly growth targets.",
  },
];

const FAQ = [
  {
    q: "What makes PLC Optimization different from other wellness brands?",
    a: "We combine private 1:1 coaching, nutrition guidance, authorized supplementation and premium cosmetic care under one disciplined standard. Our approach is long-horizon — built to compound over years, not weeks. We also explain everything: the science, the sourcing, the reasoning.",
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
            className="w-full h-full object-cover object-center"
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
            <span className="eyebrow"><span aria-hidden="true" className="mr-2">🇺🇸</span>PLC Optimization · U.S. Registered LLC</span>
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
            PLC Optimization delivers premium wellness solutions for sports performance, healthy aging, nutrition and lifestyle optimization — built for individuals who refuse to settle for less than their best.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            aria-label="Brand identity"
          >
            {[
              <><span aria-hidden="true" className="mr-1.5">🇺🇸</span>U.S. Registered LLC</>,
              "Global Wellness Brand",
              "European Partner Network",
              "Transparency First",
              "Long-Term Performance",
            ].map((label, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-electric/60" aria-hidden="true" />}
                <span className="text-foreground/75">{label}</span>
              </span>
            ))}
          </motion.div>


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
            aria-label="Key stats"
          >
            {STATS.map(s => (
              <div
                key={s.label}
                className="bg-background/55 backdrop-blur-sm px-6 py-7 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <p className="text-2xl md:text-3xl font-display text-gradient-silver">{s.value}</p>
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

      {/* ── THE PLC STANDARD ── */}
      <section className="container-page py-28" aria-labelledby="plc-standard-heading">
        <FadeUp>
          <div className="max-w-3xl">
            <span className="eyebrow">The PLC Standard</span>
            <h2 id="plc-standard-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">
              Five principles that define{" "}
              <span className="text-gradient-silver">everything we do.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              The institutional standard behind every program, product and partnership — American rigor, international vision, long-term thinking.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { t: "Evidence First", d: "Every recommendation is grounded in science and continuous learning." },
            { t: "Transparency Always", d: "No exaggerated promises. No fabricated credibility." },
            { t: "Premium Quality", d: "We work only with carefully selected products, services and partners." },
            { t: "Long-Term Thinking", d: "We prioritize sustainable health, performance and longevity." },
            { t: "Continuous Improvement", d: "Optimization is a lifelong process, never a destination." },
          ].map((p, i) => (
            <StaggerItem key={p.t}>
              <div className="surface-glass rounded-2xl p-6 h-full border border-white/[0.06] card-hover">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">0{i + 1}</p>
                <h3 className="mt-4 text-lg md:text-xl font-display leading-snug">{p.t}</h3>
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
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              PLC Optimization LLC is a U.S.-registered wellness brand created for individuals who want measured, lifelong results — not trends. We integrate coaching, nutrition guidance, authorized supplementation and premium cosmetic care into one disciplined, evidence-based standard.
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-electric-glow/90">
              American standards. European partnerships. Global vision.
            </p>
            <Link to="/about" className="mt-8 inline-flex btn-ghost-light items-center gap-2">
              Our Story <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </SlideLeft>

          <SlideRight>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Discipline", desc: "Sustainable outcomes come from compounding systems, not shortcuts or trends." },
                { title: "Transparency", desc: "Clear sourcing, clear formulations, clear coaching. No noise, no inflated claims." },
                { title: "Longevity", desc: "We optimize for the body you'll inhabit in 20 years — not just the next season." },
                { title: "Elevation", desc: "From product quality to the coaching experience, every detail reflects a premium standard." },
              ].map((v, i) => (
                <div key={v.title} className="surface-glass rounded-xl p-6 card-hover">
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
      <section className="container-page py-28" aria-labelledby="pillars-heading">
        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="eyebrow">The Four Pillars</span>
              <h2 id="pillars-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">A complete system for the optimized life.</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Four interlocking disciplines designed to compound over time — each reinforcing the others, all working toward the same outcome.
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
                  className="absolute inset-0 w-full h-full object-cover opacity-65 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 20%, oklch(0.08 0.012 240 / 0.97) 100%)" }}
                  aria-hidden="true"
                />
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
      <section className="py-28 border-y border-white/[0.06] relative overflow-hidden" aria-labelledby="science-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric/[0.04] blur-[90px]" />
        </div>
        <div className="container-page relative">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow justify-center">Scientific Approach</span>
              <h2 id="science-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">Built on evidence. Refined by experience.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our methodology is grounded in established science — not trends or marketing. Every program, product and protocol reflects a disciplined, evidence-led standard that we can explain and defend.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SCIENTIFIC.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="surface-glass rounded-2xl p-7 h-full card-hover">
                  <div
                    className="w-10 h-10 rounded-xl bg-electric/[0.10] border border-electric/[0.18] flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
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
      <section className="relative py-28 overflow-hidden" aria-labelledby="longevity-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <img src={longevityImg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.16 }} loading="lazy" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.10 0.012 240) 0%, oklch(0.10 0.012 240 / 0.75) 55%, oklch(0.10 0.012 240 / 0.25) 100%)",
            }}
          />
        </div>
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
          <SlideLeft>
            <span className="eyebrow">Longevity Lifestyle</span>
            <h2 id="longevity-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Engineered to age with strength, clarity and grace.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              True longevity is not a supplement stack or a biohacking protocol. It is a lifestyle architecture — intelligent training, intentional recovery, clean nutrition and considered supplementation, compounding quietly across decades.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-ghost-light">Our Philosophy</Link>
              <Link to="/services" className="btn-electric">View Services</Link>
            </div>
          </SlideLeft>
        </div>
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
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, oklch(0.10 0.012 240 / 0.08), transparent)" }}
                aria-hidden="true"
              />
            </div>
          </ScaleIn>

          <SlideRight>
            <span className="eyebrow">Authorized Supplements</span>
            <h2 id="products-heading" className="mt-6 text-4xl md:text-5xl lg:text-6xl">
              Clean ingredients. Disciplined formulations.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed max-w-lg">
              A curated portfolio of authorized proteins, creatine, vitamins, minerals, hydration and recovery essentials — every product selected for purity, transparency and real-world effectiveness. No proprietary blends. No noise.
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

      {/* ── BUILT ON TRANSPARENCY ── */}
      <section className="py-28 border-y border-white/[0.06] relative overflow-hidden" aria-labelledby="trust-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-electric/[0.03] blur-[100px]" />
        </div>
        <div className="container-page relative">
          <FadeUp>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <span className="eyebrow"><span aria-hidden="true" className="mr-2">🇺🇸</span>Built on Transparency</span>
                <h2 id="trust-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">
                  Honesty, first.{" "}
                  <span className="text-gradient-silver">Always.</span>
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                PLC Optimization is a newly launched company. We have no fabricated testimonials, no inflated track records and no invented credentials. What we do have is a clear standard — and the discipline to keep it.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRUST.map((t, i) => (
              <StaggerItem key={t.label}>
                <div className="surface-glass rounded-2xl p-7 h-full card-hover group border border-white/[0.06]">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl bg-electric/[0.08] border border-electric/[0.15] flex items-center justify-center group-hover:bg-electric/[0.13] transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <t.icon size={18} className="text-electric-glow" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/30 font-medium">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-display text-foreground mb-3 leading-snug">{t.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp>
            <div className="mt-12 surface-glass rounded-2xl p-7 border border-white/[0.06] flex flex-col md:flex-row md:items-center gap-5">
              <div className="flex-1">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow mb-2">American Standards · International Partnerships</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  PLC Optimization is a U.S.-registered LLC headquartered in the United States, collaborating with carefully selected European partners who share our commitment to quality, transparency and long-term excellence. Our international partner network combines American standards with trusted European expertise — serving clients worldwide through relationships built on substance, not slogans.
                </p>

              </div>
              <Link to="/about" className="btn-ghost-light shrink-0 whitespace-nowrap">
                Our Philosophy
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── PLC QUALITY STANDARD ── */}
      <section className="container-page py-28" aria-labelledby="quality-heading">
        <FadeUp>
          <div className="max-w-3xl">
            <span className="eyebrow">The PLC Quality Standard</span>
            <h2 id="quality-heading" className="mt-5 text-4xl md:text-5xl lg:text-6xl">
              Quality is not a marketing claim.{" "}
              <span className="text-gradient-silver">It is a commitment.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
              PLC Optimization prioritizes rigorous supplier qualification, responsible sourcing and continuous quality review across every product and partnership. Our standard is a disciplined process — not a guarantee, not a slogan.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Rigorous Supplier Qualification", d: "Every manufacturing partner is evaluated against documented quality, transparency and traceability criteria before inclusion." },
            { t: "International Manufacturing Standards", d: "We prioritize suppliers operating under recognized international quality frameworks and good manufacturing practices." },
            { t: "Certificates of Analysis", d: "Where applicable, Certificates of Analysis (COAs) and batch documentation are available on request to verify composition." },
            { t: "Batch Traceability", d: "Where applicable, products can be traced back to their production batch, supporting accountability across the supply chain." },
            { t: "Premium Ingredient Sourcing", d: "Raw materials are selected for purity, bioavailability and credible origin — never for price alone." },
            { t: "Continuous Quality Review", d: "Our portfolio is reviewed continuously. Products that no longer meet our standard are removed without hesitation." },
            { t: "Carefully Selected Partners", d: "We work with a small number of vetted manufacturing and distribution partners aligned with our long-term standard." },
            { t: "Customer Satisfaction Commitment", d: "Every client interaction is treated as a long-term relationship. Concerns are reviewed personally and addressed directly." },
          ].map((p, i) => (
            <StaggerItem key={p.t}>
              <div className="surface-glass rounded-2xl p-6 h-full border border-white/[0.06] card-hover">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-base md:text-lg font-display leading-snug">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp>
          <p className="mt-10 text-xs text-muted-foreground/60 leading-relaxed max-w-3xl">
            <span className="text-silver/80">Note.</span>{" "}
            PLC Optimization does not make absolute claims of certification, guaranteed safety or universal outcomes. We communicate a disciplined quality process and recommend that every individual consult a qualified healthcare provider before beginning any new wellness program.
          </p>
        </FadeUp>
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
