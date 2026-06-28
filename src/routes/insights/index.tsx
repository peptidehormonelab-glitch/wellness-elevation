import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES, CATEGORIES, getArticlesByCategory, type Article } from "@/lib/articles";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/Motion";
import { NewsletterSection } from "@/components/NewsletterSection";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights & Education — Wellness, Longevity & Performance | PLC" },
      {
        name: "description",
        content:
          "Educational articles from PLC Optimization on wellness, nutrition, recovery, longevity, performance, supplementation and healthy lifestyle — grounded in established science.",
      },
      { property: "og:title", content: "Insights & Education — PLC Optimization" },
      {
        property: "og:description",
        content:
          "Educational content on wellness, nutrition, recovery, longevity, performance, supplementation and healthy lifestyle from PLC Optimization.",
      },
      { property: "og:url", content: "https://plcoptimization.com/insights" },
    ],
    links: [{ rel: "canonical", href: "https://plcoptimization.com/insights" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "PLC Optimization Insights",
          description: "Educational wellness content covering wellness, nutrition, recovery, longevity, performance, supplementation and healthy lifestyle.",
          url: "https://plcoptimization.com/insights",
          publisher: {
            "@type": "Organization",
            name: "PLC Optimization LLC",
            url: "https://plcoptimization.com",
          },
          blogPost: ARTICLES.map(a => ({
            "@type": "BlogPosting",
            headline: a.title,
            description: a.metaDescription,
            datePublished: a.publishedAt,
            url: `https://plcoptimization.com/insights/${a.slug}`,
          })),
        }),
      },
    ],
  }),
  component: InsightsIndex,
});

function ArticleCard({ article, variant = "default" }: { article: Article; variant?: "default" | "featured" | "mini" }) {
  if (variant === "featured") {
    return (
      <Link
        to="/insights/$slug"
        params={{ slug: article.slug }}
        className="group block relative rounded-2xl overflow-hidden border border-white/[0.07] aspect-[16/9] lg:aspect-[21/9] card-hover"
        aria-label={`Read: ${article.title}`}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 30% 50%, oklch(0.68 0.09 75 / 0.18), transparent 65%), oklch(0.12 0.013 240)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-electric/[0.18] border border-electric/30 text-electric-glow">
                {article.category}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">Featured</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground group-hover:text-electric-glow transition-colors duration-300 leading-[1.05]">
              {article.title}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl line-clamp-3">{article.excerpt}</p>
            <div className="mt-6 flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
                <Clock size={11} aria-hidden="true" /> {article.readingTime}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">{article.publishedAtDisplay}</span>
            </div>
            <div className="mt-7 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-electric-glow group-hover:gap-3 transition-all duration-300">
              Read Article <ArrowRight size={13} aria-hidden="true" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "mini") {
    return (
      <Link
        to="/insights/$slug"
        params={{ slug: article.slug }}
        className="group flex items-start gap-4 py-5 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
        aria-label={`Read: ${article.title}`}
      >
        <div className="w-12 h-12 rounded-xl bg-electric/[0.08] border border-electric/[0.14] flex-shrink-0 flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-[0.2em] text-electric-glow font-medium">
            {article.category.slice(0, 3)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-display text-foreground group-hover:text-electric-glow transition-colors duration-250 leading-snug line-clamp-2">
            {article.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-3">
            <span className="text-[10px] text-muted-foreground/55">{article.readingTime}</span>
            <span className="text-[10px] text-muted-foreground/40">·</span>
            <span className="text-[10px] text-muted-foreground/55">{article.publishedAtDisplay}</span>
          </div>
        </div>
        <ArrowRight size={14} className="text-muted-foreground/30 group-hover:text-electric-glow transition-colors shrink-0 mt-1" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <Link
      to="/insights/$slug"
      params={{ slug: article.slug }}
      className="group block surface-glass rounded-2xl overflow-hidden border border-white/[0.07] card-hover h-full"
      aria-label={`Read: ${article.title}`}
    >
      <div className="p-7 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] uppercase tracking-[0.28em] font-medium bg-electric/[0.08] border border-electric/[0.15] text-electric-glow">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/50">
            <Clock size={11} aria-hidden="true" /> {article.readingTime}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display text-foreground group-hover:text-electric-glow transition-colors duration-300 leading-snug flex-1">
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
        <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground/50">{article.publishedAtDisplay}</span>
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-electric-glow group-hover:gap-2.5 transition-all duration-300">
            Read <ArrowRight size={11} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function InsightsIndex() {
  const [activeCategory, setActiveCategory] = useState("all");
  const featured = ARTICLES.find(a => a.featured);
  const filtered = getArticlesByCategory(activeCategory);
  const grid = filtered.filter(a => !a.featured || activeCategory !== "all");
  const recent = ARTICLES.filter(a => !a.featured).slice(0, 4);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="container-page pt-20 pb-12" aria-labelledby="insights-hero-heading">
        <FadeUp>
          <span className="eyebrow">Insights & Education</span>
          <h1 id="insights-hero-heading" className="mt-7 text-5xl md:text-7xl lg:text-[88px] max-w-5xl leading-[1.03]">
            Evidence-based wellness,{" "}
            <span className="text-gradient-electric">explained clearly</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            PLC Optimization regularly publishes educational content on wellness, nutrition, recovery, longevity, performance, supplementation and healthy lifestyle — grounded in established science and written without marketing language.
          </p>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground/80 leading-relaxed">
            New articles are in preparation and will be published here. Subscribe below to be notified as each piece is released.
          </p>
        </FadeUp>
      </section>

      {/* ── FEATURED ── */}
      {featured && activeCategory === "all" && (
        <section className="container-page pb-8" aria-label="Featured article">
          <FadeUp>
            <ArticleCard article={featured} variant="featured" />
          </FadeUp>
        </section>
      )}

      {/* ── FILTER + GRID ── */}
      <section className="container-page pb-12" aria-labelledby="articles-section-heading">
        <FadeUp>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
            <h2 id="articles-section-heading" className="sr-only">All Articles</h2>
            <nav
              className="flex items-center gap-2 flex-wrap"
              role="navigation"
              aria-label="Filter articles by category"
            >
              {CATEGORIES.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.24em] font-medium transition-all duration-250 cursor-pointer ${
                    activeCategory === cat.slug
                      ? "bg-electric/[0.15] border border-electric/40 text-electric-glow"
                      : "border border-white/[0.10] text-muted-foreground hover:border-white/20 hover:text-foreground"
                  }`}
                  aria-pressed={activeCategory === cat.slug}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
            <p className="text-sm text-muted-foreground">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </FadeUp>

        {grid.length > 0 ? (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {grid.map(article => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <FadeUp>
            <div className="text-center py-20">
              <p className="text-muted-foreground">No articles in this category yet. Check back soon.</p>
            </div>
          </FadeUp>
        )}
      </section>

      {/* ── RECENT / SIDEBAR ── */}
      <section className="container-page pb-16" aria-labelledby="recent-heading">
        <div className="grid lg:grid-cols-12 gap-8 border-t border-white/[0.06] pt-14">
          <div className="lg:col-span-8">
            <FadeUp>
              <h2 id="recent-heading" className="text-[10px] uppercase tracking-[0.3em] text-silver mb-6">
                Recently Published
              </h2>
              {recent.map(article => (
                <ArticleCard key={article.slug} article={article} variant="mini" />
              ))}
            </FadeUp>
          </div>

          <div className="lg:col-span-4">
            <FadeUp>
              <div className="surface-glass rounded-2xl p-7 border border-white/[0.09] sticky top-24">
                <p className="text-[9px] uppercase tracking-[0.35em] text-electric-glow mb-1">Wellness Notice</p>
                <h3 className="text-lg font-display mb-4 mt-2">Educational content only.</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All articles on this platform are for educational and informational purposes only. They do not constitute medical advice and are not intended to diagnose, treat, cure or prevent any disease.
                </p>
                <div className="hairline my-5" />
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  Always consult a qualified healthcare provider before beginning any new wellness program, supplement protocol or exercise regimen.
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="btn-ghost-light w-full justify-center !py-2.5 !text-[10px]">
                    Speak with Our Team
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />

      {/* ── CTA ── */}
      <section className="container-page pb-28" aria-labelledby="insights-cta-heading">
        <FadeUp>
          <div
            className="surface-glass rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, oklch(0.68 0.09 75 / 0.08), transparent 70%)" }}
          >
            <div className="absolute inset-0 border border-electric/[0.08] rounded-3xl pointer-events-none" aria-hidden="true" />
            <span className="eyebrow justify-center mb-5">Ready to apply this?</span>
            <h2 id="insights-cta-heading" className="text-3xl md:text-5xl max-w-3xl mx-auto">
              Take the knowledge further.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm">
              Private coaching applies these principles to your specific physiology, schedule and goals — turning evidence into a personalised system that compounds over time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/coaching" className="btn-electric">Explore Coaching</Link>
              <Link to="/services" className="btn-ghost-light">All Services</Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
